import { Meta, StoryObj } from '@storybook/react';
import { MonthlyCalendarCell } from './MonthlyCalendarCell';

const meta = {
  title: 'Molecules/MonthlyCalendarCell',
  component: MonthlyCalendarCell,
} satisfies Meta<typeof MonthlyCalendarCell>;

export default meta;


type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
