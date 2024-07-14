// routes/_index.tsx
import { redirect } from "@remix-run/router";
import { LANDING_PAGE } from "~/data/constants";

export async function loader() {
  return redirect(LANDING_PAGE);
  // return null;
}

export default function Index() {
  return (
    <main>
      <p>Are you supposed to be here?</p>
    </main>
  );
}
