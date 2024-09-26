import lightStyle from "./ui/css/light.module.css";
import darkStyle from "./ui/css/dark.module.css";

import "./ui/globals.css";
import styles from "./page.module.css";

import { Header } from "@components/organisms/Header";
import { Sidebar } from "@components/organisms/Sidebar";

export interface ParamsProps {
  params: {
    calendarView: string;
    year: number;
    month: number;
    day: number;
  };
}

export async function generateMetadata({ params }: ParamsProps) {
  const today = new Date();
  return {
    title:
      params.year & params.month
        ? `${params.year}/${params.month}`
        : `${today.getFullYear()}/${today.getMonth() + 1}`,
    description: `This is the calendar about ${params.month} page`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: ParamsProps;
}>) {
  const theme: { dark: string; light: string } = {
    dark: darkStyle.dark,
    light: lightStyle.light,
  };

  return (
    <html lang="ja">
      <body className={theme.dark}>
        <div className={styles.container}>
          <Header className={[styles.header]} />
          <Sidebar className={[styles.sidebar]} />
          {children}
        </div>
      </body>
    </html>
  );
}
