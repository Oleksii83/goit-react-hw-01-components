(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e,a,t){},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(2),s=t.n(c),i=t(4),n=t.n(i),r=(t(13),t(0));function l(e){return Object(r.jsxs)("div",{className:"profile",children:[Object(r.jsxs)("div",{className:"Profile-description",children:[Object(r.jsx)("img",{src:e.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"Profile-avatar",width:"90"}),Object(r.jsxs)("p",{className:"Profile-name",children:[" ",e.name]}),Object(r.jsxs)("p",{className:"Profile-tag",children:[" ",e.tag]}),Object(r.jsxs)("p",{className:"Profile-location",children:[" ",e.location]})]}),Object(r.jsxs)("ul",{className:"Profile-stats",children:[Object(r.jsxs)("li",{className:"Profile-stats-item",children:[Object(r.jsx)("span",{className:"Profile-label",children:"Followers"}),Object(r.jsxs)("span",{className:"Profile-quantity",children:[" ",e.followers]})]}),Object(r.jsxs)("li",{className:"Profile-stats-item",children:[Object(r.jsx)("span",{className:"Profile-label",children:"Views"}),Object(r.jsxs)("span",{className:"Profile-quantity",children:[" ",e.views]})]}),Object(r.jsxs)("li",{className:"Profile-stats-item",children:[Object(r.jsx)("span",{className:"Profile-label",children:"Likes"}),Object(r.jsxs)("span",{className:"Profile-quantity",children:[" ",e.likes]})]})]})]})}var d=t(1);t(15);function o(e){var a=e.stats,t=e.title;return Object(r.jsxs)("section",{className:"statistics",children:[Object(r.jsx)("h2",{className:"Stat-title",children:t}),Object(r.jsx)("ul",{className:"stat-list",children:a.map((function(e){return Object(r.jsxs)("li",{className:"Stat-item",children:[Object(r.jsx)("span",{className:"Stat-label",children:e.label}),Object(r.jsxs)("span",{className:"Stat-percentage",children:[" ",e.percentage," %"]})]},e.id)}))})]})}var b=t(5);t(6);function j(e){var a=e.avatar,t=e.name,c=e.isOnline;return Object(r.jsxs)("li",{className:"Friend-item",children:[Object(r.jsx)("span",{className:"Friend-status",children:c?Object(r.jsx)("span",{className:"online"}):Object(r.jsx)("span",{className:"offline"})}),Object(r.jsx)("img",{className:"Friend-avatar",src:a,alt:t,width:"48"}),Object(r.jsx)("p",{className:"Friend-name",children:t})]})}var m=t(7),u=function(e){var a=e.items;return Object(r.jsxs)("table",{className:"transaction-history",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Currency"})]})}),Object(r.jsx)("tbody",{children:a.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.type}),Object(r.jsx)("td",{children:e.amount}),Object(r.jsx)("td",{children:e.currency})]},e.id)}))})]})},f=t(8);function p(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{name:d.name,tag:d.tag,location:d.location,avatar:d.avatar,followers:d.stats.followers,views:d.stats.views,likes:d.stats.likes},d.tag),Object(r.jsx)(o,{title:"Upload stats",stats:b}),Object(r.jsx)(o,{stats:b}),m.map((function(e){return Object(r.jsx)(j,{avatar:e.avatar,name:e.name,isOnline:e.isOnline},e.id)})),Object(r.jsx)(u,{items:f})]})}t(16);n.a.render(Object(r.jsx)(p,{}),document.querySelector("#root")),n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f1c0618f.chunk.js.map