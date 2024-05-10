import Link from "next/link";
import { DataTable } from "@/components/ui/data-table";

import { columns } from "./columns";

export async function ListInvoices() {
  return (
    <div className="flex-col space-y-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Facturas</h2>
          <p className="text-muted-foreground">Listagem de facturas emitidas</p>
        </div>

        <Link href="/invoices/create">Emitir</Link>
      </div>
      <DataTable data={[]} columns={columns} />
    </div>
  );
}
