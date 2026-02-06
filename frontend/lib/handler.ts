import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const API_BASE = "http://localhost:8000/api";

export const handleLogout = async (router: AppRouterInstance) => {
  try {
    const res = await fetch(`${API_BASE}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (res.ok) {
      router.push("/admin/login");
      router.refresh();
    } else {
      console.error("Logout failed at server level");
    }
  } catch (error) {
    console.error("Network error during logout:", error);
  }
};
