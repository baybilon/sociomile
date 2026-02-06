import React from "react";
import { Navbar } from "@/app/modules/ui/admin/home/component/navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function getUser() {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt");

  const res = await fetch("http://localhost:8000/api/user", {
    method: "GET",
    headers: {
      Cookie: `jwt=${jwt?.value}`,
    },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

const Page = async () => {
  const user = await getUser();
  const cookieStore = await cookies();
  const session = cookieStore.get("jwt");
  if (!session) {
    redirect("/admin/login");
  }

  return <div>Home Admin {user.name}</div>;
};
export default Page;
