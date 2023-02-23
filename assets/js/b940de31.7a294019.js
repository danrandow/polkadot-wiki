(self.webpackChunk=self.webpackChunk||[]).push([[7633],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(74165),s=a(15861),o=a(67294),r=a(92519),i=a(63472),l=a(67425);function c(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,n.Z)().mark((function e(t,a,s){var o,l,c,p,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return c=new r.U(o),e.next=21,i.G.create({provider:c});case 21:p=e.sent,(u=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,p=(0,o.useState)(""),d=p[0],h=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,h);case 2:if(void 0!==(s=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(s,l,t,h):h(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),d}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var s=void 0;if("polkadot"===a||"statemint"===a)s=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(s)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},11427:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),s=a(63366),o=(a(67294),a(3905)),r=a(47940),i=["components"],l={id:"learn-assets",title:"Assets",sidebar_label:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",keywords:["assets","fungible","non-fungible"],slug:"../learn-assets"},c=void 0,p={unversionedId:"learn/learn-assets",id:"learn/learn-assets",title:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",source:"@site/../docs/learn/learn-assets.md",sourceDirName:"learn",slug:"/learn-assets",permalink:"/docs/learn-assets",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-assets.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1677161140,formattedLastUpdatedAt:"Feb 23, 2023",frontMatter:{id:"learn-assets",title:"Assets",sidebar_label:"Assets",description:"Learn about fungible and non-fungible assets in the Polkadot network.",keywords:["assets","fungible","non-fungible"],slug:"../learn-assets"},sidebar:"docs",previous:{title:"Proxy Accounts",permalink:"/docs/learn-proxies"},next:{title:"DOT",permalink:"/docs/learn-DOT"}},u={},d=[{value:"Creation and Management",id:"creation-and-management",level:2},{value:"Fungible Assets",id:"fungible-assets",level:2},{value:"Transferring Asset Balances",id:"transferring-asset-balances",level:3},{value:"Destroying an Asset",id:"destroying-an-asset",level:3},{value:"Application Development",id:"application-development",level:3},{value:"Cross-Chain Accounting",id:"cross-chain-accounting",level:3},{value:"Non-Fungible Assets",id:"non-fungible-assets",level:2},{value:"Transferring NFTs",id:"transferring-nfts",level:3},{value:"Advanced Techniques",id:"advanced-techniques",level:2}],h={toc:d};function f(e){var t=e.components,a=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Assets in the Polkadot network can be\nrepresented on several chains. They can take many forms, from a parachain's native token to on-chain\nrepresentations of off-chain reserves. This page focuses on the latter, namely assets issued by a\ncreator (e.g. rights to audited, off-chain reserves held by the creator, or art issued as an NFT)."),(0,o.kt)("p",null,"The\n",(0,o.kt)("a",{parentName:"p",href:"https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/"},"Statemint parachain"),"\n",'\nhosts data structures and logic that specialize in the creation, management, and use of assets in\nthe Polkadot network. Although other\nparachains can host applications dealing with assets on\nStatemint, Statemint can be\nthought of as the "home base" of assets in the network.'),(0,o.kt)("p",null,"Statemint uses DOT as its native\ntoken. The chain yields its governance to its parent Relay Chain and has no inflation or era-based\nrewards for collators (although collators receive a portion of transaction fees). As a\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"system parachain"),",\nStatemint has a trusted relationship with\nthe Relay Chain, and as such, can teleport DOT\nbetween itself and the Relay Chain. That is,\nDOT on Statemint is just as good as\nDOT on the Relay Chain."),(0,o.kt)("p",null,"Statemint does not support smart contracts.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"#advanced-techniques"},"Advanced")," section at the bottom for a discussion on using proxy and\nmultisig accounts to replicate oft-used contract logic."),(0,o.kt)("h2",{id:"creation-and-management"},"Creation and Management"),(0,o.kt)("p",null,"Anyone on the network can create assets on\nStatemint, as long as they can reserve the\nrequired deposit of\n",(0,o.kt)(r.Z,{network:"statemint",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),".\n","\nThe network reserves the deposit on creation. The creator also must specify a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),", an\ninteger of type ",(0,o.kt)("inlineCode",{parentName:"p"},"u32"),", to identify the asset. The ",(0,o.kt)("inlineCode",{parentName:"p"},"AssetId"),' should be the canonical identifier for\nan asset, as the chain does not enforce the uniqueness of metadata like "name" and "symbol". The\ncreator must also specify a minimum balance, preventing accounts from having dust balances.'),(0,o.kt)("p",null,"Asset classes and instances can have associated metadata. The metadata is an array of data that the\nclass owner can add on-chain, for example, a link to an IPFS hash or other off-chain hosting\nservice. The ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nft-pallets#uniques-pallet"},"Uniques pallet")," also supports setting key/value\npairs as attributes to a class or instance."),(0,o.kt)("p",null,"An asset class has several privileged roles. The asset creator automatically takes on all privileged\nroles but can reassign them after creation. These roles are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"owner")," can set the accounts responsible for the other three roles and set asset metadata\n(e.g. name, symbol, decimals)."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"issuer")," can mint and burn tokens to/from their chosen addresses."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"admin")," can make force transfers as well as unfreeze accounts of the asset class."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"freezer")," can freeze assets on target addresses or the entire asset class.")),(0,o.kt)("p",null,"Always refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_assets/index.html"},(0,o.kt)("strong",{parentName:"a"},"reference documentation")),"\nfor certainty on privileged roles."),(0,o.kt)("p",null,"An asset's details contain one field not accessible to its owner or admin team, ",(0,o.kt)("strong",{parentName:"p"},"asset\nsufficiency"),". Only the network's governance mechanism can deem an asset as ",(0,o.kt)("em",{parentName:"p"},"sufficient"),". A balance\nof a non-sufficient asset can only exist on accounts that are on-chain (i.e. accounts having the\nexistential deposit of a sufficient asset). That is, a user could not keep an account on-chain by\ntransferring an insufficient asset to it; the account must already be on-chain by having more than\nthe existential deposit in DOT (or a sufficient\nasset). However, assets deemed ",(0,o.kt)("em",{parentName:"p"},"sufficient")," can instantiate accounts and pay for transaction fees,\nsuch that users can transact on Statemint\nwithout the need for DOT."),(0,o.kt)("admonition",{title:"Transaction Fees on Polkadot-JS UI",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Polkadot-JS UI\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/issues/7812"},"doesn't support the functionality to pay with a sufficient asset yet"),".\nWhen using Polkadot-JS UI, transaction fee needs to be paid in\nDOT.")),(0,o.kt)("h2",{id:"fungible-assets"},"Fungible Assets"),(0,o.kt)("p",null,"Fungible assets are interchangeable, i.e. one unit is equivalent to any other unit to claim the\nunderlying item. Statemint  represents\nfungible assets in the Assets pallet. This pallet presents a similar interface for those familiar\nwith the ERC20 standard. However, the logic is encoded directly in the chain's runtime. As such,\noperations are not gas-metered but benchmarked upon every release, leading to efficient execution\nand stable transaction fees."),(0,o.kt)("h3",{id:"transferring-asset-balances"},"Transferring Asset Balances"),(0,o.kt)("p",null,"Users have a simple interface, namely the ability to transfer asset balances to other accounts\non-chain. As mentioned before, if the asset is not ",(0,o.kt)("em",{parentName:"p"},"sufficient"),", then the destination account must\nalready exist for the transfer to succeed."),(0,o.kt)("p",null,"The chain also contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function, similar to that of the Balances pallet,\nthat will fail if execution kills the sending account."),(0,o.kt)("p",null,"Statemint also sweeps dust balances into\ntransfers. For example, if an asset has a minimum balance of 10 and an account has a balance of 25,\nthen an attempt to transfer 20 units would transfer all 25."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before transferring a non-sufficient asset, ensure the receiver account has enough funds to cover\nthe existential deposit and transaction fees for future transfers. Failing to do so will cause the\nasset transfer to fail. The transfer will be successful for sufficient assets, but without\nDOT tokens, you will not be able to transfer\nthose assets from the receiver account through Polkadot-JS UI. The feature request to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/issues/7812"},"enable\nsufficient assets for transaction fee payment on Polkadot-JS UI")," is yet to be implemented.")),(0,o.kt)("h3",{id:"destroying-an-asset"},"Destroying an Asset"),(0,o.kt)("p",null,"To destroy an asset, go to the Polkadot-JS UI on Statemint\n> Developer > Extrinsics. If you created an asset without minting\nany unit, you could call ",(0,o.kt)("inlineCode",{parentName:"p"},"assets.startDestroy")," and then the ",(0,o.kt)("inlineCode",{parentName:"p"},"assets.finishDestroy")," extrinsics\nspecifying the asset id you want to destroy. If you created an asset and minted some units, follow\nthe steps below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assets.freezeAsset")," will freeze all assets on all accounts holding that asset id. Those accounts\nwill no longer be able to transfer that asset."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assets.startDestroy")," will start the destroying process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assets.destroyApprovals")," will destroy all approvals related to that asset id (if there are any\napprovals)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assets.destroyAccounts")," will destroy all accounts related to that asset id. All asset units will\nbe removed from those accounts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assets.finishDestroy")," will finish the destroying process. The asset id will be removed and\navailable for another fungible token.")),(0,o.kt)("h3",{id:"application-development"},"Application Development"),(0,o.kt)("p",null,"Statemint provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interface. Application developers can use this interface\nso that users can authorize the application to effectuate transfers up to a given amount on behalf\nof an account."),(0,o.kt)("h3",{id:"cross-chain-accounting"},"Cross-Chain Accounting"),(0,o.kt)("p",null,"Statemint uses a reserve-backed system to\nmanage asset transfers to other parachains. It tracks how much of each asset has gone to each\nparachain and will not accept more from a particular parachain."),(0,o.kt)("p",null,"As a result of this, asset owners can use\nStatemint to track information like the\ntotal issuance of their asset in the entire network, as parachain balances would be included in the\nreserve-backed table. Likewise, for the minting and burning of tokens, an asset's team can perform\nall operations on Statemint and propagate\nany minted tokens to other parachains in the network."),(0,o.kt)("p",null,'Parachains that want to send assets to other parachains should do so via instructions to\nStatemint so that the reserve-backed table\nstays up to date. For more info, see the "Moving Assets between Chains in XCM" section of the\n',(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/xcm-the-cross-consensus-message-format/"},"article on the XCM format"),"."),(0,o.kt)("h2",{id:"non-fungible-assets"},"Non-Fungible Assets"),(0,o.kt)("p",null,"Unlike fungible assets, the particular instance of a ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nft"},"non-fungible asset (NFT)")," has\na separate meaning from another instance of the same class.\nStatemint represents NFTs in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-nft-pallets"},"Uniques and NFTs pallets"),"."),(0,o.kt)("p",null,"Similar to the Assets pallet, this functionality is encoded into the chain. Operations are\nbenchmarked before each release instead of any runtime metering, ensuring efficient execution and\nstable transaction fees."),(0,o.kt)("h3",{id:"transferring-nfts"},"Transferring NFTs"),(0,o.kt)("p",null,"Users can transfer their NFTs to other accounts. The chain also provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_approved")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cancel_approval")," interfaces that application developers can use to allow\nusers to authorize an application to transfer an instance on their behalf."),(0,o.kt)("h2",{id:"advanced-techniques"},"Advanced Techniques"),(0,o.kt)("p",null,"Many asset creators on other networks use smart contracts to control privileged functions like\nminting and burning. Although Statemint\ndoes not have a smart contract interface, it contains the\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_multisig/index.html"},"Multisig"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_proxy/index.html"},"Proxy"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_utility/index.html"},"Utility")," pallets, which will meet most account\nmanagement needs."),(0,o.kt)("p",null,"For example, if a team wants sign-off from two groups to perform a privileged operation, it could\ncreate a 2-of-2 ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-account-multisig"},(0,o.kt)("strong",{parentName:"a"},"multisig"))," from two\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-proxies/#anonymous-proxy-pure-proxy"},(0,o.kt)("strong",{parentName:"a"},"pure proxies")),", and then set members from each\ngroup as proxies to those two accounts."))}f.isMDXComponent=!0},95856:()=>{},46601:()=>{}}]);