// routes/api.post-order.tsx

import * as process from "node:process";
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@vercel/remix";
import { BASE_URL } from "~/data/constants";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const orderData = {
    message: {
      id: formData.get("referenceId"), // Adjust based on your needs
      sentTime: new Date().toISOString(), // Adjust based on your needs
    },
    order: {
      general: {
        memo: formData.get("memo"),
        referenceId: formData.get("referenceId"),
        statusId: "new", // Adjust based on your needs
      },
      prescriber: {
        npi: formData.get("npi"),
        licenseState: formData.get("licenseState"),
        lastName: formData.get("lastName"),
        firstName: formData.get("firstName"),
        // Add other fields as needed
      },
      patient: {
        lastName: formData.get("lastName"),
        firstName: formData.get("firstName"),
        dateOfBirth: formData.get("dateOfBirth"),
        gender: formData.get("gender"),
        address1: formData.get("address1"),
        city: formData.get("city"),
        state: formData.get("state"),
        zip: formData.get("zip"),
        country: formData.get("country"),
        // Add other fields as needed
      },
      rxs: [
        {
          drugName: formData.get("drugName"),
          quantity: formData.get("quantity"),
          directions: formData.get("directions"),
          // Add other fields as needed
        },
      ],
    },
  };
  console.log("orderData:", orderData);

  const response = await fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Vendor-ID": "11324", // Replace with actual Vendor ID
      "X-Location-ID": "110033", // Replace with actual Location ID
      "X-API-Network-ID": "233582", // Replace with actual API Network ID
      Authorization: `Basic ${btoa(`${process.env.USERNAME}:${process.env.PASSWORD}`)}`, // Replace with actual credentials
    },
    body: JSON.stringify(orderData),
  });

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  const result = await response.json();
  return json(result);
};
