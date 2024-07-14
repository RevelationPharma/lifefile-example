// app/routes/create-order.tsx
import type { LoaderFunction, LoaderFunctionArgs } from "@vercel/remix";
import { AnimatePresence } from "framer-motion";
import React from "react";
import OrderForm from "~/components/OrderForm";

export const loader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {};

export default function CreateOrder() {
  return (
    <div className="grid gap-6 h-full">
      <AnimatePresence>
        <div className={"m-auto max-w-md"}>
          <h1>Create a New Order</h1>
          <OrderForm />
        </div>
      </AnimatePresence>
    </div>
  );
}
