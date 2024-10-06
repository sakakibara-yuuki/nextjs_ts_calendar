import { Meta, StoryObj } from "@storybook/react";
import { WeeklyCalendar } from "./index";

const meta = {
  title: "Organisms/WeeklyCalendar",
  component: WeeklyCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof WeeklyCalendar>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {},
};
