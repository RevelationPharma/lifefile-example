// app/routes/orders.update-shipping.tsx
import React from "react";
import UpdateOrderShippingForm from "~/components/UpdateOrderShippingForm";
import { Card } from "~/components/ui/card";

export default function OrdersUpdateShipping() {
  return (
    <Card className={"m-auto max-w-lg p-4"}>
      <h1 className={"text-neutral-600 font-bold text-sm mb-4"}>Update Order Shipping</h1>
      <UpdateOrderShippingForm />
    </Card>
  );
}
