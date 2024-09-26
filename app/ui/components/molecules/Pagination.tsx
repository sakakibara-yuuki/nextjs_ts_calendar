import styles from "./molecules.module.css";
import { format } from "date-fns";
import { PaginationButton } from "../atoms/PaginationButton";
import { useRouter } from "next/navigation";

interface PaginationProps {
  viewMode: string;
  date?: Date;
}

export function Pagination({ viewMode, date = new Date() }: PaginationProps) {
  const route = useRouter();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  function routeNext() {
    route.push(`/calendar/${viewMode}/${year}/${month + 1}/${day}`);
  }
  function routePrevious() {
    route.push(`/calendar/${viewMode}/${year}/${month - 1}/${day}`);
  }

  return (
    <div className={styles.pagination}>
      <PaginationButton leftAndRight="left" onClick={routePrevious} />
      <PaginationButton leftAndRight="right" onClick={routeNext} />
      <p>{date && format(date, "yyyy/MM")}</p>
    </div>
  );
}
