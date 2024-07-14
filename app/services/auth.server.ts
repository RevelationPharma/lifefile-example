// app/services/auth.server.ts
import * as process from "node:process";
import { Authenticator } from "remix-auth";
import { type MicrosoftProfile, MicrosoftStrategy } from "remix-auth-microsoft";
import invariant from "tiny-invariant";
import { isProduction } from "~/data/shared";
import { sessionStorage } from "~/services/session.server";

export interface User {
  profile: MicrosoftProfile;
}

invariant(process.env.MS_CLIENT_ID, "MS_CLIENT_ID must be set");
invariant(process.env.MS_CLIENT_SECRET, "MS_CLIENT_SECRET must be set");
invariant(process.env.MS_TENANT_ID, "MS_TENANT_ID must be set");

export const authenticator = new Authenticator<User>(sessionStorage); //User is a custom user types you can define as you want

const microsoftStrategy = new MicrosoftStrategy(
  {
    clientId: process.env.MS_CLIENT_ID || "",
    clientSecret: process.env.MS_CLIENT_SECRET || "",
    redirectUri: isProduction
      ? "https://serverless-reporting.vercel.app/auth/microsoft/callback"
      : "http://localhost:3000/auth/microsoft/callback",
    tenantId: process.env.MS_TENANT_ID,
    scope: "openid profile email", // optional
    prompt: "login", // optional
  },
  async ({ profile }) => {
    return { profile };
  },
);

authenticator.use(microsoftStrategy);
