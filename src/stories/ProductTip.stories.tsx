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

export const Default: Story = {
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
