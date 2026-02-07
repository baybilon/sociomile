"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Trash, Edit, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tenant } from "@/types/type";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleDeleteTenant } from "@/lib/handler";
import { toast } from "sonner";

export const columns: ColumnDef<Tenant>[] = [
  {
    accessorKey: "name",
    header: "Tenant Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    id: "actions",
    cell: ({ row }) => <ActionsCell tenant={row.original} />,
  },
];

const ActionsCell = ({ tenant }: { tenant: Tenant }) => {
  const router = useRouter();

  const onDelete = async () => {
    if (!confirm(`Are you sure you want to delete ${tenant.name}?`)) return;

    const success = await handleDeleteTenant(tenant.id, router);
    if (success) {
      toast.success("Tenant deleted successfully");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => router.push(`/admin/tenant/view/${tenant.id}`)}
        >
          <Eye className="mr-2 h-4 w-4" /> View
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => router.push(`/admin/tenant/edit/${tenant.id}`)}
        >
          <Edit className="mr-2 h-4 w-4" /> Edit
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={onDelete} variant="destructive">
          <Trash className="mr-2 h-4 w-4" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
