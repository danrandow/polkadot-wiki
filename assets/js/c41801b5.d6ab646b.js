(self.webpackChunk=self.webpackChunk||[]).push([[9507],{62499:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"maintain/kusama/maintain-guides-how-to-validate-kusama","title":"Run a Validator (Kusama)","description":"The fundamentals for running a Kusama validator.","source":"@site/../docs/maintain/kusama/maintain-guides-how-to-validate-kusama.md","sourceDirName":"maintain/kusama","slug":"/maintain-guides-how-to-validate-kusama","permalink":"/docs/maintain-guides-how-to-validate-kusama","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/kusama/maintain-guides-how-to-validate-kusama.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1730788607000,"frontMatter":{"id":"maintain-guides-how-to-validate-kusama","title":"Run a Validator (Kusama)","sidebar_label":"How to run a Validator on Kusama","description":"The fundamentals for running a Kusama validator.","keywords":["validate","validator","kusama","stake","maintain"],"slug":"../../maintain-guides-how-to-validate-kusama"},"sidebar":"docs","previous":{"title":"Kappa Sigma Mu","permalink":"/docs/maintain-guides-society-kusama"},"next":{"title":"KSM Inflation","permalink":"/docs/learn-kusama-inflation"}}');var n=t(74848),i=t(28453);t(47379),t(96540),t(11135);const r={id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama",description:"The fundamentals for running a Kusama validator.",keywords:["validate","validator","kusama","stake","maintain"],slug:"../../maintain-guides-how-to-validate-kusama"},s=void 0,l={},d=[{value:"Preliminaries",id:"preliminaries",level:2},{value:"How many KSM do I need to become an active Validator?",id:"how-many-ksm-do-i-need-to-become-an-active-validator",level:3},{value:"Validator Rewards",id:"validator-rewards",level:3},{value:"Run a Kusama Validator",id:"run-a-kusama-validator",level:2}];function u(a){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"preliminaries",children:"Preliminaries"}),"\n",(0,n.jsxs)(e.p,{children:["Running a validator on a live network is a lot of responsibility! You will be accountable for not\nonly your own stake, but also the stake of your current nominators. If you make a mistake and get\n",(0,n.jsx)(e.a,{href:"/docs/learn-offenses",children:"slashed"}),", your tokens and your reputation will be at risk. However,\nrunning a validator can also be very rewarding, knowing that you contribute to the security of a\ndecentralized network while growing your stash."]}),"\n",(0,n.jsxs)(e.admonition,{type:"warning",children:[(0,n.jsx)(e.p,{children:"It is highly recommended that you have significant system administration experience before\nattempting to run your own validator."}),(0,n.jsx)(e.p,{children:"You must be able to handle technical issues and anomalies with your node which you must be able to\ntackle yourself. Being a validator involves more than just executing the binary file."})]}),"\n",(0,n.jsxs)(e.p,{children:["Since security is so important to running a successful validator, you should take a look at the\n",(0,n.jsx)(e.a,{href:"/docs/maintain-guides-secure-validator",children:"secure validator"})," information to make sure you understand\nthe factors to consider when constructing your infrastructure. As you progress in your journey as a\nvalidator, you will likely want to use this repository as a ",(0,n.jsx)(e.em,{children:"starting point"})," for your own\nmodifications and customizations."]}),"\n",(0,n.jsxs)(e.p,{children:["If you need help, please reach out on the\n",(0,n.jsx)(e.a,{href:"https://matrix.to/#/#KusamaValidatorLounge:polkadot.builders",children:"Kusama Validator Lounge"})," on Element.\nThe team and other validators are there to help answer questions and provide tips from experience."]}),"\n",(0,n.jsx)(e.h3,{id:"how-many-ksm-do-i-need-to-become-an-active-validator",children:"How many KSM do I need to become an active Validator?"}),"\n",(0,n.jsx)(e.admonition,{title:"Controller accounts are deprecated",type:"info",children:(0,n.jsxs)(e.p,{children:["Controller accounts are deprecated. For more information, see\n",(0,n.jsx)(e.a,{href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748",children:"this discussion"}),"."]})}),"\n",(0,n.jsxs)(e.p,{children:["You can have a rough estimate on that by using the methods listed\n",(0,n.jsx)(e.a,{href:"../../general/faq.md/#what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator",children:"here"}),".\nTo be elected into the set, you need a minimum stake behind your validator. This stake can come from\nyourself or from ",(0,n.jsx)(e.a,{href:"/docs/learn-nominator",children:"nominators"}),". This means that as a minimum, you\nwill need enough KSM to set up Stash and staking proxy ",(0,n.jsx)(e.a,{href:"/docs/learn-cryptography",children:"accounts"}),"\nwith the existential deposit, plus a little extra for transaction fees. The rest can come from\nnominators. To understand how validators are elected, check the\n",(0,n.jsx)(e.a,{href:"/docs/learn-phragmen",children:"NPoS Election algorithms"})," page."]}),"\n",(0,n.jsx)(e.admonition,{title:"Join the Decentralized Nodes program",type:"tip",children:(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://nodes.web3.foundation/",children:"The Decentralized Nodes program"})," is an initiative by Web3\nFoundation and Parity Technologies to use the funds held by both organizations to nominate\nvalidators in the community."]})}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.strong,{children:"Warning:"})," Any KSM that you stake for your validator is liable to be slashed, meaning that an\ninsecure or improper setup may result in loss of KSM tokens! If you are not confident in your\nability to run a validator node, it is recommended to nominate your KSM to a trusted validator node\ninstead."]}),"\n",(0,n.jsx)(e.h3,{id:"validator-rewards",children:"Validator Rewards"}),"\n",(0,n.jsxs)(e.p,{children:["On Kusama, one day is approximately four eras whereas on Polkadot, one era is approximately a day.\nIn each era, the validators elected to the active set earn era points which correspond to the actual\nrewards earned that are distributed proportionally to the nominators after deducting the validator\ncommission. The\n",(0,n.jsx)(e.a,{href:"/docs/chain-state-values#minimum-validator-commission",children:"minimum validator commission"})," can\nbe set through on-chain governance. For more information rewards and payouts, check the\n",(0,n.jsx)(e.a,{href:"/docs/maintain-guides-validator-payout",children:"validator payout"})," document."]}),"\n",(0,n.jsx)(e.h2,{id:"run-a-kusama-validator",children:"Run a Kusama Validator"}),"\n",(0,n.jsxs)(e.p,{children:["Running a validator on the Kusama network is identical to running a Polkadot validator. Check out\nthe ",(0,n.jsx)(e.a,{href:"/docs/maintain-guides-how-to-validate-polkadot",children:"Polkadot guide"})," on how to setup a validator."]}),"\n",(0,n.jsx)(e.p,{children:"Make sure to adjust the Polkadot guide to run a Kusama network validator (the instructions will also\nbe available in the Polkadot Validator guide):"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["When starting the node pass ",(0,n.jsx)(e.code,{children:"--chain=kusama"})," CLI flag"]}),"\n"]})]})}function c(a={}){const{wrapper:e}={...(0,i.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(u,{...a})}):u(a)}},47379:(a,e,t)=>{"use strict";t.d(e,{A:()=>m});var o=t(90675),n=t(10467),i=t(96540),r=t(19588),s=t(2026),l=t(11135);function d(a,e,t){return u.apply(this,arguments)}function u(){return(u=(0,n.A)((0,o.A)().mark((function a(e,t,n){var i,l,d,u,c;return(0,o.A)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=void 0,l=void 0,a.t0=e,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:"polkadotpeople"===a.t0?13:"kusamapeople"===a.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",a.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",a.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",a.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",a.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",a.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",a.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){a.next=22;break}return a.abrupt("return");case 22:return d=new r.E(i),a.next=25,s.G.create({provider:d});case 25:u=a.sent,(c=t.split(".")).forEach((function(a){a in u&&(u=u[a])})),a.t1=c[0],a.next="consts"===a.t1?31:"query"===a.t1?33:38;break;case 31:return l=u.toString(),a.abrupt("break",39);case 33:return a.next=35,u();case 35:return l=(l=a.sent).toString(),a.abrupt("break",39);case 38:console.log("Unknown path prefix ("+c[0]+") in "+t);case 39:return a.abrupt("return",l);case 40:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function c(a,e,t,o){switch(e){case"humanReadable":(0,l.HumanReadable)(a,t,o);break;case"precise":(0,l.Precise)(a,t,o);break;case"blocksToDays":(0,l.BlocksToDays)(a,o);break;case"erasToDays":(0,l.ErasToDays)(a,o,t);break;case"percentage":(0,l.Percentage)(a,o);break;case"permillToPercent":(0,l.PermillToPercent)(a,o);break;case"arrayLength":(0,l.ArrayLength)(a,o);break;default:return void console.log("Ignoring unknown filter type")}}const m=function(a){var e=a.network,t=a.path,r=a.defaultValue,s=a.filter,l=void 0===s?void 0:s,u=(0,i.useState)(""),m=u[0],p=u[1];return e=e.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(r.toString(),l,e,p):p(r.toString());var a=void 0;switch(e){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":a="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":a="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":a="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+e)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var a=(0,n.A)((0,o.A)().mark((function a(){var n;return(0,o.A)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(e,t,p);case 2:if(void 0!==(n=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==l?c(n,l,e,p):p(n);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),m}},11135:a=>{var e="polkadot",t="kusama",o="statemine",n="statemint",i="polkadotpeople",r="kusamapeople",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,l,d){var u=void 0;if(l===e||l===n)u=3;else if(l===t||l===o||l===i)u=6;else{if(l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=8}a=parseFloat(a),d((a=Number.isInteger(a/s[l].precision)?a/s[l].precision+" "+s[l].symbol:(a/s[l].precision).toFixed(u)+" "+s[l].symbol).toString())},Precise:function(a,e,t){t(a=(a=parseFloat(a))/s[e].precision+" "+s[e].symbol)},BlocksToDays:function(a,e){e((a=6*a/86400).toString())},ErasToDays:function(a,s,l){var d=void 0;if(l===e||l===n||l==i)d=1;else{if(l!==t&&l!==o&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=4}s((a/=d).toString())},Percentage:function(a,e){e((a/=1e7).toString())},PermillToPercent:function(a,e){e((a/=1e4).toString())},ArrayLength:function(a,e){e((a=a.split(",").length).toString())}}},47790:()=>{}}]);