"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4632],{56710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"learn/xcm/journey/learn-xcm-docs-journey-expectations","title":"Expectations","description":"Expect Instructions to Check if a Condition is Valid.","source":"@site/../docs/learn/xcm/journey/expects.md","sourceDirName":"learn/xcm/journey","slug":"/learn/xcm/journey-expectations","permalink":"/docs/learn/xcm/journey-expectations","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/journey/expects.md","tags":[],"version":"current","lastUpdatedBy":"bader y","lastUpdatedAt":1694099593000,"frontMatter":{"id":"learn-xcm-docs-journey-expectations","title":"Expectations","sidebar_label":"Expectations","description":"Expect Instructions to Check if a Condition is Valid.","keywords":["xcm","cross-consensus messaging","expectations"],"slug":"../journey-expectations"},"sidebar":"docs","previous":{"title":"Trap and Claim Assets","permalink":"/docs/learn/xcm/journey-assets"},"next":{"title":"Queries","permalink":"/docs/learn/xcm/journey-queries"}}');var s=t(74848),i=t(28453);const c={id:"learn-xcm-docs-journey-expectations",title:"Expectations",sidebar_label:"Expectations",description:"Expect Instructions to Check if a Condition is Valid.",keywords:["xcm","cross-consensus messaging","expectations"],slug:"../journey-expectations"},a="Expects",o={},l=[{value:"ExpectAsset",id:"expectasset",level:2},{value:"Example",id:"example",level:3},{value:"ExpectOrigin",id:"expectorigin",level:2},{value:"Example",id:"example-1",level:3},{value:"ExpectPallet",id:"expectpallet",level:2},{value:"Example",id:"example-2",level:3},{value:"ExpectError",id:"expecterror",level:2},{value:"Example",id:"example-3",level:3},{value:"ExpectTransactStatus",id:"expecttransactstatus",level:2},{value:"Example",id:"example-4",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"expects",children:"Expects"})}),"\n",(0,s.jsx)(n.p,{children:"XCM contains instructions to check for specific conditions during the execution of the message.\nThese 'expect' instructions check for a specific condition and if it's not fulfilled, an error is\nthen thrown. These instructions are used for things like checking the state of the registers before\nexecuting specific instructions. XCM contains the following expect instructions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ExpectAsset"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ExpectOrigin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ExpectPallet"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ExpectError"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ExpectTransactStatus"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"expectasset",children:"ExpectAsset"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ExpectAsset"})," instruction throws an ",(0,s.jsx)(n.code,{children:"ExpectationFalse"})," error if the holding register does not\ncontain at least the given assets."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"ExpectAsset(MultiAssets)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For the full example, check ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust,",metastring:"noplayground",children:"WithdrawAsset((Here, AMOUNT).into()),\nBuyExecution { fees: (Here, AMOUNT).into(), weight_limit: WeightLimit::Unlimited },\n// Set the instructions that are executed when ExpectAsset does not pass.\n// In this case, reporting back an error to the Parachain.\nSetErrorHandler(Xcm(vec![\n    ReportError(QueryResponseInfo {\n        destination: Parachain(1).into(),\n        query_id: QUERY_ID,\n        max_weight: Weight::from_all(0),\n    })\n])),\nExpectAsset((Here, AMOUNT + 10).into()),\n// Add Instructions that do something with assets in holding when ExpectAsset passes.\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"expectorigin",children:"ExpectOrigin"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ExpectOrigin"})," instruction throws an ",(0,s.jsx)(n.code,{children:"ExpectationFalse"})," error if the origin register does not\nequal the expected origin."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"ExpectOrigin(Option<MultiLocation>)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For the full example, check ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"here"}),". The\n",(0,s.jsx)(n.code,{children:"ExpectOrigin"})," instruction errors because the ",(0,s.jsx)(n.code,{children:"ClearOrigin"})," clears the origin register and we expect\nit to be equal to ",(0,s.jsx)(n.code,{children:"Parachain(1)"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"// Set the instructions that are executed when ExpectOrigin does not pass.\n// In this case, reporting back an error to the Parachain.\nSetErrorHandler(Xcm(vec![ReportError(QueryResponseInfo {\n    destination: Parachain(1).into(),\n    query_id: QUERY_ID,\n    max_weight: Weight::from_all(0),\n})])),\nClearOrigin,\n// Checks if the XcmContext origin is equal to `Parachain(1)`.\nExpectOrigin(Some(Parachain(1).into())),\n"})}),"\n",(0,s.jsx)(n.h2,{id:"expectpallet",children:"ExpectPallet"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ExpectPallet"})," instruction ensures that a particular pallet with a particular version exists in\nthe destination's runtime. It throws a ",(0,s.jsx)(n.code,{children:"PalletNotFound"})," error if there is no pallet at the given\nindex. It throws a ",(0,s.jsx)(n.code,{children:"NameMismatch"})," error is the ",(0,s.jsx)(n.code,{children:"name"})," or ",(0,s.jsx)(n.code,{children:"module_name"})," mismatch and a\n",(0,s.jsx)(n.code,{children:"VersionIncompatible"})," error if the ",(0,s.jsx)(n.code,{children:"crate_major"})," or ",(0,s.jsx)(n.code,{children:"crate_minor"})," mismatch. The ",(0,s.jsx)(n.code,{children:"name"})," and\n",(0,s.jsx)(n.code,{children:"module_name"})," represent a byte representation of the pallet's name and module name (e.g. 'Balances'\nand 'pallet_balances'). Consensus systems that are not substrate-based may throw an ",(0,s.jsx)(n.code,{children:"Unimplemented"}),"\nerror for this instruction."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"ExpectPallet {\n    #[codec(compact)]\n    index: u32,\n    name: Vec<u8>,\n    module_name: Vec<u8>,\n    #[codec(compact)]\n    crate_major: u32,\n    #[codec(compact)]\n    min_crate_minor: u32,\n},\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For the full example, check ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust,",metastring:"noplayground",children:'// Set the instructions that are executed when ExpectPallet does not pass.\n// In this case, reporting back an error to the Parachain.\nSetErrorHandler(Xcm(vec![\n    ReportError(QueryResponseInfo {\n        destination: Parachain(1).into(),\n        query_id: QUERY_ID,\n        max_weight: Weight::from_all(0),\n    })\n])),\n// Configured pallet has different `crate_major` so `VersionIncompatible` error is thrown.\nExpectPallet {\n    index: 1,\n    name: "Balances".into(),\n    module_name: "pallet_balances".into(),\n    crate_major: 3,\n    min_crate_minor: 0,\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"expecterror",children:"ExpectError"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ExpectError"})," instruction throws an ",(0,s.jsx)(n.code,{children:"ExpectationFalse"})," error if the error register does not\nequal the expected error at that point in the execution. This instruction is useful during the error\nhandler execution to halt the error handler if the error that started the execution of the error\nhandler is not as expected. The ",(0,s.jsx)(n.code,{children:"ExpectError"})," instruction allows to only execute the instructions in\nthe error handler, when a specific error is thrown."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"\tExpectError(Option<(u32, Error)>)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"example-3",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For the full example, check ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"here"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'SetErrorHandler(Xcm(vec![\n    ExpectError(Some((1, XcmError::VersionIncompatible))),\n    ReportError(QueryResponseInfo {\n        destination: Parachain(1).into(),\n        query_id: QUERY_ID,\n        max_weight: Weight::from_all(0),\n    }),\n])),\n// Pallet index is wrong, so throws `PalletNotFound` error.\nExpectPallet {\n    index: 100,\n    name: "Balances".into(),\n    module_name: "pallet_balances".into(),\n    crate_major: 4,\n    min_crate_minor: 0,\n},\n'})}),"\n",(0,s.jsx)(n.h2,{id:"expecttransactstatus",children:"ExpectTransactStatus"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ExpectTransactStatus"})," instruction throws an ",(0,s.jsx)(n.code,{children:"ExpectationFalse"})," error if the transact status\nregister does not equal the expected transact status."]}),"\n",(0,s.jsx)(n.h3,{id:"example-4",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["For the full example, check ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"here"}),". The\ntransact status is reported to ",(0,s.jsx)(n.code,{children:"Parachain(1)"})," if the call in the ",(0,s.jsx)(n.code,{children:"Transact"})," errors."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"SetErrorHandler(Xcm(vec![ReportTransactStatus(QueryResponseInfo {\n    destination: Parachain(1).into(),\n    query_id: QUERY_ID,\n    max_weight: Weight::from_all(0),\n})])),\nTransact {\n    origin_kind: OriginKind::SovereignAccount,\n    require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n    call: call.encode().into(),\n},\nExpectTransactStatus(MaybeErrorCode::Success),\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);