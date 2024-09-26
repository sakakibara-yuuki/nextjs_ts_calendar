import styles from "./molecules.module.css";
import { format } from "date-fns";
import { PaginationButton } from "../atoms/PaginationButton";

interface PaginationProps {
  date: Date;
}

// {
//   date && <p>{format(date, "yyyy/MM/dd")}</p>
// }
export function Pagination({ date = new Date() }: PaginationProps) {
  console.log(date);

  return (
    <div className={styles.pagination}>
      <PaginationButton leftAndRight="left" />
      <PaginationButton leftAndRight="right" />
    </div>
  );
}
