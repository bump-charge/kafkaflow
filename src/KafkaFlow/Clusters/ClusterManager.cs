namespace KafkaFlow.Clusters
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Confluent.Kafka;
    using Confluent.Kafka.Admin;
    using KafkaFlow.Configuration;

    internal class ClusterManager : IClusterManager
    {
        private readonly ILogHandler logHandler;
        private readonly Lazy<AdminClientBuilder> lazyAdminClientBuilder;
        private readonly ClusterConfiguration configuration;

        public ClusterManager(ILogHandler logHandler, ClusterConfiguration configuration)
        {
            this.logHandler = logHandler;
            this.configuration = configuration;
            var adminConfig = new AdminClientConfig()
            {
                BootstrapServers = string.Join(",", configuration.Brokers),
            };
            adminConfig.ReadSecurityInformationFrom(configuration);
            this.lazyAdminClientBuilder = new Lazy<AdminClientBuilder>(
                () => new AdminClientBuilder(adminConfig));
        }

        public string ClusterName => this.configuration.Name;

        public async Task CreateIfNotExistsAsync(IEnumerable<TopicConfiguration> configurations)
        {
            try
            {
                var topics = configurations
                    .Distinct(new DuplicateTopicConfigurationEqualityComparer())
                    .Select(
                        topicConfiguration => new TopicSpecification
                        {
                            Name = topicConfiguration.Name,
                            ReplicationFactor = topicConfiguration.Replicas,
                            NumPartitions = topicConfiguration.Partitions,
                        })
                    .ToArray();

                using var client = this.lazyAdminClientBuilder.Value.Build();
                await client.CreateTopicsAsync(topics);
            }
            catch (CreateTopicsException exception)
            {
                var hasNonExpectedErrors = false;
                foreach (var exceptionResult in exception.Results)
                {
                    if (exceptionResult.Error.Code == ErrorCode.TopicAlreadyExists)
                    {
                        this.logHandler.Warning(
                            "An error occurred creating topic {Topic}: {Reason}",
                            new
                            {
                                exceptionResult.Topic,
                                exceptionResult.Error.Reason,
                            });
                        continue;
                    }

                    hasNonExpectedErrors = true;
                }

                if (hasNonExpectedErrors)
                {
                    this.logHandler.Error(
                        "An error occurred creating topics",
                        exception,
                        new
                        {
                            Servers = this.configuration.Brokers,
                        });
                    throw;
                }
            }
        }

        private class DuplicateTopicConfigurationEqualityComparer : IEqualityComparer<TopicConfiguration>
        {
            public bool Equals(TopicConfiguration x, TopicConfiguration y) => x?.Name == y?.Name;

            public int GetHashCode(TopicConfiguration obj) => obj.Name.GetHashCode();
        }
    }
}
