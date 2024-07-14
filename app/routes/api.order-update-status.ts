// routes/api/update-order-status.ts
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@vercel/remix";
import { z } from "zod";

const updateOrderStatusSchema = z.object({
  orderId: z.number().int(),
  status: z.string(),
});

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.json();

  try {
    updateOrderStatusSchema.parse(formData);

    const response = await fetch(`https://api.lifefile.net/order/${formData.orderId}/status`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Vendor-ID": process.env.LIFEFILE_VENDOR_ID || "",
        "X-Location-ID": process.env.LIFEFILE_LOCATION_ID || "",
        "X-API-Network-ID": process.env.LIFEFILE_API_NETWORK_ID || "",
        Authorization: `Basic ${btoa(`${process.env.LIFEFILE_USERNAME}:${process.env.LIFEFILE_PASSWORD}`)}`,
      },
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
