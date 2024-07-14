import type { User } from "~/services/auth.server";

export function isSuperAdmin(user?: User): boolean {
  return user?.profile.emails.some((email) => email.value === "bcharity@revelationpharma.com") ?? false;
}
