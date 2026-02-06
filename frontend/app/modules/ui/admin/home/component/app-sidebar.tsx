import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import { dataSideBar } from "@/data";
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

// AppSidebar now imports its data client-side to avoid passing
// non-serializable values (like icon components) from Server -> Client.
export async function AppSidebar() {
  const user = await getUser();

  if (!user) {
    return null; // Or return a basic empty Sidebar shell
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
