"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
export const Navbar = () => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-2xl font-semibold")}>Sociomile</span>
      </Link>
      <div className="items-center gap-4 hidden lg:flex"></div>
      <div className="hidden lg:flex">
        <Button
          asChild
          variant="outline"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none hover:bg-black hover:text-white transition-colors text-lg"
        >
          <Link prefetch href="/sign-in">
            Agent
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none hover:bg-black hover:text-white transition-colors text-lg"
        >
          <Link prefetch href="/sign-up">
            Organization
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none hover:bg-black hover:text-white transition-colors text-lg"
        >
          <Link prefetch href="" onClick={logout}>
            Logout
          </Link>
        </Button>
      </div>

      <div className="flex lg:hidden sm:visible items-center justify-center">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          //   onClick={}
        >
          {/* <MenuIcon /> */}
        </Button>
      </div>
    </nav>
  );
};
