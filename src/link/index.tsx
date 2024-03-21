"use client";

import React from "react";
import LinkRaw from "next/link";
import { forwardRef, useContext } from "react";
import { RouteChangeContext } from "..";

export const Link = forwardRef<LinkType, any>(
  ({ children, onClick, ...props }, ref) => {
    const [tips] = useContext(RouteChangeContext);
    const trigger =
      onClick ||
      ((e: any) => {
        const confirm = tips === undefined ? true : window.confirm(tips);
        if (!confirm) {
          e.preventDefault();
        }
      });
    return (
      <LinkRaw {...props} ref={ref} onClick={trigger}>
        {children}
      </LinkRaw>
    );
  }
);

if (process.env.NODE_ENV !== "production") {
  Link.displayName = "NavigationLink";
}

type LinkType = typeof LinkRaw;

export interface LinkProps {
  href: string;
}

export default Link;
