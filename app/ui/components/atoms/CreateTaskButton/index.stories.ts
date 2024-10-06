import type { Meta, StoryObj } from "@storybook/react";

import { CreateTaskButton } from "./index";

const meta = {
  title: "Atoms/CreateTaskButton",
  component: CreateTaskButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof CreateTaskButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
