import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./index";

const meta = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
