import { type ActionFunction, json } from "@remix-run/node";
import { authenticate } from "~/services/authenticate.server";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type LifeFilePushData = any;

export const action: ActionFunction = async ({ request }) => {
  const authHeader = request.headers.get("Authorization");

  // Check for basic authentication
  if (!authHeader || !authenticate(authHeader)) {
    return new Response("Unauthorized", { status: 401 });
  }

  const contentType = request.headers.get("Content-Type");
  let data: LifeFilePushData;

  if (contentType === "application/json") {
    data = await request.json();
  } else if (contentType === "application/xml") {
    const text = await request.text();
    data = new DOMParser().parseFromString(text, "application/xml");
  } else {
    return new Response("Unsupported Media Type", { status: 415 });
  }

  try {
    // Process data (Rx Events, Order Statuses)
    console.log(data);

    return json({ message: "Data received successfully" }, { status: 200 });
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
};
