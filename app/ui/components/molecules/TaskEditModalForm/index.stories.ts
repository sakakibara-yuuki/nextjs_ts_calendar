import { Meta, StoryObj } from "@storybook/react";
import { TaskEditModalForm } from "../TaskEditModalForm";

const meta = {
  title: "Molecules/TaskEditModalForm",
  component: TaskEditModalForm,
} satisfies Meta<typeof TaskEditModalForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
