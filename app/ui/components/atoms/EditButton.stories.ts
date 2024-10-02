import type { Meta, StoryObj } from "@storybook/react";

import { EditButton } from "./EditButton";

const meta = {
  title: "Atoms/EditButton",
  component: EditButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof EditButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    size: "large",
  },
};
