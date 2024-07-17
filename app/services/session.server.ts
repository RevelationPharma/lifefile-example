// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import { redirect } from "@vercel/remix";
import { createThemeSessionResolver } from "remix-themes";
import { isProduction } from "~/data/shared.server";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ["s3cr3t"], // replace this with an actual secret
    secure: isProduction, // enable this in prod only
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;

export async function requireUserSession(request: Request) {
  const cookie = request.headers.get("cookie");
  const session = await getSession(cookie);
  const user = session.get("user");

  if (!user) {
    throw redirect("/login");
  }

  return { session, user };
}

const sessionStorageTheme = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    secure: isProduction,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorageTheme);
