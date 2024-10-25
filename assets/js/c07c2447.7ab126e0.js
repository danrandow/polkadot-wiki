"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7561],{572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(74848),i=t(28453),s=t(67141);const a={id:"learn-guides-polkadot-opengov",title:"Polkadot-JS Guides about OpenGov",sidebar_label:"OpenGov Guides",description:"Polkadot-JS Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel","polkadot-js"],slug:"../learn-guides-polkadot-opengov"},r=void 0,l={id:"learn/learn-guides-polkadot-opengov",title:"Polkadot-JS Guides about OpenGov",description:"Polkadot-JS Guides about Polkadot OpenGov.",source:"@site/../docs/learn/learn-guides-polkadot-opengov.md",sourceDirName:"learn",slug:"/learn-guides-polkadot-opengov",permalink:"/docs/learn-guides-polkadot-opengov",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-polkadot-opengov.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1729847256e3,frontMatter:{id:"learn-guides-polkadot-opengov",title:"Polkadot-JS Guides about OpenGov",sidebar_label:"OpenGov Guides",description:"Polkadot-JS Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel","polkadot-js"],slug:"../learn-guides-polkadot-opengov"},sidebar:"docs",previous:{title:"Nomination Pool Guides",permalink:"/docs/learn-guides-staking-pools"},next:{title:"Treasury Guides",permalink:"/docs/learn-guides-treasury"}},d={},c=[{value:"Create a Referenda Proposal",id:"create-a-referenda-proposal",level:2},{value:"Submitting a Preimage",id:"submitting-a-preimage",level:3},{value:"Submitting a Proposal",id:"submitting-a-proposal",level:3},{value:"Submitting a Referendum on the Whitelisted Caller Track",id:"submitting-a-referendum-on-the-whitelisted-caller-track",level:3},{value:"Voting on Referenda",id:"voting-on-referenda",level:2},{value:"Removing Votes",id:"removing-votes",level:3},{value:"Removing Expired Voting Locks",id:"removing-expired-voting-locks",level:3},{value:"Delegations",id:"delegations",level:2},{value:"Delegate Votes",id:"delegate-votes",level:3},{value:"Undelegate Votes",id:"undelegate-votes",level:3},{value:"Remove Expired Locks from Delegations",id:"remove-expired-locks-from-delegations",level:3},{value:"Modify your Delegations",id:"modify-your-delegations",level:3},{value:"Claiming OpenGov Deposits",id:"claiming-opengov-deposits",level:2},{value:"Claiming the Preimage and Decision Deposits",id:"claiming-the-preimage-and-decision-deposits",level:3},{value:"Claiming the Referendum Submission Deposit",id:"claiming-the-referendum-submission-deposit",level:3},{value:"Cancel or Kill a Referendum",id:"cancel-or-kill-a-referendum",level:2},{value:"Interpreting On-Chain Voting Data",id:"interpreting-on-chain-voting-data",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the Polkadot-JS UI, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"this page"})," to learn about Polkadot OpenGov."]}),"\n",(0,o.jsx)(n.p,{children:"This guide will instruct token holders how to propose and vote on public referenda using the\nReferenda module (OpenGov). Below are a few links to stay informed and directly engage with the\ncommunity."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://matrix.to/#/#Polkadot-Direction:parity.io",children:"Polkadot Direction"})," - a place to discuss\ngovernance and the future of Polkadot."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://matrix.to/#/#Kusama-Direction:parity.io",children:"Kusama Direction"})," - a place to discuss\ngovernance and the future of Kusama."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://polkadot.polkassembly.io",children:"Polkadot"})," and ",(0,o.jsx)(n.a,{href:"https://kusama.polkassembly.io",children:"Kusama"}),"\nPolkassembly - for current referenda, latest proposals, motions, treasury proposals, tips,\nbounties, and more."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://matrix.to/#/#dailydigest:web3.foundation",children:"Polkadot Daily Digest"})," - News about what is\nhappening in the Polkadot ecosystem, published every weekday except holidays."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-referenda-proposal",children:"Create a Referenda Proposal"}),"\n",(0,o.jsxs)(n.p,{children:['Before submitting a referendum, identify the right track and origin for it. For instance, if the\nreferendum is for requesting funds from treasury, select the treasury track with appropriate spend\nlimits. If the referendum is for a suggestion to make changes to the protocol, select the "Wish for\nChange" track. For more info, check the\n',(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov#origins-and-tracks",children:"tracks and origins"})," of Polkadot OpenGov."]}),"\n",(0,o.jsx)(n.h3,{id:"submitting-a-preimage",children:"Submitting a Preimage"}),"\n",(0,o.jsx)(n.p,{children:"The act of creating a proposal is split from submitting the preimage for the proposal since the\nstorage cost of submitting a large preimage could be expensive. Allowing the preimage submission to\ncome as a separate transaction means that another account could submit the preimage for you and pay\nthe fee. The example below demonstrates the creation of a preimage to propose and approve a spend of\ntreasury funds."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"submit preimage",src:t(79087).A+"",width:"2148",height:"1191"})}),"\n",(0,o.jsx)(n.p,{children:"Follow the steps below to submit a preimage as shown in the screenshot above."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Navigate to Governance -> Referenda."}),"\n",(0,o.jsx)(n.li,{children:'Click on the "Add preimage" button.'}),"\n",(0,o.jsxs)(n.li,{children:["From the ",(0,o.jsx)(n.em,{children:"propose"})," drop-down field, select ",(0,o.jsx)(n.code,{children:"treasury"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["From the unlabeled drop-down field to the right of the ",(0,o.jsx)(n.em,{children:"propose"})," drop-down field, select\n",(0,o.jsx)(n.code,{children:"spendLocal(amount, beneficiary)"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["In the ",(0,o.jsx)(n.code,{children:"amount: Compact<u128> (BalanceOf)"})," text field, enter the spend amount in\n",(0,o.jsx)(n.a,{href:"/docs/learn-DOT#the-planck-unit",children:"plancks"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"beneficiary: MultiAddress (AccountIdLookupOf)"})," drop-down field will have ",(0,o.jsx)(n.code,{children:"Id"})," selected by\ndefault. Select the beneficiary from the ",(0,o.jsx)(n.code,{children:"Id: AccountId"})," drop-down field."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Copy the ",(0,o.jsx)(n.code,{children:"preimage hash"}),' value before clicking the "Submit preimage" button.']})}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsx)(n.li,{children:'Click the "Submit preimage" button.'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After the preimage is submitted successfully on-chain, Polkadot-JS UI lists it under the tab of\nGovernance -> Preimages."}),"\n",(0,o.jsx)(n.h3,{id:"submitting-a-proposal",children:"Submitting a Proposal"}),"\n",(0,o.jsx)(n.p,{children:'Submitting a proposal requires you to bond some tokens. On Polkadot-JS UI, you can navigate to the\nGovernance -> Referenda to make a new proposal. In order to submit a proposal, you will need to\nsubmit what\'s called the preimage hash. The preimage hash is simply the hash of the proposal to be\nenacted. The easiest way to get the preimage hash is by clicking on the "Submit preimage" button as\nshown in the previous section.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"submit proposal",src:t(60849).A+"",width:"1936",height:"1118"})}),"\n",(0,o.jsx)(n.p,{children:"The proposal will be registered from the account selected and the balance lock will be applied to\nit. An appropriate origin must be chosen, as each origin has different privileges, and acceptance\ncriteria. After entering the hash of the preimage for the proposal, the preimage length field is\nautomatically populated. The enactment delay can be specified either as a block number, or as a\nspecific number of blocks after the referendum is approved. The deposit for this proposal will be\nlocked for the referendum duration."}),"\n",(0,o.jsx)(n.h3,{id:"submitting-a-referendum-on-the-whitelisted-caller-track",children:"Submitting a Referendum on the Whitelisted Caller Track"}),"\n",(0,o.jsxs)(n.p,{children:["Let's consider increasing the number of validators participating in parachain consensus. You could\n",(0,o.jsx)(n.a,{href:"#submitting-a-preimage",children:"submit a preimage"})," with the call that sets the number of validators to\n1,000 and submit a referendum to the Root track directly. However, this requires a large decision\ndeposit and has very conservative passing parameters such that it will probably need the entire\n28-day voting period to pass."]}),"\n",(0,o.jsx)(n.p,{children:"Operations that are deemed safe or time critical by the Polkadot Technical Fellowship can use the\nWhitelisted Caller track. This track requires less turnout in the first half of the decision period\nso that it can pass more quickly. This track is typically used for more neutral, technical proposals\nlike runtime upgrades or changing the system's parachain validation configuration."}),"\n",(0,o.jsxs)(n.p,{children:["Using the Whitelisted Caller track requires some special calls. Submitting a referendum in the same\nform as other tracks will not work. Namely, rather than voting on a particular ",(0,o.jsx)(n.code,{children:"proposal"}),", the\nWhitelisted Caller track requires a vote to ",(0,o.jsx)(n.code,{children:"dispatch"})," the ",(0,o.jsx)(n.code,{children:"proposal"})," via the Whitelist pallet.\nBefore opening a referendum on this track, you should also attempt to get a positive signal from the\nFellowship that they will whitelist the proposal. If they do not, then even if the public referendum\npasses, it will not execute."]}),"\n",(0,o.jsx)(n.p,{children:"Below are the steps to follow when submitting a proposal to the Whitelist track."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#submitting-a-preimage",children:"Submit a preimage"})," with the call to ",(0,o.jsx)(n.em,{children:"dispatch"})," the proposal (",(0,o.jsx)(n.code,{children:"call"}),") you\nwant to submit -- ",(0,o.jsx)(n.code,{children:"whitelist.dispatchWhitelistedCallWithPreimage(call)"})," -- and obtain the preimage\nhash. This is the preimage for the ",(0,o.jsx)(n.em,{children:"public referendum"})," on the Whitelisted Caller track."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"preimage-whitelist",src:t(56985).A+"",width:"2146",height:"1113"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Obtain the hash of ",(0,o.jsx)(n.code,{children:"call"}),". The Polkadot Fellowship needs to start a Fellowship referendum to\nwhitelist the call with ",(0,o.jsx)(n.code,{children:"whitelist.whitelistCall(callHash)"}),". The Fellowship referendum gets voted\non by the Polkadot Fellowship members only."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"call-hash",src:t(36585).A+"",width:"2257",height:"858"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"The public now votes on the referendum. Someone must place a decision deposit to go into the\ndeciding phase."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Once passed, it gets enacted successfully as long as the call has been whitelisted by the\nFellowship."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Note that the public referendum and Fellowship referendum can happen simultaneously. However, if the\nFellowship does not whitelist the call, you must submit it directly to the Root origin."}),"\n",(0,o.jsx)(n.h2,{id:"voting-on-referenda",children:"Voting on Referenda"}),"\n",(0,o.jsx)(n.p,{children:"As Polkadot OpenGov takes both the approval and support into account, there are four options to\nchoose from when voting on a referendum:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Aye"}),"\n",(0,o.jsx)(n.li,{children:"Nay"}),"\n",(0,o.jsx)(n.li,{children:"Split"}),"\n",(0,o.jsx)(n.li,{children:"Abstain"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Also, you have to specify the conviction multiplier for this vote. The longer you are willing to\nlock your tokens, the stronger your vote will be weighted. Unwillingness to lock your tokens means\nthat your vote only counts for 10% of the tokens that you hold."}),"\n",(0,o.jsxs)(n.p,{children:["For detailed instructions on how to vote on Polkadot OpenGov referenda, check\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000184120-polkadot-opengov-how-to-vote",children:"this support guide."})]}),"\n",(0,o.jsx)(n.admonition,{title:"Polkadot OpenGov uses Conviction Voting Pallet (Not Democracy Pallet)",type:"caution",children:(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"convictionVoting.vote"})," for voting on Referenda in Polkadot OpenGov instead of ",(0,o.jsx)(n.code,{children:"democracy.vote"}),"\n(which only works for the old version of governance)."]})}),"\n",(0,o.jsx)(n.h3,{id:"removing-votes",children:"Removing Votes"}),"\n",(0,o.jsxs)(n.p,{children:["To remove votes, you need to use the ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/extrinsics",children:"Extrinsics tab"})," and\ncall the ",(0,o.jsx)(n.code,{children:"removeVote"})," function through the ",(0,o.jsx)(n.code,{children:"convictionVoting"})," pallet."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"rm-vote",src:t(36894).A+"",width:"2388",height:"594"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"class"})," is the ",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov-origins",children:"OpenGov track"})," of the referendum you voted\non and the ",(0,o.jsx)(n.code,{children:"index"})," is the referendum number."]}),"\n",(0,o.jsx)(n.h3,{id:"removing-expired-voting-locks",children:"Removing Expired Voting Locks"}),"\n",(0,o.jsxs)(n.p,{children:["To remove an expired lock, you need to use the\n",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/extrinsics",children:"Extrinsics tab"})," and call the ",(0,o.jsx)(n.code,{children:"unlock"})," function through\nthe ",(0,o.jsx)(n.code,{children:"convictionVoting"})," pallet. Note that if you voted on referenda in multiple tracks, the tokens\nwill be unlocked after removing votes and unlocking on all the tracks. Similarly, if you you\n",(0,o.jsx)(n.a,{href:"#delegations",children:"delegated"})," on multiple tracks, the funds will be unlocked after\n",(0,o.jsx)(n.a,{href:"#undelegate-votes",children:"undelegating"})," and unlocking on all the tracks."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"rm-voting-lock",src:t(82187).A+"",width:"2382",height:"684"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"class"})," is the ",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov-origins",children:"OpenGov track"})," where you have the lock."]}),"\n",(0,o.jsxs)(n.p,{children:["For additional instructions, check\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000184129-polkadot-js-ui-how-to-remove-expired-referenda-locks",children:"this support guide."})]}),"\n",(0,o.jsx)(n.h2,{id:"delegations",children:"Delegations"}),"\n",(0,o.jsx)(n.admonition,{title:"Video Tutorial about Delegations using the Polkadot-JS UI",type:"info",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://youtu.be/PNGs11EvCB0",children:"this video tutorial"})," to learn about how to delegate, modify\ndelegations and remove delegations using the Polkadot-JS UI."]})}),"\n",(0,o.jsxs)(n.p,{children:["For an overview of how delegation works in Polkadot OpenGov, check out the\n",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov#multirole-delegation",children:"Multirole Delegation"})," section on the\n",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"Learn Polkadot OpenGov"})," page."]}),"\n",(0,o.jsxs)(n.p,{children:["Instructions to do delegations with Polkadot-JS are also available on the\n",(0,o.jsx)(n.a,{href:"https://support.polkadot.network/support/solutions/articles/65000184776-polkadot-js-ui-how-to-delegate-your-voting-power-on-polkadot-opengov",children:"Support Pages"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"delegate-votes",children:"Delegate Votes"}),"\n",(0,o.jsxs)(n.p,{children:['You can start delegating your votes by clicking the "Delegate" button on\n',(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"Governance > Referenda"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"js-delegation-start",src:t(28577).A+"",width:"1055",height:"497"})}),"\n",(0,o.jsxs)(n.p,{children:["If it is the first time you delegate or vote, there will be a banner message. You can delegate on a\nsingle track or all the tracks. You have an option to specify the number of votes (i.e., the number\nof tokens) and the ",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov#voluntary-locking",children:"conviction multiplier"}),'. After\nclicking "Next", you will need to specify the account to delegate your votes to, and after clicking\n"Delegate" and "Sign and Submit" your delegations will appear for each track (see below).']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"js-delegation-allTracks",src:t(87236).A+"",width:"2116",height:"1438"})}),"\n",(0,o.jsx)(n.p,{children:"Note that if you want to delegate just a few tracks, you have two options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Repeat the process using the "Delegate" button multiple times'}),"\n",(0,o.jsxs)(n.li,{children:["Issue a batch call with multiple ",(0,o.jsx)(n.code,{children:"convictionVoting.delegate"})," extrinsics under\n",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/extrinsics",children:"Developer > Extrinsics"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"js-delegation-delegate",src:t(44176).A+"",width:"2694",height:"1104"})}),"\n",(0,o.jsx)(n.p,{children:'By clicking on "Add item" you can add new extrinsics for multiple tracks.'}),"\n",(0,o.jsx)(n.h3,{id:"undelegate-votes",children:"Undelegate Votes"}),"\n",(0,o.jsxs)(n.p,{children:['The "Delegate" button on ',(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"Governance > Referenda"})," is only\nfor delegating votes. You cannot undelegate or modify your delegations. If you wish to undelegate,\nyou will need to go to ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/extrinsics",children:"Developer > Extrinsics"})," and\nsubmit a ",(0,o.jsx)(n.code,{children:"convictionVoting.undelegate"})," extrinsic, specifying the track you wish to undelegate."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"js-delegation-undelegate",src:t(99829).A+"",width:"2708",height:"632"})}),"\n",(0,o.jsx)(n.p,{children:'Undelegated tracks will show up as "0 votes" on the Delegate tab.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"js-delegation-undelegate",src:t(38981).A+"",width:"2128",height:"1432"})}),"\n",(0,o.jsx)(n.p,{children:"After you undelegated, the conviction lock will start the countdown, and your funds will be\navailable for unlocking after the countdown ends."}),"\n",(0,o.jsx)(n.h3,{id:"remove-expired-locks-from-delegations",children:"Remove Expired Locks from Delegations"}),"\n",(0,o.jsxs)(n.p,{children:["To remove expired locks from delegations, you can\n",(0,o.jsx)(n.a,{href:"#removing-expired-voting-locks",children:"follow the same procedure as how to remove expired voting locks"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"modify-your-delegations",children:"Modify your Delegations"}),"\n",(0,o.jsxs)(n.p,{children:['The "Delegate" button on ',(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"Governance > Referenda"})," is only\nfor delegating votes. You cannot undelegate or modify your delegations. If you wish to update the\ndelegated account, the conviction, and the number of votes you will need to go to\n",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/extrinsics",children:"Developer > Extrinsics"}),", ",(0,o.jsx)(n.a,{href:"#undelegate-votes",children:"undelegate"}),"\nthe track and ",(0,o.jsx)(n.a,{href:"#delegate-votes",children:"delegate"})," again with updated information."]}),"\n",(0,o.jsx)(n.h2,{id:"claiming-opengov-deposits",children:"Claiming OpenGov Deposits"}),"\n",(0,o.jsx)(n.admonition,{title:"Video Tutorial about OpenGov deposits using the Polkadot-JS UI",type:"info",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://youtu.be/kkEq5cqW2Pk",children:"this video tutorial"})," to learn about how to claim OpenGov deposits\nusing the Polkadot-JS UI."]})}),"\n",(0,o.jsx)(n.h3,{id:"claiming-the-preimage-and-decision-deposits",children:"Claiming the Preimage and Decision Deposits"}),"\n",(0,o.jsxs)(n.p,{children:["After a referendum finishes its life cycle (and gets approved or rejected or timed out), the\npreimage and decision deposits can be claimed. For claiming the preimage deposit, navigate to\n",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/preimages",children:"Polkadot-JS UI > Governance > Preimages"})," and click on\nunnote button shown on the preimage you submitted."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Claim Preimage Deposit",src:t(43214).A+"",width:"2828",height:"362"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, to claim the decision deposit, navigate to\n",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"Polkadot-JS UI > Governance > Referenda"})," and scroll down\nto the end of the page to click on the referenda with the decision deposit and claim it."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Claim Referendum Deposits",src:t(22450).A+"",width:"2830",height:"444"})}),"\n",(0,o.jsx)(n.h3,{id:"claiming-the-referendum-submission-deposit",children:"Claiming the Referendum Submission Deposit"}),"\n",(0,o.jsxs)(n.p,{children:["The submission deposit for a referendum can be claimed\n",(0,o.jsxs)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/cfb29254f74412cea35e8048d8aea94bc789fcb1/substrate/frame/referenda/src/types.rs#L261",children:["only if the referendum was ",(0,o.jsx)(n.code,{children:"Approved"})," or ",(0,o.jsx)(n.code,{children:"Canceled"})]}),".\nThe submission deposit can be claimed by issuing the ",(0,o.jsx)(n.code,{children:"refundSubmissionDeposit"})," extrinsic."]}),"\n",(0,o.jsxs)(n.p,{children:["Users can not refund their submission deposit while the referendum is ",(0,o.jsx)(n.code,{children:"Ongoing"})," or ",(0,o.jsx)(n.code,{children:"Rejected"}),".\nSimilarly, users cannot refund their submission deposit if the proposal has ",(0,o.jsx)(n.code,{children:"TimedOut"})," (failing to\nsubmit the decision deposit\n",(0,o.jsx)(n.a,{href:"/docs/chain-state-values#opengov-referendum-timeout",children:"within specific period"})," will lead to a\nreferendum timeout). This behavior exists so that users can refrain from spamming the chain with\nproposals that have no interest from the community. If a proposal is in the ",(0,o.jsx)(n.code,{children:"TimedOut"})," state, any\nuser can call ",(0,o.jsx)(n.code,{children:"slash_proposal_deposit"}),", which will move the funds from the user to a\nruntime-configured account, like the treasury."]}),"\n",(0,o.jsxs)(n.p,{children:["To refund your slashed deposit, you can start a new referendum and specifically request a refund\nfrom the treasury. You need to make sure you have enough balance for a new submission and decision\ndeposit, and you will need to select the right track to ask for a refund. For example, the\n",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov-origins#small-tipper",children:"Small Tipper Track"})," would be fine for any kind of\ndeposit refund up to 250 DOT (8.25 KSM on Kusama)."]}),"\n",(0,o.jsx)(n.h2,{id:"cancel-or-kill-a-referendum",children:"Cancel or Kill a Referendum"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["Anybody can cancel an ongoing referendum (i.e., a referendum within the Lead-in or\nvoting/confirmation period). For more information about the referenda timeline in Polkadot OpenGov,\nsee the ",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov#referenda-timeline",children:"dedicated page"}),"."]}),(0,o.jsxs)(n.p,{children:["To successfully cancel a referendum through the track ",(0,o.jsx)(n.code,{children:"20 / Referendum Canceller"}),", you will need to\nattain\n",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov-origins#referendum-canceller",children:"specific approval and support levels"}),"."]})]}),"\n",(0,o.jsxs)(n.p,{children:["To cancel a referendum, you need first to submit a preimage with the ",(0,o.jsx)(n.code,{children:"referenda.cancel"})," extrinsic.\nGo to the ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"Polkadot-JS UI > Governance > Referenda"}),' and\nclick on the "Add Preimage" button. You must specify the ',(0,o.jsx)(n.code,{children:"referenda.cancel"})," extrinsic with the index\nequal to the ongoing Referendum you wish to cancel. In the screenshot below, the Referendum to be\ncancelled is 249."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"cancel-referenda-preimage-creation",src:t(53972).A+"",width:"2144",height:"944"})}),"\n",(0,o.jsxs)(n.p,{children:["This call will cancel the referendum and return the deposit. You can also kill a referendum using\nthe ",(0,o.jsx)(n.code,{children:"referenda.kill"})," extrinsic. This will cancel the referendum and slash the deposit."]}),"\n",(0,o.jsx)(n.admonition,{title:"Preimage Submission Deposit",type:"info",children:(0,o.jsx)(n.p,{children:"A deposit is required for the preimage to be stored on chain. The preimage deposit is proportional\nto the amount of information stored within the preimage. The deposit amount required for a preimage\nwith a treasury spend transaction is around 41 DOT (1.4 KSM on Kusama). Ensure you have enough\naccount balance to pay for this submission deposit as well as the transaction fees."})}),"\n",(0,o.jsxs)(n.p,{children:["Once a preimage is submitted, it can be checked under\n",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/preimages",children:"Governance > Preimages"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"cancel-referenda-preimage-check",src:t(50887).A+"",width:"2758",height:"190"})}),"\n",(0,o.jsxs)(n.p,{children:["You must copy the preimage to use it when you submit your proposal. To submit the proposal to cancel\nreferendum 249, for example, you need to go under\n",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/referenda",children:"Governance > Referenda"}),' and click the "Submit Proposal"\nbutton.']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"cancel-referenda-proposal",src:t(29860).A+"",width:"2130",height:"1226"})}),"\n",(0,o.jsxs)(n.p,{children:["You must specify the account to submit the proposal (this can differ from the account used to create\nthe preimage). Then you will need to specify the track ",(0,o.jsx)(n.code,{children:"20 / Referendum Canceller"})," and add the\npreimage hash containing the specific action that will be enacted if the referendum passes. Note\nthat a ",(0,o.jsx)(n.a,{href:"/docs/chain-state-values#opengov-submission-deposit",children:"submission deposit"})," will be\nreserved for submitting the proposal."]}),"\n",(0,o.jsxs)(n.p,{children:["Once the proposal has been submitted, it will stay in the Lead-in period until there is enough space\nwithin the track, and a\n",(0,o.jsx)(n.a,{href:"/docs/learn-polkadot-opengov-origins#polkadot-opengov-terminology-and-parameters",children:"track-dependent preparation period and decision deposit"}),"\nhave been met. Failing to submit the decision deposit will ultimately lead to a\n",(0,o.jsx)(n.a,{href:"/docs/chain-state-values#opengov-referendum-timeout",children:"referendum timeout"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"interpreting-on-chain-voting-data",children:"Interpreting On-Chain Voting Data"}),"\n",(0,o.jsx)(n.p,{children:"Below is the numeric conversion of the type of vote and conviction displayed in a block explorer."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Nay 0.1x => 0\nNay 1x => 1\nNay 2x => 2\nNay 3x => 3\nNay 4x => 4\nNay 5x => 5\nNay 6x => 6\n\nAye 0.1x => 128\nAye 1x => 129\nAye 2x => 130\nAye 3x => 131\nAye 4x => 132\nAye 5x => 133\nAye 6x => 134\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Take, for example, the information provided for\n",(0,o.jsx)(n.a,{href:"https://kusama.subscan.io/extrinsic/22460598-2",children:"this vote"}),". The vote ",(0,o.jsx)(n.code,{children:"131"})," means the account voted\nAye with 3x conviction."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"vote_numeric_conversion",src:t(71685).A+"",width:"870",height:"255"})}),"\n",(0,o.jsx)(n.p,{children:'At first glance, it may not be easy to interpret what you voted on. We need to take a step back and\nconsider the "voting data" at the binary level.'}),"\n",(0,o.jsx)(n.p,{children:"The vote is stored as a byte using a bitfield data structure and displayed on the block explorer as\na decimal integer. The bitfield stores both the conviction and aye/nay boolean, where the boolean is\nrepresented using the MSB of the byte. This would mean that the seven remaining bits are grouped to\nstore the conviction."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},67141:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(96540),i=t(74848);const s=function(e){var n,t=e.message,s=(0,o.useState)(!0),a=s[0],r=s[1];return(0,i.jsx)(i.Fragment,{children:a&&(0,i.jsxs)("div",{className:"message-box",children:[(0,i.jsx)("button",{className:"close-button",onClick:function(){r(!1)},children:"\u2716 "}),(0,i.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(n=t,n.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},50887:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/cancel-referenda-preimage-check-45ef7f984450113a2b1a87e9e2751d69.png"},53972:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/cancel-referenda-preimage-creation-3923463db47aec298f74a426dba23166.png"},29860:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/cancel-referenda-proposal-b9c5e90784ec8216360053d8bda84980.png"},43214:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/claim-preimage-deposit-069843b91eba35d4829b237b59ab2d12.png"},22450:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/claim-referendum-decision-deposit-6352bbad189dac6fe7a651b5a3c8f5a5.png"},36585:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/encoded-call-hash-4e0347923993beea4d12d5a787649f8f.png"},56985:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/opengov-submit-preimage-whitelist-67d383745b6e7b3ef31a37567e044e80.png"},60849:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/opengov-submit-proposal-0c82b35f3f7b1d9e66130a621b76c44b.png"},87236:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/js-delegation-allTracks-788efa580f296aa78b65b77691570181.png"},44176:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/js-delegation-delegate-3bcce735bcc35b831079cd44ad0eef15.png"},28577:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/js-delegation-start-c8186f8875fd402b993abfd5ab09f515.png"},99829:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/js-delegation-undelegate-a5018d2ecd2d5523f711199cd6fa1e63.png"},38981:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/js-delegation-undelegated-9b5efde53d2016c4e4b1f0f6b651ecf5.png"},36894:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/rm-vote-8572ff30a00c8d6fe903fae7a39147f4.png"},82187:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/rm-voting-lock-214119c2fcfe92488190b321cdfe823a.png"},79087:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/OpenGov-Treasury-Preimage-SpendLocal-693c955b1e3e27bb6c98a6aad4d1b697.png"},71685:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/vote_numeric_conversion-6aef93a6fd1ea92beabfcbe058ac876b.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);