import type { Meta, StoryObj } from "@storybook/react";
import { DailyDisplay } from "./DailyDisplay";

const meta = {
  title: "Atoms/DailyDisplay",
  component: DailyDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof DailyDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    leftAndRight: "right",
  },
};
