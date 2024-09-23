
export function WeeklyCalendarHeader() {
  const day = 9;
  return (
    <div>
      <div>
        日
        <p>{day - 1}</p>
      </div>
      <div>
        月
        <p>{day}</p>
      </div>
      <div>
        火
        <p>{day + 1}</p>
      </div>
      <div>
        水
        <p>{day + 2}</p>
      </div>
      <div>
        木
        <p>{day + 3}</p>
      </div>
      <div>
        金
        <p>{day + 4}</p>
      </div>
      <div>
        土
        <p>{day + 5}</p>
      </div>
    </div>
  );
}
