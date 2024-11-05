"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5052],{93123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"build/build-node-management","title":"Node Management","description":"Steps on how to manage your Polkadot node.","source":"@site/../docs/build/build-node-management.md","sourceDirName":"build","slug":"/build-node-management","permalink":"/docs/build-node-management","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-node-management.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729245684000,"frontMatter":{"id":"build-node-management","title":"Node Management","sidebar_label":"Node Management","description":"Steps on how to manage your Polkadot node.","keywords":["node","management","deployment","operations","monitor"],"slug":"../build-node-management"},"sidebar":"docs","previous":{"title":"Integration Initiation","permalink":"/docs/build-integration"},"next":{"title":"Parachain Development","permalink":"/docs/build-pdk"}}');var i=t(74848),s=t(28453);const r={id:"build-node-management",title:"Node Management",sidebar_label:"Node Management",description:"Steps on how to manage your Polkadot node.",keywords:["node","management","deployment","operations","monitor"],slug:"../build-node-management"},a=void 0,l={},d=[{value:"Basic Node Operations",id:"basic-node-operations",level:2},{value:"File Structure",id:"file-structure",level:2},{value:"Monitoring and Telemetry",id:"monitoring-and-telemetry",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This page contains basic information about running a Parity Polkadot client. There are a lot of ways\nto obtain/run a client, e.g. compiling from source, running in Docker, or downloading a binary. This\nguide will always refer to the executable as ",(0,i.jsx)(n.code,{children:"polkadot"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Always refer to the client's help ",(0,i.jsx)(n.code,{children:"polkadot --help"})," for the most up-to-date information."]})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Other client implementation teams: Feel free to make a PR to this page with instructions (or a link\nto instructions) for your client."})}),"\n",(0,i.jsxs)(n.p,{children:["If you are trying to run a validator, refer to this tutorial\n",(0,i.jsx)(n.a,{href:"/docs/maintain-guides-how-to-validate-polkadot",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-node-operations",children:"Basic Node Operations"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Selecting a chain"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"--chain <chainspec>"})," option to select the chain. Can be ",(0,i.jsx)(n.code,{children:"polkadot"}),", ",(0,i.jsx)(n.code,{children:"kusama"}),", ",(0,i.jsx)(n.code,{children:"westend"}),", or\na custom chain spec. By default, the client will start Polkadot. Watch\n",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=i9vNCHz6wO4",children:"How a single codebase can power four different blockchains"}),"\nto learn more about how the chain selection works internally."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Archive node"})}),"\n",(0,i.jsxs)(n.p,{children:["An archive node does not prune any block or state data. Use the ",(0,i.jsx)(n.code,{children:"--pruning archive"})," flag. Certain\ntypes of nodes like validators must run in archive mode. Likewise, all\n",(0,i.jsx)(n.a,{href:"build-protocol-info.md/#events",children:"events"})," are cleared from state in each block, so if you want to\nstore events then you will need an archive node."]}),"\n",(0,i.jsx)(n.admonition,{title:"Explainer video on upgrading a node",type:"note",children:(0,i.jsxs)(n.p,{children:["To upgrade a node, please refer to this\n",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=5LtcdBR9F40&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=5",children:"video"})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Exporting blocks"})}),"\n",(0,i.jsxs)(n.p,{children:["To export blocks to a file, use ",(0,i.jsx)(n.code,{children:"export-blocks"}),". Export in JSON (default) or binary\n(",(0,i.jsx)(n.code,{children:"--binary true"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"polkadot export-blocks --from 0 <output_file>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"RPC ports"})}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"--rpc-external"})," flag to expose RPC ports. Not all RPC calls are safe to allow and you\nshould use an RPC proxy to filter unsafe calls. Select ports with the ",(0,i.jsx)(n.code,{children:"--rpc-port"})," option. To limit\nthe hosts who can access, use the ",(0,i.jsx)(n.code,{children:"--rpc-cors"})," option."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Execution"})}),"\n",(0,i.jsxs)(n.p,{children:["The Parity Polkadot client implements a ",(0,i.jsx)(n.a,{href:"/docs/learn-polkadot-host",children:"Polkadot Host"})," and a\nnative runtime. The runtime must compile to WebAssembly and is stored on-chain. If the client's\nruntime is the same spec as the runtime that is stored on-chain, then the client will execute blocks\nusing the client binary. Otherwise, the client will execute the Wasm runtime from the chain."]}),"\n",(0,i.jsx)(n.p,{children:"Therefore, when syncing the chain, the client will execute blocks from past runtimes using their\nassociated Wasm binary. This feature also allows forkless upgrades: the client can execute a new\nruntime without updating the client."}),"\n",(0,i.jsxs)(n.p,{children:["Parity's Polkadot client has two Wasm execution methods, interpreted (default) and compiled. Set the\npreferred method to use when executing Wasm with ",(0,i.jsx)(n.code,{children:"--wasm-execution <Interpreted|Compiled>"}),". Compiled\nexecution will run much faster, especially when syncing the chain, but is experimental and may use\nmore memory/CPU. A reasonable tradeoff would be to sync the chain with compiled execution and then\nrestart the node with interpreted execution."]}),"\n",(0,i.jsx)(n.h2,{id:"file-structure",children:"File Structure"}),"\n",(0,i.jsxs)(n.p,{children:["The node stores a number of files in: ",(0,i.jsx)(n.code,{children:"/home/$USER/.local/share/polkadot/chains/<chain name>/"}),". You\ncan set a custom path with ",(0,i.jsx)(n.code,{children:"--base-path <path>"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"keystore"})})}),"\n",(0,i.jsx)(n.p,{children:"The keystore stores session keys, which are important for validator operations."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/learn-cryptography",children:"Polkadot documentation"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.substrate.io/main-docs/fundamentals/accounts-addresses-keys/#specialized-accounts",children:"Substrate documentation"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"db"})})}),"\n",(0,i.jsxs)(n.p,{children:["The database stores blocks and the state trie. If you are running a validator node, it also stores\nGRANDPA pre-votes and pre-commits and the offchain-worker DB. Use caution when\n",(0,i.jsx)(n.a,{href:"/docs/maintain-guides-how-to-upgrade",children:"migrating validator nodes"})," to avoid equivocation. If\nyou want to start a new machine without resyncing, you can stop your node, back up the DB, and move\nit to a new machine."]}),"\n",(0,i.jsx)(n.p,{children:"To delete your DB and re-sync from genesis, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"polkadot purge-chain\n"})}),"\n",(0,i.jsxs)(n.admonition,{title:"Validators should sync using the RocksDb backend",type:"note",children:[(0,i.jsxs)(n.p,{children:["This is implicit by default, but can be explicit by passing the ",(0,i.jsx)(n.code,{children:"--database RocksDb"})," flag. In the\nfuture, it is recommended to switch to using the faster and more efficient ParityDb option.\nSwitching between database backends will require a resync."]}),(0,i.jsxs)(n.p,{children:["If you want to test out ParityDB you can add the flag ",(0,i.jsx)(n.code,{children:"--database paritydb"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"monitoring-and-telemetry",children:"Monitoring and Telemetry"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Node status"})}),"\n",(0,i.jsxs)(n.p,{children:["You can check the node's health via RPC with\n",(0,i.jsx)(n.a,{href:"https://github.com/vi/websocat#installation",children:"websocat"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'echo \'{"id":1,"jsonrpc":"2.0","method":"system_health","params":[]}\' | websocat -n1 -B 99999999 ws://127.0.0.1:9944\n\n{"jsonrpc":"2.0","result":{"peers":50,"isSyncing":false,"shouldHavePeers":true},"id":1}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Logs"})}),"\n",(0,i.jsx)(n.p,{children:"The Polkadot client has a number of log targets. The most interesting to users may be:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"afg"})," (Al's Finality Gadget - GRANDPA consensus)"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"babe"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"telemetry"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"txpool"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"usage"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Other targets include:\n",(0,i.jsx)(n.code,{children:"db, gossip, peerset, state-db, state-trace, sub-libp2p, trie, wasm-executor, wasm-heap"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The log levels, from least to most verbose, are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"error"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"warn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"info"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"debug"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"trace"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["All targets are set to ",(0,i.jsx)(n.code,{children:"info"})," logging by default. You can adjust individual log levels using the\n",(0,i.jsx)(n.code,{children:"--log (-l short)"})," option, for example ",(0,i.jsx)(n.code,{children:"-l afg=trace,sync=debug"})," or globally with ",(0,i.jsx)(n.code,{children:"-ldebug"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Telemetry & Metrics"})}),"\n",(0,i.jsxs)(n.p,{children:["The Parity Polkadot client connects to telemetry by default. You can disable it with\n",(0,i.jsx)(n.code,{children:"--no-telemetry"}),", or connect only to specified telemetry servers with the ",(0,i.jsx)(n.code,{children:"--telemetry-url"})," option\n(see the help options for instructions). Connecting to public telemetry may expose information that\nputs your node at higher risk of attack. You can run your own, private\n",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/substrate-telemetry",children:"telemetry server"})," or deploy a\n",(0,i.jsx)(n.code,{children:"substrate-telemetry"})," instance to a Kubernetes cluster using\n",(0,i.jsx)(n.a,{href:"https://github.com/w3f/substrate-telemetry-chart",children:"this Helm chart"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The node also exposes a Prometheus endpoint by default (disable with ",(0,i.jsx)(n.code,{children:"--no-prometheus"}),"). Substrate\nhas a\n",(0,i.jsx)(n.a,{href:"https://docs.substrate.io/tutorials/get-started/monitor-node-metrics/",children:"monitor node metrics tutorial"}),"\nwhich uses this endpoint."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);