import type { Meta, StoryObj } from "@storybook/react";
import { DailyDisplay } from "./index";

const meta = {
  title: "Atoms/DailyDisplay",
  component: DailyDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof DailyDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
