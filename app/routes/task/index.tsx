import type { MetaFunction } from "@remix-run/cloudflare";
import { TaskComponent } from "~/components/task/taskComponent";
export const meta: MetaFunction = () => {
  return [
    { title: "landing" },
    {
      name: "",
      content: "",
    },
  ];
};

export default function Index() {
  return (
    <div className="w-fit m-auto p-7 rounded-2xl bg-white">
      <TaskComponent/>
    </div>
  );
}
