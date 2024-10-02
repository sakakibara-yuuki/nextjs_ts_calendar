import type { Meta, StoryObj } from "@storybook/react";

import { PaginationButton } from "./index";

const meta = {
  title: "Atoms/PaginationButton",
  component: PaginationButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof PaginationButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    leftAndRight: "right",
  },
};
