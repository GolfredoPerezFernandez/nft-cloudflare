import type { MetaFunction } from "@remix-run/cloudflare";
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
    <div className="pr-20 pl-20">
      <h1>sssss</h1>
    </div>
  );
}
