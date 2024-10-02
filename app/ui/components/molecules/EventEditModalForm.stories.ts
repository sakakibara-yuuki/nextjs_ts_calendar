import { Meta, StoryObj } from "@storybook/react";
import { EventEditModalForm } from "./EventEditModalForm";

const meta = {
  title: "Molecules/EventEditModalForm",
  component: EventEditModalForm,
} satisfies Meta<typeof EventEditModalForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
