import type { Meta, StoryObj } from "@storybook/react";

import { ProductTip } from "./ProductTip";

const meta = {
  title: "ProductTip",
  component: ProductTip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _1: Story = {
  args: {
    headline: "Ganz einfach zur richtigen Wallbox - zum ADAC Vorteilspreis!",
    children: (
      <>
        Sie interessieren sich für eine Wallbox für Ihren Firmenwagen? Dann
        prüfen Sie auch das{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
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
    ),
  },
};

export const _2: Story = {
  args: {
    headline: "Der Vergleich lohnt sich - auf allen Ebenen!",
    children: (
      <>
        Vergleichen Sie die Gesamtkosten von A bis Z, denn oft ergeben sich
        interessante Spareffekte. Der ADAC bietet attraktive{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          Angebote mit Mitgliedervorteilen
        </a>{" "}
        von{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?financeProduct=leasing&fuelType=elektro"
          target="_self"
        >
          Fahrzeug-Leasing
        </a>{" "}
        und -
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/"
          target="_self"
        >
          Finanzierung
        </a>{" "}
        über{" "}
        <a
          href="https://www.autoversicherung.adac.de/#/step1/pagestart"
          target="_self"
        >
          E-Versicherung
        </a>
        ,{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/"
          target="_self"
        >
          E-Ladekarte
        </a>{" "}
        und{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          Wallbox
        </a>{" "}
        bis hin zum THG-Bonus.
      </>
    ),
  },
};

export const _3: Story = {
  args: {
    headline: "Kennen Sie schon die ADAC E-Angebote?",
    children: (
      <>
        Die E-Mobilität kommt. Sichern Sie sich attraktive{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          ADAC Angebote mit Mitgliedervorteilen
        </a>{" "}
        bei{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          Fahrzeugkauf
        </a>
        , -{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?financeProduct=leasing&fuelType=elektro"
          target="_self"
        >
          Leasing
        </a>{" "}
        und -
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/"
          target="_self"
        >
          Finanzierung
        </a>
        ,{" "}
        <a
          href="https://www.autoversicherung.adac.de/#/step1/pagestart"
          target="_self"
        >
          E-Versicherung
        </a>
        ,{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/"
          target="_self"
        >
          E-Ladekarte
        </a>{" "}
        und{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          Wallbox
        </a>{" "}
        bis hin zum{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/thg-bonus/"
          target="_self"
        >
          THG-Bonus
        </a>
        .
      </>
    ),
  },
};

export const _4: Story = {
  args: {
    headline: "Günstiger laden mit dem ADAC!",
    children: (
      <>
        Der ADAC bietet eine ganze Reihe an attraktiven Angeboten rund um das
        Laden Ihres E-Autos: Von der{" "}
        <a href="https://www.adac.de/fahrzeugwelt/solar/" target="_self">
          PV-Anlage
        </a>{" "}
        über die{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          Wallbox
        </a>{" "}
        bis zur{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/"
          target="_self"
        >
          E-Ladekarte
        </a>
        .
      </>
    ),
  },
};

export const _5: Story = {
  args: {
    headline: "Kennen Sie die ADAC Wallbox Angebote und Services?",
    children: (
      <>
        Wenn Sie eine Wallbox kaufen möchten, prüfen Sie auch das
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          Wallbox-Angebot
        </a>{" "}
        des ADAC mit Mitgliedervorteilen. Hier können Sie direkt Ihren
        <a href="https://adac.wallbox-kaufen.shop/#shop" target="_self">
          Installationsbedarf
        </a>{" "}
        ermitteln oder einen{" "}
        <a href="https://adac.wallbox-kaufen.shop/#shop" target="_self">
          Vor-Ort Check
        </a>{" "}
        vereinbaren.
      </>
    ),
  },
};

export const _6: Story = {
  args: {
    headline: "Schnell und stressfrei zur BAFA Prämie",
    children: (
      <>
        Die ADAC Fahrzeugwelt bietet zahlreiche{" "}
        <a href="https://www.adac.de/fahrzeugwelt/" target="_self">
          Fahrzeugleasing- und Finanzierungsangebote
        </a>{" "}
        mit attraktiven Sonderkonditionen. Sie müssen keinen BAFA Antrag stellen
        und profitieren direkt von der Förderung - das spart Zeit und Aufwand!
      </>
    ),
  },
};
