import { type ActionFunction, json } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunction } from "@vercel/remix";
import auth from "basic-auth";

// biome-ignore lint/suspicious/noExplicitAny: Shape not yet defined
type LifeFilePushData = any;

export const loader: LoaderFunction = async ({ request }) => {
  return json({ message: "This endpoint accepts POST requests only." });
};

export const action: ActionFunction = async ({ request }: ActionFunctionArgs) => {
  // console.log("Request: ", request.headers.get("Authorization"));
  const credentials = authenticate(request);
  console.log("Credentials: ", credentials);

  if (
    !credentials ||
    credentials.name !== process.env.LIFEFILE_USERNAME ||
    credentials.pass !== process.env.LIFEFILE_PASSWORD
  ) {
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
    console.log("Payload Data: ", data);

    return json({ message: "Data received successfully" }, { status: 200 });
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
};

// Define a wrapper function for `auth` that extracts the Authorization header
function authenticate(request: Request) {
  const authorizationHeader = request.headers.get("Authorization");
  if (!authorizationHeader) return null;

  // Construct a mock request object with the expected header format for `basic-auth`
  const mockReq = {
    headers: {
      authorization: authorizationHeader,
    },
  };

  // Call `auth` with the mock request object
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return auth(mockReq as any);
}
