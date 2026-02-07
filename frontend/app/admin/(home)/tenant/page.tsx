"use client";
import { DataTable } from "@/components/ui/data-table";
// import { mockUsers, User } from "@/data";

// import { createColumnHelper } from "@tanstack/react-table";
import { columns } from "./columns";
import { getTenants } from "@/lib/handler";
import { useEffect, useState } from "react";
import { Tenant } from "@/types/type";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

const Page = () => {
  const [data, setData] = useState<Tenant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTenants()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8">Loading tenants...</div>;
  return (
    <>
      <div className="flex flex-col gap-6 p-8 w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-1 border-b pb-4">
          <h1 className="text-2xl font-bold tracking-tight">Tenant List</h1>
          <p className="text-sm text-muted-foreground">A list of all tenant.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="ml-auto">
            {" "}
            <Button variant="outline" size="sm">
              <IconPlus />
              <span className="hidden lg:inline">Add Tenant</span>
            </Button>
          </div>

          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};
export default Page;
