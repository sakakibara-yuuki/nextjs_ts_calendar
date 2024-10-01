import type { Meta, StoryObj } from "@storybook/react";

import { CloseButton } from "./CloseButton";

const meta = {
  title: "Atoms/CloseButton",
  component: CloseButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    size: "large",
  },
};
