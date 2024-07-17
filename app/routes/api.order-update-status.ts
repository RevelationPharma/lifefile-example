// routes/api/update-order-status.ts
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@vercel/remix";
import { z } from "zod";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";

export const updateOrderStatusSchema = z.object({
  orderId: z.number().int(),
  status: z.string(),
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json();

  try {
    updateOrderStatusSchema.parse(formData);

    const response = await fetch(`${BASE_API_URL}/order/${formData.orderId}/status`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify({ status: formData.status }),
    });

    if (!response.ok) {
      throw new Error("Failed to update order status");
    }

    const result = await response.json();
    return json(result);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  } catch (error: any) {
    return json({ error: error.message }, { status: 400 });
  }
};
