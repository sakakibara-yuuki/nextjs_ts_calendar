import styles from "../molecules.module.css";
import { useState } from "react";
import { Portal } from "@components/molecules/Portal";
import { EventAddModal } from "@components/organisms/EventAddModal";

interface MonthlyCalendarCellProps {
  date: Date;
  className?: string[] | string;
}

export function MonthlyCalendarCell({
  date = new Date(),
  className = [],
}: MonthlyCalendarCellProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function modalOpen() {
    setIsModalOpen(true);
  }

  function modalClose(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    setIsModalOpen(false);
  }

  return (
    <div
      className={
        Array.isArray(className)
          ? [...className, styles.monthlyCalendarCell].join(" ")
          : `${className} ${styles.monthlyCalendarCell}`
      }
      onClick={modalOpen}
    >
      <p>{date.getDate()}</p>
      <div>{isModalOpen && <EventAddModal toggleModal={modalClose} />}</div>
    </div>
  );
}
