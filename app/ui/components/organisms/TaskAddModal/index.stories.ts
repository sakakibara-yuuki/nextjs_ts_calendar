import { Meta, StoryObj } from "@storybook/react";
import { EventAddModal } from "./index";

const meta = {
  title: "Organisms/EventAddModal",
  component: EventAddModal,
  tags: ["autodocs"],
} satisfies Meta<typeof EventAddModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
