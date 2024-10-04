"use client";
import { CloseButton } from "@components/atoms/CloseButton";
import { TaskEditPage } from "@components/organisms/TaskEditPage";

export default function Page() {
  function backClick() {
    window.history.back();
  }

  return (
    <div>
      <h1>Page</h1>
      <CloseButton onClick={backClick} />
      <p>hoge</p>
    </div>
  );
}
