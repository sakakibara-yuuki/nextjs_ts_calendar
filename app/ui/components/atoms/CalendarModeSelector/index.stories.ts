import type { Meta, StoryObj } from "@storybook/react";

import { CalendarModeSelector } from "./index";

const meta = {
  title: "Atoms/CalendarModeSelector",
  component: CalendarModeSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: () => {
      console.log("hello");
    },
  },
} satisfies Meta<typeof CalendarModeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
