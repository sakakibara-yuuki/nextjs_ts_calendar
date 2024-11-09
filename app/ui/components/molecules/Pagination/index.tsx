import styles from "../molecules.module.css";
import { format } from "date-fns";
import { PaginationButton } from "@components/atoms/PaginationButton";

interface PaginationProps {
  date?: Date;
  routePrevious?: () => void;
  routeNext?: () => void;
}

export function Pagination({
  date = new Date(),
  routePrevious,
  routeNext,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      <PaginationButton leftAndRight="left" onClick={routePrevious} />
      <PaginationButton leftAndRight="right" onClick={routeNext} />
      <p>{date && format(date, "yyyy/MM")}</p>
    </div>
  );
}
