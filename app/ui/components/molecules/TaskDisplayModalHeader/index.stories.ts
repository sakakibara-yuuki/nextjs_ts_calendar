import { Meta, StoryObj } from "@storybook/react";
import { TaskDisplayModalHeader } from "../TaskDisplayModalHeader";

const meta = {
  title: "Molecules/TaskDisplayModalHeader",
  component: TaskDisplayModalHeader,
} satisfies Meta<typeof TaskDisplayModalHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
