"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),c=r,m=p["".concat(l,".").concat(c)]||p[c]||h[c]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades",description:"Forkless Runtime Upgrades on Polkadot.",keywords:["runtime","upgrades","releases","forkless"],slug:"../learn-runtime-upgrades"},l=void 0,d={unversionedId:"learn/learn-runtime-upgrades",id:"learn/learn-runtime-upgrades",title:"Runtime Upgrades",description:"Forkless Runtime Upgrades on Polkadot.",source:"@site/../docs/learn/learn-runtime-upgrades.md",sourceDirName:"learn",slug:"/learn-runtime-upgrades",permalink:"/docs/learn-runtime-upgrades",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-runtime-upgrades.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1723973568,formattedLastUpdatedAt:"Aug 18, 2024",frontMatter:{id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades",description:"Forkless Runtime Upgrades on Polkadot.",keywords:["runtime","upgrades","releases","forkless"],slug:"../learn-runtime-upgrades"},sidebar:"docs",previous:{title:"WebAssembly (Wasm)",permalink:"/docs/learn-wasm"},next:{title:"Advanced",permalink:"/docs/learn-advanced-index"}},u={},p=[{value:"Forkless Upgrades",id:"forkless-upgrades",level:2},{value:"Forkless Upgrades - Parachains &amp; Solo Chains",id:"forkless-upgrades---parachains--solo-chains",level:3},{value:"Client Releases",id:"client-releases",level:2},{value:"Runtime vs Client versions",id:"runtime-vs-client-versions",level:3},{value:"Runtime Upgrades for Various Users",id:"runtime-upgrades-for-various-users",level:2},{value:"For Infrastructure Providers",id:"for-infrastructure-providers",level:3},{value:"For Nominators",id:"for-nominators",level:3},{value:"Monitoring Runtime Changes",id:"monitoring-runtime-changes",level:2}],h={toc:p},c="wrapper";function m(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)(c,(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Runtime upgrades allow the Polkadot relay\nchain, parachains, and solo blockchains built with the Polkadot SDK to change their core business\nlogic (referred to as the ",(0,i.kt)("strong",{parentName:"p"},"runtime"),") without the need for a hard fork."),(0,i.kt)("h2",{id:"forkless-upgrades"},"Forkless Upgrades"),(0,i.kt)("p",null,'You may have encountered the term "hard fork" before in the blockchain space. A ',(0,i.kt)("strong",{parentName:"p"},"hard fork")," occurs\nwhen a blockchain's logic changes such that nodes that do not include the new changes cannot remain\nin consensus with nodes that do. Such changes are backward incompatible. Hard forks can be political\ndue to the nature of the upgrades and logistically demanding due to the number (potentially\nthousands) of nodes in the network that need to upgrade their software. Thus, hard forking is slow,\ninefficient, and error-prone due to the levels of offline coordination required and, therefore, the\npropensity to bundle many upgrades into one large-scale event."),(0,i.kt)("p",null,"The usage of ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"WebAssembly"),' in the Polkadot SDK (the framework powering Polkadot,\nKusama and their respective parachains), give the relay chain, its parachains, as well as any other\nstandalone solo chains built with the Polkadot SDK the ability to upgrade their runtime (the chain\'s\n"business logic") without a hard fork of the respective network.'),(0,i.kt)("p",null,"Rather than encoding the runtime in the nodes,\nPolkadot nodes contain a WebAssembly\n",(0,i.kt)("a",{parentName:"p",href:"learn-polkadot-host"},"execution host"),". They maintain consensus on a very low-level and\nwell-established instruction set. Upgrades can be small, isolated, and very specific by deploying\nWebAssembly on-chain and having nodes auto-enact the new logic at a particular block height."),(0,i.kt)("p",null,"The Polkadot runtime is stored on the\nPolkadot blockchain itself.\nPolkadot can upgrade its runtime by upgrading\nthe logic stored on-chain and removes the coordination challenge of requiring thousands of node\noperators to upgrade in advance of a given block number. Polkadot stakeholders propose and approve\nupgrades through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"on-chain governance")," system, which also enacts\nthem autonomously once the runtime upgrade referendum is approved through on-chain voting."),(0,i.kt)("p",null,"As a result of storing the runtime as part of the state, the runtime code itself becomes state\nsensitive, and calls to runtime can change the runtime code itself. Therefore, the Polkadot Host\nmust always ensure it provides the runtime corresponding to the state in which the entry point has\nbeen called."),(0,i.kt)("h3",{id:"forkless-upgrades---parachains--solo-chains"},"Forkless Upgrades - Parachains & Solo Chains"),(0,i.kt)("p",null,"The node architectural design for parachains and solo chains is similar to that of the relay chain,\nwith the runtime code being a Wasm blob that is stored in chain state. Solo chains built with\nPolkadot SDK, which are blockchains that have a native consensus mechanism that is independent of\nthe relay chain's consensus, can be updated through an on-chain governance system like\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"OpenGov")," or a simple sudo/multisig setup."),(0,i.kt)("p",null,"Parachains must notify the relay chain whenever a new upgrade is to be enacted. This is done using\ntwo key extrinsics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/frame_system/pallet/struct.Pallet.html#method.authorize_upgrade"},(0,i.kt)("inlineCode",{parentName:"a"},"system.authorizeUpgrade"))," -\nnotifies the relay chain that an upgrade is to take place, and thus a new state transition\nfunction is going to be introduced for that parachain to be validated with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/frame_system/pallet/struct.Pallet.html#method.apply_authorized_upgrade"},(0,i.kt)("inlineCode",{parentName:"a"},"system.applyAuthorizedUpgrade"))," -\nenacts the upgrade, assuming it has been approved.")),(0,i.kt)("h2",{id:"client-releases"},"Client Releases"),(0,i.kt)("p",null,"The existing runtime logic is followed to update the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"Wasm")," runtime stored on the\nblockchain to a new version. The upgrade is then included in the blockchain itself, meaning that all\nthe nodes on the network execute it. Generally, there is no need to upgrade your nodes manually\nbefore the runtime upgrade, as they will automatically start to follow the new logic of the chain.\nNodes only need to be updated when the runtime requires new host functions, or there is a change in\nnetworking or consensus."),(0,i.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou can\u2019t submit a transaction before the upgrade, it is better to wait and construct it afterward."),(0,i.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading\npromptly, especially for high-priority or critical releases."),(0,i.kt)("admonition",{title:"New Client Releases",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The details about the latest client releases can be found in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/releases"},"releases section on the Polkadot repository"),".\nA detailed analysis for client releases can be viewed on the\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/tag/release-analysis"},"Polkadot Forum"),".")),(0,i.kt)("h3",{id:"runtime-vs-client-versions"},"Runtime vs Client versions"),(0,i.kt)("p",null,"The runtime and client versions are distinct from each other. The runtime versioning typically looks\nlike ",(0,i.kt)("inlineCode",{parentName:"p"},"network-xxxx"),", whereas the client versioning looks like ",(0,i.kt)("inlineCode",{parentName:"p"},"vx.x.xx"),". For instance, the runtime\nversion shown on the top left section of Polkadot-JS UI below is ",(0,i.kt)("inlineCode",{parentName:"p"},"kusama-9370"),", and the client\n(node) version shown on the top right section is ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.9.36"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Runtime vs Client versioning",src:n(87390).Z,width:"1917",height:"280"})),(0,i.kt)("admonition",{title:"Querying runtime and client versions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The runtime version can be queried on-chain through Polkadot-JS UI by navigating to the Developer\ntab > Chain State > Storage > system and query ",(0,i.kt)("inlineCode",{parentName:"p"},"lastRuntimeUpgrade()"),"."),(0,i.kt)("p",{parentName:"admonition"},"The node version can be queried by navigating to the Developer tab > RPC calls > system and query\n",(0,i.kt)("inlineCode",{parentName:"p"},"version()"),".")),(0,i.kt)("h2",{id:"runtime-upgrades-for-various-users"},"Runtime Upgrades for Various Users"),(0,i.kt)("h3",{id:"for-infrastructure-providers"},"For Infrastructure Providers"),(0,i.kt)("p",null,"Infrastructure services include but are not limited to the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"Validators")),(0,i.kt)("li",{parentName:"ul"},"API services"),(0,i.kt)("li",{parentName:"ul"},"Node-as-a-Service (NaaS)"),(0,i.kt)("li",{parentName:"ul"},"General infrastructure management (e.g. block explorers, custodians)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./wallets"},"Wallets"))),(0,i.kt)("p",null,"For validators, keeping in sync with the network is key. At times, upgrades will require validators\nto upgrade their clients within a specific time frame, for example, if a release includes breaking\nchanges to networking. It is essential to check the release notes, starting with the upgrade\npriority and acting accordingly."),(0,i.kt)("p",null,"General infrastructure providers, aside from following the\nPolkadot releases and upgrading in a timely\nmanner, should monitor changes to runtime events and auxiliary tooling, such as the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"),"."),(0,i.kt)("p",null,"Transactions constructed for runtime ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," will not work for any other runtime ",(0,i.kt)("inlineCode",{parentName:"p"},">n"),". If a runtime\nupgrade occurs before broadcasting a previously constructed transaction, you will need to\nreconstruct it with the appropriate runtime version and corresponding metadata."),(0,i.kt)("h3",{id:"for-nominators"},"For ",(0,i.kt)("a",{parentName:"h3",href:"/docs/learn-nominator"},"Nominators")),(0,i.kt)("p",null,"Runtime upgrades don't require any actions by a nominator, though it is always encouraged to keep\nup-to-date and participate with the latest runtime upgrade motions and releases while keeping an eye\non how the nodes on the network are reacting to a new upgrade."),(0,i.kt)("h2",{id:"monitoring-runtime-changes"},"Monitoring Runtime Changes"),(0,i.kt)("p",null,"You can monitor the chain for upcoming upgrades. The client release notes include the hashes of any\nproposals related to any on-chain upgrades for easy matching. We recommend keeping track of the\nPolkadot Fellowship's\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/runtimes/releases/latest"},"runtime upgrades")," to be aware of\nchanges in the runtime logic."),(0,i.kt)("p",null,"Runtime upgrades are voted on and executed via ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Polkadot OpenGov"),". You\nshould monitor the Relay Chain as follows to know when the next runtime upgrade will be enacted:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check each block for ",(0,i.kt)("inlineCode",{parentName:"li"},"referenda (Submitted)")," events and check if the ",(0,i.kt)("inlineCode",{parentName:"li"},"track")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),", which\ncorrespond to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Root")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"whitelistedCaller")," tracks, respectively. These are the only tracks\nthat can enact runtime upgrdes. Log the referendum's ",(0,i.kt)("inlineCode",{parentName:"li"},"index"),"; this will help you keep track of\nthe its progress. With the index you can look up the details of the proposal in\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.polkassembly.io/whitelisted-caller?trackStatus=all&page=1"},"Polkassembly.io")," to\nsee if it corresponds with a runtime upgrade."),(0,i.kt)("li",{parentName:"ol"},"Ongoing referenda will have an ",(0,i.kt)("inlineCode",{parentName:"li"},"enactment")," field under ",(0,i.kt)("inlineCode",{parentName:"li"},"referenda.ReferendumInfoFor")," storage.\nThis is the block number that, if passed, the system will attempt to schedule the inner\nproposal's execution for. Note that there are some constraints like a minimum enactment period\nthat could result in the proposal's execution occurring later. It is not possible for the\nproposal to enact ",(0,i.kt)("em",{parentName:"li"},"before")," this block number."),(0,i.kt)("li",{parentName:"ol"},"Check also for ",(0,i.kt)("inlineCode",{parentName:"li"},"referenda (DecisionDepositPlaced)")," events where ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," matches the one\npreviously found. This means that the required deposit has been placed."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"referenda (DecisionStarted)")," indicates that the decision period has started for the referendum\nof that ",(0,i.kt)("inlineCode",{parentName:"li"},"index"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"referenda (ConfirmStarted)")," indicates that ",(0,i.kt)("inlineCode",{parentName:"li"},"index"),"'s referendum has entered the confirmation\nperiod.",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"referenda (Confirmed)")," indicates that ",(0,i.kt)("inlineCode",{parentName:"li"},"index"),"'s referendum has been confirmed and will enter\nthe enactment period. With this and ",(0,i.kt)("inlineCode",{parentName:"li"},"enactment_moment"),", you can calculate when the proposal\nwill be enacted."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"referenda (Rejected)")," indicates that ",(0,i.kt)("inlineCode",{parentName:"li"},"index"),"'s referendum has been rejected and will not be\nenacted."))),(0,i.kt)("li",{parentName:"ol"},"When the runtime upgrades, there will be a ",(0,i.kt)("inlineCode",{parentName:"li"},"system(CodeUpdated)")," event confirming the execution\nof the runtime upgrade.")))}m.isMDXComponent=!0},87390:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime-node-version-2903ab51ac01ad44e6424cafc0f63fdf.png"}}]);