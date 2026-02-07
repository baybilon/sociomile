import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { cookies } from "next/headers";
import { TenantSwitcher } from "./tenant-switcher";
import { NavUser } from "./nav-user";

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

export async function AppSidebar() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarHeader>
        <TenantSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: user.name, email: user.email }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
