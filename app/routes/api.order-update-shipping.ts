// routes/api/update-order-shipping.ts
import * as process from "node:process";
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@vercel/remix";
import { z } from "zod";
import { API_HEADERS } from "~/data/shared.server";

export const updateOrderShippingSchema = z.object({
  orderId: z.number().int(),
  recipientType: z.enum(["clinic", "patient"]),
  recipientLastName: z.string().max(30),
  recipientFirstName: z.string().max(30),
  recipientPhone: z.string().max(16),
  recipientEmail: z.string().max(100),
  addressLine1: z.string().max(60),
  city: z.string().max(30),
  state: z.string().max(2),
  zipCode: z.string().max(10),
  country: z.string().max(2),
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json();

  try {
    updateOrderShippingSchema.parse(formData);

    const response = await fetch(`${process.env.LIFEFILE_API_BASE}/order/${formData.orderId}/shipping`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify({ shipping: formData }),
    });

    if (!response.ok) {
      throw new Error("Failed to update order shipping");
    }

    const result = await response.json();
    return json(result);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    return json({ error: error.message }, { status: 400 });
  }
};
