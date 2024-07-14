// app/routes/orders.update-status.tsx
import React from "react";
import UpdateOrderStatusForm from "~/components/UpdateOrderStatusForm";
import { Card } from "~/components/ui/card";

export default function OrdersUpdateStatus() {
  return (
    <Card className={"m-auto max-w-lg p-4"}>
      <h1 className={"text-neutral-600 font-bold text-sm mb-4"}>Update Order Status</h1>
      <UpdateOrderStatusForm />
    </Card>
  );
}
