import{r as m}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=m,g=Symbol.for("react.element"),b=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,y=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function f(n,t,a){var r,s={},o=null,c=null;a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)_.call(t,r)&&!k.hasOwnProperty(r)&&(s[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:g,type:n,key:o,ref:c,props:s,_owner:y.current}}i.Fragment=b;i.jsx=f;i.jsxs=f;u.exports=i;var e=u.exports;const d=({children:n,headline:t,...a})=>e.jsx("div",{className:"tw-my-8 lg:tw-grid lg:tw-grid-cols-12",children:e.jsxs("blockquote",{...a,className:"tw-rounded-lg tw-border tw-border-[#E5E5E5] tw-p-4 md:tw-p-6 lg:tw-col-span-8 lg:tw-col-start-3",children:[e.jsxs("figure",{className:"tw-relative tw-flex tw-justify-center tw-items-center tw-gap-x-4 md:tw-gap-x-6",children:[e.jsx("img",{src:"/avatar.png",className:"tw-w-14 tw-h-14 md:tw-w-[110px] md:tw-h-[110px] tw-rounded-full tw-bg-gray-100 tw-flex-shrink-0"}),e.jsxs("figcaption",{className:"tw-w-full",children:[e.jsx("p",{className:"tw-text-sm tw-text-black tw-font-body",children:"Der ADAC Produkt-Tipp von Dr. E"}),e.jsx("p",{className:"tw-hidden md:tw-block md:tw-mt-2 tw-text-headline  tw-text-black tw-font-body",children:t})]})]}),e.jsx("p",{className:"md:tw-hidden tw-mt-4 tw-text-headline tw-text-black tw-font-body",children:t}),e.jsxs("p",{className:"tw-mt-4 md:tw-mt-6 tw-text-quote tw-italic  tw-text-black tw-font-body",children:['"',n,'"']})]})});try{d.displayName="ProductTip",d.__docgenInfo={description:"",displayName:"ProductTip",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}}}}}catch{}const A={title:"ProductTip",component:d,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{headline:"Ganz einfach zur richtigen Wallbox - zum ADAC Vorteilspreis!",children:e.jsxs(e.Fragment,{children:["Sie interessieren sich für eine Wallbox für Ihren Firmenwagen? Dann prüfen Sie auch das"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/",target:"_self",children:"Wallbox-Angebot des ADAC"})," ","mit ADAC Mitgliedervorteilen. Hier können Sie auch direkt Ihren"," ",e.jsx("a",{href:"https://adac.wallbox-kaufen.shop/#shop",target:"_self",children:"Installationsbedarf"})," ","ermitteln oder einen"," ",e.jsx("a",{href:"https://adac.wallbox-kaufen.shop/#shop",target:"_self",children:"Vor-Ort Check"})," ","zur individuellen Beratung vereinbaren."]})}};var p,h,w;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: "Ganz einfach zur richtigen Wallbox - zum ADAC Vorteilspreis!",
    children: <>
        Sie interessieren sich für eine Wallbox für Ihren Firmenwagen? Dann
        prüfen Sie auch das{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/" target="_self">
          Wallbox-Angebot des ADAC
        </a>{" "}
        mit ADAC Mitgliedervorteilen. Hier können Sie auch direkt Ihren{" "}
        <a href="https://adac.wallbox-kaufen.shop/#shop" target="_self">
          Installationsbedarf
        </a>{" "}
        ermitteln oder einen{" "}
        <a href="https://adac.wallbox-kaufen.shop/#shop" target="_self">
          Vor-Ort Check
        </a>{" "}
        zur individuellen Beratung vereinbaren.
      </>
  }
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const D=["Default"];export{l as Default,D as __namedExportsOrder,A as default};
//# sourceMappingURL=ProductTip.stories-b32f0d9a.js.map
