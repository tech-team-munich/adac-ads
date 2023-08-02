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
    headline: "Mit der richtigen Beratung wird alles ganz einfach!",
    children: (
      <>
        Sie interessieren sich für eine Wallbox für Ihren Firmenwagen? Dann
        prüfen Sie auch das <a>Wallbox-Angebot des ADAC</a> mit
        Mitgliedervorteilen. Hier können Sie auch direkt Ihren{" "}
        <a>Installationsbedarf ermitteln</a> oder einen <a>Vor-Ort Check</a> zur
        individuellen Beratung vereinbaren.
      </>
    ),
  },
};
