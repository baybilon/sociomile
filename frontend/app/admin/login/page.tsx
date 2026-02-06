import React from "react";
import { Navbar } from "@/app/modules/ui/admin/home/component/navbar";
import { SignIn } from "@/app/modules/ui/views/sign-in";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};
export default Page;
