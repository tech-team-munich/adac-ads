import{r as v}from"./index-c6dae603.js";var z={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=v,A=Symbol.for("react.element"),E=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,S=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function y(a,t,n){var r,s={},h=null,c=null;n!==void 0&&(h=""+n),t.key!==void 0&&(h=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)D.call(t,r)&&!C.hasOwnProperty(r)&&(s[r]=t[r]);if(a&&a.defaultProps)for(r in t=a.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:A,type:a,key:h,ref:c,props:s,_owner:S.current}}o.Fragment=E;o.jsx=y;o.jsxs=y;z.exports=o;var e=z.exports;const w=({children:a,headline:t,...n})=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:".tw-text-black,a{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity))}a{text-underline-offset:2px;text-decoration-thickness:2px;text-decoration-color:#0006}a:hover{text-decoration-color:#000000e6}.tw-relative{position:relative}.tw-m-0{margin:0}.tw-my-8{margin-top:2rem;margin-bottom:2rem}.tw-mt-4{margin-top:1rem}.tw-block{display:block}.tw-flex{display:flex}.tw-hidden{display:none}.tw-h-14{height:3.5rem}.tw-w-14{width:3.5rem}.tw-w-full{width:100%}.tw-flex-shrink-0{flex-shrink:0}.tw-items-center{align-items:center}.tw-justify-center{justify-content:center}.tw-gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.tw-rounded-full{border-radius:9999px}.tw-rounded-lg{border-radius:.5rem}.tw-border{border-width:1px}.tw-border-solid{border-style:solid}.tw-border-\\[\\#E5E5E5\\]{--tw-border-opacity:1;border-color:rgb(229 229 229 / var(--tw-border-opacity))}.tw-bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.tw-p-4{padding:1rem}.tw-align-middle{vertical-align:middle}.tw-font-body{font-family:MiloADAC,sans-serif}.tw-text-headline{font-size:18px;line-height:24px;font-weight:700}.tw-text-quote{font-size:24px;line-height:40px;font-weight:400}.tw-text-sm{font-size:.875rem;line-height:1.25rem}.tw-italic{font-style:italic}@media (min-width:768px){.md\\:tw-mt-2{margin-top:.5rem}.md\\:tw-mt-6{margin-top:1.5rem}.md\\:tw-block{display:block}.md\\:tw-hidden{display:none}.md\\:tw-h-\\[110px\\]{height:110px}.md\\:tw-w-\\[110px\\]{width:110px}.md\\:tw-gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.md\\:tw-p-6{padding:1.5rem}}@media (min-width:1024px){.lg\\:tw-col-span-8{grid-column:span 8/span 8}.lg\\:tw-col-start-3{grid-column-start:3}.lg\\:tw-grid{display:grid}.lg\\:tw-grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}}"}),e.jsx("div",{className:"tw-my-8 lg:tw-grid lg:tw-grid-cols-12",children:e.jsxs("blockquote",{...n,className:"tw-m-0 tw-rounded-lg tw-border tw-border-solid tw-border-[#E5E5E5] tw-p-4 md:tw-p-6 lg:tw-col-span-8 lg:tw-col-start-3",children:[e.jsxs("figure",{className:"tw-relative tw-m-0 tw-flex tw-items-center tw-justify-center tw-gap-x-4 md:tw-gap-x-6",children:[e.jsx("img",{src:"/avatar.png",className:"tw-block tw-h-14 tw-w-14 tw-flex-shrink-0 tw-rounded-full tw-bg-gray-100 tw-align-middle md:tw-h-[110px] md:tw-w-[110px]"}),e.jsxs("figcaption",{className:"tw-w-full",children:[e.jsx("p",{className:"tw-m-0 tw-font-body tw-text-sm tw-text-black",children:"Der ADAC Produkt-Tipp von Dr. E"}),e.jsx("p",{className:"tw-hidden tw-font-body tw-text-headline tw-text-black  md:tw-mt-2 md:tw-block",children:t})]})]}),e.jsx("p",{className:"tw-m-0 tw-mt-4 tw-font-body tw-text-headline tw-text-black md:tw-hidden",children:t}),e.jsxs("p",{className:"tw-m-0 tw-mt-4 tw-font-body tw-text-quote tw-italic  tw-text-black md:tw-mt-6",children:['"',a,'"']})]})})]});try{w.displayName="ProductTip",w.__docgenInfo={description:"",displayName:"ProductTip",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}}}}}catch{}const F={title:"ProductTip",component:w,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{headline:"Ganz einfach zur richtigen Wallbox - zum ADAC Vorteilspreis!",children:e.jsxs(e.Fragment,{children:["Sie interessieren sich für eine Wallbox für Ihren Firmenwagen? Dann prüfen Sie auch das"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/",target:"_self",children:"Wallbox-Angebot des ADAC"})," ","mit ADAC Mitgliedervorteilen. Hier können Sie auch direkt Ihren"," ",e.jsx("a",{href:"https://adac.wallbox-kaufen.shop/#shop",target:"_self",children:"Installationsbedarf"})," ","ermitteln oder einen"," ",e.jsx("a",{href:"https://adac.wallbox-kaufen.shop/#shop",target:"_self",children:"Vor-Ort Check"})," ","zur individuellen Beratung vereinbaren."]})}},l={args:{headline:"Der Vergleich lohnt sich - auf allen Ebenen!",children:e.jsxs(e.Fragment,{children:["Vergleichen Sie die Gesamtkosten von A bis Z, denn oft ergeben sich interessante Spareffekte. Der ADAC bietet attraktive"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/",target:"_self",children:"Angebote mit Mitgliedervorteilen"})," ","von"," ",e.jsx("a",{href:"https://www.adac.de/fahrzeugwelt/auto/?financeProduct=leasing&fuelType=elektro",target:"_self",children:"Fahrzeug-Leasing"})," ","und -",e.jsx("a",{href:"https://www.adac.de/fahrzeugwelt/auto/finanzierung/",target:"_self",children:"Finanzierung"})," ","über"," ",e.jsx("a",{href:"https://www.autoversicherung.adac.de/#/step1/pagestart",target:"_self",children:"E-Versicherung"}),","," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/",target:"_self",children:"E-Ladekarte"})," ","und"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/",target:"_self",children:"Wallbox"})," ","bis hin zum THG-Bonus."]})}},d={args:{headline:"Kennen Sie schon die ADAC E-Angebote?s",children:e.jsxs(e.Fragment,{children:["Die E-Mobilität kommt. Sichern Sie sich attraktive"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/",target:"_self",children:"ADAC Angebote mit Mitgliedervorteilen"})," ","bei"," ",e.jsx("a",{href:"https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro",target:"_self",children:"Fahrzeugkauf"}),", -"," ",e.jsx("a",{href:"https://www.adac.de/fahrzeugwelt/auto/?financeProduct=leasing&fuelType=elektro",target:"_self",children:"Leasing"})," ","und -",e.jsx("a",{href:"https://www.adac.de/fahrzeugwelt/auto/finanzierung/",target:"_self",children:"Finanzierung"}),","," ",e.jsx("a",{href:"https://www.autoversicherung.adac.de/#/step1/pagestart",target:"_self",children:"E-Versicherung"}),","," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/",target:"_self",children:"E-Ladekarte"})," ","und"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/",target:"_self",children:"Wallbox"})," ","bis hin zum"," ",e.jsx("a",{href:"https://www.adac.de/rund-ums-fahrzeug/e-angebote/thg-bonus/",target:"_self",children:"THG-Bonus"}),"."]})}};var g,u,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: "Der Vergleich lohnt sich - auf allen Ebenen!",
    children: <>
        Vergleichen Sie die Gesamtkosten von A bis Z, denn oft ergeben sich
        interessante Spareffekte. Der ADAC bietet attraktive{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/" target="_self">
          Angebote mit Mitgliedervorteilen
        </a>{" "}
        von{" "}
        <a href="https://www.adac.de/fahrzeugwelt/auto/?financeProduct=leasing&fuelType=elektro" target="_self">
          Fahrzeug-Leasing
        </a>{" "}
        und -
        <a href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/" target="_self">
          Finanzierung
        </a>{" "}
        über{" "}
        <a href="https://www.autoversicherung.adac.de/#/step1/pagestart" target="_self">
          E-Versicherung
        </a>
        ,{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/" target="_self">
          E-Ladekarte
        </a>{" "}
        und{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/" target="_self">
          Wallbox
        </a>{" "}
        bis hin zum THG-Bonus.
      </>
  }
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,_,k;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    headline: "Kennen Sie schon die ADAC E-Angebote?s",
    children: <>
        Die E-Mobilität kommt. Sichern Sie sich attraktive{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/" target="_self">
          ADAC Angebote mit Mitgliedervorteilen
        </a>{" "}
        bei{" "}
        <a href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro" target="_self">
          Fahrzeugkauf
        </a>
        , -{" "}
        <a href="https://www.adac.de/fahrzeugwelt/auto/?financeProduct=leasing&fuelType=elektro" target="_self">
          Leasing
        </a>{" "}
        und -
        <a href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/" target="_self">
          Finanzierung
        </a>
        ,{" "}
        <a href="https://www.autoversicherung.adac.de/#/step1/pagestart" target="_self">
          E-Versicherung
        </a>
        ,{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/" target="_self">
          E-Ladekarte
        </a>{" "}
        und{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/" target="_self">
          Wallbox
        </a>{" "}
        bis hin zum{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/thg-bonus/" target="_self">
          THG-Bonus
        </a>
        .
      </>
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const N=["_1","_2","_3"];export{i as _1,l as _2,d as _3,N as __namedExportsOrder,F as default};
//# sourceMappingURL=ProductTip.stories-136aa9e7.js.map
