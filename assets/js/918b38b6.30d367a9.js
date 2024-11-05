(self.webpackChunk=self.webpackChunk||[]).push([[6930],{61900:(e,n,a)=>{"use strict";a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"learn/learn-async-backing","title":"Asynchronous Backing","description":"A brief overview of asynchronous backing, and how it affects Polkadot\'s scalability.","source":"@site/../docs/learn/learn-async-backing.md","sourceDirName":"learn","slug":"/learn-async-backing","permalink":"/docs/learn-async-backing","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-async-backing.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1727178265000,"frontMatter":{"id":"learn-async-backing","title":"Asynchronous Backing","sidebar_label":"Asynchronous Backing","description":"A brief overview of asynchronous backing, and how it affects Polkadot\'s scalability.","keywords":["parachains","backing","parablock","perspective parachains","unincluded segments"],"slug":"../learn-async-backing"},"sidebar":"docs","previous":{"title":"Parachains FAQ","permalink":"/docs/learn-parachains-faq"},"next":{"title":"Agile Coretime","permalink":"/docs/learn-agile-coretime-index"}}');var i=a(74848),s=a(28453);a(47379);const o={id:"learn-async-backing",title:"Asynchronous Backing",sidebar_label:"Asynchronous Backing",description:"A brief overview of asynchronous backing, and how it affects Polkadot's scalability.",keywords:["parachains","backing","parablock","perspective parachains","unincluded segments"],slug:"../learn-async-backing"},r=void 0,c={},l=[{value:"Synchronous Backing",id:"synchronous-backing",level:2},{value:"Asynchronous Backing",id:"asynchronous-backing",level:2},{value:"Synchronous vs. Asynchronous Backing",id:"synchronous-vs-asynchronous-backing",level:3},{value:"Sync Backing as a special case of Async Backing",id:"sync-backing-as-a-special-case-of-async-backing",level:3},{value:"Async Backing Diagram",id:"async-backing-diagram",level:3},{value:"Terminology",id:"terminology",level:2},{value:"Candidate Receipt",id:"candidate-receipt",level:3},{value:"Pipelining",id:"pipelining",level:3},{value:"Unincluded Segments",id:"unincluded-segments",level:3},{value:"Prospective Parachains",id:"prospective-parachains",level:3},{value:"Learn More",id:"learn-more",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Asynchronous Backing Guide for Parachains",type:"tip",children:(0,i.jsxs)(n.p,{children:["For upgrading a parachain for Asynchronous Backing compatibility, follow the instructions on\n",(0,i.jsx)(n.a,{href:"/docs/maintain-guides-async-backing",children:"this Wiki document."})]})}),"\n",(0,i.jsx)(n.admonition,{title:"Learn about Parachain Consensus",type:"info",children:(0,i.jsxs)(n.p,{children:["To fully follow the material on this page, it is recommended to be familiar with the primary stages\nof the ",(0,i.jsx)(n.a,{href:"/docs/learn-parachains-protocol",children:"Parachain Protocol"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["In Polkadot, parablocks are generated by ",(0,i.jsx)(n.a,{href:"/docs/learn-collator",children:"collators"})," on the parachain side and\nsent to ",(0,i.jsx)(n.a,{href:"/docs/learn-validator",children:"validators"})," on the relay chain side for backing."]}),"\n",(0,i.jsx)(n.admonition,{title:"What is backing?",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Backing"})," refers to the process in which parablocks are verified by a subset of validators or\nbacking groups. It is an important step in the validation process for parablocks, as it is the first\nline of defense in ensuring censorship resistance. Parablocks only need to be backed by one\nvalidator, and as a consequence, backing does not ensure parablock validity."]})}),"\n",(0,i.jsxs)(n.p,{children:["Backed parablocks are sent to other validators for inclusion into the relay chain. Parablocks are\nincluded when validators have attested to having received\n",(0,i.jsx)(n.a,{href:"/docs/learn-parachains-protocol#erasure-codes",children:"erasure coded chunks"})," of the parablock data. Note\n",(0,i.jsx)(n.a,{href:"#candidate-receipt",children:"candidate receipts"})," and not the parablocks themselves are included in relay\nblocks (but for simplicity, we refer to parablocks as being included). When generated, parablocks\nmust be anchored to a relay chain block called ",(0,i.jsx)(n.strong,{children:"relay parent"}),". The relay parent is an input to\nparablock candidate generation. It provides the necessary context to build the next parablock. Note\nthat the relay parent of a parablock and the relay block including that parablock are always\ndifferent."]}),"\n",(0,i.jsx)(n.h2,{id:"synchronous-backing",children:"Synchronous Backing"}),"\n",(0,i.jsx)(n.p,{children:"Before diving into asynchronous backing, it is important to understand what synchronous backing is\nand its main limitations. In synchronous backing, parablock generation is tightly coupled to the\nrelay chain's progression:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"A new parablock can be produced after including the previous one (i.e., every 12 seconds)."}),"\n",(0,i.jsx)(n.li,{children:"Context to build the next parablock is drawn from the latest included parablock ancestor"}),"\n",(0,i.jsx)(n.li,{children:"The relay parent must be the latest relay chain block."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Because of (1) parablocks can be generated every other relay chain block (i.e., every 12 seconds).\nBecause of (2) generation of parablock ",(0,i.jsx)(n.code,{children:"P"})," can only start when ",(0,i.jsx)(n.code,{children:"P - 1"})," is included (there is no\n",(0,i.jsx)(n.a,{href:"#pipelining",children:"pipelining"}),"). Because of (3) execution time can take maximum 0.5 seconds as parablock\n",(0,i.jsx)(n.code,{children:"P"})," is rushing to be backed in the next 5.5 seconds (2 seconds needed for backing and the rest for\ngossiping). Every parablock is backed in 6 seconds (one relay chain block) and included in the next\n6 seconds (next relay chain block). The time from generation to inclusion is 12 seconds. This limits\nthe amount of data a collator can add to each parablock."]}),"\n",(0,i.jsxs)(n.p,{children:["Parablock generation will choose the most recently received relay block as a relay parent, although\nwith an imperfect network that may differ from the true most recent relay block. So, in general, if\nrelay block ",(0,i.jsx)(n.code,{children:"R"})," is the relay parent of parablock ",(0,i.jsx)(n.code,{children:"P"}),", then ",(0,i.jsx)(n.code,{children:"P"})," could be backed in ",(0,i.jsx)(n.code,{children:"R + 1"})," and\nincluded in ",(0,i.jsx)(n.code,{children:"R + 2"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"sync-backing",src:a(26033).A+"",width:"1211",height:"503"})}),"\n",(0,i.jsxs)(n.p,{children:["From left to right, parablock P1 is anchored to the relay parent R0 (showed with an ",(0,i.jsx)(n.code,{children:"x"}),"), backed\ninto the relay chain block R1, and included in R2. After including P1, collators can start\ngenerating P2 that must be anchored to the relay parent R2. Note that R2 will be the relay parent of\nP2 if R2 is included on the relay chain and gossiped to the collator producing P2."]}),"\n",(0,i.jsx)(n.admonition,{title:"Every collator also runs an attached relay chain full node",type:"info",children:(0,i.jsxs)(n.p,{children:["The attached relay node receives relay blocks via gossip. Then, the relay node talks to the\nparachain node through the ",(0,i.jsx)(n.code,{children:"CollationGeneration"})," subsystem. R2 is gossiped to the relay full node\nattached to the collator producing P2. Then, ",(0,i.jsx)(n.code,{children:"CollationGeneration"})," passes information about R2 to\nthe collator node. Finally, relay parent information from R2 informs the generation of candidate P2."]})}),"\n",(0,i.jsx)(n.p,{children:"Because P2 is rushing to be backed in 6 seconds into R3, validators have only 0.5 seconds for\nexecution. Backing groups will take approximately 2 seconds to back it and some extra time for\ngossiping it (the whole process from collation to backing lasts 6 seconds). P2 is included in R4,\nwhich could be used as a relay parent for P3 (not shown). After 24 seconds P1 and P2 are included in\nthe relay chain. Note how collators can start new parablocks every 12 seconds but only have 0.5\nseconds for execution."}),"\n",(0,i.jsx)(n.h2,{id:"asynchronous-backing",children:"Asynchronous Backing"}),"\n",(0,i.jsx)(n.admonition,{title:"Disclaimer: Performance Measurements",type:"warning",children:(0,i.jsx)(n.p,{children:"Due to asynchronous backing not being fully implemented in a running production network, each\nperformance metric is not thoroughly tested nor guaranteed until proper benchmarking has occurred."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"sync-vs-async-backing",src:a(37966).A+"",width:"1920",height:"800"})}),"\n",(0,i.jsx)(n.p,{children:"In asynchronous backing, parablocks (P) are included every 6 seconds, and backing (B) and inclusion\n(I) can happen within the same relay chain block (R)."}),"\n",(0,i.jsx)(n.h3,{id:"synchronous-vs-asynchronous-backing",children:"Synchronous vs. Asynchronous Backing"}),"\n",(0,i.jsx)(n.p,{children:"Below is a table showing the main differences between synchronous and asynchronous backing."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"}}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Sync Backing"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Async Backing"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Async Backing Advantage"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Parablocks included every"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"12 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"6 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"2x more throughput or 2x less latency"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Parablock's maximum execution time"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"0.5 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"2 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"4x more data in a parablock"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Relay parent"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Is the latest relay chain block"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Is not necessarily the latest relay chain block"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Collators can submit parablocks to backing groups in advance"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Collators can build on"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"The most recent ancestor included in the latest relay chain block"}),(0,i.jsxs)(n.td,{style:{textAlign:"center"},children:["An ancestor included in a relay chain block (not necessarily the latest), with augmented information from the latest ancestor in the ",(0,i.jsx)(n.a,{href:"#unincluded-segments",children:"unincluded segment"})]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Collators can start building parablocks in advance"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Number of unincluded parablocks"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Only one"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"One, or more than one (depends on configuration parameters)"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"More efficiency and scalability"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Unincluded parablocks"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Cannot be re-proposed"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Can be re-proposed if not successfully included in the first attempt"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"Decrease wastage of unused blockspace"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Parablock's Backing-to-inclusion time"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"12 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"12 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No change"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.strong,{children:"Parablock's Inclusion-to-finality time"})}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"30 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"30 seconds"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"No change"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["In synchronous backing, collators generate parablocks using context entirely pulled from the relay\nchain. While in asynchronous backing, collators use additional context from the\n",(0,i.jsx)(n.a,{href:"#unincluded-segments",children:"unincluded segment"}),". Parablocks are included every 6 seconds because backing\nof parablock ",(0,i.jsx)(n.code,{children:"N + 1"})," and inclusion of parablock ",(0,i.jsx)(n.code,{children:"N"})," can happen on the same relay chain bock\n(",(0,i.jsx)(n.a,{href:"#pipelining",children:"pipelining"}),"). However, as for synchronous backing, a parablock takes 12 seconds to\nget backed and included, and from inclusion to finality there is an additional 30-second time\nwindow."]}),"\n",(0,i.jsx)(n.p,{children:"Because the throughput is increased by 2x and parachains have 4x more execution time, asynchronous\nbacking is expected to deliver 8x more blockspace to parachains."}),"\n",(0,i.jsx)(n.h3,{id:"sync-backing-as-a-special-case-of-async-backing",children:"Sync Backing as a special case of Async Backing"}),"\n",(0,i.jsxs)(n.p,{children:["Two parameters of asynchronous backing can be controlled by\n",(0,i.jsx)(n.a,{href:"/docs/learn-polkadot-opengov",children:"Governance"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/f204e3264f945c33b4cea18a49f7232c180b07c5/polkadot/primitives/src/vstaging/mod.rs#L49",children:(0,i.jsx)(n.code,{children:"max_candidate_depth"})}),":\nthe number of parachain blocks a collator can produce that are not yet included in the relay\nchain."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/f204e3264f945c33b4cea18a49f7232c180b07c5/polkadot/primitives/src/vstaging/mod.rs#L54",children:(0,i.jsx)(n.code,{children:"allowed_ancestry_len"})}),":\nthe oldest relay chain parent a parachain block can be built on top of."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Values of zero for both correspond to synchronous backing: ",(0,i.jsx)(n.code,{children:"max_candidate_depth = 0"})," means there can\nbe only one unincluded parablock at all times, and ",(0,i.jsx)(n.code,{children:"allowed_ancestry_len = 0"})," means a parablock can\nbe built only on the latest relay parent for that parachain. Initial values will be set to 3 (4\nunincluded parablocks at all times) and 2 (relay parent can be the third last)."]}),"\n",(0,i.jsx)(n.h3,{id:"async-backing-diagram",children:"Async Backing Diagram"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"async-backing",src:a(4498).A+"",width:"1209",height:"503"})}),"\n",(0,i.jsx)(n.p,{children:"The diagram assumes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_candidate_depth = 2"}),", meaning that there can be a maximum of three unincluded parablocks at\nall times"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"allowed_ancestry_len = 1"}),", meaning parablocks can be anchored to the last or second-last relay\nparent (i.e., collators can start preparing parablocks 6 seconds in advance)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["From left to right, parablock P1 is backed into the relay chain block R1 and included in R2. While\nP1 undergoes backing, collators can already generate P2, which will have R0 as a relay parent\n(showed with an ",(0,i.jsx)(n.code,{children:"x"}),"). Note how R0 can also be relay parent for P1 as long as in the unincluded\nsegment there is a maximum of three unincluded parablocks. Parablock P2 can be backed in R2 (the\nsame relay block where P1 is included) and included in R3. Collators can now use up to two seconds\nfor execution. And so on, P3 can be generated while backing groups check P2, and P4 can be built\nwhile P3 undergoing backing. In 24 seconds, P1 to P3 are included in the relay chain."]}),"\n",(0,i.jsxs)(n.p,{children:["Note how there are always three unincluded parablocks at all times, i.e. compared to synchronous\nbacking there can be multiple unincluded parablocks (i.e. ",(0,i.jsx)(n.a,{href:"#pipelining",children:"pipelining"}),"). For example,\nwhen P1 is undergoing inclusion, P2 and P3 are undergoing backing. Collators were able to generate\nmultiple unincluded parablocks because on their end they have the\n",(0,i.jsx)(n.a,{href:"#unincluded-segments",children:"unincluded segment"}),", a local storage of not-included parablock ancestors that\nthey can use to fetch information to build new parablocks. On the relay chain side,\n",(0,i.jsx)(n.a,{href:"#prospective-parachains",children:"perspective parachains"})," repeats the work each unincluded segment does in\ntracking candidates (as validators cannot trust the record kept on parachains)."]}),"\n",(0,i.jsx)(n.p,{children:"The 6-second relay chain block delay includes a backing execution timeout (2 seconds) and some time\nfor network latency (the time it takes to gossip messages across the entire network). The limit\ncollators have to generate parablocks is how long it takes to back it (i.e., 2 seconds). Collation\ngeneration conservatively always gives itself the same time limits. If there is extra time for\ncollation generation and backing (i.e., more than 2s + 6s), then all that extra time is allocated to\nbacking (see figure). This could result in backable blocks waiting their turn at the end of the\nbacking step for a few extra seconds until a core frees up to back that block as of the next relay\nblock or some later relay block. Note a core is occupied after backing and before inclusion."}),"\n",(0,i.jsxs)(n.p,{children:["The 2-second execution time is thus a limiter, not a system limitation. If parablock generation\ntakes >2 seconds, the unincluded segment will shrink (less unincluded parablocks), while if it takes\n< 2 seconds, the segment will grow (more unincluded parablocks that will need to be backed and\nincluded). Such flexibility from the parachain side will be possible when, on the relay chain side,\nthere will be elastic scaling (i.e.,\n",(0,i.jsx)(n.a,{href:"/docs/polkadot-direction#agile-core-usage",children:"agile core usage"})," and\n",(0,i.jsx)(n.a,{href:"/docs/polkadot-direction#agile-coretime-allocation",children:"coretime allocation"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(n.h3,{id:"candidate-receipt",children:"Candidate Receipt"}),"\n",(0,i.jsxs)(n.p,{children:["Saying that a parablock has been included in a relay chain parent does not mean the entire parablock\nis in the relay chain block. Instead, ",(0,i.jsx)(n.strong,{children:"candidate receipt"})," consisting of the hash of the parablock,\nstate roots, and ID info is placed on the parent block on the relay chain. The relay chain does not\naccess the entire state of a parachain but only the values that changed during that block and the\nmerkelized hashes of the unchanged values."]}),"\n",(0,i.jsx)(n.h3,{id:"pipelining",children:"Pipelining"}),"\n",(0,i.jsxs)(n.p,{children:["Asynchronous backing is a feature that introduces\n",(0,i.jsx)(n.a,{href:"https://www.techtarget.com/whatis/definition/pipelining",children:"pipelining"})," to the parachain block\n",(0,i.jsx)(n.a,{href:"/docs/learn-parachains-protocol",children:"generation, backing and inclusion"}),'. It is analogous to the logical\npipelining of processor instruction in "traditional" architectures, where some instructions may be\nexecuted before others are complete. Instructions may also be executed in parallel, enabling\nmultiple processor parts to work on potentially different instructions simultaneously.']}),"\n",(0,i.jsx)(n.p,{children:"Bundles of state transitions represented as blocks may be processed similarly. In the context of\nPolkadot, pipelining aims to increase the throughput of the entire network by completing the backing\nand inclusion steps for different blocks at the same time. Asynchronous backing does not just allow\nfor pipelining within a single pipe (or core). It lays the foundation for a large number of pipes\n(or cores) to run for the same parachain at the same time. In that way, we have two distinct new\nforms of parallel computation."}),"\n",(0,i.jsx)(n.h3,{id:"unincluded-segments",children:"Unincluded Segments"}),"\n",(0,i.jsx)(n.p,{children:"Unincluded segments are chains of candidate parablocks that have yet to be included in the relay\nchain, i.e. they can contain parablocks at any stage pre-inclusion. An unincluded segment may thus\ninclude candidates that are seconded, backable, or backed. Every parablock candidate recorded in the\nunincluded segment is immediately advertised to validators to begin the backing process."}),"\n",(0,i.jsx)(n.p,{children:"The backing process occurs on the relay chain, whereas unincluded segments live in the runtimes of\nparachain collators. The core functionality that asynchronous backing brings is the ability to build\non these unincluded segments of block ancestors rather than building only on ancestors included in\nthe relay chain state."}),"\n",(0,i.jsx)(n.p,{children:"The purpose of each unincluded segment is twofold:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make each parachain aware of when and at what depth it can build blocks that won't be rejected by\nthe relay chain"}),"\n",(0,i.jsx)(n.li,{children:"Provide critical context necessary to build parablocks with parent blocks that have yet to be\nincluded. The unincluded segment is all about building parablocks."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"prospective-parachains",children:"Prospective Parachains"}),"\n",(0,i.jsxs)(n.p,{children:["The purpose of\n",(0,i.jsx)(n.a,{href:"https://paritytech.github.io/polkadot/book/node/backing/prospective-parachains.html",children:"prospective parachains"}),"\nis twofold:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Keep track of parablocks that have been submitted to backers but have yet to be included. This\nincludes tracking the full unincluded ancestry of each parablock, without which it wouldn't be\npossible to verify their legitimacy."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Look up and provide candidates which are children of the most recently included parablock for each\nparachain. These are taken as inputs to the availability process. Prospective parachains is all\nabout tracking, storing, and providing candidates to the availability/inclusion step."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Prospective parachains essentially repeats the work each ",(0,i.jsx)(n.a,{href:"#unincluded-segments",children:"unincluded segment"}),"\ndoes in tracking candidates. Validators cannot simply trust the availability or validity of records\nkept on parachains. Prospective parachains is the relay chain's record of all parablock candidates\nundergoing the backing and inclusion process. It is the authoritative gatekeeper for parablock\nvalidity. Whereas the unincluded segment is a local record that allows parachains to produce blocks\nthat comply with the rules prospective parachains later enforces."]}),"\n",(0,i.jsxs)(n.p,{children:["The unincluded segment lives in the parachain runtime, so it doesn't know or care about forks/other\nparachains. Prospective parachains lives in the relay chain client. So it has to simultaneously keep\ntrack of candidates from all forks of all parachains. It is as if you folded the unincluded segments\nfrom every fork of every parachain into one giant data structure. When you fold unincluded segments\nrepresenting different chain forks together, they create a tree structure. Hence the term\n",(0,i.jsx)(n.a,{href:"https://paritytech.github.io/polkadot/book/node/backing/prospective-parachains.html#fragment-trees",children:(0,i.jsx)(n.strong,{children:"fragment tree"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"A single unincluded segment tells a collator whether it can build on top of one fork of one\nparachain. Prospective parachains tells a validator whether it should accept blocks built on top of\nany fork from any parachain."}),"\n",(0,i.jsx)(n.p,{children:"A parablock stops being a prospective parablock when it is included on chain. At that point\nprospective parachains does not have to care about it anymore. Alternatively, a parablock's relay\nparent can get too old before that parablock is included, in which case prospective parachains can\nthrow away the candidate."}),"\n",(0,i.jsx)(n.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,i.jsx)(n.p,{children:"The information provided here is subject to change; keep up to date using the following resources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://polkadot.network/blog/polkadot-roadmap-roundup",children:"Polkadot Roadmap Roundup"})," - Article by\nRob Habermeier, Polkadot founder, details the plans for Polkadot for 2023."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/paritytech/polkadot/issues/3779",children:"Asynchronous Backing Spec & Tracking Issue"})," -\nThe implementation tracking issue for asynchronous backing"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://paritytech.github.io/polkadot/book/node/backing/prospective-parachains.html",children:"Prospective Parachains Subsystem - The Polkadot Parachain Host Implementers' Guide"})}),"\n",(0,i.jsxs)(n.li,{children:["Chapter 6.11. from Polkadot Blockchain Academy (PBA) lecture material:\n",(0,i.jsx)(n.a,{href:"https://polkadot-blockchain-academy.github.io/pba-book/polkadot/async-backing-shallow/page.html",children:"Asynchronous Backing (Shallow)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Chapter 6.15. from PBA lecture material:\n",(0,i.jsx)(n.a,{href:"https://polkadot-blockchain-academy.github.io/pba-book/polkadot/async-backing-deep/page.html",children:"Asynchronous Backing (Deep)"})]}),"\n",(0,i.jsxs)(n.li,{children:["Polkadot Blog Post -\n",(0,i.jsx)(n.a,{href:"https://www.polkadot.network/blog/elevating-polkadots-performance-and-scale-with-asynchronous-backing",children:"Asynchronous Backing: Elevating Polkadot's Performance and Scale"})]}),"\n",(0,i.jsxs)(n.li,{children:["Blog posts by Filippo Franchini on\n",(0,i.jsx)(n.a,{href:"https://grillapp.net/10124/polkadot-s-synchronous-backing-explained-40627?ref=10124",children:"Synchronous"}),"\nand\n",(0,i.jsx)(n.a,{href:"https://grillapp.net/10124/polkadot-s-asynchronous-backing-explained-40701?ref=10124",children:"Asynchronous Backing"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},47379:(e,n,a)=>{"use strict";a.d(n,{A:()=>p});var t=a(90675),i=a(10467),s=a(96540),o=a(19588),r=a(2026),c=a(11135);function l(e,n,a){return d.apply(this,arguments)}function d(){return(d=(0,i.A)((0,t.A)().mark((function e(n,a,i){var s,c,l,d,h;return(0,t.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,c=void 0,e.t0=n,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return s="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return s="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==s){e.next=22;break}return e.abrupt("return");case 22:return l=new o.E(s),e.next=25,r.G.create({provider:l});case 25:d=e.sent,(h=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=h[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return c=d.toString(),e.abrupt("break",39);case 33:return e.next=35,d();case 35:return c=(c=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+h[0]+") in "+a);case 39:return e.abrupt("return",c);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,n,a,t){switch(n){case"humanReadable":(0,c.HumanReadable)(e,a,t);break;case"precise":(0,c.Precise)(e,a,t);break;case"blocksToDays":(0,c.BlocksToDays)(e,t);break;case"erasToDays":(0,c.ErasToDays)(e,t,a);break;case"percentage":(0,c.Percentage)(e,t);break;case"permillToPercent":(0,c.PermillToPercent)(e,t);break;case"arrayLength":(0,c.ArrayLength)(e,t);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var n=e.network,a=e.path,o=e.defaultValue,r=e.filter,c=void 0===r?void 0:r,d=(0,s.useState)(""),p=d[0],u=d[1];return n=n.toLowerCase(),(0,s.useEffect)((function(){void 0!==c?h(o.toString(),c,n,u):u(o.toString());var e=void 0;switch(n){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+n)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,i.A)((0,t.A)().mark((function e(){var i;return(0,t.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(n,a,u);case 2:if(void 0!==(i=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==c?h(i,c,n,u):u(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(r){console.log(r)}}}),[]),p}},11135:e=>{var n="polkadot",a="kusama",t="statemine",i="statemint",s="polkadotpeople",o="kusamapeople",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,c,l){var d=void 0;if(c===n||c===i)d=3;else if(c===a||c===t||c===s)d=6;else{if(c!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=8}e=parseFloat(e),l((e=Number.isInteger(e/r[c].precision)?e/r[c].precision+" "+r[c].symbol:(e/r[c].precision).toFixed(d)+" "+r[c].symbol).toString())},Precise:function(e,n,a){a(e=(e=parseFloat(e))/r[n].precision+" "+r[n].symbol)},BlocksToDays:function(e,n){n((e=6*e/86400).toString())},ErasToDays:function(e,r,c){var l=void 0;if(c===n||c===i||c==s)l=1;else{if(c!==a&&c!==t&&c!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=4}r((e/=l).toString())},Percentage:function(e,n){n((e/=1e7).toString())},PermillToPercent:function(e,n){n((e/=1e4).toString())},ArrayLength:function(e,n){n((e=e.split(",").length).toString())}}},4498:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});const t=a.p+"assets/images/async-backing-97a966a8148c023012205ad71a146bcc.png"},26033:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});const t=a.p+"assets/images/sync-backing-39f23741e043faaf52bb5ddc880ea409.png"},37966:(e,n,a)=>{"use strict";a.d(n,{A:()=>t});const t=a.p+"assets/images/sync-vs-async-backing-3548388f98c44fc684a6176a6ccb8ed2.png"},47790:()=>{}}]);