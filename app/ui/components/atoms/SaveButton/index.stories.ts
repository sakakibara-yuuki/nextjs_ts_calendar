import type { Meta, StoryObj } from "@storybook/react";

import { SaveButton } from "./index";

const meta = {
  title: "Atoms/SaveButton",
  component: SaveButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof SaveButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
