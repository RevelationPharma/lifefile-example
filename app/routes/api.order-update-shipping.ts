// routes/api/update-order-shipping.ts
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@vercel/remix";
import { z } from "zod";

const updateOrderShippingSchema = z.object({
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

    const response = await fetch(`https://api.lifefile.net/order/${formData.orderId}/shipping`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Vendor-ID": process.env.LIFEFILE_VENDOR_ID || "",
        "X-Location-ID": process.env.LIFEFILE_LOCATION_ID || "",
        "X-API-Network-ID": process.env.LIFEFILE_API_NETWORK_ID || "",
        Authorization: `Basic ${btoa(`${process.env.LIFEFILE_USERNAME}:${process.env.LIFEFILE_PASSWORD}`)}`,
      },
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
