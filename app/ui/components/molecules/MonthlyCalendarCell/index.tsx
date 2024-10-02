import styles from "../molecules.module.css";
import { useState } from "react";
import { Portal } from "@components/molecules/Portal";

interface MonthlyCalendarCellProps {
  date: Date;
  className?: string[] | string;
}

export function MonthlyCalendarCell({
  date = new Date(),
  className = [],
}: MonthlyCalendarCellProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={
        Array.isArray(className)
          ? [...className, styles.monthlyCalendarCell].join(" ")
          : `${className} ${styles.monthlyCalendarCell}`
      }
      onClick={() => setIsOpen(true)}
    >
      <p>{date.getDate()}</p>
      {isOpen && (
        <Portal>
          <div>
            Test Portal Content
            <button>Close</button>
          </div>
        </Portal>
      )}
    </div>
  );
}
