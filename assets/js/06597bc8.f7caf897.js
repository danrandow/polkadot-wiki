"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6417],{67526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"learn/archive/learn-treasury","title":"Governance v1 Treasury","description":"The Polkadot\'s On-chain Treasury during Gov1.","source":"@site/../docs/learn/archive/learn-treasury.md","sourceDirName":"learn/archive","slug":"/learn/learn-treasury","permalink":"/docs/learn/learn-treasury","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/archive/learn-treasury.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729847256000,"frontMatter":{"id":"learn-treasury","title":"Governance v1 Treasury","sidebar_label":"Gov1 Treasury","description":"The Polkadot\'s On-chain Treasury during Gov1.","keywords":["treasury","funds","funding","tips","tipping"],"slug":"../learn-treasury"},"sidebar":"docs","previous":{"title":"Governance V1","permalink":"/docs/learn/learn-governance"},"next":{"title":"Polkadot Launch Phases","permalink":"/docs/learn/learn-launch"}}');var a=n(74848),s=n(28453),i=n(67141);const r={id:"learn-treasury",title:"Governance v1 Treasury",sidebar_label:"Gov1 Treasury",description:"The Polkadot's On-chain Treasury during Gov1.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-treasury"},l=void 0,h={},d=[{value:"Funding the Treasury",id:"funding-the-treasury",level:2},{value:"Tipping",id:"tipping",level:2},{value:"Example",id:"example",level:3},{value:"Bounties Spending",id:"bounties-spending",level:2},{value:"Creating a Bounty Proposal",id:"creating-a-bounty-proposal",level:3},{value:"Closing a bounty",id:"closing-a-bounty",level:3},{value:"FAQ",id:"faq",level:2},{value:"What prevents the Treasury from being captured by a majority of the Council?",id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council",level:3},{value:"Further Reading",id:"further-reading",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{message:"The content on this page is archived. For up-to-date information about treasury, see the\n[Polkadot OpenGov Treasury page](../learn-polkadot-opengov-treasury)."}),"\n",(0,a.jsxs)(t.p,{children:["The Treasury is a pot of funds collected through a portion of block production rewards,\n",(0,a.jsx)(t.a,{href:"/docs/learn-transactions#transaction-fees",children:"transaction fees"}),", ",(0,a.jsx)(t.a,{href:"/docs/learn-offenses",children:"slashing"}),",\n",(0,a.jsx)(t.a,{href:"/docs/learn-staking#inflation",children:"staking inefficiencies"}),", etc."]}),"\n",(0,a.jsxs)(t.p,{children:["The Treasury funds are held in a ",(0,a.jsx)(t.a,{href:"/docs/learn-account-advanced#system-accounts",children:"system account"})," not\naccessible by anyone; only the system internal logic can access it. Funds can be spent by making a\nspending proposal that, if approved by the ",(0,a.jsx)(t.a,{href:"/docs/learn/learn-governance#council",children:"Council"}),", will enter a\nwaiting period before distribution. This waiting period is known as the\n",(0,a.jsx)(t.a,{href:"/docs/chain-state-values#treasury-spending-period",children:(0,a.jsx)(t.em,{children:"spend period"})}),", and its duration is\nsubject to ",(0,a.jsx)(t.a,{href:"/docs/learn/learn-governance",children:"governance"}),". The Treasury attempts to spend as many proposals in\nthe queue as it can without running out of funds."]}),"\n",(0,a.jsx)(t.p,{children:"Treasury payout is an automatic process:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If the Treasury funds run out with approved proposals left to fund, those proposals are kept in\nthe approved queue, and will receive funding in the following spend period."}),"\n",(0,a.jsxs)(t.li,{children:["If the Treasury ends a spend period without spending all of its funds, it suffers a burn of\n",(0,a.jsx)(t.a,{href:"/docs/chain-state-values#treasury-burn-factor",children:"a percentage of its funds"})," - thereby\ncausing deflationary pressure. This encourages the spending of the funds in the Treasury by\nPolkadot's governance system."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"When a stakeholder wishes to propose a spend from the Treasury, they must reserve a deposit of at\nleast 5% of the proposed spend (see below for variations). This deposit will be slashed if the\nproposal is rejected, and returned if it is accepted."}),"\n",(0,a.jsx)(t.p,{children:"Proposals may consist of (but are not limited to):"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Infrastructure deployment and continued operation."}),"\n",(0,a.jsx)(t.li,{children:"Network security operations (monitoring services, continuous auditing)."}),"\n",(0,a.jsx)(t.li,{children:"Ecosystem provisions (collaborations with friendly chains)."}),"\n",(0,a.jsx)(t.li,{children:"Marketing activities (advertising, paid features, collaborations)."}),"\n",(0,a.jsx)(t.li,{children:"Community events and outreach (meetups, pizza parties, hackerspaces)."}),"\n",(0,a.jsx)(t.li,{children:"Software development (wallets and wallet integration, clients and client upgrades)."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"learn-governance#council",children:"Council"})," governs the Treasury and how the funds are spent is up to\ntheir judgment."]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"The Council does not approve or deny Treasury Proposals based on the available funds. Proposals are\nnot approved just because there are funds ready to spend but are subject to a burn."})}),"\n",(0,a.jsx)(t.h2,{id:"funding-the-treasury",children:"Funding the Treasury"}),"\n",(0,a.jsxs)(t.p,{children:["For more information about how the Polkadot Treasury is funded, see the\n",(0,a.jsx)(t.a,{href:"/docs/learn-polkadot-opengov-treasury#treasury-inflow-and-outflow",children:"treasury page"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"tipping",children:"Tipping"}),"\n",(0,a.jsx)(t.p,{children:"Next to the proposals process, a separate system for making tips exists for the Treasury. Tips can\nbe suggested by anyone and are supported by members of the Council. Tips do not have any definite\nvalue, and the final value of the tip is decided based on the median of all tips issued by the\ntippers."}),"\n",(0,a.jsx)(t.p,{children:"Currently, the tippers are the same as the members of the Council. However, being a tipper is not\nthe direct responsibility of the Council, and at some point the Council and the tippers may be\ndifferent groups of accounts."}),"\n",(0,a.jsxs)(t.p,{children:["A tip will enter a closing phase when more than a half plus one of the tipping group have endorsed a\ntip. During that time frame, the other members of the tipping group can still issue their tips, but\ndo not have to. Once the window closes, anyone can call the ",(0,a.jsx)(t.code,{children:"close_tip"})," extrinsic, and the tip will\nbe paid out."]}),"\n",(0,a.jsx)(t.p,{children:"There are two types of tips:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"public: A small bond is required to place them. This bond depends on the tip message length, and a\nfixed bond constant defined on chain, currently 1 DOT (0.166 KSM on Kusama). Public tips carry a\nfinder's fee of 20% (same on Polkadot and Kusama) which is paid out from the total amount."}),"\n",(0,a.jsx)(t.li,{children:"tipper-initiated: Tips that a Council member published, do not have a finder's fee or a bond."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["For information about how to submit a tip from the Treasury you can read\n",(0,a.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000181971",children:"this support article"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"To better understand the process a tip goes through until it is paid out, let's consider the example\nbelow."}),"\n",(0,a.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"Bob has done something great for Polkadot. Alice has noticed this and decides to report Bob as\ndeserving a tip from the Treasury. The Council is composed of three members Charlie, Dave, and Eve."}),"\n",(0,a.jsxs)(t.p,{children:["Alice begins the process by issuing the ",(0,a.jsx)(t.code,{children:"report_awesome"})," extrinsic. This extrinsic requires two\narguments, a reason and the beneficiary. Alice submits Bob's address with the reason being a UTF-8\nencoded URL to a post on ",(0,a.jsx)(t.a,{href:"https://polkadot.polkassembly.io",children:"Polkassembly"})," that explains her\nreasoning for why Bob deserves the tip."]}),"\n",(0,a.jsx)(t.p,{children:"As mentioned above, Alice must also lock up a deposit for making this report. The deposit is the\nbase deposit as set in the chain's parameter list, plus the additional deposit per byte contained in\nthe reason. This is why Alice submitted a URL as the reason instead of the explanation directly: it\nwas cheaper for her to do so. For her trouble, Alice is able to claim the eventual finder's fee if\nthe tip is approved by the tippers."}),"\n",(0,a.jsx)(t.p,{children:"Since the tipper group is the same as the Council, the Council must now collectively (but also\nindependently) decide on the value of the tip that Bob deserves. Charlie, Dave, and Eve all review\nthe report and make tips according to their personal valuation of the benefit Bob has provided to\nthe network. Charlie tips 10 DOT, Dave tips 30 DOT, and Eve tips 100 DOT."}),"\n",(0,a.jsx)(t.p,{children:"The tip could have been closed out with only two of the three tippers. Once more than half of the\ntippers group have issued tip valuations, the countdown to close the tip will begin. In this case,\nthe third tipper issued their tip before the end of the closing period, so all three were able to\nmake their tip valuations known."}),"\n",(0,a.jsxs)(t.p,{children:["The actual tip that will be paid out to Bob is the median of these tips, so Bob will be paid out 30\nDOT from the Treasury. In order for Bob to be paid his tip, some account must call the ",(0,a.jsx)(t.code,{children:"close_tip"}),"\nextrinsic at the end of the closing period for the tip. This extrinsic may be called by anyone."]}),"\n",(0,a.jsx)(t.h2,{id:"bounties-spending",children:"Bounties Spending"}),"\n",(0,a.jsx)(t.p,{children:"There are practical limits to Council Members curation capabilities when it comes to treasury\nproposals: Council members likely do not have the expertise to make a proper assessment of the\nactivities described in all proposals. Even if individual Councillors have that expertise, it is\nhighly unlikely that a majority of members are capable in such diverse topics."}),"\n",(0,a.jsx)(t.p,{children:"Bounties Spending proposals aim to delegate the curation activity of spending proposals to experts\ncalled Curators: They can be defined as addresses with agency over a portion of the Treasury with\nthe goal of fixing a bug or vulnerability, developing a strategy, or monitoring a set of tasks\nrelated to a specific topic: all for the benefit of the Polkadot ecosystem."}),"\n",(0,a.jsx)(t.p,{children:"A proposer can submit a bounty proposal for the Council to pass, with a curator to be defined later,\nwhose background and expertise is such that they are capable of determining when the task is\ncomplete. Curators are selected by the Council after the bounty proposal passes, and need to add an\nupfront payment to take the position. This deposit can be used to punish them if they act\nmaliciously. However, if they are successful in their task of getting someone to complete the bounty\nwork, they will receive their deposit back and part of the bounty reward."}),"\n",(0,a.jsx)(t.p,{children:"When submitting the value of the bounty, the proposer includes a reward for curators willing to\ninvest their time and expertise in the task: this amount is included in the total value of the\nbounty. In this sense, the curator's fee can be defined as the result of subtracting the value paid\nto the bounty rewardee from the total value of the bounty."}),"\n",(0,a.jsx)(t.p,{children:"In general terms, curators are expected to have a well-balanced track record related to the issues\nthe bounty tries to resolve: they should be at least knowledgeable on the topics the bounty touches,\nand show project management skills or experience. These recommendations ensure an effective use of\nthe mechanism. A Bounty Spending is a reward for a specified body of work - or specified set of\nobjectives - that needs to be executed for a predefined treasury amount to be paid out. The\nresponsibility of assigning a payout address once the specified set of objectives is completed is\ndelegated to the curator."}),"\n",(0,a.jsx)(t.p,{children:"After the Council has activated a bounty, it delegates the work that requires expertise to the\ncurator who gets to close the active bounty. Closing the active bounty enacts a delayed payout to\nthe payout address and a payout of the curator fee. The delay phase allows the Council to act if any\nissues arise."}),"\n",(0,a.jsxs)(t.p,{children:["To minimize storage on chain in the same way as any proposal, bounties don't contain contextual\ninformation. When a user submits a bounty spending proposal, they will probably need to find an\noff-chain way to explain the proposal (any of the available community forums serve this purpose).\n",(0,a.jsx)(t.a,{href:"https://docs.google.com/document/d/1-IBz_owspV5OcvezWXpksWDQReWowschD0TFuaVKKcU/edit?usp=sharing",children:"This template"}),"\ncan help as a checklist of all needed information for the Council to make an informed decision."]}),"\n",(0,a.jsx)(t.p,{children:"The bounty has a predetermined duration of 90 days with the possibility of being extended by the\ncurator. Aiming to maintain flexibility on the tasks\u2019 curation, the curator will be able to create\nsub-bounties for more granularity and allocation in the next iteration of the mechanism."}),"\n",(0,a.jsx)(t.h3,{id:"creating-a-bounty-proposal",children:"Creating a Bounty Proposal"}),"\n",(0,a.jsx)(t.p,{children:"Anyone can create a Bounty proposal using Polkadot-JS Apps: Users are able to submit a proposal on\nthe dedicated Bounty section under Governance. The development of a robust user interface to view\nand manage bounties in the Polkadot Apps is still under development and it will serve Council\nmembers, Curators and Beneficiaries of the bounties, as well as all users observing the on-chain\ntreasury governance. For now, the help of a Councillor is needed to open a bounty proposal as a\nmotion to be voted."}),"\n",(0,a.jsxs)(t.p,{children:["To submit a bounty, please visit ",(0,a.jsx)(t.a,{href:"https://polkadot.js.org/apps",children:"Polkadot-JS Apps"})," and click on the\ngovernance tab in the options bar on the top of the site. After, click on 'Bounties' and find the\nbutton '+ Add Bounty' on the upper-right side of the interface. Complete the bounty title, the\nrequested allocation (including curator's fee) and confirm the call."]}),"\n",(0,a.jsxs)(t.p,{children:["After this, a Council member will need to assist you to pass the bounty proposal for vote as a\nmotion. You can contact the Council by joining the main\n",(0,a.jsx)(t.a,{href:"/docs/community",children:"Direction Element Channel and Discord server"})," and publishing a short\ndescription of your bounty, with a link to one of the ",(0,a.jsx)(t.a,{href:"#announcing-the-proposal",children:"forums"})," for\ncontextual information."]}),"\n",(0,a.jsx)(t.p,{children:"A bounty can be cancelled by deleting the earmark for a specific treasury amount or be closed if the\ntasks have been completed. On the opposite side, the 90 days life of a bounty can be extended by\namending the expiry block number of the bounty to stay active."}),"\n",(0,a.jsx)(t.h3,{id:"closing-a-bounty",children:"Closing a bounty"}),"\n",(0,a.jsx)(t.p,{children:"The curator can close the bounty once they approve the completion of its tasks. The curator should\nmake sure to set up the payout address on the active bounty beforehand. Closing the Active bounty\nenacts a delayed payout to the payout address and a payout of the curator fee."}),"\n",(0,a.jsxs)(t.p,{children:["A bounty can be closed by using the extrinsics tab and selecting the Treasury pallet, then\n",(0,a.jsx)(t.code,{children:"Award_bounty"}),", making sure the right bounty is to be closed and finally sign the transaction. It is\nimportant to note that those who received a reward after the bounty is completed, must claim the\nspecific amount of the payout from the payout address, by calling ",(0,a.jsx)(t.code,{children:"Claim_bounty"})," after the curator\nclosed the allocation."]}),"\n",(0,a.jsxs)(t.p,{children:["To understand more about Bounties and how this new mechanism works, read this\n",(0,a.jsx)(t.a,{href:"https://polkadot.network/kusama-and-polkadot-now-reward-curators-helping-to-scale-councils-functions-join-the-force-moving-the-community-forward/",children:"Polkadot Blog post"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.h3,{id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council",children:"What prevents the Treasury from being captured by a majority of the Council?"}),"\n",(0,a.jsx)(t.p,{children:"The majority of the Council can decide the outcome of a treasury spend proposal. In an adversarial\nmindset, we may consider the possibility that the Council may at some point go rogue and attempt to\nsteal all of the treasury funds. It is a possibility that the treasury pot becomes so great, that a\nlarge financial incentive would present itself."}),"\n",(0,a.jsx)(t.p,{children:"For one, the Treasury has deflationary pressure due to the burn that is suffered every spend period.\nThe burn aims to incentivize the complete spend of all treasury funds at every burn period, so\nideally the treasury pot doesn't have time to accumulate mass amounts of wealth. However, it is the\ncase that the burn on the Treasury could be so little that it does not matter - as is the case\ncurrently on Kusama with a 0.2% burn."}),"\n",(0,a.jsx)(t.p,{children:"However, it is the case on Kusama that the Council is composed of mainly well-known members of the\ncommunity. Remember, the Council is voted in by the token holders, so they must do some campaigning\nor otherwise be recognized to earn votes. In the scenario of an attack, the Council members would\nlose their social credibility. Furthermore, members of the Council are usually externally motivated\nby the proper operation of the chain. This external motivation is either because they run businesses\nthat depend on the chain, or they have direct financial gain (through their holdings) of the token\nvalue remaining steady."}),"\n",(0,a.jsx)(t.p,{children:"Concretely, there are a couple on-chain methods that resist this kind of attack. One, the Council\nmajority may not be the token majority of the chain. This means that the token majority could vote\nto replace the Council if they attempted this attack - or even reverse the treasury spend. They\nwould do this through a normal referendum. Two, there are time delays to treasury spends. They are\nonly enacted every spend period. This means that there will be some time to observe this attack is\ntaking place. The time delay then allows chain participants time to respond. The response may take\nthe form of governance measures or - in the most extreme cases a liquidation of their holdings and a\nmigration to a minority fork. However, the possibility of this scenario is quite low."}),"\n",(0,a.jsx)(t.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/treasury/src/lib.rs",children:"Substrate's Treasury Pallet"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://paritytech.github.io/substrate/master/pallet_treasury/index.html",children:"Documentation of the Rust implementation of the Treasury"})}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},67141:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(96540),a=n(74848);const s=function(e){var t,n=e.message,s=(0,o.useState)(!0),i=s[0],r=s[1];return(0,a.jsx)(a.Fragment,{children:i&&(0,a.jsxs)("div",{className:"message-box",children:[(0,a.jsx)("button",{className:"close-button",onClick:function(){r(!1)},children:"\u2716 "}),(0,a.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(96540);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);