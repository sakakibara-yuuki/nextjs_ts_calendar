import { EventButton } from '../atoms/EventButton';

export function MonthlyCalendarCell (){
  const day = 9;
  return (
    <div>
      <p>{day}</p>
      <EventButton />
      <EventButton />
    </div>
  );
};
