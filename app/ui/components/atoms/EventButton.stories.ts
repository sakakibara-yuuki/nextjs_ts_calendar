import type { Meta, StoryObj } from '@storybook/react';

import { EventButton } from './EventButton';

const meta = {
  title: 'Atoms/EventButton',
  component: EventButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: () => {console.log("hello")} },
} satisfies Meta<typeof EventButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    leftAndRight: 'right',
  },
};
