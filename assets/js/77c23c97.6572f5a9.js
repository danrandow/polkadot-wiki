(self.webpackChunk=self.webpackChunk||[]).push([[3536],{73554:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"learn/learn-transactions","title":"Types of Transactions (a.k.a. Extrinsics)","description":"Types of Transactions on Polkadot.","source":"@site/../docs/learn/learn-transactions.md","sourceDirName":"learn","slug":"/learn-transactions","permalink":"/docs/learn-transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-transactions.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1727943421000,"frontMatter":{"id":"learn-transactions","title":"Types of Transactions (a.k.a. Extrinsics)","sidebar_label":"Transactions","description":"Types of Transactions on Polkadot.","keywords":["transaction","transfer","DOT","extrinsics"],"slug":"../learn-transactions"},"sidebar":"docs","previous":{"title":"Pure Proxy Accounts","permalink":"/docs/learn-proxies-pure"},"next":{"title":"Staking","permalink":"/docs/learn-staking-index"}}');var r=t(74848),s=t(28453);t(47379),t(11470),t(19365),t(3514);const i={id:"learn-transactions",title:"Types of Transactions (a.k.a. Extrinsics)",sidebar_label:"Transactions",description:"Types of Transactions on Polkadot.",keywords:["transaction","transfer","DOT","extrinsics"],slug:"../learn-transactions"},o=void 0,l={},c=[{value:"Pallets and Extrinsics",id:"pallets-and-extrinsics",level:2},{value:"Types of Extrinsics",id:"types-of-extrinsics",level:2},{value:"Mortal and Immortal Extrinsics",id:"mortal-and-immortal-extrinsics",level:3},{value:"Balance Transfers",id:"balance-transfers",level:3},{value:"Vested Transfers",id:"vested-transfers",level:3},{value:"Verifying Extrinsics",id:"verifying-extrinsics",level:2},{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"Fee Multiplier",id:"fee-multiplier",level:3},{value:"Other Resource Limitation Strategies",id:"other-resource-limitation-strategies",level:3},{value:"Parachain Transactions",id:"parachain-transactions",level:2},{value:"Block Limits and Transaction Priority",id:"block-limits-and-transaction-priority",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"pallets-and-extrinsics",children:"Pallets and Extrinsics"}),"\n",(0,r.jsxs)(n.p,{children:["Polkadot is built using ",(0,r.jsx)(n.a,{href:"https://substrate.io/",children:"Substrate"}),", a modular framework to efficiently build\nblockchains. Substrate's FRAME development environment provides modules called pallets and support\nlibraries that you can use, modify, and extend to build the runtime logic to suit the needs of your\nblockchain. You can explore Substrate's FRAME pallets on\n",(0,r.jsx)(n.a,{href:"https://docs.substrate.io/reference/frame-pallets/",children:"this dedicated page"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Within each functional ",(0,r.jsx)(n.strong,{children:"pallet"})," on the blockchain, one can ",(0,r.jsx)(n.strong,{children:"call"})," its functions and execute them\nsuccessfully, provided they have the permission to do so. Because these calls originate outside of\nthe blockchain runtime, such transactions are referred to as ",(0,r.jsx)(n.strong,{children:"extrinsics"}),". Extrinsics normally\ncontain a signature, some data to describe if the extrinsic has passed some validity checks and a\nreference to the pallet and call that it is intended for. For example, the Staking pallet contains\nall functions related to staking. A nominator can bond funds and nominate validators by issuing the\nrespective extrinsics. Some extrinsics might also trigger an event on the chain such as a reward\npayout to the nominators."]}),"\n",(0,r.jsx)(n.h2,{id:"types-of-extrinsics",children:"Types of Extrinsics"}),"\n",(0,r.jsxs)(n.p,{children:["Now that we introduced the term ",(0,r.jsx)(n.em,{children:"extrinsic"}),", let us dive deeper and understand what extrinsics\nreally are. Extrinsics can be one of 3 distinct types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Signed transactions:"})," these must contain the signature of the account sending the inbound\nrequest to the runtime. With signed transactions, the account used to submit the request typically\npays the transaction fee and must sign it using the account's private key."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Unsigned transactions:"})," these don't carry any information about who submitted the transaction,\nsince the format of this type of transaction doesn't require a signature. You can define what\nconditions must be met for such a transaction to be valid."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inherents:"})," are a special type of unsigned transaction made by block authors which carry\ninformation required to build a block such as timestamps, storage proofs and uncle blocks."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Signed transactions is the way that most users will interact with Polkadot. Signed transactions come\nfrom an account that has funds, and therefore Polkadot can charge a transaction fee as a way to\nprevent spam."}),"\n",(0,r.jsxs)(n.p,{children:["Unsigned transactions are for special cases where a user needs to submit an extrinsic from a key\npair that does not control funds. For example, validator's ",(0,r.jsx)(n.a,{href:"/docs/learn-cryptography",children:"session keys"}),"\nnever control funds. Unsigned transactions are only used in special cases because, since Polkadot\ncannot charge a fee for them, each one needs its own, custom validation logic."]}),"\n",(0,r.jsx)(n.p,{children:'Inherents are pieces of information that are not signed or included in the transaction queue. As\nsuch, only the block author can add inherents to a block. Inherents are assumed to be "true" simply\nbecause a sufficiently large number of validators have agreed on them being reasonable. For example,\nthe relay chain blocks include a timestamp inherent. There is no way to prove that a timestamp is\ntrue the way one proves the desire to send funds with a signature. Rather, validators accept or\nreject the block based on how reasonable they find the timestamp. In Polkadot, it must be within\nsome acceptable range of their own system clocks.'}),"\n",(0,r.jsx)(n.p,{children:"Here are some key differences between the different types of extrinsics:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contrary to signed transactions, unsigned transaction types require implementing custom validation\nlogic which can consume more resources for checking validity compared to signed transactions."}),"\n",(0,r.jsx)(n.li,{children:"Unsigned transactions have no economic deterrent to prevent spam or replay attacks, so custom\nlogic must account for protecting the network from these types of transactions being misused."}),"\n",(0,r.jsx)(n.li,{children:"Inherents exist to address the need of adding some data to a block, whereas signed or unsigned\ntransactions exist to potentially change the state of the blockchain."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"mortal-and-immortal-extrinsics",children:"Mortal and Immortal Extrinsics"}),"\n",(0,r.jsxs)(n.p,{children:["Transactions are generally irreversible once confirmed and added to the blockchain, an immutable\nledger of all transactions. This means users must exercise caution, as mistakes such as sending DOT\nto the wrong address cannot be reverted. The permanence of transactions highlights the importance of\ncareful verification before signing any transaction on a blockchain network. It is usually a\n",(0,r.jsx)(n.a,{href:"/docs/transaction-attacks",children:"good practice not to blind sign transactions"})," to avoid being\nvictim of an attack."]}),"\n",(0,r.jsxs)(n.p,{children:["In blockchain terms, transactions can be ",(0,r.jsx)(n.strong,{children:"mortal"})," extrinsics (i.e. valid within a defined block\ninterval, usually short), or ",(0,r.jsx)(n.strong,{children:"immortal"})," extrinsics (i.e. always valid). It is possible to make\nimmortal transactions on Polkadot. However,\n",(0,r.jsx)(n.a,{href:"/docs/transaction-attacks#replay-attack",children:"for security reasons"}),", it is highly recommended\nnot to do so and most wallet software will not allow you to make an immortal extrinsic."]}),"\n",(0,r.jsx)(n.h3,{id:"balance-transfers",children:"Balance Transfers"}),"\n",(0,r.jsx)(n.p,{children:"Balance transfers are transfers of token balances between accounts. This is the most well-known type\nof transfer."}),"\n",(0,r.jsx)(n.h3,{id:"vested-transfers",children:"Vested Transfers"}),"\n",(0,r.jsxs)(n.p,{children:["DOT may have a lock to account for vesting funds. Like other types of\n",(0,r.jsx)(n.a,{href:"/docs/learn-account-balances#locks",children:"locks"}),", these funds cannot be transferred but can be used in\nother parts of the protocol such as voting in governance or being staked as a validator or\nnominator."]}),"\n",(0,r.jsxs)(n.p,{children:["Vesting funds are on a release schedule that unlocks a constant number of tokens at each block\n(",(0,r.jsx)(n.strong,{children:"linear vesting"}),") or the full amount after a specific block number (",(0,r.jsx)(n.strong,{children:"cliff vesting"}),"). In all\nvesting cases, the lock decreases over time until all the funds are transferable."]}),"\n",(0,r.jsx)(n.h2,{id:"verifying-extrinsics",children:"Verifying Extrinsics"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Do not sign a transaction if you can't verify what you are signing or you suspect you might be\nsigning a different extrinsic than the one intended."})}),"\n",(0,r.jsxs)(n.p,{children:["Verifying the extrinsic you are signing can take some more time before signing for a transaction but\nit allows you to add an extra security step. There are\n",(0,r.jsx)(n.a,{href:"/docs/transaction-attacks",children:"a multitude of possible attacks"})," that will prevent you to send\nfunds to the desired destination account."]}),"\n",(0,r.jsx)(n.h2,{id:"transaction-fees",children:"Transaction Fees"}),"\n",(0,r.jsxs)(n.p,{children:["Storage and computation are limited resources in a blockchain network. Transaction fees prevent\nindividual users from consuming too many resources. Polkadot uses a ",(0,r.jsx)(n.strong,{children:"weight-based fee model"})," as\nopposed to a gas-metering model. As such, fees are charged before transaction execution. Once the\nfee is paid, nodes will execute the transaction."]}),"\n",(0,r.jsx)(n.p,{children:"Polkadot fees consist of three parts:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Base fee"}),": a fixed fee applied to every transaction and set by the runtime."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Length fee"}),": a fee that gets multiplied by the length of the transaction in bytes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Weight fee"}),": a fee for each varying runtime function. Runtime implementers must implement a\nconversion mechanism that determines the corresponding currency amount for the calculated weight."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The final fee can be summarized as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"fee = base_fee + length_of_transaction_in_bytes * length_fee + weight_fee\n"})}),"\n",(0,r.jsx)(n.p,{children:"where:"}),"\n",(0,r.jsx)(n.p,{children:"Base fee: 1 milliDOT"}),"\n",(0,r.jsx)(n.p,{children:"Length fee: 0.1 DOT per byte"}),"\n",(0,r.jsx)(n.p,{children:"The weight-to-fee conversion is calculated as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"weight_fee = weight/1.26 * (10\u22128)\n"})}),"\n",(0,r.jsx)(n.p,{children:"A weight of 126,000 nS is mapped to 1 mDOT. This fee will always be, at most, the max size of an\nunsigned 128-bit integer."}),"\n",(0,r.jsxs)(n.p,{children:["See\n",(0,r.jsx)(n.a,{href:"https://spec.polkadot.network/id-weights#id-definitions-in-polkadot",children:"the Polkadot specification"}),"\nand ",(0,r.jsx)(n.a,{href:"https://docs.substrate.io/build/tx-weights-fees/",children:"the Substrate documentation"})," for more\ndetails."]}),"\n",(0,r.jsx)(n.h3,{id:"fee-multiplier",children:"Fee Multiplier"}),"\n",(0,r.jsxs)(n.p,{children:["Polkadot can add an additional fee to transactions if the network becomes too busy and starts to\ndecelerate the system. This additional fee is known as the ",(0,r.jsx)(n.code,{children:"Fee Multiplier"})," and its value is defined\nby the runtime. The multiplier compares the saturation of blocks; if the previous block is less\nsaturated than the current block (implying an uptrend in usage), the fee is slightly increased.\nSimilarly, the fee is decreased if the previous block is more saturated than the current block\n(implying a downtrend in usage)."]}),"\n",(0,r.jsx)(n.p,{children:"The multiplier can create an incentive to avoid the production of low-priority or insignificant\ntransactions. In contrast, those additional fees will decrease if the network calms down and\ntransactions can be executed without overheads."}),"\n",(0,r.jsx)(n.p,{children:"The final fee is calculated as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"final_fee = fee * fee_multiplier\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See\n",(0,r.jsx)(n.a,{href:"https://spec.polkadot.network/id-weights#id-fee-multiplier",children:"the documentation about the Polkadot specifications"}),"\nfor more details."]}),"\n",(0,r.jsx)(n.h3,{id:"other-resource-limitation-strategies",children:"Other Resource Limitation Strategies"}),"\n",(0,r.jsx)(n.p,{children:"Transaction weight must be computable before execution and can only represent fixed logic. Some\ntransactions warrant limiting resources with other strategies. For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Bonds: Some transactions, like voting, may require a bond that will be returned or\n",(0,r.jsx)(n.a,{href:"/docs/learn-offenses",children:"slashed"})," after an on-chain event. In the voting example, returned at the end\nof the election or slashed if the voter tried anything malicious."]}),"\n",(0,r.jsxs)(n.li,{children:["Deposits: Some transactions, like setting an ",(0,r.jsx)(n.a,{href:"/docs/learn-identity",children:"identity"})," or claiming an index,\nuse storage space indefinitely. These require a deposit to be returned if the user decides to\nclear their identity and free the storage."]}),"\n",(0,r.jsx)(n.li,{children:"Burns: A transaction may burn funds internally based on its logic. For example, a transaction may\nburn funds from the sender if it creates new storage entries, thus increasing the state size."}),"\n",(0,r.jsxs)(n.li,{children:["Limits: Some limits are part of the protocol. For example, nominators can only nominate 16\nvalidators. This limits the complexity of ",(0,r.jsx)(n.a,{href:"/docs/learn-phragmen",children:"Phragm\xe9n"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"parachain-transactions",children:"Parachain Transactions"}),"\n",(0,r.jsx)(n.p,{children:"The transactions that take place within parachains do not incur relay chain transaction fees. Users\nof shard applications do not even need to hold DOT tokens, as each shard has its own economic model\nand may or may not have a token. There are, however, situations where shards themselves make\ntransactions on the relay chain."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/learn-parachains",children:"Parachains"})," have a dedicated core on the relay chain for execution, so their\ncollators do not need to own DOT in order to include blocks. The parachain will make some\ntransactions itself, for example, opening or closing an ",(0,r.jsx)(n.a,{href:"/docs/learn-xcm",children:"XCM"})," channel, renew its time\non a core, or upgrading its runtime. Parachains have their own accounts on the relay chain and will\nneed to use those funds to issue transactions on the parachain's behalf."]}),"\n",(0,r.jsx)(n.h2,{id:"block-limits-and-transaction-priority",children:"Block Limits and Transaction Priority"}),"\n",(0,r.jsx)(n.p,{children:"Relay chain blocks have both a maximum length (in bytes) and a maximum weight. Block producers will\nfill blocks with transactions up to these limits. A portion of each block - currently 25% - is\nreserved for critical transactions that are related to the chain's operation. Block producers will\nonly fill up to 75% of a block with normal transactions. Some examples of operational transactions:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Misbehavior reports"}),"\n",(0,r.jsx)(n.li,{children:"Council operations"}),"\n",(0,r.jsx)(n.li,{children:"Member operations in an election (e.g. renouncing candidacy)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Block producers prioritize transactions based on each transaction's total fee. Since a portion of\nthe fee will go to the block producer, producers will include the transactions with the highest fees\nto maximize their reward."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.admonition,{title:"Polkadot-JS Guides",type:"info",children:(0,r.jsxs)(n.p,{children:["If you are an advanced user, see the\n",(0,r.jsx)(n.a,{href:"/docs/learn-guides-transfers",children:"Polkadot-JS guides about transfers"}),"."]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},47379:(e,n,t)=>{"use strict";t.d(n,{A:()=>h});var a=t(90675),r=t(10467),s=t(96540),i=t(19588),o=t(2026),l=t(11135);function c(e,n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.A)((0,a.A)().mark((function e(n,t,r){var s,l,c,d,u;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=n,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return s="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return s="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==s){e.next=22;break}return e.abrupt("return");case 22:return c=new i.E(s),e.next=25,o.G.create({provider:c});case 25:d=e.sent,(u=t.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=u[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=d.toString(),e.abrupt("break",39);case 33:return e.next=35,d();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+u[0]+") in "+t);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,n,t,a){switch(n){case"humanReadable":(0,l.HumanReadable)(e,t,a);break;case"precise":(0,l.Precise)(e,t,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,t);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var n=e.network,t=e.path,i=e.defaultValue,o=e.filter,l=void 0===o?void 0:o,d=(0,s.useState)(""),h=d[0],p=d[1];return n=n.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?u(i.toString(),l,n,p):p(i.toString());var e=void 0;switch(n){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+n)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,r.A)((0,a.A)().mark((function e(){var r;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(n,t,p);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(r,l,n,p):p(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(o){console.log(o)}}}),[]),h}},11135:e=>{var n="polkadot",t="kusama",a="statemine",r="statemint",s="polkadotpeople",i="kusamapeople",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,l,c){var d=void 0;if(l===n||l===r)d=3;else if(l===t||l===a||l===s)d=6;else{if(l!=i)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=8}e=parseFloat(e),c((e=Number.isInteger(e/o[l].precision)?e/o[l].precision+" "+o[l].symbol:(e/o[l].precision).toFixed(d)+" "+o[l].symbol).toString())},Precise:function(e,n,t){t(e=(e=parseFloat(e))/o[n].precision+" "+o[n].symbol)},BlocksToDays:function(e,n){n((e=6*e/86400).toString())},ErasToDays:function(e,o,l){var c=void 0;if(l===n||l===r||l==s)c=1;else{if(l!==t&&l!==a&&l!=i)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}o((e/=c).toString())},Percentage:function(e,n){n((e/=1e7).toString())},PermillToPercent:function(e,n){n((e/=1e4).toString())},ArrayLength:function(e,n){n((e=e.split(",").length).toString())}}},3514:(e,n,t)=>{"use strict";t.d(n,{A:()=>x});t(96540);var a=t(34164),r=t(26972),s=t(28774),i=t(53465),o=t(16654),l=t(21312),c=t(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(74848);function h(e){var n=e.href,t=e.children;return(0,u.jsx)(s.A,{href:n,className:(0,a.A)("card padding--lg",d.cardContainer),children:t})}function p(e){var n=e.href,t=e.icon,r=e.title,s=e.description;return(0,u.jsxs)(h,{href:n,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,a.A)("text--truncate",d.cardTitle),title:r,children:[t," ",r]}),s&&(0,u.jsx)("p",{className:(0,a.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(e){var n,t,a=e.item,s=(0,r.Nr)(a),o=(t=(0,i.W)().selectMessage,function(e){return t(e,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return s?(0,u.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(n=a.description)?n:o(a.items.length)}):null}function m(e){var n,t,a=e.item,s=(0,o.A)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(null!=(n=a.docId)?n:void 0);return(0,u.jsx)(p,{href:a.href,icon:s,title:a.label,description:null!=(t=a.description)?t:null==i?void 0:i.description})}function b(e){var n=e.item;switch(n.type){case"link":return(0,u.jsx)(m,{item:n});case"category":return(0,u.jsx)(f,{item:n});default:throw new Error("unknown item type "+JSON.stringify(n))}}function g(e){var n=e.className,t=(0,r.$S)();return(0,u.jsx)(x,{items:t.items,className:n})}function x(e){var n=e.items,t=e.className;if(!n)return(0,u.jsx)(g,Object.assign({},e));var s=(0,r.d1)(n);return(0,u.jsx)("section",{className:(0,a.A)("row",t),children:s.map((function(e,n){return(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(b,{item:e})},n)}))})}},19365:(e,n,t)=>{"use strict";t.d(n,{A:()=>i});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},11470:(e,n,t)=>{"use strict";t.d(n,{A:()=>w});var a=t(96540),r=t(34164),s=t(23104),i=t(56347),o=t(205),l=t(57485),c=t(31682),d=t(75376);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.XI)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.W6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function m(e){var n,t,r,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,m=h(e),b=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:m})})),g=b[0],x=b[1],v=f({queryString:c,groupId:u}),k=v[0],y=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Dv)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),j=w[0],T=w[1],S=function(){var e=null!=k?k:j;return p({value:e,tabValues:m})?e:null}();return(0,o.A)((function(){S&&x(S)}),[S]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),T(e)}),[y,T,m]),tabValues:m}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;t=null!=(s=l[i])?s:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.A)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function k(e){var n=e.lazy,t=e.children,s=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===s}));return o?(0,a.cloneElement)(o,{className:(0,r.A)("margin-top--md",o.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function y(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,Object.assign({},n,e)),(0,x.jsx)(k,Object.assign({},n,e))]})}function w(e){var n=(0,b.A)();return(0,x.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},53465:(e,n,t)=>{"use strict";t.d(n,{W:()=>c});var a=t(96540),r=t(44586),s=["zero","one","two","few","many","other"];function i(e){return s.filter((function(n){return e.includes(n)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,r.A)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return n=e,t=new Intl.PluralRules(n),{locale:n,pluralForms:i(t.resolvedOptions().pluralCategories),select:function(e){return t.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),o}var n,t}),[e])}function c(){var e=l();return{selectMessage:function(n,t){return function(e,n,t){var a=e.split("|");if(1===a.length)return a[0];a.length>t.pluralForms.length&&console.error("For locale="+t.locale+", a maximum of "+t.pluralForms.length+" plural forms are expected ("+t.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var r=t.select(n),s=t.pluralForms.indexOf(r);return a[Math.min(s,a.length-1)]}(t,n,e)}}}},47790:()=>{}}]);