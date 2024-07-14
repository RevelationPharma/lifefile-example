// routes/api.post-order.tsx
import * as process from "node:process";
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@vercel/remix";
import invariant from "tiny-invariant";

invariant(process.env.LIFEFILE_API_BASE, "Missing LIFEFILE_API_BASE");
invariant(process.env.LIFEFILE_VENDOR_ID, "Missing LIFEFILE_VENDOR_ID");
invariant(process.env.LIFEFILE_LOCATION_ID, "Missing LIFEFILE_LOCATION_ID");
invariant(process.env.LIFEFILE_API_NETWORK_ID, "Missing LIFEFILE_API_NETWORK_ID");
invariant(process.env.LIFEFILE_USERNAME, "Missing LIFEFILE_USERNAME");
invariant(process.env.LIFEFILE_PASSWORD, "Missing LIFEFILE_PASSWORD");

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const orderData = {
    message: {
      id: formData.get("referenceId"),
      sentTime: new Date().toISOString(),
    },
    order: {
      general: {
        memo: formData.get("memo"),
        referenceId: formData.get("referenceId"),
        statusId: "new",
      },
      prescriber: {
        npi: formData.get("npi"),
        licenseState: formData.get("licenseState"),
        lastName: formData.get("lastName"),
        firstName: formData.get("firstName"),
      },
      patient: {
        lastName: formData.get("lastName"),
        firstName: formData.get("firstName"),
        dateOfBirth: formData.get("dateOfBirth"),
        gender: formData.get("gender"),
      },
      rxs: [
        {
          drugName: formData.get("drugName"),
          quantity: formData.get("quantity"),
          directions: formData.get("directions"),
        },
      ],
    },
  };
  console.log("-_________orderData:", orderData);

  const response = await fetch(`${process.env.LIFEFILE_API_BASE}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Vendor-ID": process.env.LIFEFILE_VENDOR_ID || "",
      "X-Location-ID": process.env.LIFEFILE_LOCATION_ID || "",
      "X-API-Network-ID": process.env.LIFEFILE_API_NETWORK_ID || "",
      Authorization: `Basic ${btoa(`${process.env.LIFEFILE_USERNAME}:${process.env.LIFEFILE_PASSWORD}`)}`,
    },
    body: JSON.stringify(orderData),
  });

  console.log("Response:", response);

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  const result = await response.json();
  return json(result);
};
