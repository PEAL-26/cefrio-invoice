import { Metadata } from "next";
import { ListInvoices } from "@/components/templates/invoices";

export const metadata: Metadata = {
  title: "Facturas",
};

export default async function InvoiceListPage() {
  return <ListInvoices />;
}
