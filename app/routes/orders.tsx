import { Outlet } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function Orders() {
  return (
    <div className="grid gap-6 h-full py-2">
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </div>
  );
}
