"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2783],{43143:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=t(74848),a=t(28453),o=t(67141);const i={id:"learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",sidebar_label:"Create Asset Guides",description:"Polkadot-JS Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets-create"},r=void 0,d={id:"learn/learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",description:"Polkadot-JS Guides about Creating Assets.",source:"@site/../docs/learn/learn-guides-assets-create.md",sourceDirName:"learn",slug:"/learn-guides-assets-create",permalink:"/docs/learn-guides-assets-create",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-assets-create.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1729847256e3,frontMatter:{id:"learn-guides-assets-create",title:"Polkadot-JS Guides about Creating Assets",sidebar_label:"Create Asset Guides",description:"Polkadot-JS Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets-create"},sidebar:"docs",previous:{title:"Asset Hub Guides",permalink:"/docs/learn-guides-assets"},next:{title:"Asset Conversion Tutorials",permalink:"/docs/learn-guides-asset-conversion"}},l={},c=[{value:"Creating Assets on the Asset Hub with Polkadot-JS",id:"creating-assets-on-the-asset-hub-with-polkadot-js",level:2}];function h(e){const s={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the Polkadot-JS UI, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,n.jsxs)(s.p,{children:["The Asset Hub is a generic assets system parachain which provides functionality for deploying and\ntransferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). The native token of the Asset\nhub is the same as the relay chain's native asset (DOT or KSM). The Existential Deposit (ED),\ntransaction fees, and the deposits for proxy/multisig operations are about\n",(0,n.jsx)(s.a,{href:"/docs/chain-state-values#existential-deposit-2",children:"1/10th of the values on the relay chains"}),".\nApart from the native token, the assets held on the Asset Hub can be broadly categorized as"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Assets backed by an on-chain protocol\u2019s utility"}),"\n",(0,n.jsx)(s.li,{children:"Assets with off-chain backing"}),"\n",(0,n.jsx)(s.li,{children:"Assets without any backing"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["For additional background on the Asset Hub check out\n",(0,n.jsx)(s.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181800-what-is-statemint-and-statemine-and-how-do-i-use-them-",children:"this support article"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"creating-assets-on-the-asset-hub-with-polkadot-js",children:"Creating Assets on the Asset Hub with Polkadot-JS"}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsxs)(s.p,{children:["Before minting assets on the Asset Hub, we recommend that you try out this tutorial on Westend Asset\nHub, which is a system parachain on Westend test network. The WND tokens (Westies) can be teleported\nfrom Westend to Westend Asset Hub, are available for free through a\n",(0,n.jsx)(s.a,{href:"/docs/learn-DOT#getting-tokens-on-the-westend-testnet",children:"faucet"}),"."]}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"The images in the guides below are for Polkadot, but they also apply to Kusama."})})]}),"\n",(0,n.jsxs)(s.p,{children:["To create an asset on the Asset Hub, you would need to\n",(0,n.jsx)(s.a,{href:"/docs/chain-state-values#asset-deposit",children:"deposit some funds"}),". Before you create an asset on\nthe Asset Hub, ensure that your Asset Hub account balance is a bit more than the sum of those two\ndeposits, which should seamlessly account for the required deposits and transaction fees. You can\nsend the native token from a relay chain account to a the Asset Hub account using the teleport\nfunctionality. For instructions on teleporting tokens, check this\n",(0,n.jsx)(s.a,{href:"/docs/learn-teleport",children:"page on Teleports"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Assuming you have the required balance on your Asset Hub account, the following instructions should\nlet you successfully create an asset on the Asset Hub"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Access the Asset Hub through ",(0,n.jsx)(s.a,{href:"https://polkadot.js.org/apps/#/explorer",children:"Polkadot-JS UI"}),"."]}),"\n",(0,n.jsx)(s.li,{children:"Navigate to Network > Assets."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Navigate to Assets page",src:t(99776).A+"",width:"1710",height:"554"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on the Asset Hub, the asset's symbol, number of\ndecimals for the asset, the minimum balance required to hold this asset on an Asset Hub account\nand the most important field of your asset - the unique asset ID. The UI would not let you enter\nan ID that has already been taken. After all the details are entered, click on the next button."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add Asset Metadata",src:t(23977).A+"",width:"1510",height:"798"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Choose the admin, issuer and the freezer accounts for your asset and click on the create button."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Asset managing accounts",src:t(59442).A+"",width:"1518",height:"510"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Sign and submit the transaction (If you like to verify the transaction details before signing, you\ncan click on the dropdown button pointed by the arrow in the snapshot below)."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Sign asset creating transaction",src:t(80987).A+"",width:"1520",height:"610"})}),"\n",(0,n.jsx)(s.p,{children:"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on the Asset Hub."})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},67141:(e,s,t)=>{t.d(s,{A:()=>o});var n=t(96540),a=t(74848);const o=function(e){var s,t=e.message,o=(0,n.useState)(!0),i=o[0],r=o[1];return(0,a.jsx)(a.Fragment,{children:i&&(0,a.jsxs)("div",{className:"message-box",children:[(0,a.jsx)("button",{className:"close-button",onClick:function(){r(!1)},children:"\u2716 "}),(0,a.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(s=t,s.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},99776:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/hub-asset-0-71cbceb69c712729d7920b4575ab8f46.png"},23977:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/hub-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},59442:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/hub-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},80987:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/hub-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var n=t(96540);const a={},o=n.createContext(a);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);