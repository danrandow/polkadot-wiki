"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1004],{29488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"learn/learn-guides-staking","title":"Polkadot-JS Guides about Staking","description":"Polkadot-JS Guides about Staking.","source":"@site/../docs/learn/learn-guides-staking.md","sourceDirName":"learn","slug":"/learn-guides-staking","permalink":"/docs/learn-guides-staking","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-staking.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1729847256000,"frontMatter":{"id":"learn-guides-staking","title":"Polkadot-JS Guides about Staking","sidebar_label":"Staking Guides","description":"Polkadot-JS Guides about Staking.","keyword":["nominate","stake","staking","claim","rewards","polkadot-js","pools"],"slug":"../learn-guides-staking"},"sidebar":"docs","previous":{"title":"Transfer Guides","permalink":"/docs/learn-guides-transfers"},"next":{"title":"Nominator Guides","permalink":"/docs/learn-guides-nominator"}}');var s=n(74848),a=n(28453),o=n(67141),i=n(3514);const l={id:"learn-guides-staking",title:"Polkadot-JS Guides about Staking",sidebar_label:"Staking Guides",description:"Polkadot-JS Guides about Staking.",keyword:["nominate","stake","staking","claim","rewards","polkadot-js","pools"],slug:"../learn-guides-staking"},c=void 0,u={},d=[];function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the Polkadot-JS UI, you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,s.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m()}},67141:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(96540),s=n(74848);const a=function(e){var t,n=e.message,a=(0,r.useState)(!0),o=a[0],i=a[1];return(0,s.jsx)(s.Fragment,{children:o&&(0,s.jsxs)("div",{className:"message-box",children:[(0,s.jsx)("button",{className:"close-button",onClick:function(){i(!1)},children:"\u2716 "}),(0,s.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var r=n(34164),s=n(26972),a=n(28774),o=n(53465),i=n(16654),l=n(21312),c=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){var t=e.href,n=e.children;return(0,d.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){var t=e.href,n=e.icon,s=e.title,a=e.description;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function g(e){var t,n,r=e.item,a=(0,s.Nr)(r),i=(n=(0,o.W)().selectMessage,function(e){return n(e,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return a?(0,d.jsx)(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:i(r.items.length)}):null}function f(e){var t,n,r=e.item,a=(0,i.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,s.cC)(null!=(t=r.docId)?t:void 0);return(0,d.jsx)(p,{href:r.href,icon:a,title:r.label,description:null!=(n=r.description)?n:null==o?void 0:o.description})}function h(e){var t=e.item;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.className,n=(0,s.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){var t=e.items,n=e.className;if(!t)return(0,d.jsx)(k,Object.assign({},e));var a=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:a.map((function(e,t){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)}))})}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(96540),s=n(44586),a=["zero","one","two","few","many","other"];function o(e){return a.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function l(){var e=(0,s.A)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:o(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,n}),[e])}function c(){var e=l();return{selectMessage:function(t,n){return function(e,t,n){var r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);