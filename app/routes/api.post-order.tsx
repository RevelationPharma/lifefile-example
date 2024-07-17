// routes/api.post-order.tsx
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@vercel/remix";
import { API_HEADERS, BASE_API_URL } from "~/data/shared.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const orderData = {
    message: {
      // NOTE: This ID should be unique and can reflect the ID from your own system.
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

  const response = await fetch(`${BASE_API_URL}/order`, {
    method: "POST",
    headers: { ...API_HEADERS },
    body: JSON.stringify(orderData),
  });

  console.log("Response:", response);

  if (!response.ok) {
    throw new Error("Failed to create order");
  }

  const result = await response.json();
  return json(result);
};
