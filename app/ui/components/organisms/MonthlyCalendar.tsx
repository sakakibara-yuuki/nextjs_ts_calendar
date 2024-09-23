import styles from './styles.module.css';

export function MonthlyCalendar({ primary }: { primary: boolean }) {
  const month = 9;
  return (
    <div className={styles.container}>
      <p>1</p>
      <p>2</p>
      <p>2</p>
      <p>2</p>
      <p>2</p>
      <p>2</p>
      <p>2</p>
      <p>2</p>
      <p>2</p>
      <p>3</p>
    </div>
  );
}
