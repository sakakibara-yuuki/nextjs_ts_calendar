import styles from "./molecules.module.css";
import { format } from "date-fns";
import { PaginationButton } from "../atoms/PaginationButton";

interface PaginationProps {
  date: Date;
}

export function Pagination({ date = new Date() }: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <PaginationButton leftAndRight="left" />
      <PaginationButton leftAndRight="right" />
      <p>{date && format(date, "yyyy/MM")}</p>
    </div>
  );
}
