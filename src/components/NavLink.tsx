import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName = "",
      pendingClassName = "",
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            // 🔴 Default Elite Red/Black Base Style
            "relative px-6 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300",
            "text-white/70 hover:text-white",
            "after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300",
            "hover:after:w-full",

            // Active State
            isActive &&
              cn(
                "text-white",
                "after:w-full after:bg-red-600 after:shadow-[0_0_12px_rgba(220,38,38,0.9)]",
                activeClassName
              ),

            // Pending State
            isPending && cn("opacity-60", pendingClassName),

            // Custom Overrides
            className
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };