import { Meta, StoryObj } from "@storybook/react";
import RootLayout from "./CalendarTemplate";

const meta = {
  title: "Template/CalendarTemplate",
  component: RootLayout,
  tags: ["autodocs"],
} satisfies Meta<typeof RootLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
