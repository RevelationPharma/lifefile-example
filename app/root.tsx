// ~/root.tsx
import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from "@vercel/remix";

import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";

import { clsx } from "clsx";
import { useEffect } from "react";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import { Header } from "~/components/header";
import { Toaster } from "~/components/ui/toaster";
import { themeSessionResolver } from "~/services/session.server";
import mainCss from "~/styles/main.css";
import tailwindStyles from "~/styles/tailwind.css";

export async function loader({ request }: LoaderFunctionArgs) {
  if (request.method === "OPTIONS") {
    const headers = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    });
    return new Response(null, { headers, status: 204 });
  }
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { name: "charset", content: "utf-8" },
    { name: "title", content: "LifeFile Example" },
    {
      name: "description",
      content: "An example application that interfaces with LifeFile.",
    },
    // { name: 'twitter:card', content: 'summary_large_image' },
    // { name: 'twitter:site', content: '@vercel' },
    // { name: 'twitter:creator', content: '@vercel' },
    // { name: 'twitter:title', content: 'Remix on Vercel' },
    // { name: 'twitter:description', content: 'HTML, dynamically rendered in a city near you' },
    // { name: 'twitter:image', content: `https://${data?.host}/og-card.png` },
    // { name: 'twitter:image:alt', content: 'The Vercel and Remix logos' },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStyles },
    { rel: "stylesheet", href: mainCss },
  ];
};

// Wrap your app with ThemeProvider.
// `specifiedTheme` is the stored theme in the session storage.
// `themeAction` is the action name that's used to change the theme in the session storage.
export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  // Conditionally import Flowbite only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("flowbite");
    }
  }, []);

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Toaster />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
