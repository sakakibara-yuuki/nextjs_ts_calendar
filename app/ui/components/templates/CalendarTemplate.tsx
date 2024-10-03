import styles from "./styles.module.css";
import { Pagination } from "../molecules/Pagination";
import { MonthlyCalendar } from "../organisms/MonthlyCalendar";
import { CreateTaskButton } from "../atoms/CreateTaskButton";
import { CalendarModeSelector } from "../atoms/CalendarModeSelector";
import { Header } from "../organisms/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div>
        <CreateTaskButton label={"新規作成"} />
      </div>
      {children}
      <MonthlyCalendar />
    </div>
  );
}
