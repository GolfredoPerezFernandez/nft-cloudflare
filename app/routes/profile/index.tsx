import type { MetaFunction } from "@remix-run/cloudflare";
import { ProfileComponent } from "~/components/profile/profileComponent";
export const meta: MetaFunction = () => {
  return [
    { title: "Profile" },
    {
      name: "",
      content: "",
    },
  ];
};

export default function Index() {
  return (
    <div className="w-fit m-auto p-7 rounded-2xl ">
      <ProfileComponent/>
    </div>
  );
}
