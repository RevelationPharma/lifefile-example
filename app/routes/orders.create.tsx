// app/routes/orders.create.tsx
import React from "react";
import OrderForm from "~/components/OrderForm";
import { Card } from "~/components/ui/card";

export default function OrdersCreate() {
  return (
    <Card className={"m-auto max-w-lg p-4"}>
      <h1 className={"text-neutral-600 font-bold text-sm mb-4"}>Create a New Order</h1>
      <OrderForm />
    </Card>
  );
}
