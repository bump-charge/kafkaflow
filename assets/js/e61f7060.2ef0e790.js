"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9202],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),o=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(t),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(h,d(d({ref:n},p),{},{components:t})):r.createElement(h,d({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var o=2;o<i;o++)d[o]=t[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5454:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:2},d="Typed Handler Middleware",l={unversionedId:"guides/middlewares/typed-handler-middleware",id:"guides/middlewares/typed-handler-middleware",title:"Typed Handler Middleware",description:"In this section, we will learn how to use the Typed Handler middleware.",source:"@site/docs/guides/middlewares/typed-handler-middleware.md",sourceDirName:"guides/middlewares",slug:"/guides/middlewares/typed-handler-middleware",permalink:"/kafkaflow/docs/guides/middlewares/typed-handler-middleware",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/middlewares/typed-handler-middleware.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Middleware Introduction",permalink:"/kafkaflow/docs/guides/middlewares/"},next:{title:"Serializer Middleware",permalink:"/kafkaflow/docs/guides/middlewares/serializer-middleware"}},s={},o=[{value:"How Message Type is discovered",id:"how-message-type-is-discovered",level:3},{value:"With Schema Registry",id:"with-schema-registry",level:4},{value:"Without Schema Registry",id:"without-schema-registry",level:4},{value:"Configure Typed Handler",id:"configure-typed-handler",level:2},{value:"Create a Message Handler",id:"create-a-message-handler",level:2},{value:"Configuring Handler Lifetime",id:"configuring-handler-lifetime",level:2},{value:"Handling No Handler Found event",id:"handling-no-handler-found-event",level:2}],p={toc:o};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"typed-handler-middleware"},"Typed Handler Middleware"),(0,a.kt)("p",null,"In this section, we will learn how to use the Typed Handler middleware."),(0,a.kt)("p",null,"The Typed Handler Middleware allows you to execute different handlers depending on the message type. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use it when the topic has different message types. ")),(0,a.kt)("p",null,"When a message with a given type arrives, the middleware will call the appropriate message handler for that message type. "),(0,a.kt)("h3",{id:"how-message-type-is-discovered"},"How Message Type is discovered"),(0,a.kt)("p",null,"The Message Type discovery may vary depending on the implementation."),(0,a.kt)("h4",{id:"with-schema-registry"},"With Schema Registry"),(0,a.kt)("p",null,"When using a Schema Registry, the schema is read from it, and the first 5 bytes of the message represent the ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaId")," registered on the Schema Registry."),(0,a.kt)("h4",{id:"without-schema-registry"},"Without Schema Registry"),(0,a.kt)("p",null,"Using other serializers with no Schema Registry, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultTypeResolver")," is used by default. The ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultTypeResolver")," uses the header ",(0,a.kt)("inlineCode",{parentName:"p"},"Message-Type")," to identify the message type based on the Type fully qualified name. "),(0,a.kt)("p",null,"It's also possible to write your own ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeResolver")," implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"IMessageTypeResolver")," interface and using it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddSerializer")," method in the consumer/producer middleware. "),(0,a.kt)("h2",{id:"configure-typed-handler"},"Configure Typed Handler"),(0,a.kt)("p",null,"There are three ways to add handlers to a consumer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"AddHandler<HandlerType>()"),":")," adds one handler per call."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"AddHandlers(IEnumerable<Type> handlers)"),":")," adds many handlers per call."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"AddHandlersFromAssemblyOf<HandlerType>()"),":")," adds all classes on the given assembly type that implement the ",(0,a.kt)("inlineCode",{parentName:"li"},"IMessageHandler")," interface.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddKafka(kafka => kafka\n    .AddCluster(cluster => cluster\n        .WithBrokers(new[] { "localhost:9092" })\n        .AddConsumer(consumer => consumer\n            ...\n            .AddMiddlewares(middlewares => middlewares\n                ...\n                .AddTypedHandlers(handlers => handlers\n                    .WithHandlerLifetime(InstanceLifetime.Singleton)\n                    .AddHandler<ProductCreatedHandler>()\n                    // or\n                    .AddHandlers( ... )\n                    // or\n                    .AddHandlersFromAssemblyOf<ProductCreatedHandler>()\n                )\n            )\n        )\n    )\n);\n')),(0,a.kt)("h2",{id:"create-a-message-handler"},"Create a Message Handler"),(0,a.kt)("p",null,"A message handler can be created by implementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"IMessageHandler<MessageType>")," interface. "),(0,a.kt)("p",null,"The handler's instance is created by the configured dependency injection container, any handler dependency will be injected through the constructor, and the instance lifetime can be configured in the configuration. "),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"If there's no handler defined for the arriving message, it will be ignored.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ProductCreatedHandler : IMessageHandler<ProductCreatedEvent>\n{\n    public Task Handle(IMessageContext context, ProductCreatedEvent message)\n    {\n        ...\n    }\n}\n")),(0,a.kt)("h2",{id:"configuring-handler-lifetime"},"Configuring Handler Lifetime"),(0,a.kt)("p",null,"The Handler lifetime can be configured to one of the following modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Singleton:")," A single class instance will be created for the entire application."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scoped:")," A new class instance will be created for each scope."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transient:")," A new class instance will be created every time it is requested.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default, the handler lifetime is Singleton.")),(0,a.kt)("h2",{id:"handling-no-handler-found-event"},"Handling No Handler Found event"),(0,a.kt)("p",null,"If there's no handler defined for the arriving message, it will be ignored."),(0,a.kt)("p",null,"It is possible to handle those events. As an example, the following code writes to the console when a message can't be handled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddKafka(kafka => kafka\n    .AddCluster(cluster => cluster\n        .WithBrokers(new[] { "localhost:9092" })\n        .AddConsumer(consumer => consumer\n            ...\n            .AddMiddlewares(middlewares => middlewares\n                ...\n                .AddTypedHandlers(handlers => handlers\n                    .AddHandler<ProductCreatedHandler>()\n                    .WhenNoHandlerFound(context => \n                        Console.WriteLine("Message not handled > Partition: {0} | Offset: {1}",\n                            context.ConsumerContext.Partition,\n                            context.ConsumerContext.Offset)\n                        )\n                )\n            )\n        )\n    )\n);\n')))}c.isMDXComponent=!0}}]);