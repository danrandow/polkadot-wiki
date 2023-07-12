"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},74866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(87462),r=n(67294),i=n(86010),l=n(12466),o=n(16550),s=n(91980),u=n(67392),p=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function k(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(i.location.search);t.set(l,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[l,i])]}function f(e){var t,n,a,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,c=m(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:c})})),N=f[0],h=f[1],v=k({queryString:s,groupId:u}),b=v[0],g=v[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,p.Nk)(t),a=n[0],i=n[1],[a,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),y=C[0],x=C[1],w=function(){var e=null!=b?b:y;return d({value:e,tabValues:c})?e:null}();return(0,r.useLayoutEffect)((function(){w&&h(w)}),[w]),{selectedValue:N,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);h(e),g(e),x(e)}),[g,x,c]),tabValues:c}}var N=n(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,n=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var a,r=p.indexOf(e.currentTarget)+1;n=null!=(a=p[r])?a:p[0];break;case"ArrowLeft":var i,l=p.indexOf(e.currentTarget)-1;n=null!=(i=p[l])?i:p[p.length-1]}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",h.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=i.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function g(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function C(e){var t=(0,N.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},2137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var a,r=n(87462),i=n(63366),l=(n(67294),n(3905)),o=n(74866),s=["components"],u={id:"learn-xcm-instructions",title:"XCM Instructions & Register Specification",sidebar_label:"XCM Instructions",description:"Specification for Instructions and Registers for the XCM Format.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-instructions"},p=void 0,c={unversionedId:"learn/learn-xcm-instructions",id:"learn/learn-xcm-instructions",title:"XCM Instructions & Register Specification",description:"Specification for Instructions and Registers for the XCM Format.",source:"@site/../docs/learn/learn-xcm-instructions.md",sourceDirName:"learn",slug:"/learn-xcm-instructions",permalink:"/docs/learn-xcm-instructions",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-xcm-instructions.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"learn-xcm-instructions",title:"XCM Instructions & Register Specification",sidebar_label:"XCM Instructions",description:"Specification for Instructions and Registers for the XCM Format.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-instructions"},sidebar:"docs",previous:{title:"XCM Virtual Machine (XCVM)",permalink:"/docs/learn-xcvm"},next:{title:"Polkadot Comparisons",permalink:"/docs/learn-comparisons-index"}},m={},d=[{value:"XCVM Registers",id:"xcvm-registers",level:2},{value:"XCVM Instruction Set",id:"xcvm-instruction-set",level:2},{value:"Instructions Application Example",id:"instructions-application-example",level:2}],k=(a="TabItem",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),f={toc:d},N="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,l.kt)(N,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page can also be viewed at the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},(0,l.kt)("inlineCode",{parentName:"a"},"xcm-format")),"\nrepository, where each instruction and register is explained in-depth."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"For a more practical approach to utilizing XCM registers and instructions, refer to the\n",(0,l.kt)("a",{parentName:"p",href:"https://paritytech.github.io/xcm-docs/"},"XCM Docs"),". Please keep in mind that XCM is under active\ndevelopment.")),(0,l.kt)("h2",{id:"xcvm-registers"},"XCVM Registers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Programme")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Programme Counter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Error")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Error Handler")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Appendix")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Origin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Holding")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Surplus Weight")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Refunded Weight")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Transact Status")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Topic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Transact Status Register")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Topic Register"))),(0,l.kt)("h2",{id:"xcvm-instruction-set"},"XCVM Instruction Set"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WithdrawAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReserveAssetDeposited")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReceiveTeleportedAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"QueryResponse")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TransferAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"TransferReserveAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Transact")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HrmpNewChannelOpenRequest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HrmpChannelAccepted")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"HrmpChannelClosing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ClearOrigin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DescendOrigin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReportError")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DepositAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DepositReserveAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExchangeAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"InitiateReserveWithdraw")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"InitiateTeleport")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"QueryHolding")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BuyExecution")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RefundSurplus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SetErrorHandler")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SetAppendix")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ClearError")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ClaimAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Trap")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SubscribeVersion")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UnsubscribeVersion")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BurnAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExpectAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExpectError")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExpectOrigin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"QueryPallet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ExpectPallet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ReportTransactStatus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ClearTransactStatus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"LockAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UnlockAsset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NoteUnlockable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RequestUnlock"))),(0,l.kt)("h2",{id:"instructions-application-example"},"Instructions Application Example"),(0,l.kt)("p",null,"The following presents the practical mapping of instructions to some\n",(0,l.kt)("a",{parentName:"p",href:"/docs/learn-xcm/#core-functionality-of-xcm"},"core functionality in XCM"),"."),(0,l.kt)(o.Z,{groupId:"operating-systems",values:[{label:"Programmability",value:"program"},{label:"Functional Multichain Decomposition",value:"fmd"}],mdxType:"Tabs"},(0,l.kt)(k,{value:"program",mdxType:"TabItem"}," These are the primary instructions that enable programmability and branching to be possible. Branching in this context is the ability for errors and logic to be handled as needed when dealing with a message.",(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expectassetmultiassets"},(0,l.kt)("inlineCode",{parentName:"a"},"ExpectAsset(MultiAssets)"))," -\nChecks if the Holding register has a specific amount of assets, throws an error if it doesn't.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expecterroroptionu32-error"},(0,l.kt)("inlineCode",{parentName:"a"},"ExpectError(Option<(u32, Error)>)"))," -\nEnsures the Error register contains the given error, and throws an error if it doesn't.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/tree/master#expectoriginmultilocation"},(0,l.kt)("inlineCode",{parentName:"a"},"ExpectOrigin(MultiLocation)"))," -\nEnsures the Origin register contains the expected origin, and throws an error if it doesn't.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"QueryPallet")," - Queries the existence of a particular pallet type.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ExpectPallet")," - Ensure that a particular pallet with a particular version exists.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ReportTransactStatus(QueryResponseInfo)")," - Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"QueryResponse")," message containing the value of\nthe Transact Status Register to some destination.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ClearTransactStatus")," - Set the Transact Status Register to its default, cleared, value.")))),(0,l.kt)(k,{value:"fmd",mdxType:"TabItem"},(0,l.kt)("p",null,"These instructions highlight the key instructions focused on Functional Multichain Decomposition."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"LockAsset(MultiAsset, MultiLocation)")," - Lock the locally held asset and prevent further transfer\nor withdrawal.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"UnlockAsset(MultiAsset, MultiLocation)")," - Remove the lock over ",(0,l.kt)("inlineCode",{parentName:"p"},"asset")," on this chain and (if\nnothing else is preventing it) allow the asset to be transferred.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"NoteUnlockable(MultiAsset, MultiLocation)")," - Asset (",(0,l.kt)("inlineCode",{parentName:"p"},"asset"),") has been locked on the ",(0,l.kt)("inlineCode",{parentName:"p"},"origin"),"\nsystem and may not be transferred. It may only be unlocked with the receipt of the ",(0,l.kt)("inlineCode",{parentName:"p"},"UnlockAsset"),"\ninstruction from this chain.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"RequestUnlock(MultiAsset, MultiLocation)")," - Send an ",(0,l.kt)("inlineCode",{parentName:"p"},"UnlockAsset")," instruction to the ",(0,l.kt)("inlineCode",{parentName:"p"},"locker")," for\nthe given ",(0,l.kt)("inlineCode",{parentName:"p"},"asset"),"."))))))}h.isMDXComponent=!0}}]);