import { Meta, StoryObj } from "@storybook/react";
import { MonthlyCalendar } from "./index";

const meta = {
  title: "Organisms/MonthlyCalendar",
  component: MonthlyCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof MonthlyCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
