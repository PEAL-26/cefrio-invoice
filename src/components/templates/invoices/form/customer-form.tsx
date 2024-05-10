"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { useState } from "react";

export function CustomerForm() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
    setItems(
      Array.from({ length: 10 }).map((item) => event.query + "-" + item)
    );
  };

  return (
    <div className="flex flex-col max-w-lg ">
      <h2 className="text-lg font-semibold mb-4 w-full">Cliente</h2>
      <div className="grid grid-cols-2 gap-6 ">
        <div className="col-span-2">
          <Label htmlFor="customer-name">Nome do cliente</Label>
          <Input id="customer-name" placeholder="John Doe" type="text" />
          <AutoComplete
            value={value}
            suggestions={items}
            completeMethod={search}
            onChange={(e) => setValue(e.value)}
          />
        </div>
        <div>
          <Label htmlFor="customer-telephone">Telefone</Label>
          <Input
            id="customer-telephone"
            placeholder="900 00 00 00"
            type="text"
          />
        </div>
        <div>
          <Label htmlFor="customer-contribuinte">Contribuinte</Label>
          <Input id="customer-contribuinte" />
        </div>
        <div className="col-span-2">
          <Label htmlFor="customer-address">Endereço</Label>
          <Textarea
            id="customer-address"
            placeholder="123 Main St, Anytown USA"
          />
        </div>
      </div>
    </div>
  );
}
