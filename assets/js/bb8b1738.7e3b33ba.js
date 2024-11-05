(self.webpackChunk=self.webpackChunk||[]).push([[2916],{77348:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"learn/learn-validator","title":"Validator","description":"Role of Validators within the Polkadot Ecosystem.","source":"@site/../docs/learn/learn-validator.md","sourceDirName":"learn","slug":"/learn-validator","permalink":"/docs/learn-validator","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-validator.md","tags":[],"version":"current","lastUpdatedBy":"batman","lastUpdatedAt":1730356998000,"frontMatter":{"id":"learn-validator","title":"Validator","sidebar_label":"Validator","description":"Role of Validators within the Polkadot Ecosystem.","keywords":["validate","validator","maintain","NPoS","stake"],"slug":"../learn-validator"},"sidebar":"docs","previous":{"title":"Nominator","permalink":"/docs/learn-nominator"},"next":{"title":"Offenses & Slashes","permalink":"/docs/learn-offenses"}}');var o=t(74848),i=t(28453);t(47379);const r={id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"Role of Validators within the Polkadot Ecosystem.",keywords:["validate","validator","maintain","NPoS","stake"],slug:"../learn-validator"},s=void 0,l={},d=[{value:"Para-validators",id:"para-validators",level:2},{value:"Block Authors",id:"block-authors",level:2},{value:"Other Validators",id:"other-validators",level:2},{value:"Further Readings",id:"further-readings",level:2},{value:"Guides",id:"guides",level:3},{value:"Other References",id:"other-references",level:3},{value:"Security / Key Management",id:"security--key-management",level:3},{value:"Monitoring Tools",id:"monitoring-tools",level:3},{value:"Validator Stats",id:"validator-stats",level:3}];function c(a){const e={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...a.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.p,{children:["This page provides a general overview of the role of validators in the Polkadot network. For more\ndetailed information you can read the ",(0,o.jsx)(e.a,{href:"/docs/learn-parachains-protocol",children:"Parachain Protocol Overview"}),"."]})}),"\n",(0,o.jsxs)(e.p,{children:["Validators secure the ",(0,o.jsx)(e.a,{href:"/docs/learn-architecture#relay-chain",children:"relay chain"})," by staking native tokens,\nvalidating proofs from collators and participating in consensus with other validators."]}),"\n",(0,o.jsx)(e.p,{children:"Validators play a crucial role in adding new blocks to the relay chain and, by extension, to all\nparachains. This allows parties to complete cross-chain transactions via the relay chain. They\nguarantee that each parachain follows its unique rules and can pass messages between shards in a\ntrust-free environment."}),"\n",(0,o.jsx)(e.h2,{id:"para-validators",children:"Para-validators"}),"\n",(0,o.jsxs)(e.p,{children:["Parachain validators (i.e. para-validators) participate to the\n",(0,o.jsx)(e.a,{href:"./learn-parachains-protocol.md/#parachain-phase",children:"Parachain Phase of the AnV Protocol"}),", and submit\n",(0,o.jsx)(e.a,{href:"./learn-parachains-protocol.md/#candidate-receipts",children:"candidate receipts"})," to the relay chain\ntransaction queue so that a block author can include information on the parablock in a fork of of\nthe relay chain."]}),"\n",(0,o.jsxs)(e.p,{children:["Para-validators work in groups and are selected by the runtime in every epoch to validate parachain\nblocks for all parachains connected to the relay chain. The selected para-validators are part of the\n",(0,o.jsx)(e.a,{href:"/docs/chain-state-values#active-validator-count",children:"active validators"})," randomly selected (per\nepoch) to participate in the validation, creating a validator pool of 200 para-validators."]}),"\n",(0,o.jsxs)(e.p,{children:["Para-validators verify that the information contained in an assigned set of parachain blocks is\nvalid. They receive parachain block candidates from the ",(0,o.jsx)(e.a,{href:"/docs/learn-collator",children:"collators"})," together\nwith a Proof-of-Validity (PoV). The para-validators perform the first round of validity checks on\nthe block candidates. Candidates that gather enough signed validity statements are considered\n",(0,o.jsx)(e.em,{children:"backable"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"block-authors",children:"Block Authors"}),"\n",(0,o.jsxs)(e.p,{children:["There are validators on the relay chain who participate in the consensus mechanism to produce the\nrelay chain blocks based on validity statements from other validators. These validators are called\nblock authors, they are selected by ",(0,o.jsx)(e.a,{href:"./learn-consensus.md/#block-production-babe",children:"BABE"})," and can note\nup to one backable candidate for each parachain to include in the relay chain. A backable candidate\nincluded in the relay chain is considered ",(0,o.jsx)(e.em,{children:"backed"})," in that fork of the chain."]}),"\n",(0,o.jsxs)(e.p,{children:["In a relay chain block, block authors will only include\n",(0,o.jsx)(e.a,{href:"./learn-parachains-protocol.md/#candidate-receipts",children:"candidate receipts"})," that have a parent\ncandidate receipt in an earlier relay chain block. This ensures the parachain follows a valid chain.\nAlso, the block authors will only include a receipt for which they have an erasure coding chunk,\nensuring that the system can perform the next round of availability and validity checks."]}),"\n",(0,o.jsx)(e.h2,{id:"other-validators",children:"Other Validators"}),"\n",(0,o.jsxs)(e.p,{children:["Validators also contribute to the so-called ",(0,o.jsx)(e.strong,{children:"availability distribution"}),". In fact, once the\ncandidate is backed in a fork of the relay chain, it is still ",(0,o.jsx)(e.em,{children:"pending availability"}),", i.e. it is not\nfully included (only tentative included) as part of the parachain until it is proven available\n(together with the PoV). Information regarding the availability of the candidate will be noted in\nthe following relay chain blocks. Only when there is enough information, the candidate is considered\na full parachain block or ",(0,o.jsx)(e.em,{children:"parablock"}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["Validators also participate in the so-called\n",(0,o.jsx)(e.a,{href:"./learn-parachains-protocol.md/#approval-process",children:(0,o.jsx)(e.strong,{children:"approval process"})}),". Once the parablock is\nconsidered available and part of the parachain, it is still ",(0,o.jsx)(e.em,{children:"pending approval"}),". Because\npara-validators are a small subset of all validators, there is a risk that by chance the majority of\npara-validators assigned to a parachain might be dishonest. It is thus necessary to run a secondary\nverification of the parablock before it can be considered approved. Having a secondary verification\nstep avoids the allocation of more para-validators that will ultimately reduce the throughput of the\nsystem."]}),"\n",(0,o.jsxs)(e.p,{children:["Any instances of non-compliance with the consensus algorithms result in\n",(0,o.jsx)(e.a,{href:"./learn-parachains-protocol.md/#disputes",children:(0,o.jsx)(e.strong,{children:"disputes"})})," with the punishment of the validators on\nthe wrong side by removing some or all their staked tokens, thereby discouraging bad actors. Good\nperformance, however, will be rewarded, with validators receiving block rewards (including\ntransaction fees) in the form of native tokens (DOT or KSM on Kusama) in exchange for their\nactivities."]}),"\n",(0,o.jsxs)(e.p,{children:["Finally, validators participate in the\n",(0,o.jsx)(e.a,{href:"./learn-parachains-protocol.md/#chain-selection",children:"chain selection process within GRANDPA"}),", ensuring\nthat only available and valid blocks end within the finalized relay chain."]}),"\n",(0,o.jsx)(e.admonition,{title:"Within an era roles can change",type:"info",children:(0,o.jsx)(e.p,{children:"Within the same era, a Validator can be a para-validator, block author, and participate in the\navailability distribution or the approval process. Those roles can change between sessions."})}),"\n",(0,o.jsx)(e.h2,{id:"further-readings",children:"Further Readings"}),"\n",(0,o.jsx)(e.h3,{id:"guides",children:"Guides"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/maintain-guides-how-to-validate-polkadot",children:"How to Validate on Polkadot"})," - Guide on\nhow to set up a validator on the Polkadot live network."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/maintain-guides-validator-payout",children:"Validator Payout Overview"})," - A short overview on\nhow the validator payout mechanism works."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/maintain-guides-how-to-systemd",children:"How to run your validator as a systemd process"})," -\nGuide on running your validator as a ",(0,o.jsx)(e.code,{children:"systemd"})," process so that it will run in the background and\nstart automatically on reboots."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/maintain-guides-how-to-upgrade",children:"How to Upgrade your Validator"})," - Guide for\nsecurely upgrading your validator when you want to switch to a different machine or begin running\nthe latest version of client code."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/maintain-guides-how-to-validate-polkadot",children:"How to Use Validator Setup"})," - Guide on\nhow to use Polkadot / Kusama validator setup."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"other-references",children:"Other References"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://medium.com/@acvlls/setting-up-a-maintain-the-easy-way-3a885283091f",children:"How to run a Polkadot node (Docker)"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://medium.com/hackernoon/a-serverless-failover-solution-for-web-3-0-validator-nodes-e26b9d24c71d",children:"A Serverless Failover Solution for Web3.0 Validator Nodes"})," -\nBlog that details how to create a robust failover solution for running validators."]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"/docs/maintain-guides-how-to-validate-kusama##vps-list",children:"VPS list"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://matrix.to/#/!NZrbtteFeqYKCUGQtr:matrix.parity.io?via=matrix.parity.io&via=matrix.org&via=web3.foundation",children:"Polkadot Validator Lounge"})," -\nA place to chat about being a validator."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"/docs/learn-offenses",children:"Slashing Consequences"})," - Learn more about slashing consequences for running\na validator node."]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.youtube.com/watch?v=0EmP0s6JOW4&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=2",children:"Why You Should be A Validator on Polkadot and Kusama"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://www.youtube.com/watch?v=riVg_Up_fCg&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=15",children:"Roles and Responsibilities of a Validator"})}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://www.crowdcast.io/e/validating-on-polkadot",children:"Validating on Polkadot"})," - An explanation of\nhow to validate on Polkadot, with Joe Petrowski and David Dorgan of Parity Technologies, along\nwith Tim Ogilvie from Staked."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"security--key-management",children:"Security / Key Management"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"https://github.com/w3f/validator-security",children:"Validator Security Overview"})}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"monitoring-tools",children:"Monitoring Tools"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://github.com/SimplyVC/panic_polkadot",children:"PANIC for Polkadot"})," - A monitoring and alerting\nsolution for Polkadot / Kusama node"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://telemetry.polkadot.io/#list/Kusama%20CC3",children:"Polkadot Telemetry Service"})," - Network\ninformation, including what nodes are running on a given chain, what software versions they are\nrunning, and sync status."]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"validator-stats",children:"Validator Stats"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://polkastats.io/",children:"Polkastats"})," - Polkastats is a cleanly designed dashboard for validator\nstatistics."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"https://kusama.subscan.io/validator",children:"Subscan Validators Page"})," - Displays information on the\ncurrent validators - not as tailored for validators as the other sites."]}),"\n"]})]})}function h(a={}){const{wrapper:e}={...(0,i.R)(),...a.components};return e?(0,o.jsx)(e,{...a,children:(0,o.jsx)(c,{...a})}):c(a)}},47379:(a,e,t)=>{"use strict";t.d(e,{A:()=>p});var n=t(90675),o=t(10467),i=t(96540),r=t(19588),s=t(2026),l=t(11135);function d(a,e,t){return c.apply(this,arguments)}function c(){return(c=(0,o.A)((0,n.A)().mark((function a(e,t,o){var i,l,d,c,h;return(0,n.A)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=void 0,l=void 0,a.t0=e,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:"polkadotpeople"===a.t0?13:"kusamapeople"===a.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",a.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",a.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",a.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",a.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",a.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",a.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){a.next=22;break}return a.abrupt("return");case 22:return d=new r.E(i),a.next=25,s.G.create({provider:d});case 25:c=a.sent,(h=t.split(".")).forEach((function(a){a in c&&(c=c[a])})),a.t1=h[0],a.next="consts"===a.t1?31:"query"===a.t1?33:38;break;case 31:return l=c.toString(),a.abrupt("break",39);case 33:return a.next=35,c();case 35:return l=(l=a.sent).toString(),a.abrupt("break",39);case 38:console.log("Unknown path prefix ("+h[0]+") in "+t);case 39:return a.abrupt("return",l);case 40:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function h(a,e,t,n){switch(e){case"humanReadable":(0,l.HumanReadable)(a,t,n);break;case"precise":(0,l.Precise)(a,t,n);break;case"blocksToDays":(0,l.BlocksToDays)(a,n);break;case"erasToDays":(0,l.ErasToDays)(a,n,t);break;case"percentage":(0,l.Percentage)(a,n);break;case"permillToPercent":(0,l.PermillToPercent)(a,n);break;case"arrayLength":(0,l.ArrayLength)(a,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(a){var e=a.network,t=a.path,r=a.defaultValue,s=a.filter,l=void 0===s?void 0:s,c=(0,i.useState)(""),p=c[0],u=c[1];return e=e.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?h(r.toString(),l,e,u):u(r.toString());var a=void 0;switch(e){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":a="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":a="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":a="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+e)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var a=(0,o.A)((0,n.A)().mark((function a(){var o;return(0,n.A)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(e,t,u);case 2:if(void 0!==(o=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==l?h(o,l,e,u):u(o);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),p}},11135:a=>{var e="polkadot",t="kusama",n="statemine",o="statemint",i="polkadotpeople",r="kusamapeople",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,l,d){var c=void 0;if(l===e||l===o)c=3;else if(l===t||l===n||l===i)c=6;else{if(l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=8}a=parseFloat(a),d((a=Number.isInteger(a/s[l].precision)?a/s[l].precision+" "+s[l].symbol:(a/s[l].precision).toFixed(c)+" "+s[l].symbol).toString())},Precise:function(a,e,t){t(a=(a=parseFloat(a))/s[e].precision+" "+s[e].symbol)},BlocksToDays:function(a,e){e((a=6*a/86400).toString())},ErasToDays:function(a,s,l){var d=void 0;if(l===e||l===o||l==i)d=1;else{if(l!==t&&l!==n&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=4}s((a/=d).toString())},Percentage:function(a,e){e((a/=1e7).toString())},PermillToPercent:function(a,e){e((a/=1e4).toString())},ArrayLength:function(a,e){e((a=a.split(",").length).toString())}}},47790:()=>{}}]);