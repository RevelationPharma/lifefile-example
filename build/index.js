var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
import { RemixServer } from "@remix-run/react";
import { handleRequest } from "@vercel/remix";
import { jsxDEV } from "react/jsx-dev-runtime";
function entry_server_default(request, responseStatusCode, responseHeaders, remixContext) {
  let remixServer = /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.jsx",
    lineNumber: 6,
    columnNumber: 23
  }, this);
  return handleRequest(request, responseStatusCode, responseHeaders, remixServer);
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  App: () => App,
  default: () => AppWithProviders,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { clsx as clsx3 } from "clsx";
import { useEffect as useEffect2 } from "react";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme as useTheme2 } from "remix-themes";

// app/components/header.tsx
import { NavLink as NavLink2 } from "@remix-run/react";

// app/components/ui/link.tsx
import { NavLink } from "@remix-run/react";
import { clsx as clsx2 } from "clsx";

// app/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

// app/components/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/button.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-100/90",
        destructive: "bg-red-500 text-slate-100 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-100 dark:hover:bg-red-900/90",
        destructiveOutline: "border border-red-500 bg-transparent hover:bg-red-500 text-red-500 hover:text-slate-50 dark:border-red-900 dark:bg-transparent dark:hover:bg-red-900 dark:hover:text-slate-100",
        outline: "border text-neutral-800 border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:text-slate-500 dark:border-slate-600 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        secondary: "bg-blue-100 border border-blue-400 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/80",
        ghost: "hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100",
        destructiveGhost: "text-red-600 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-100",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV2(asChild ? Slot : "button", { className: cn(buttonVariants({ variant, size, className })), ref, ...props }, void 0, !1, {
    fileName: "app/components/ui/button.tsx",
    lineNumber: 50,
    columnNumber: 12
  }, this)
);
Button.displayName = "Button";
var ButtonWithIcon = React.forwardRef(({ children, ...props }, ref) => /* @__PURE__ */ jsxDEV2(Button, { ref, ...props, children: /* @__PURE__ */ jsxDEV2("span", { className: "flex items-center gap-2 justify-center", children }, void 0, !1, {
  fileName: "app/components/ui/button.tsx",
  lineNumber: 58,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/ui/button.tsx",
  lineNumber: 57,
  columnNumber: 5
}, this));
Button.displayName = "ButtonWithIcon";

// app/components/ui/link.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function NavigationLink({ className = "", ...rest }) {
  return /* @__PURE__ */ jsxDEV3(
    NavLink,
    {
      className: ({ isActive }) => clsx2(buttonVariants({ variant: "ghost" }), {
        "bg-slate-200 dark:bg-slate-800 cursor-default": isActive,
        [`${className}`]: !0
      }),
      ...rest
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/link.tsx",
      lineNumber: 34,
      columnNumber: 5
    },
    this
  );
}

// app/components/ui/mode-toggle.tsx
import { Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

// app/components/ui/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React2 from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React2.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV4(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 44,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React2.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV4(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 60,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 59,
  columnNumber: 3
}, this));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 79,
    columnNumber: 3
  },
  this
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React2.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV4("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV4(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV4(Check, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 104,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 95,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV4("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV4(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV4(Circle, { className: "h-2 w-2 fill-current" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 118,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React2.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 142,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV4(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 154,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => /* @__PURE__ */ jsxDEV4("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 163,
  columnNumber: 10
}, this);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// app/components/ui/mode-toggle.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function ModeToggle() {
  let [, setTheme] = useTheme();
  return /* @__PURE__ */ jsxDEV5(DropdownMenu, { children: [
    /* @__PURE__ */ jsxDEV5(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV5(Button, { variant: "ghost", size: "icon", children: [
      /* @__PURE__ */ jsxDEV5(Sun, { className: "dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" }, void 0, !1, {
        fileName: "app/components/ui/mode-toggle.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }, void 0, !1, {
        fileName: "app/components/ui/mode-toggle.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("span", { className: "sr-only", children: "Toggle theme" }, void 0, !1, {
        fileName: "app/components/ui/mode-toggle.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/mode-toggle.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/mode-toggle.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsxDEV5(DropdownMenuItem, { onClick: () => setTheme(Theme.LIGHT), children: "Light" }, void 0, !1, {
        fileName: "app/components/ui/mode-toggle.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(DropdownMenuItem, { onClick: () => setTheme(Theme.DARK), children: "Dark" }, void 0, !1, {
        fileName: "app/components/ui/mode-toggle.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/mode-toggle.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/mode-toggle.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/header.tsx
import { Fragment, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function NavLinks() {
  return /* @__PURE__ */ jsxDEV6(Fragment, { children: [
    /* @__PURE__ */ jsxDEV6(NavigationLink, { to: "/orders/create", children: "Create Order" }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(NavigationLink, { to: "/orders/update-status", children: "Update Status" }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(NavigationLink, { to: "/orders/update-shipping", children: "Update Shipping" }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
function Header() {
  return /* @__PURE__ */ jsxDEV6("header", { className: "relative flex-shrink-0 header-fade bg-lightBg dark:bg-neutral-950 top-0 flex h-16 items-center gap-4 border-b border-b-neutral-300 dark:border-b-neutral-700 bg-background px-4 md:px-6", children: [
    /* @__PURE__ */ jsxDEV6("nav", { className: "hidden flex-col gap-6 font-medium text-lg md:flex md:flex-row md:items-center lg:gap-6 md:gap-5 md:text-sm", children: [
      /* @__PURE__ */ jsxDEV6(NavLink2, { to: "#", className: "flex dark:text-white items-center gap-2 font-semibold text-lg md:text-base", children: [
        /* @__PURE__ */ jsxDEV6(
          "img",
          {
            alt: "Revelation Pharma",
            className: "w-[160px] min-w-[72px] hover:scale-125 transition-transform",
            src: "/logo-RevPharma.png"
          },
          void 0,
          !1,
          {
            fileName: "app/components/header.tsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV6("span", { className: "sr-only", children: "Revelation Pharma" }, void 0, !1, {
          fileName: "app/components/header.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/header.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(NavLinks, {}, void 0, !1, {
        fileName: "app/components/header.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/header.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "flex w-full items-center justify-end gap-4 md:ml-auto lg:gap-4 md:gap-2", children: /* @__PURE__ */ jsxDEV6(ModeToggle, {}, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/header.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/components/ui/toast.tsx
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva2 } from "class-variance-authority";
import { X } from "lucide-react";
import * as React3 from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var ToastProvider = ToastPrimitives.Provider, ToastViewport = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva2(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-neutral-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-neutral-800",
  {
    variants: {
      variant: {
        default: "border bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50",
        destructive: "destructive group border-red-500 bg-red-500 text-neutral-50 dark:border-red-900 dark:bg-red-900 dark:text-neutral-50",
        success: "border-teal-600 bg-teal-700 text-neutral-50 dark:border-teal-300 dark:bg-teal-200 dark:text-neutral-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Toast = React3.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxDEV7(ToastPrimitives.Root, { ref, className: cn("e2e-toast", toastVariants({ variant }), className), ...props }, void 0, !1, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 48,
  columnNumber: 5
}, this));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-neutral-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-neutral-50 group-[.destructive]:focus:ring-red-500 dark:border-neutral-800 dark:ring-offset-neutral-950 dark:hover:bg-neutral-800 dark:focus:ring-neutral-300 dark:group-[.destructive]:border-neutral-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-neutral-50 dark:group-[.destructive]:focus:ring-red-900",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 57,
    columnNumber: 3
  },
  this
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-neutral-950/50 opacity-50 transition-opacity hover:text-neutral-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-neutral-50/50 dark:hover:text-neutral-50",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV7(X, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/toast.tsx",
      lineNumber: 81,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 72,
    columnNumber: 3
  },
  this
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 90,
  columnNumber: 3
}, this));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(ToastPrimitives.Description, { ref, className: cn("e2e-toast-message text-sm opacity-90", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/toast.tsx",
  lineNumber: 98,
  columnNumber: 3
}, this));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// app/components/ui/use-toast.ts
import * as React4 from "react";
import { useEffect } from "react";
var TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_SAFE_INTEGER, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action6) => {
  switch (action6.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action6.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action6.toast.id ? { ...t, ...action6.toast } : t)
      };
    case "DISMISS_TOAST": {
      let { toastId } = action6;
      if (toastId)
        addToRemoveQueue(toastId);
      else
        for (let toast1 of state.toasts)
          addToRemoveQueue(toast1.id);
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action6.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action6.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action6) {
  memoryState = reducer(memoryState, action6);
  for (let listener of listeners)
    listener(memoryState);
}
function toast({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React4.useState(memoryState);
  return useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// app/components/ui/toaster.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function Toaster() {
  let { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV8(ToastProvider, { children: [
    toasts.map(({ id, title, description, action: action6, ...props }) => /* @__PURE__ */ jsxDEV8(Toast, { ...props, children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "grid gap-1", children: [
        title && /* @__PURE__ */ jsxDEV8(ToastTitle, { children: title }, void 0, !1, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 12,
          columnNumber: 23
        }, this),
        description && /* @__PURE__ */ jsxDEV8(ToastDescription, { children: description }, void 0, !1, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 13,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/toaster.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      action6,
      /* @__PURE__ */ jsxDEV8(ToastClose, {}, void 0, !1, {
        fileName: "app/components/ui/toaster.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this)
    ] }, id, !0, {
      fileName: "app/components/ui/toaster.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this)),
    /* @__PURE__ */ jsxDEV8(ToastViewport, {}, void 0, !1, {
      fileName: "app/components/ui/toaster.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/toaster.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import { redirect } from "@vercel/remix";
import { createThemeSessionResolver } from "remix-themes";

// app/data/shared.server.ts
import invariant from "tiny-invariant";
var isProduction = process.env.VERCEL_ENV === "production";
invariant(process.env.LIFEFILE_API_BASE, "Missing LIFEFILE_API_BASE");
invariant(process.env.LIFEFILE_VENDOR_ID, "Missing LIFEFILE_VENDOR_ID");
invariant(process.env.LIFEFILE_LOCATION_ID, "Missing LIFEFILE_LOCATION_ID");
invariant(process.env.LIFEFILE_API_NETWORK_ID, "Missing LIFEFILE_API_NETWORK_ID");
invariant(process.env.LIFEFILE_USERNAME, "Missing LIFEFILE_USERNAME");
invariant(process.env.LIFEFILE_PASSWORD, "Missing LIFEFILE_PASSWORD");
var API_HEADERS = {
  "Content-Type": "application/json",
  "X-Vendor-ID": process.env.LIFEFILE_VENDOR_ID || "",
  "X-Location-ID": process.env.LIFEFILE_LOCATION_ID || "",
  "X-API-Network-ID": process.env.LIFEFILE_API_NETWORK_ID || "",
  Authorization: `Basic ${btoa(`${process.env.LIFEFILE_USERNAME}:${process.env.LIFEFILE_PASSWORD}`)}`,
  "x-timezone-name": "America/New_York",
  "x-timezone-offset": "-300"
}, BASE_API_URL = process.env.LIFEFILE_API_BASE;

// app/services/session.server.ts
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    // use any name you want here
    sameSite: "lax",
    // this helps with CSRF
    path: "/",
    // remember to add this so the cookie will work in all routes
    httpOnly: !0,
    // for security reasons, make this cookie http only
    secrets: ["s3cr3t"],
    // replace this with an actual secret
    secure: isProduction
    // enable this in prod only
  }
}), { getSession, commitSession, destroySession } = sessionStorage;
var sessionStorageTheme = createCookieSessionStorage({
  cookie: {
    name: "theme",
    path: "/",
    httpOnly: !0,
    sameSite: "lax",
    secrets: ["s3cr3t"],
    secure: isProduction
  }
}), themeSessionResolver = createThemeSessionResolver(sessionStorageTheme);

// app/styles/main.css
var main_default = "/build/_assets/main-HP57OQ2U.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PYTMOTCO.css";

// app/root.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
async function loader({ request }) {
  if (request.method === "OPTIONS") {
    let headers = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400"
    });
    return new Response(null, { headers, status: 204 });
  }
  let { getTheme } = await themeSessionResolver(request);
  return {
    ENV: {
      PRODUCTION: process.env.VERCEL_ENV === "production"
    },
    theme: getTheme()
  };
}
var meta = ({ data }) => [
  { name: "charset", content: "utf-8" },
  { name: "title", content: "LifeFile Example" },
  {
    name: "description",
    content: "An example application that interfaces with LifeFile."
  },
  // { name: 'twitter:card', content: 'summary_large_image' },
  // { name: 'twitter:site', content: '@vercel' },
  // { name: 'twitter:creator', content: '@vercel' },
  // { name: 'twitter:title', content: 'Remix on Vercel' },
  // { name: 'twitter:description', content: 'HTML, dynamically rendered in a city near you' },
  // { name: 'twitter:image', content: `https://${data?.host}/og-card.png` },
  // { name: 'twitter:image:alt', content: 'The Vercel and Remix logos' },
  { name: "viewport", content: "width=device-width,initial-scale=1" }
], links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: main_default }
];
function AppWithProviders() {
  let data = useLoaderData();
  return /* @__PURE__ */ jsxDEV9(ThemeProvider, { specifiedTheme: data.theme, themeAction: "/action/set-theme", children: /* @__PURE__ */ jsxDEV9(App, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
function App() {
  let data = useLoaderData(), [theme] = useTheme2();
  return useEffect2(() => {
    typeof window < "u" && import("flowbite");
  }, []), /* @__PURE__ */ jsxDEV9("html", { lang: "en", className: clsx3(theme), children: [
    /* @__PURE__ */ jsxDEV9("head", { children: [
      /* @__PURE__ */ jsxDEV9("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(PreventFlashOnWrongTheme, { ssrTheme: Boolean(data.theme) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("body", { children: [
      /* @__PURE__ */ jsxDEV9(Header, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(Toaster, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 97,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV9(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV9(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 84,
    columnNumber: 5
  }, this);
}

// app/routes/api.order-update-shipping.ts
var api_order_update_shipping_exports = {};
__export(api_order_update_shipping_exports, {
  action: () => action,
  updateOrderShippingSchema: () => updateOrderShippingSchema
});
import * as process2 from "node:process";
import { json } from "@remix-run/node";
import { z } from "zod";
var updateOrderShippingSchema = z.object({
  orderId: z.number().int(),
  recipientType: z.enum(["clinic", "patient"]),
  recipientLastName: z.string().max(30),
  recipientFirstName: z.string().max(30),
  recipientPhone: z.string().max(16),
  recipientEmail: z.string().max(100),
  addressLine1: z.string().max(60),
  city: z.string().max(30),
  state: z.string().max(2),
  zipCode: z.string().max(10),
  country: z.string().max(2)
}), action = async ({ request }) => {
  let formData = await request.json();
  try {
    updateOrderShippingSchema.parse(formData);
    let response = await fetch(`${process2.env.LIFEFILE_API_BASE}/order/${formData.orderId}/shipping`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify({ shipping: formData })
    });
    if (!response.ok)
      throw new Error("Failed to update order shipping");
    let result = await response.json();
    return json(result);
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};

// app/routes/api.order-update-status.ts
var api_order_update_status_exports = {};
__export(api_order_update_status_exports, {
  action: () => action2,
  updateOrderStatusSchema: () => updateOrderStatusSchema
});
import { json as json2 } from "@remix-run/node";
import { z as z2 } from "zod";
var updateOrderStatusSchema = z2.object({
  orderId: z2.number().int(),
  status: z2.string()
}), action2 = async ({ request }) => {
  let formData = await request.json();
  try {
    updateOrderStatusSchema.parse(formData);
    let response = await fetch(`${BASE_API_URL}/order/${formData.orderId}/status`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify({ status: formData.status })
    });
    if (!response.ok)
      throw new Error("Failed to update order status");
    let result = await response.json();
    return json2(result);
  } catch (error) {
    return json2({ error: error.message }, { status: 400 });
  }
};

// app/routes/orders.update-shipping.tsx
var orders_update_shipping_exports = {};
__export(orders_update_shipping_exports, {
  default: () => OrdersUpdateShipping
});

// app/components/UpdateOrderShippingForm.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// app/components/ui/form.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import * as React6 from "react";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";

// app/components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva3 } from "class-variance-authority";
import * as React5 from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var labelVariants = cva3("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Label2 = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }, void 0, !1, {
  fileName: "app/components/ui/label.tsx",
  lineNumber: 13,
  columnNumber: 3
}, this));
Label2.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/form.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Form = FormProvider, FormFieldContext = React6.createContext({});
var useFormField = () => {
  let fieldContext = React6.useContext(FormFieldContext), itemContext = React6.useContext(FormItemContext), { getFieldState, formState } = useFormContext(), fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext)
    throw new Error("useFormField should be used within <FormField>");
  let { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
}, FormItemContext = React6.createContext({}), FormItem = React6.forwardRef(
  ({ className, ...props }, ref) => {
    let id = React6.useId();
    return /* @__PURE__ */ jsxDEV11(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxDEV11("div", { ref, className: cn("space-y-2", className), ...props }, void 0, !1, {
      fileName: "app/components/ui/form.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/form.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this);
  }
);
FormItem.displayName = "FormItem";
var FormLabel = React6.forwardRef(({ className, ...props }, ref) => {
  let { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxDEV11(
    Label2,
    {
      ref,
      className: cn(error && "text-red-500 dark:text-red-900", className),
      htmlFor: formItemId,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/form.tsx",
      lineNumber: 89,
      columnNumber: 5
    },
    this
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React6.forwardRef(
  ({ ...props }, ref) => {
    let { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /* @__PURE__ */ jsxDEV11(
      Slot2,
      {
        ref,
        id: formItemId,
        "aria-describedby": error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`,
        "aria-invalid": !!error,
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/form.tsx",
        lineNumber: 104,
        columnNumber: 7
      },
      this
    );
  }
);
FormControl.displayName = "FormControl";
var FormDescription = React6.forwardRef(
  ({ className, ...props }, ref) => {
    let { formDescriptionId } = useFormField();
    return /* @__PURE__ */ jsxDEV11(
      "p",
      {
        ref,
        id: formDescriptionId,
        className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/form.tsx",
        lineNumber: 121,
        columnNumber: 7
      },
      this
    );
  }
);
FormDescription.displayName = "FormDescription";
var FormMessage = React6.forwardRef(
  ({ className, children, ...props }, ref) => {
    let { error, formMessageId } = useFormField(), body = error ? String(error?.message) : children;
    return body ? /* @__PURE__ */ jsxDEV11(
      "p",
      {
        ref,
        id: formMessageId,
        className: cn("text-sm font-medium text-red-500 dark:text-red-900", className),
        ...props,
        children: body
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/form.tsx",
        lineNumber: 142,
        columnNumber: 7
      },
      this
    ) : null;
  }
);
FormMessage.displayName = "FormMessage";

// app/components/ui/input.tsx
import * as React7 from "react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Input = React7.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "input",
  {
    type,
    className: cn(
      "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/input.tsx",
    lineNumber: 9,
    columnNumber: 5
  },
  this
));
Input.displayName = "Input";

// app/components/UpdateOrderShippingForm.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function UpdateOrderShippingForm() {
  let form = useForm({
    resolver: zodResolver(updateOrderShippingSchema)
  }), {
    register,
    formState: { errors }
  } = form, onSubmit = async (data) => {
    let response = await fetch(`${BASE_API_URL}/update-order-shipping`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify(data)
    }), result = await response.json();
    response.ok ? console.log("Order shipping updated successfully:", result) : console.error("Failed to update order shipping:", result);
  };
  return /* @__PURE__ */ jsxDEV13(Form, { ...form, children: [
    /* @__PURE__ */ jsxDEV13(FormItem, { children: [
      /* @__PURE__ */ jsxDEV13(FormLabel, { htmlFor: "orderId", children: "Order ID:" }, void 0, !1, {
        fileName: "app/components/UpdateOrderShippingForm.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13(FormControl, { children: /* @__PURE__ */ jsxDEV13(Input, { type: "number", id: "orderId", ...register("orderId", { valueAsNumber: !0 }), placeholder: "Order ID" }, void 0, !1, {
        fileName: "app/components/UpdateOrderShippingForm.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/UpdateOrderShippingForm.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13(FormMessage, {}, void 0, !1, {
        fileName: "app/components/UpdateOrderShippingForm.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UpdateOrderShippingForm.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(Button, { type: "submit", children: "Update Shipping" }, void 0, !1, {
      fileName: "app/components/UpdateOrderShippingForm.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UpdateOrderShippingForm.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/components/ui/card.tsx
import * as React9 from "react";

// app/components/ui/typography.tsx
import { clsx as clsx4 } from "clsx";
import React8 from "react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var TypographyH1 = React8.forwardRef(
  ({ children, className = "" }, ref) => /* @__PURE__ */ jsxDEV14("h1", { ref, className: clsx4("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className), children }, void 0, !1, {
    fileName: "app/components/ui/typography.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this)
);
TypographyH1.displayName = "TypographyH1";
var TypographyH2 = React8.forwardRef(
  ({ children, className = "" }, ref) => /* @__PURE__ */ jsxDEV14(
    "h2",
    {
      ref,
      className: clsx4("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className),
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/typography.tsx",
      lineNumber: 18,
      columnNumber: 7
    },
    this
  )
);
TypographyH2.displayName = "TypographyH2";
var TypographyH3 = React8.forwardRef(
  ({ children, className = "" }, ref) => /* @__PURE__ */ jsxDEV14("h3", { ref, className: clsx4("scroll-m-20 text-2xl font-semibold tracking-tight", className), children }, void 0, !1, {
    fileName: "app/components/ui/typography.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this)
);
TypographyH3.displayName = "TypographyH3";
var TypographyH4 = React8.forwardRef(
  ({ children, className = "" }, ref) => /* @__PURE__ */ jsxDEV14("h4", { ref, className: clsx4("scroll-m-20 text-xl font-semibold tracking-tight", className), children }, void 0, !1, {
    fileName: "app/components/ui/typography.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this)
);
TypographyH4.displayName = "TypographyH4";

// app/components/ui/card.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var Card = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 7,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props }, void 0, !1, {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this)
);
CardHeader.displayName = "CardHeader";
var CardTitle = React9.forwardRef(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ jsxDEV15(TypographyH3, { ref, className, ...props, children }, void 0, !1, {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this)
);
CardTitle.displayName = "CardTitle";
var CardDescription = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15("p", { ref, className: cn("text-sm text-neutral-500 dark:text-neutral-400", className), ...props }, void 0, !1, {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this)
);
CardDescription.displayName = "CardDescription";
var CardContent = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 42,
    columnNumber: 37
  }, this)
);
CardContent.displayName = "CardContent";
var CardFooter = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV15("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props }, void 0, !1, {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this)
);
CardFooter.displayName = "CardFooter";

// app/routes/orders.update-shipping.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
function OrdersUpdateShipping() {
  return /* @__PURE__ */ jsxDEV16(Card, { className: "m-auto max-w-lg p-4", children: [
    /* @__PURE__ */ jsxDEV16("h1", { className: "text-neutral-600 font-bold text-sm mb-4", children: "Update Order Shipping" }, void 0, !1, {
      fileName: "app/routes/orders.update-shipping.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV16(UpdateOrderShippingForm, {}, void 0, !1, {
      fileName: "app/routes/orders.update-shipping.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders.update-shipping.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/orders.update-status.tsx
var orders_update_status_exports = {};
__export(orders_update_status_exports, {
  default: () => OrdersUpdateStatus
});

// app/components/UpdateOrderStatusForm.tsx
import { zodResolver as zodResolver2 } from "@hookform/resolvers/zod";
import { useForm as useForm2 } from "react-hook-form";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function UpdateOrderStatusForm() {
  let {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm2({
    resolver: zodResolver2(updateOrderStatusSchema)
  });
  return /* @__PURE__ */ jsxDEV17("form", { className: "space-y-4", onSubmit: handleSubmit(async (data) => {
    let response = await fetch(`${BASE_API_URL}/update-order-status`, {
      method: "PUT",
      headers: { ...API_HEADERS },
      body: JSON.stringify(data)
    }), result = await response.json();
    response.ok ? console.log("Order status updated successfully:", result) : console.error("Failed to update order status:", result);
  }), children: [
    /* @__PURE__ */ jsxDEV17("div", { children: [
      /* @__PURE__ */ jsxDEV17("label", { htmlFor: "orderId", className: "block text-sm font-medium text-gray-700", children: "Order ID:" }, void 0, !1, {
        fileName: "app/components/UpdateOrderStatusForm.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(Input, { type: "number", id: "orderId", ...register("orderId", { valueAsNumber: !0 }), placeholder: "Order ID" }, void 0, !1, {
        fileName: "app/components/UpdateOrderStatusForm.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      errors.orderId && typeof errors.orderId.message == "string" && /* @__PURE__ */ jsxDEV17("span", { className: "text-red-600", children: errors.orderId.message }, void 0, !1, {
        fileName: "app/components/UpdateOrderStatusForm.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UpdateOrderStatusForm.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17("div", { children: [
      /* @__PURE__ */ jsxDEV17("label", { htmlFor: "status", className: "block text-sm font-medium text-gray-700", children: "Status:" }, void 0, !1, {
        fileName: "app/components/UpdateOrderStatusForm.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV17(Input, { type: "text", id: "status", ...register("status"), placeholder: "Status" }, void 0, !1, {
        fileName: "app/components/UpdateOrderStatusForm.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      errors.status && typeof errors.status.message == "string" && /* @__PURE__ */ jsxDEV17("span", { className: "text-red-600", children: errors.status.message }, void 0, !1, {
        fileName: "app/components/UpdateOrderStatusForm.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/UpdateOrderStatusForm.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV17(Button, { type: "submit", children: "Update Status" }, void 0, !1, {
      fileName: "app/components/UpdateOrderStatusForm.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UpdateOrderStatusForm.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

// app/routes/orders.update-status.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
function OrdersUpdateStatus() {
  return /* @__PURE__ */ jsxDEV18(Card, { className: "m-auto max-w-lg p-4", children: [
    /* @__PURE__ */ jsxDEV18("h1", { className: "text-neutral-600 font-bold text-sm mb-4", children: "Update Order Status" }, void 0, !1, {
      fileName: "app/routes/orders.update-status.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(UpdateOrderStatusForm, {}, void 0, !1, {
      fileName: "app/routes/orders.update-status.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders.update-status.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/action.set-theme.ts
var action_set_theme_exports = {};
__export(action_set_theme_exports, {
  action: () => action3
});
import { createThemeAction } from "remix-themes";
var action3 = createThemeAction(themeSessionResolver);

// app/routes/api.post-order.tsx
var api_post_order_exports = {};
__export(api_post_order_exports, {
  action: () => action4
});
import { json as json3 } from "@remix-run/node";
var action4 = async ({ request }) => {
  let formData = await request.formData(), orderData = {
    message: {
      // NOTE: This ID should be unique and can reflect the ID from your own system.
      id: formData.get("referenceId"),
      sentTime: (/* @__PURE__ */ new Date()).toISOString()
    },
    order: {
      general: {
        memo: formData.get("memo"),
        referenceId: formData.get("referenceId"),
        statusId: "new"
      },
      prescriber: {
        npi: formData.get("npi"),
        licenseState: formData.get("licenseState"),
        lastName: formData.get("lastName"),
        firstName: formData.get("firstName")
      },
      patient: {
        lastName: formData.get("lastName"),
        firstName: formData.get("firstName"),
        dateOfBirth: formData.get("dateOfBirth"),
        gender: formData.get("gender")
      },
      rxs: [
        {
          drugName: formData.get("drugName"),
          quantity: formData.get("quantity"),
          directions: formData.get("directions")
        }
      ]
    }
  };
  console.log("-_________orderData:", orderData);
  let response = await fetch(`${BASE_API_URL}/order`, {
    method: "POST",
    headers: { ...API_HEADERS },
    body: JSON.stringify(orderData)
  });
  if (console.log("Response:", response), !response.ok)
    throw new Error("Failed to create order");
  let result = await response.json();
  return json3(result);
};

// app/routes/orders._index.tsx
var orders_index_exports = {};
__export(orders_index_exports, {
  OrdersIndex: () => OrdersIndex
});
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
function OrdersIndex() {
  return /* @__PURE__ */ jsxDEV19("div", { children: "Nothing here" }, void 0, !1, {
    fileName: "app/routes/orders._index.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/orders.create.tsx
var orders_create_exports = {};
__export(orders_create_exports, {
  default: () => OrdersCreate
});

// app/components/OrderForm.tsx
import { zodResolver as zodResolver3 } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm as useForm3 } from "react-hook-form";
import * as z3 from "zod";

// app/components/ui/date-picker.tsx
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useEffect as useEffect3, useState as useState2 } from "react";
import { clsx as clsx5 } from "clsx";

// app/components/ui/calendar.tsx
import { ChevronLeft, ChevronRight as ChevronRight2 } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function Calendar({ className, classNames, showOutsideDays = !0, ...props }) {
  return /* @__PURE__ */ jsxDEV20(
    DayPicker,
    {
      showOutsideDays,
      className: cn("p-3", className),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-slate-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-slate-400",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 dark:[&:has([aria-selected].day-outside)]:bg-slate-800/50 dark:[&:has([aria-selected])]:bg-slate-800",
        day: cn(buttonVariants({ variant: "ghost" }), "h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
        day_range_end: "day-range-end",
        day_selected: "bg-slate-900 text-slate-50 hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50 dark:hover:text-slate-900 dark:focus:bg-slate-50 dark:focus:text-slate-900",
        day_today: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
        day_outside: "day-outside text-slate-500 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30 dark:text-slate-400 dark:aria-selected:bg-slate-800/50 dark:aria-selected:text-slate-400",
        day_disabled: "text-slate-500 opacity-50 dark:text-slate-400",
        day_range_middle: "aria-selected:bg-slate-100 aria-selected:text-slate-900 dark:aria-selected:bg-slate-800 dark:aria-selected:text-slate-50",
        day_hidden: "invisible",
        ...classNames
      },
      components: {
        IconLeft: ({ ...props2 }) => /* @__PURE__ */ jsxDEV20(ChevronLeft, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 46,
          columnNumber: 37
        }, this),
        IconRight: ({ ...props2 }) => /* @__PURE__ */ jsxDEV20(ChevronRight2, { className: "h-4 w-4" }, void 0, !1, {
          fileName: "app/components/ui/calendar.tsx",
          lineNumber: 47,
          columnNumber: 38
        }, this)
      },
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/calendar.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
Calendar.displayName = "Calendar";

// app/components/ui/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React10 from "react";
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var Popover = PopoverPrimitive.Root, PopoverTrigger = PopoverPrimitive.Trigger, PopoverContent = React10.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV21(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV21(
  PopoverPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/popover.tsx",
    lineNumber: 15,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/popover.tsx",
  lineNumber: 14,
  columnNumber: 3
}, this));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

// app/components/ui/date-picker.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function DatePicker({
  onDateChange
}) {
  let [date, setDate] = useState2();
  return useEffect3(() => {
    onDateChange && (console.log("date change inside picker", date), onDateChange(date));
  }, [date, onDateChange]), /* @__PURE__ */ jsxDEV22(Popover, { children: [
    /* @__PURE__ */ jsxDEV22(PopoverTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV22(
      Button,
      {
        variant: "outline",
        className: clsx5("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground"),
        children: [
          /* @__PURE__ */ jsxDEV22(CalendarIcon, { className: "mr-2 h-4 w-4" }, void 0, !1, {
            fileName: "app/components/ui/date-picker.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this),
          date ? format(date, "PPP") : /* @__PURE__ */ jsxDEV22("span", { children: "Pick a date" }, void 0, !1, {
            fileName: "app/components/ui/date-picker.tsx",
            lineNumber: 34,
            columnNumber: 41
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ui/date-picker.tsx",
        lineNumber: 29,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/date-picker.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV22(PopoverContent, { className: "w-auto p-0", children: /* @__PURE__ */ jsxDEV22(Calendar, { mode: "single", selected: date, onSelect: setDate, initialFocus: !0 }, void 0, !1, {
      fileName: "app/components/ui/date-picker.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/date-picker.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/date-picker.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/components/ui/select.tsx
import * as React11 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown, ChevronUp } from "lucide-react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-300",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV23(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsxDEV23(ChevronDown, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV23(ChevronUp, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV23(ChevronDown, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 54,
    columnNumber: 3
  },
  this
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React11.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV23(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV23(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-neutral-200 bg-white text-neutral-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV23(SelectScrollUpButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV23(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/select.tsx",
          lineNumber: 85,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV23(SelectScrollDownButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 73,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 72,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV23("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV23(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV23(Check2, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 125,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 124,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV23(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 116,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV23(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 139,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/components/ui/textarea.tsx
import * as React12 from "react";
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var Textarea = React12.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV24(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/textarea.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Textarea.displayName = "Textarea";

// app/components/OrderForm.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var orderSchema = z3.object({
  referenceId: z3.string().max(200),
  memo: z3.string().max(120).optional(),
  npi: z3.string().max(40),
  licenseState: z3.string().max(2),
  lastName: z3.string().max(30),
  firstName: z3.string().max(30),
  dateOfBirth: z3.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  gender: z3.enum(["m", "f", "a", "u"]),
  drugName: z3.string().max(254),
  quantity: z3.string().max(45),
  directions: z3.string().max(65535).optional()
});
function OrderForm() {
  let {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm3({
    resolver: zodResolver3(orderSchema)
  }), [isPending, startTransition] = useTransition();
  return /* @__PURE__ */ jsxDEV25("form", { className: "space-y-4", onSubmit: handleSubmit((data) => {
    fetch("/api/post-order", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  }), children: [
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "referenceId", className: "block text-sm font-medium text-gray-700", children: "Message ID:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "referenceId", ...register("referenceId"), placeholder: "Reference ID" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      errors.referenceId && typeof errors.referenceId.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.referenceId.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "memo", className: "block text-sm font-medium text-gray-700", children: "Memo:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "memo", ...register("memo"), placeholder: "Memo" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      errors.memo && typeof errors.memo.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.memo.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "npi", className: "block text-sm font-medium text-gray-700", children: "NPI:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "npi", ...register("npi"), placeholder: "NPI" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      errors.npi && typeof errors.npi.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.npi.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "licenseState", className: "block text-sm font-medium text-gray-700", children: "License State:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "licenseState", ...register("licenseState"), placeholder: "License State" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      errors.licenseState && typeof errors.licenseState.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.licenseState.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700", children: "Last Name:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "lastName", ...register("lastName"), placeholder: "Last Name" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      errors.lastName && typeof errors.lastName.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.lastName.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700", children: "First Name:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "firstName", ...register("firstName"), placeholder: "First Name" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      errors.firstName && typeof errors.firstName.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.firstName.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 101,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { className: "block text-sm font-medium text-gray-700", children: "Date of Birth:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(
        DatePicker,
        {
          onDateChange: (date) => {
            date && setValue("dateOfBirth", date.toISOString().split("T")[0]);
          }
        },
        void 0,
        !1,
        {
          fileName: "app/components/OrderForm.tsx",
          lineNumber: 106,
          columnNumber: 9
        },
        this
      ),
      errors.dateOfBirth && typeof errors.dateOfBirth.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.dateOfBirth.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "gender", className: "block text-sm font-medium text-gray-700", children: "Gender:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Select, { ...register("gender"), children: [
        /* @__PURE__ */ jsxDEV25(SelectTrigger, { children: /* @__PURE__ */ jsxDEV25(SelectValue, { placeholder: "Select Gender" }, void 0, !1, {
          fileName: "app/components/OrderForm.tsx",
          lineNumber: 123,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/OrderForm.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV25(SelectContent, { children: [
          /* @__PURE__ */ jsxDEV25(SelectItem, { value: "m", children: "Male" }, void 0, !1, {
            fileName: "app/components/OrderForm.tsx",
            lineNumber: 126,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25(SelectItem, { value: "f", children: "Female" }, void 0, !1, {
            fileName: "app/components/OrderForm.tsx",
            lineNumber: 127,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25(SelectItem, { value: "a", children: "Animal" }, void 0, !1, {
            fileName: "app/components/OrderForm.tsx",
            lineNumber: 128,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25(SelectItem, { value: "u", children: "Unknown" }, void 0, !1, {
            fileName: "app/components/OrderForm.tsx",
            lineNumber: 129,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/OrderForm.tsx",
          lineNumber: 125,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      errors.gender && typeof errors.gender.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.gender.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 133,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "drugName", className: "block text-sm font-medium text-gray-700", children: "Drug Name:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 137,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "drugName", ...register("drugName"), placeholder: "Drug Name" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      errors.drugName && typeof errors.drugName.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.drugName.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "quantity", className: "block text-sm font-medium text-gray-700", children: "Quantity:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Input, { type: "text", id: "quantity", ...register("quantity"), placeholder: "Quantity" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this),
      errors.quantity && typeof errors.quantity.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.quantity.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25("div", { children: [
      /* @__PURE__ */ jsxDEV25("label", { htmlFor: "directions", className: "block text-sm font-medium text-gray-700", children: "Directions:" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV25(Textarea, { id: "directions", ...register("directions"), placeholder: "Directions" }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 158,
        columnNumber: 9
      }, this),
      errors.directions && typeof errors.directions.message == "string" && /* @__PURE__ */ jsxDEV25("span", { className: "text-red-600", children: errors.directions.message }, void 0, !1, {
        fileName: "app/components/OrderForm.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25(Button, { type: "submit", disabled: isPending, children: isPending ? "Submitting..." : "Submit Order" }, void 0, !1, {
      fileName: "app/components/OrderForm.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/OrderForm.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}

// app/routes/orders.create.tsx
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
function OrdersCreate() {
  return /* @__PURE__ */ jsxDEV26(Card, { className: "m-auto max-w-lg p-4", children: [
    /* @__PURE__ */ jsxDEV26("h1", { className: "text-neutral-600 font-bold text-sm mb-4", children: "Create a New Order" }, void 0, !1, {
      fileName: "app/routes/orders.create.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV26(OrderForm, {}, void 0, !1, {
      fileName: "app/routes/orders.create.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/orders.create.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/routes/api.push.tsx
var api_push_exports = {};
__export(api_push_exports, {
  action: () => action5,
  loader: () => loader2
});
import { json as json4 } from "@remix-run/node";
import auth from "basic-auth";
var loader2 = async ({ request }) => json4({ message: "This endpoint accepts POST requests only." }), action5 = async ({ request }) => {
  let credentials = authenticate(request);
  if (console.log("Credentials: ", credentials), !credentials || credentials.name !== process.env.LIFEFILE_USERNAME || credentials.pass !== process.env.LIFEFILE_PASSWORD)
    return new Response("Unauthorized", { status: 401 });
  let contentType = request.headers.get("Content-Type"), data;
  if (contentType === "application/json")
    data = await request.json();
  else if (contentType === "application/xml") {
    let text = await request.text();
    data = new DOMParser().parseFromString(text, "application/xml");
  } else
    return new Response("Unsupported Media Type", { status: 415 });
  try {
    return console.log("Payload Data: ", data), json4({ message: "Data received successfully" }, { status: 200 });
  } catch {
    return new Response("Server Error", { status: 500 });
  }
};
function authenticate(request) {
  let authorizationHeader = request.headers.get("Authorization");
  return authorizationHeader ? auth({
    headers: {
      authorization: authorizationHeader
    }
  }) : null;
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3
});
import { redirect as redirect2 } from "@remix-run/router";

// app/data/constants.ts
var LANDING_PAGE = "/orders/create", hoursOptions = Array.from({ length: 12 }, (_, index) => (index + 1).toString());

// app/routes/_index.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
async function loader3() {
  return redirect2(LANDING_PAGE);
}
function Index() {
  return /* @__PURE__ */ jsxDEV27("main", { children: /* @__PURE__ */ jsxDEV27("p", { children: "Are you supposed to be here?" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/orders.tsx
var orders_exports = {};
__export(orders_exports, {
  default: () => Orders
});
import { Outlet as Outlet2 } from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
function Orders() {
  return /* @__PURE__ */ jsxDEV28("div", { className: "grid gap-6 h-full py-2", children: /* @__PURE__ */ jsxDEV28(AnimatePresence, { children: /* @__PURE__ */ jsxDEV28(Outlet2, {}, void 0, !1, {
    fileName: "app/routes/orders.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/orders.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MKDUCB36.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-ENWVF2EX.js", "/build/_shared/chunk-RMI6ZCVV.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-WP7EWCBT.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-W46DZ6UL.js", imports: ["/build/_shared/chunk-KZQBAT7J.js", "/build/_shared/chunk-NTQ5DAFN.js", "/build/_shared/chunk-XSUS2BTX.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-M6MPC732.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/action.set-theme": { id: "routes/action.set-theme", parentId: "root", path: "action/set-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/action.set-theme-JDBUG4AI.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.order-update-shipping": { id: "routes/api.order-update-shipping", parentId: "root", path: "api/order-update-shipping", index: void 0, caseSensitive: void 0, module: "/build/routes/api.order-update-shipping-OI3OILYE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.order-update-status": { id: "routes/api.order-update-status", parentId: "root", path: "api/order-update-status", index: void 0, caseSensitive: void 0, module: "/build/routes/api.order-update-status-PZCUY5NR.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.post-order": { id: "routes/api.post-order", parentId: "root", path: "api/post-order", index: void 0, caseSensitive: void 0, module: "/build/routes/api.post-order-4RHBJDVW.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/api.push": { id: "routes/api.push", parentId: "root", path: "api/push", index: void 0, caseSensitive: void 0, module: "/build/routes/api.push-33ECJXHS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/orders": { id: "routes/orders", parentId: "root", path: "orders", index: void 0, caseSensitive: void 0, module: "/build/routes/orders-GIYDO7TP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/orders._index": { id: "routes/orders._index", parentId: "routes/orders", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/orders._index-LKFXJMUZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/orders.create": { id: "routes/orders.create", parentId: "routes/orders", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/orders.create-GBMZAQN2.js", imports: ["/build/_shared/chunk-KZQBAT7J.js", "/build/_shared/chunk-NTQ5DAFN.js", "/build/_shared/chunk-HMWUSESS.js", "/build/_shared/chunk-XSUS2BTX.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/orders.update-shipping": { id: "routes/orders.update-shipping", parentId: "routes/orders", path: "update-shipping", index: void 0, caseSensitive: void 0, module: "/build/routes/orders.update-shipping-OYAWWGKZ.js", imports: ["/build/_shared/chunk-NTQ5DAFN.js", "/build/_shared/chunk-LISCYTPG.js", "/build/_shared/chunk-HMWUSESS.js", "/build/_shared/chunk-XSUS2BTX.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/orders.update-status": { id: "routes/orders.update-status", parentId: "routes/orders", path: "update-status", index: void 0, caseSensitive: void 0, module: "/build/routes/orders.update-status-BG5ZCMCX.js", imports: ["/build/_shared/chunk-LISCYTPG.js", "/build/_shared/chunk-HMWUSESS.js", "/build/_shared/chunk-XSUS2BTX.js", "/build/_shared/chunk-B43JI2TA.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "04aa7aab", hmr: { runtime: "/build/_shared/chunk-WP7EWCBT.js", timestamp: 1721239641454 }, url: "/build/manifest-04AA7AAB.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1, unstable_fogOfWar: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.order-update-shipping": {
    id: "routes/api.order-update-shipping",
    parentId: "root",
    path: "api/order-update-shipping",
    index: void 0,
    caseSensitive: void 0,
    module: api_order_update_shipping_exports
  },
  "routes/api.order-update-status": {
    id: "routes/api.order-update-status",
    parentId: "root",
    path: "api/order-update-status",
    index: void 0,
    caseSensitive: void 0,
    module: api_order_update_status_exports
  },
  "routes/orders.update-shipping": {
    id: "routes/orders.update-shipping",
    parentId: "routes/orders",
    path: "update-shipping",
    index: void 0,
    caseSensitive: void 0,
    module: orders_update_shipping_exports
  },
  "routes/orders.update-status": {
    id: "routes/orders.update-status",
    parentId: "routes/orders",
    path: "update-status",
    index: void 0,
    caseSensitive: void 0,
    module: orders_update_status_exports
  },
  "routes/action.set-theme": {
    id: "routes/action.set-theme",
    parentId: "root",
    path: "action/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: action_set_theme_exports
  },
  "routes/api.post-order": {
    id: "routes/api.post-order",
    parentId: "root",
    path: "api/post-order",
    index: void 0,
    caseSensitive: void 0,
    module: api_post_order_exports
  },
  "routes/orders._index": {
    id: "routes/orders._index",
    parentId: "routes/orders",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: orders_index_exports
  },
  "routes/orders.create": {
    id: "routes/orders.create",
    parentId: "routes/orders",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: orders_create_exports
  },
  "routes/api.push": {
    id: "routes/api.push",
    parentId: "root",
    path: "api/push",
    index: void 0,
    caseSensitive: void 0,
    module: api_push_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/orders": {
    id: "routes/orders",
    parentId: "root",
    path: "orders",
    index: void 0,
    caseSensitive: void 0,
    module: orders_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
