"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2783],{15680:(e,t,s)=>{s.d(t,{xA:()=>c,yg:()=>g});var a=s(96540);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(s),h=n,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return s?a.createElement(g,r(r({ref:t},c),{},{components:s})):a.createElement(g,r({ref:t},c))}));function g(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,r=new Array(o);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,r[1]=i;for(var u=2;u<o;u++)r[u]=s[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}h.displayName="MDXCreateElement"},67141:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(96540);const n=function(e){var t,s=e.message,n=(0,a.useState)(!0),o=n[0],r=n[1];return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:"message-box"},a.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),a.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=s,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},76694:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=s(58168),n=s(98587),o=(s(96540),s(15680)),r=s(67141),i=["components"],l={id:"learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",sidebar_label:"Create Asset Guides",description:"Polkadot-JS Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets-create"},u=void 0,c={unversionedId:"learn/learn-guides-assets-create",id:"learn/learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",description:"Polkadot-JS Guides about Creating Assets.",source:"@site/../docs/learn/learn-guides-assets-create.md",sourceDirName:"learn",slug:"/learn-guides-assets-create",permalink:"/docs/learn-guides-assets-create",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-assets-create.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725286484,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",sidebar_label:"Create Asset Guides",description:"Polkadot-JS Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets-create"},sidebar:"docs",previous:{title:"Asset Hub Guides",permalink:"/docs/learn-guides-assets"},next:{title:"Asset Conversion Tutorials",permalink:"/docs/learn-guides-asset-conversion"}},d={},p=[{value:"Creating Assets on the Asset Hub with Polkadot-JS",id:"creating-assets-on-the-asset-hub-with-polkadot-js",level:2}],h={toc:p},g="wrapper";function y(e){var t=e.components,l=(0,n.A)(e,i);return(0,o.yg)(g,(0,a.A)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.yg)(r.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,o.yg)("p",null,"The Asset Hub is a generic assets system parachain which provides functionality for deploying and\ntransferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). The native token of the Asset\nhub is DOT. The Existential Deposit (ED),\ntransaction fees, and the deposits for proxy/multisig operations are about\n",(0,o.yg)("a",{parentName:"p",href:"/docs/chain-state-values#existential-deposit-2"},"1/10th of the values on the Relay chains"),".\nApart from the core protocol token DOT, the\nassets held on the Asset Hub can be broadly categorized as"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.yg)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.yg)("li",{parentName:"ul"},"Assets without any backing")),(0,o.yg)("p",null,"For additional background on the Asset Hub check out\n",(0,o.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181800-what-is-statemint-and-statemine-and-how-do-i-use-them-"},"this support article"),"."),(0,o.yg)("h2",{id:"creating-assets-on-the-asset-hub-with-polkadot-js"},"Creating Assets on the Asset Hub with Polkadot-JS"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Before minting assets on the Asset Hub, we recommend that you try out this tutorial on Westend Asset\nHub, which is a system parachain on Westend test network. The WND tokens (Westies) can be teleported\nfrom Westend to Westend Asset Hub, are available for free through a\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-DOT#getting-tokens-on-the-westend-testnet"},"faucet"),"."),(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"The images in the guides below are for Polkadot, but they also apply to Kusama."))),(0,o.yg)("p",null,"To create an asset on the Asset Hub, you would need to\n",(0,o.yg)("a",{parentName:"p",href:"/docs/chain-state-values#asset-deposit"},"deposit some funds"),". Before you create an asset on\nthe Asset Hub, ensure that your Asset Hub account balance is a bit more than the sum of those two\ndeposits, which should seamlessly account for the required deposits and transaction fees. You can\nsend DOT from a\nPolkadot account to a the Asset Hub account\nusing the teleport functionality. For instructions on teleporting\nDOT, check this\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.yg)("p",null,"Assuming you have the required DOT balance on\nyour Asset Hub account, the following instructions should let you successfully create an asset on\nthe Asset Hub"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Access the Asset Hub through ",(0,o.yg)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,o.yg)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Navigate to Assets page",src:s(99776).A,width:"1710",height:"554"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on the Asset Hub, the asset's symbol, number of\ndecimals for the asset, the minimum balance required to hold this asset on an Asset Hub account\nand the most important field of your asset - the unique asset ID. The UI would not let you enter\nan ID that has already been taken. After all the details are entered, click on the next button.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Add Asset Metadata",src:s(23977).A,width:"1510",height:"798"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Asset managing accounts",src:s(59442).A,width:"1518",height:"510"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Sign and submit the transaction (If you like to verify the transaction details before signing, you\ncan click on the dropdown button pointed by the arrow in the snapshot below).")),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Sign asset creating transaction",src:s(80987).A,width:"1520",height:"610"})),(0,o.yg)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on the Asset Hub."))}y.isMDXComponent=!0},99776:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/hub-asset-0-71cbceb69c712729d7920b4575ab8f46.png"},23977:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/hub-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},59442:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/hub-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},80987:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/hub-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"}}]);