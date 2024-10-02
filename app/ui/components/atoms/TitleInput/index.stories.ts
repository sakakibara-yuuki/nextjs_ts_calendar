import type { Meta, StoryObj } from "@storybook/react";

import { TitleInput } from "./index";

const meta = {
  title: "Atoms/TitleInput",
  component: TitleInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof TitleInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    leftAndRight: "right",
  },
};
