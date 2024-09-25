import styles from "./styles.module.css";
import { Pagination } from "../molecules/Pagination";
import { MonthlyCalendar } from "../organisms/MonthlyCalendar";
import { CreateEventButton } from "../atoms/CreateEventButton";
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
        <CreateEventButton label={"新規作成"} />
      </div>
      {children}
      <MonthlyCalendar />
    </div>
  );
}
