import invariant from "tiny-invariant";

export const isProduction = process.env.VERCEL_ENV === "production";
// export const isProduction = true;

invariant(process.env.LIFEFILE_API_BASE, "Missing LIFEFILE_API_BASE");
invariant(process.env.LIFEFILE_VENDOR_ID, "Missing LIFEFILE_VENDOR_ID");
invariant(process.env.LIFEFILE_LOCATION_ID, "Missing LIFEFILE_LOCATION_ID");
invariant(process.env.LIFEFILE_API_NETWORK_ID, "Missing LIFEFILE_API_NETWORK_ID");
invariant(process.env.LIFEFILE_USERNAME, "Missing LIFEFILE_USERNAME");
invariant(process.env.LIFEFILE_PASSWORD, "Missing LIFEFILE_PASSWORD");

export const API_HEADERS = {
  "Content-Type": "application/json",
  "X-Vendor-ID": process.env.LIFEFILE_VENDOR_ID || "",
  "X-Location-ID": process.env.LIFEFILE_LOCATION_ID || "",
  "X-API-Network-ID": process.env.LIFEFILE_API_NETWORK_ID || "",
  Authorization: `Basic ${btoa(`${process.env.LIFEFILE_USERNAME}:${process.env.LIFEFILE_PASSWORD}`)}`,
  "x-timezone-name": "America/New_York",
  "x-timezone-offset": "-300",
};
export const BASE_API_URL = process.env.LIFEFILE_API_BASE;
