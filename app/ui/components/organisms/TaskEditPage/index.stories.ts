import { Meta, StoryObj } from "@storybook/react";
import { EventEditPage } from "./index";

const meta = {
  title: "Organisms/EventEditPage",
  component: EventEditPage,
  tags: ["autodocs"],
} satisfies Meta<typeof EventEditPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
