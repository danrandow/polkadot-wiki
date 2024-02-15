(self.webpackChunk=self.webpackChunk||[]).push([[1529],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var n=a(74165),o=a(15861),r=a(67294),l=a(87152),i=a(14741),s=a(67425);function k(t,e,a){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,n.Z)().mark((function t(e,a,o){var r,s,k,u,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=void 0,s=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){t.next=18;break}return t.abrupt("return");case 18:return k=new l.U(r),t.next=21,i.G.create({provider:k});case 21:u=t.sent,(p=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=p[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return s=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return s=(s=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return t.abrupt("return",s);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e,a,n){switch(e){case"humanReadable":(0,s.HumanReadable)(t,a,n);break;case"precise":(0,s.Precise)(t,a,n);break;case"blocksToDays":(0,s.BlocksToDays)(t,n);break;case"erasToDays":(0,s.ErasToDays)(t,n,a);break;case"percentage":(0,s.Percentage)(t,n);break;case"permillToPercent":(0,s.PermillToPercent)(t,n);break;case"arrayLength":(0,s.ArrayLength)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(t){var e=t.network,a=t.path,l=t.defaultValue,i=t.filter,s=void 0===i?void 0:i,u=(0,r.useState)(""),d=u[0],c=u[1];return e=e.toLowerCase(),(0,r.useEffect)((function(){void 0!==s?p(l.toString(),s,e,c):c(l.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://statemine-rpc.polkadot.io/";break;case"statemint":t="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){var o;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e,a,c);case 2:if(void 0!==(o=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==s?p(o,s,e,c):c(o);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),d}},67425:t=>{var e="polkadot",a="kusama",n="statemine",o="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,l,i){var s=void 0;if(l===e||l===o)s=3;else{if(l!==a&&l!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=6}t=parseFloat(t),i((t=Number.isInteger(t/r[l].precision)?t/r[l].precision+" "+r[l].symbol:(t/r[l].precision).toFixed(s)+" "+r[l].symbol).toString())},Precise:function(t,e,a){a(t=(t=parseFloat(t))/r[e].precision+" "+r[e].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ErasToDays:function(t,r,l){var i=void 0;if(l===e||l===o)i=1;else{if(l!==a&&l!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}r((t/=i).toString())},Percentage:function(t,e){e((t/=1e7).toString())},PermillToPercent:function(t,e){e((t/=1e4).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},64204:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>k,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=a(47940),i=["components"],s={id:"learn-DOT",title:"DOT",sidebar_label:"DOT",description:"Tokenomics of Polkadot's Native Token DOT.",keywords:["token","DOT","what are the uses of DOT","KSM","faucet"],slug:"../learn-DOT"},k=void 0,u={unversionedId:"learn/learn-DOT",id:"learn/learn-DOT",title:"DOT",description:"Tokenomics of Polkadot's Native Token DOT.",source:"@site/../docs/learn/learn-DOT.md",sourceDirName:"learn",slug:"/learn-DOT",permalink:"/docs/learn-DOT",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-DOT.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1707900942,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"learn-DOT",title:"DOT",sidebar_label:"DOT",description:"Tokenomics of Polkadot's Native Token DOT.",keywords:["token","DOT","what are the uses of DOT","KSM","faucet"],slug:"../learn-DOT"},sidebar:"docs",previous:{title:"Asset Hub",permalink:"/docs/learn-assets"},next:{title:"Token Inflation",permalink:"/docs/learn-inflation"}},p={},d=[{value:"What is DOT?",id:"what-is-dot",level:2},{value:"The Planck Unit",id:"the-planck-unit",level:3},{value:"Polkadot",id:"polkadot",level:3},{value:"Kusama",id:"kusama",level:3},{value:"What are the uses of DOT?",id:"what-are-the-uses-of-dot",level:2},{value:"DOT for Governance",id:"dot-for-governance",level:3},{value:"DOT for Consensus",id:"dot-for-consensus",level:3},{value:"DOT for Parachain Slot Acquisition",id:"dot-for-parachain-slot-acquisition",level:3},{value:"Token Issuance",id:"token-issuance",level:3},{value:"Total Issuance",id:"total-issuance",level:4},{value:"Inactive Issuance",id:"inactive-issuance",level:4},{value:"Active Issuance",id:"active-issuance",level:4},{value:"Obtaining Testnet Tokens",id:"obtaining-testnet-tokens",level:2},{value:"Getting Tokens on the Paseo Testnet",id:"getting-tokens-on-the-paseo-testnet",level:3},{value:"Getting Tokens on the Westend Testnet",id:"getting-tokens-on-the-westend-testnet",level:3},{value:"Getting Tokens on the Rococo Testnet",id:"getting-tokens-on-the-rococo-testnet",level:3},{value:"Faucets support",id:"faucets-support",level:3},{value:"Kusama Tokens",id:"kusama-tokens",level:2},{value:"Polkadot Mainnet DOT",id:"polkadot-mainnet-dot",level:2}],c={toc:d},m="wrapper";function h(t){var e=t.components,a=(0,o.Z)(t,i);return(0,r.kt)(m,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-dot"},"What is DOT?"),(0,r.kt)("p",null,"DOT is the native token of the Polkadot network in a similar way that BTC is the native token of\nBitcoin or Ether is the native token of the Ethereum blockchain."),(0,r.kt)("h3",{id:"the-planck-unit"},"The Planck Unit"),(0,r.kt)("p",null,"The smallest unit for the account balance on Substrate based blockchains (Polkadot, Kusama, etc.) is\nPlanck (a reference to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Planck_length"},"Planck Length"),", the smallest\npossible distance in the physical Universe). You can compare DOT's Planck to BTC's Satoshi or ETH's\nWei. Polkadot's native token DOT equals to 10",(0,r.kt)("sup",null,"10")," Planck and Kusama's native token KSM\nequals to 10",(0,r.kt)("sup",null,"12")," Planck."),(0,r.kt)("h3",{id:"polkadot"},"Polkadot"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal Places"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to Planck"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to DOT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1 Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0000000001 DOT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microdot (uDOT)"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"4")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0000010000 DOT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Millidot (mDOT)"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"7")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0010000000 DOT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dot (DOT)"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"10")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0000000000 DOT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Million (MDOT)"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"16")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000.00 DOT")))),(0,r.kt)("admonition",{title:"DOT was redenominated at block #1_248_328",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"DOT was originally equal to 10",(0,r.kt)("sup",null,"12"),' Planck just like Kusama (which is referred to as "DOT\n(old)"), but went through a process of ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-redenomination"},"redenomination")," which increased\nDOT's supply by 100x. As a consequence, 1 DOT now equals to 10",(0,r.kt)("sup",null,"10")," Planck.")),(0,r.kt)("h3",{id:"kusama"},"Kusama"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal Places"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to Planck"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to KSM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1 Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.000000000001 KSM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Point"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"3")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.000000001000 KSM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MicroKSM (uKSM)"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"6")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.000001000000 KSM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MilliKSM (mKSM)"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"9")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001000000000 KSM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KSM"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"12")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"1.000000000000 KSM")))),(0,r.kt)("h2",{id:"what-are-the-uses-of-dot"},"What are the uses of DOT?"),(0,r.kt)("p",null,"DOT serves three key functions in Polkadot:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to be used for governance of the network,"),(0,r.kt)("li",{parentName:"ul"},"to be staked for the operation of the network,"),(0,r.kt)("li",{parentName:"ul"},"to be bonded to connect a chain to Polkadot as a parachain.")),(0,r.kt)("p",null,"DOT can also serve ancillary functions by being a transferrable token. For example, DOT stored in\nthe Treasury can be sent to teams working on relevant projects for the Polkadot network."),(0,r.kt)("admonition",{title:"Explainer video on token utility",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These concepts have been further explained in the video\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=POfFgrMfkTo&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=7"},"Usage of DOT and KSM on Polkadot and Kusama"),".")),(0,r.kt)("h3",{id:"dot-for-governance"},"DOT for Governance"),(0,r.kt)("p",null,"The first function of DOT is to entitle holders to control the governance of the platform. Some\nfunctions that are included under the governance mechanism include determining the fees of the\nnetwork, the addition or removal of parachains, and exceptional events such as upgrades and fixes to\nthe Polkadot platform."),(0,r.kt)("p",null,"Polkadot will enable any holder of DOT to participate in governance. For details on how holders can\nparticipate in governance, as well as their rights and responsibilities, see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"governance page"),"."),(0,r.kt)("h3",{id:"dot-for-consensus"},"DOT for Consensus"),(0,r.kt)("p",null,"DOT will be used to facilitate the consensus mechanism that underpins Polkadot. For the platform to\nfunction and allow for valid transactions to be carried out across parachains, Polkadot will rely on\nholders of DOT to play active roles. Participants will put their DOT at risk (via staking) to\nperform these functions. The staking of DOT acts as a disincentive for malicious participants who\nwill be punished by the network by getting their DOT slashed. The DOT required to participate in the\nnetwork will vary depending on the activity that is being performed, the duration the DOT will be\nstaked for, and the total number of DOT staked. For more information about staking on Polkadot visit\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"the dedicated staking page"),"."),(0,r.kt)("h3",{id:"dot-for-parachain-slot-acquisition"},"DOT for Parachain Slot Acquisition"),(0,r.kt)("p",null,"DOT will have the ability to be locked for a duration in order to secure a parachain slot in the\nnetwork. The DOT will be reserved during the slot lease and will be released back to the account\nthat reserved them after the duration of the lease has elapsed and the parachain is removed. You can\nlearn more about this aspect by reading about the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auctions")," that govern parachain\nslots."),(0,r.kt)("h3",{id:"token-issuance"},"Token Issuance"),(0,r.kt)("h4",{id:"total-issuance"},"Total Issuance"),(0,r.kt)("p",null,"It is the total number of token units in existence on the network."),(0,r.kt)("admonition",{title:"On-chain data for reference",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The total issuance is\n",(0,r.kt)(l.Z,{network:"polkadot",path:"query.balances.totalIssuance",defaultValue:"13557639805348170350",filter:"humanReadable",mdxType:"RPC"}),"\n","\nin the era\n",(0,r.kt)(l.Z,{network:"polkadot",path:"query.staking.currentEra",defaultValue:"1200",mdxType:"RPC"}),".\n","")),(0,r.kt)("h4",{id:"inactive-issuance"},"Inactive Issuance"),(0,r.kt)("p",null,"It is the total units of outstanding deactivated balance on the network that cannot be used for\nparticipation in governance. This comprises tokens locked away in crowdloans and nomination pools."),(0,r.kt)("admonition",{title:"On-chain data for reference",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The inactive issuance is\n",(0,r.kt)(l.Z,{network:"polkadot",path:"query.balances.inactiveIssuance",defaultValue:"1784854324418488473",filter:"humanReadable",mdxType:"RPC"}),"\n","\nin the era\n",(0,r.kt)(l.Z,{network:"polkadot",path:"query.staking.currentEra",defaultValue:"1200",mdxType:"RPC"}),".\n","")),(0,r.kt)("h4",{id:"active-issuance"},"Active Issuance"),(0,r.kt)("p",null,"Active issuance = Total issuance - Inactive issuance"),(0,r.kt)("p",null,"All the tokens under active issuance are can be used to participate in the governance on-chain."),(0,r.kt)("h2",{id:"obtaining-testnet-tokens"},"Obtaining Testnet Tokens"),(0,r.kt)("p",null,"DOT are required to make transactions on the Polkadot network. Tokens on Polkadot's Testnets like\nPaseo, Westend and Rococo do not have any value besides allowing you to experiment with the features\non the network."),(0,r.kt)("h3",{id:"getting-tokens-on-the-paseo-testnet"},"Getting Tokens on the Paseo Testnet"),(0,r.kt)("p",null,"The Paseo testnet mirrors the Polkadot runtime and it is maintained by the community. To get Paseo\ntokens (PAS) you can use the web-based\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-testnet-faucet/paseo"},"Paseo faucet"),". The PAS tokens has the\nsame Planck conversion as Polkadot."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal Places"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to Planck"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to PAS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1 Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0000000001 PAS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microdot (uPAS)"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"4")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0000010000 PAS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Millidot (mPAS)"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"7")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0010000000 PAS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dot (PAS)"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"10")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0000000000 PAS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Million (MPAS)"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"16")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"1,000,000.00 PAS")))),(0,r.kt)("h3",{id:"getting-tokens-on-the-westend-testnet"},"Getting Tokens on the Westend Testnet"),(0,r.kt)("p",null,"Polkadot's testnet is called ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-networks#westend-test-network"},"Westend")," and\nyou can obtain its native tokens (called Westies!) by posting ",(0,r.kt)("inlineCode",{parentName:"p"},"!drip <WESTEND_ADDRESS>")," in the\nMatrix chatroom ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#westend_faucet:matrix.org"},"#westend_faucet:matrix.org"),". Your\naccount will be credited with 1 WND by default. You can also specify to get more tokens by\n",(0,r.kt)("inlineCode",{parentName:"p"},"!drip <WESTEND_ADDRESS> X"),", where X is the number of tokens."),(0,r.kt)("p",null,"Another way is to use our web-based\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-testnet-faucet/westend"},"Westend faucet"),"."),(0,r.kt)("p",null,"You can also earn WNDs as rewards by ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-validator"},"becoming a validator")," on Westend network.\nWatch the video below on how to get started on Westend."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=0ji0ccZyb3k"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/0ji0ccZyb3k/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=0ji0ccZyb3k"},"Testing Polkadot features on Westend")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal Places"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to Planck"),(0,r.kt)("th",{parentName:"tr",align:null},"Conversion to WND"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1 Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.000000000001 WND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Point"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"3")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.000000001000 WND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MicroWND (uWND)"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"6")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.000001000000 WND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MilliWND (mWND)"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"9")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"0.001000000000 WND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WND"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"10",(0,r.kt)("sup",null,"12")," Planck"),(0,r.kt)("td",{parentName:"tr",align:null},"1.000000000000 WND")))),(0,r.kt)("h3",{id:"getting-tokens-on-the-rococo-testnet"},"Getting Tokens on the Rococo Testnet"),(0,r.kt)("p",null,"Rococo is a parachain testnet. Tokens are given directly to teams working on parachains or exploring\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"cross consensus")," message-passing aspects of this testnet. General users can\nobtain ROC by posting ",(0,r.kt)("inlineCode",{parentName:"p"},"!drip <ROCOCO_ADDRESS>")," in the Matrix chatroom\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#rococo-faucet:matrix.org"},"#rococo-faucet:matrix.org")," or through the web-based\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-testnet-faucet/"},"Rococo faucet"),". Learn more about Rococo on\nits ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"dedicated wiki section"),"."),(0,r.kt)("h3",{id:"faucets-support"},"Faucets support"),(0,r.kt)("p",null,"If you require help with using faucets, or wish to report an issue, there is a support chat\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#faucets-support:matrix.org"},"#faucets-support:matrix.org"),", or you can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-testnet-faucet/issues/new/choose"},"create an issue")," directly\nin the faucets repo"),(0,r.kt)("h2",{id:"kusama-tokens"},"Kusama Tokens"),(0,r.kt)("p",null,"Unlike testnet DOT, Kusama tokens are not freely given away. Kusama tokens are available via the\n",(0,r.kt)("a",{parentName:"p",href:"https://claim.kusama.network/"},"claims process")," (if you had DOT at the time of Kusama genesis) or\nthrough the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"Treasury"),". Alternatively, they can be obtained on the open market."),(0,r.kt)("h2",{id:"polkadot-mainnet-dot"},"Polkadot Mainnet DOT"),(0,r.kt)("p",null,"Polkadot Mainnet DOT are not freely given away. If you purchased DOT in the original 2017 offering,\nyou may claim them via the ",(0,r.kt)("a",{parentName:"p",href:"https://claims.polkadot.network/"},"Polkadot claims process"),".\nAlternatively, they are available on the open market."))}h.isMDXComponent=!0},46601:()=>{}}]);