import{r as x}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";var f={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=x,_=Symbol.for("react.element"),b=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,k=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function w(n,t,a){var r,s={},o=null,c=null;a!==void 0&&(o=""+a),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)y.call(t,r)&&!j.hasOwnProperty(r)&&(s[r]=t[r]);if(n&&n.defaultProps)for(r in t=n.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:_,type:n,key:o,ref:c,props:s,_owner:k.current}}i.Fragment=b;i.jsx=w;i.jsxs=w;f.exports=i;var e=f.exports;const p={color:"#000",fontSize:"18px",fontStyle:"normal",fontWeight:700,lineHeight:"24px"},d=({children:n,headline:t,...a})=>e.jsx("div",{className:"tw-my-8 lg:tw-grid lg:tw-grid-cols-12",children:e.jsxs("blockquote",{...a,className:"tw-rounded-lg tw-border tw-border-[#E5E5E5] tw-p-4 md:tw-p-6 tw-font-body lg:tw-col-span-8 lg:tw-col-start-3",children:[e.jsxs("figure",{className:"tw-relative tw-flex tw-justify-center tw-items-center tw-gap-x-4 md:tw-gap-x-6",children:[e.jsx("img",{src:"/avatar.png",className:"tw-w-14 tw-h-14 md:tw-w-[110px] md:tw-h-[110px] tw-rounded-full tw-bg-gray-100 tw-flex-shrink-0"}),e.jsxs("figcaption",{className:"tw-w-full",children:[e.jsx("p",{className:"tw-text-black tw-text-sm",children:"Der ADAC Produkt-Tipp von Dr. E"}),e.jsx("p",{className:"tw-hidden md:tw-block md:tw-mt-2",style:p,children:t})]})]}),e.jsx("p",{className:"md:tw-hidden tw-mt-4",style:p,children:t}),e.jsxs("p",{className:"tw-mt-4 md:tw-mt-6 tw-text-black tw-text-lg tw-leading-8 tw-italic [&>a]:tw-underline",children:['"',n,'"']})]})});try{d.displayName="ProductTip",d.__docgenInfo={description:"",displayName:"ProductTip",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}}}}}catch{}const D={title:"ProductTip",component:d,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{headline:"Ganz einfach zur richtigen Wallbox - zum ADAC Vorteilspreis!",children:e.jsxs(e.Fragment,{children:["Sie interessieren sich für eine Wallbox für Ihren Firmenwagen? Dann prüfen Sie auch das"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/",target:"_self",children:"Wallbox-Angebot des ADAC"})," ","mit ADAC Mitgliedervorteilen. Hier können Sie auch direkt Ihren"," ",e.jsx("a",{href:"https://adac.wallbox-kaufen.shop/#shop",target:"_self",children:"Installationsbedarf"})," ","ermitteln oder einen"," ",e.jsx("a",{href:"https://adac.wallbox-kaufen.shop/#shop",target:"_self",children:"Vor-Ort Check"})," ","zur individuellen Beratung vereinbaren."]})}};var h,u,m;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const S=["Default"];export{l as Default,S as __namedExportsOrder,D as default};
//# sourceMappingURL=ProductTip.stories-1a4cf464.js.map
