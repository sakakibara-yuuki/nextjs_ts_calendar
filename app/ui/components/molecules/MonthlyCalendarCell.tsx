import styles from "./molecules.module.css";
import { useState } from "react";
import { Portal } from "@components/molecules/Portal";

interface MonthlyCalendarCellProps {
  date: Date;
  className?: string[];
}

export function MonthlyCalendarCell({
  date = new Date(),
  className = [],
}: MonthlyCalendarCellProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={[...className, styles.monthlyCalendarCell].join(" ")}
      onClick={() => setIsOpen(true)}
    >
      <p>{date.getDate()}</p>
      {isOpen && (
        <Portal>
          <div>hogehoge</div>
        </Portal>
      )}
    </div>
  );
}
