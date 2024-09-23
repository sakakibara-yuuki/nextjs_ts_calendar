import { Meta, StoryObj } from '@storybook/react';
import { WeeklyCalendarCell } from './WeeklyCalendarCell';

const meta = {
  title: 'Molecules/WeeklyCalendarCell',
  component: WeeklyCalendarCell,
} satisfies Meta<typeof WeeklyCalendarCell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
