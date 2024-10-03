import { Meta, StoryObj } from "@storybook/react";
import { EventEditModal } from "./index";

const meta = {
  title: "Organisms/EventEditModal",
  component: EventEditModal,
  tags: ["autodocs"],
} satisfies Meta<typeof EventEditModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
