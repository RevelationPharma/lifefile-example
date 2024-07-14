import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { CircleArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardTitle } from "./ui/card";

interface NavigationCardProps {
  description: ReactNode;
  icon?: ReactNode;
  id: number | string;
  isActive: boolean;
  link: string;
  subTitle?: string;
  title: string;
}

export function NavigationCard({ id, title, subTitle, description, icon, link, isActive }: NavigationCardProps) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={"max-w-full overflow-hidden e2e-navigation-card"}
      exit={{ opacity: 0, y: -10 }}
      initial={{ opacity: 0, y: -10 }}
      key={id}
      transition={{ duration: 0.2 }}
    >
      <NavLink key={id} to={link}>
        <Card
          className={clsx("hover:shadow-lg group transition hover:border hover:border-blue-300", {
            "border-blue-300 bg-blue-50 border": isActive,
          })}
        >
          <div className={"flex flex-col gap-1 p-2"}>
            <div className="flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              {icon}
            </div>
            <div
              title={subTitle}
              className="text-slate-400 font-mono tracking-widest uppercase text-xs overflow-hidden overflow-ellipsis"
            >
              {subTitle}
            </div>
            <div className="text-xs flex flex-row text-muted-foreground mt-2">
              <div>{description}</div>
            </div>
          </div>
          <div className="pb-2 flex flex-row justify-between px-2 gap-1 opacity-70 transition-opacity group-hover:opacity-100 items-center">
            <div className={"font-bold text-xs text-slate-300"}>{id}</div>
            <div
              className={
                "whitespace-nowrap text-blue-700 flex flex-row items-center gap-1 dark:text-blue-300 active:underline"
              }
            >
              <div>View</div>
              <CircleArrowRight size={16} />
            </div>
          </div>
        </Card>
      </NavLink>
    </motion.div>
  );
}
