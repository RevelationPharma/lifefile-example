import * as process from "node:process";

export const isProduction = process.env.VERCEL_ENV === "production";
// export const isProduction = true;

export const DEFAULT_HEADERS = {
  "x-timezone-name": "America/New_York",
  "x-timezone-offset": "-300",
};

// export const BASE_API_URL = process.env.VERCEL_URL?.includes("local")
//   ? "http://localhost:3000"
//   : "https://lifefile-example.vercel.app";
export const BASE_API_URL = process.env.LIFEFILE_API_BASE ?? "localhost:3000";
