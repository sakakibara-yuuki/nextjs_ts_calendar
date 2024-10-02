import { Meta, StoryObj } from "@storybook/react";
import { EventDisplayModalHeader } from "./EventDisplayModalHeader";

const meta = {
  title: "Molecules/EventDisplayModalHeader",
  component: EventDisplayModalHeader,
} satisfies Meta<typeof EventDisplayModalHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
