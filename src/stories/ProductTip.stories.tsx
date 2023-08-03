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

export const _7: Story = {
  args: {
    headline: "Kennen Sie schon die ADAC E-Angebote?",
    children: (
      <>
        Sichern Sie sich beim Kauf Ihres E-Autos spezielle Konditionen und ADAC
        Vorteile: Prüfen Sie die{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          ADAC E-Angebote
        </a>{" "}
        für{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?financeProduct=leasing&fuelType=elektro"
          target="_self"
        >
          Fahrzeug-Leasing
        </a>{" "}
        und{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/"
          target="_self"
        >
          Finanzierung
        </a>
        .
      </>
    ),
  },
};

export const _8: Story = {
  args: {
    headline: "Kalkulieren Sie die Reichweite - und die Preise!",
    children: (
      <>
        Vergleichen Sie die Gesamtkosten von A bis Z, denn oft ergeben sich
        interessante Spareffekte. Der ADAC bietet attraktive{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          E-Angebote mit Mitgliedervorteilen
        </a>{" "}
        für{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          E-Fahrzeuge
        </a>
        , über{" "}
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

export const _9: Story = {
  args: {
    headline: "Kennen Sie schon die ADAC E-Angebote?",
    children: (
      <>
        Sichern Sie sich beim Kauf Ihres E-Autos spezielle Konditionen und ADAC
        Vorteile: Prüfen Sie die{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          ADAC E-Auto Angebote
        </a>{" "}
        für{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/leasing/elektroauto-leasing/"
          target="_self"
        >
          Leasing
        </a>{" "}
        oder{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/elektroauto-finanzierung/"
          target="_self"
        >
          Finanzierung
        </a>
        .
      </>
    ),
  },
};

export const _10: Story = {
  args: {
    headline: "Das Sparen lohnt sich - auf allen Ebenen!",
    children: (
      <>
        Vergleichen Sie die Gesamtkosten von A bis Z, denn oft ergeben sich
        interessante Spareffekte. Der ADAC bietet attraktive{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          E-Angebote mit Mitgliedervorteilen
        </a>{" "}
        für{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          E-Fahrzeuge
        </a>
        , über{" "}
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

export const _11: Story = {
  args: {
    headline: "Der THG Bonus lohnt sich für Motorräder besonders!",
    children: (
      <>
        Elektromotorräder werden mit dem gleichen Satz gefördert wie Autos:
        Sichern Sie sich also unbedingt die{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/thg-bonus/"
          target="_self"
        >
          260 € THG Bonus mit 20 Euro zusätzlichem ADAC Mitgliedervorteil
        </a>
        !
      </>
    ),
  },
};

export const _12: Story = {
  args: {
    headline: "Förderungen und Angebote kombinieren!",
    children: (
      <>
        Der ADAC bietet eine ganze Reihe an{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          E-Angeboten
        </a>{" "}
        mit speziellen Konditionen für Ihre E-Mobilität: Günstige{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          E-Leasing-Angebote
        </a>
        ,{" "}
        <a
          href="https://www.adac.bankelf.de/apps/afos/kalkulation"
          target="_self"
        >
          E-Autokredite
        </a>
        ,{" "}
        <a
          href="https://www.autoversicherung.adac.de/#/step1/pagestart"
          target="_self"
        >
          E-Versicherungen
        </a>
        ,{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          Wallboxen
        </a>
        ,{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/"
          target="_self"
        >
          E-Ladekarten
        </a>{" "}
        - und vieles mehr
      </>
    ),
  },
};

export const _13: Story = {
  args: {
    headline: "Günstiger laden mit dem ADAC!",
    children: (
      <>
        Prüfen Sie auch die{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          E-Angebote des ADAC
        </a>{" "}
        mit attraktiven Vorteilen für{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          Wallboxen
        </a>
        ,{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/"
          target="_self"
        >
          E-Ladekarten
        </a>{" "}
        und vielem mehr
      </>
    ),
  },
};

export const _14: Story = {
  args: {
    headline: "Kennen Sie schon die ADAC Solar-Angebote?",
    children: (
      <>
        Ob sich die Anschaffung einer PV-Anlage für Sie lohnt, können Sie ganz
        einfach mit dem{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/elektromobilitaet/laden/e-auto-solarstrom-laden/"
          target="_self"
        >
          ADAC Solarrechner
        </a>{" "}
        herausfinden.
      </>
    ),
  },
};

export const _15: Story = {
  args: {
    headline: "Kennen Sie schon die ADAC E-Angebote?",
    children: (
      <>
        Wer sich für den Kauf eines Elektroautos entscheidet, sollte auch die
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          ADAC E-Leasing-Angebote
        </a>{" "}
        prüfen. Hier können Sie sich spezielle Konditionen und ADAC Vorteile
        sichern
      </>
    ),
  },
};

export const _16: Story = {
  args: {
    headline: "Gesamtkosten drücken mit dem ADAC",
    children: (
      <>
        Prüfen Sie das{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          E-Angebot des ADAC
        </a>{" "}
        und senken Sie die Gesamtkosten Ihrer Elektromobilität: Vom{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          Fahrzeugleasing
        </a>{" "}
        und der{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/"
          target="_self"
        >
          {" "}
          Finanzierung
        </a>{" "}
        über die{" "}
        <a
          href="https://www.autoversicherung.adac.de/#/step1/pagestart"
          target="_self"
        >
          E-Versicherung
        </a>
        , den{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/thg-bonus/"
          target="_self"
        >
          THG Bonus
        </a>
        , bis zur{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/"
          target="_self"
        >
          Ladekarte
        </a>
        , die{" "}
        <a href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/">
          Wallbox
        </a>{" "}
        und das{" "}
        <a href="https://www.adac.de/fahrzeugwelt/solar/" target="_self">
          Solardach
        </a>{" "}
        gibt es eine Vielzahl an attraktiven Angeboten mit ADAC Vorteilen!
      </>
    ),
  },
};

export const _17: Story = {
  args: {
    headline: "Noch günstiger wird es mit dem ADAC!",
    children: (
      <>
        Für einige Modelle bietet der ADAC{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          attraktive Leasing-Angebote
        </a>{" "}
        mit ADAC-geprüften Konditionen und Vorteilen, wie z.B. Easy-BAFA ohne
        Antragsstellung: Sie profitieren direkt von der Förderung - und sparen
        so Zeit und Aufwand.
      </>
    ),
  },
};

export const _18: Story = {
  args: {
    headline: "Das Sparen lohnt sich - auf allen Ebenen! ",
    children: (
      <>
        Vergleichen Sie die Gesamtkosten von A bis Z, denn oft ergeben sich
        interessante Spareffekte. Der ADAC bietet eine ganze Reihe attraktiver
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/"
          target="_self"
        >
          E-Angebote
        </a>{" "}
        mit Mitgliedervorteilen von{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/?fuelType=elektro"
          target="_self"
        >
          Fahrzeugleasing
        </a>{" "}
        und{" "}
        <a
          href="https://www.adac.de/fahrzeugwelt/auto/finanzierung/"
          target="_self"
        >
          Finanzierung
        </a>
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

// Pannenschutz sollte eine Link haben -> Kein Link in excel
export const _19: Story = {
  args: {
    headline: "Sparen Sie Zeit, Geld und Nerven!",
    children: (
      <>
        Gerade Familien brauchen ein zeit- und nervenschonendes und bezahlbares
        Gesamtkonzept: Vom{" "}
        <a href="https://www.adac.de/fahrzeugwelt/solar/" target="_self">
          Solardach
        </a>{" "}
        über
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          {" "}
          Wallbox
        </a>
        ,{" "}
        <a
          href="https://www.autoversicherung.adac.de/#/step1/pagestart"
          target="_self"
        >
          Versicherung
        </a>
        ,{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/ladekarte/"
          target="_self"
        >
          Ladekarte
        </a>
        ,
        <a href="https://www.adac.de/fahrzeugwelt/" target="_self">
          Fahrzeug
        </a>
        bis zum Pannenschutz - Familien können sich auf die günstigen und fairen
        ADAC Angebote verlassen.
      </>
    ),
  },
};

export const _20: Story = {
  args: {
    headline:
      "Hochwertige Wallboxen und maßgeschneiderte Lösungen für die Installation",
    children: (
      <>
        Sie interessieren sich für eine Wallbox? Dann prüfen Sie auch die{" "}
        <a
          href="https://www.adac.de/rund-ums-fahrzeug/e-angebote/wallbox/"
          target="_self"
        >
          ADAC Angebote zu e-Charge Home.
        </a>
      </>
    ),
  },
};
