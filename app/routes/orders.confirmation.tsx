import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@vercel/remix";
import React from "react";
import { Card } from "~/components/ui/card";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const orderId = url.searchParams.get("orderId");

  return json({ orderId });
};

export default function OrdersConfirmation() {
  const { orderId } = useLoaderData<typeof loader>();

  return (
    <Card className="m-auto max-w-lg p-4">
      <h1 className="text-neutral-600 font-bold text-sm mb-4">Order placed!</h1>

      <div className="text-neutral-600 text-sm">
        <div>Your order has been placed successfully.</div>

        {Boolean(orderId) && (
          <div>
            Your order number is <strong>{orderId}</strong>.
          </div>
        )}
      </div>
    </Card>
  );
}
