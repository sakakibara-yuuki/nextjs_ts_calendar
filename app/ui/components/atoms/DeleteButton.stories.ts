import type { Meta, StoryObj } from "@storybook/react";

import { DeleteButton } from "./DeleteButton";

const meta = {
  title: "Atoms/DeleteButton",
  component: DeleteButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof DeleteButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    size: "large",
  },
};
