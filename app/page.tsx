import { redirect } from "next/navigation";

export default function Home() {
  const today = new Date();

  return redirect(
    `calendar/view/month/${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}/`,
  );
}
