import type { Meta, StoryObj } from '@storybook/react';

import { CreateEventButton } from './CreateEventButton';

const meta = {
  title: 'Atoms/CreateEventButton',
  component: CreateEventButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {console.log("hello")} },
} satisfies Meta<typeof CreateEventButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "新規作成",
    size: "large"
  },
};
