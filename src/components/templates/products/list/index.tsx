import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";

export function ListProducts() {
  return (
    <div className="flex-col space-y-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Produtos\Serviços
          </h2>
          <p className="text-muted-foreground">Listagem de produtos\serviços</p>
        </div>

        <Button>Novo</Button>
      </div>
      <DataTable data={[]} columns={columns} />
    </div>
  );
}
