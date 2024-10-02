import type { Meta, StoryObj } from "@storybook/react";

import { TitleDisplay } from "./TitleDisplay";

const meta = {
  title: "Atoms/TitleDisplay",
  component: TitleDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof TitleDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
