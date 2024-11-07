import lightStyle from "./ui/css/light.module.css";
import darkStyle from "./ui/css/dark.module.css";

import "./ui/globals.css";
import type { ParamsProps } from "types/params";

export async function generateMetadata({ params }: ParamsProps) {
  const today = new Date();
  return {
    title: `${params.year ?? today.getFullYear()}/${params.month ?? today.getMonth() + 1}`,
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
      <body className={theme.dark}>{children}</body>
    </html>
  );
}
