import { Meta, StoryObj } from "@storybook/react";
import { WeeklyCalendarHeader } from "../WeeklyCalendarHeader";

const meta = {
  title: "Molecules/WeeklyCalendarHeader",
  component: WeeklyCalendarHeader,
} satisfies Meta<typeof WeeklyCalendarHeader>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
