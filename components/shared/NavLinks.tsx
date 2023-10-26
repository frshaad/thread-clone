"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

type Props = {
  variant: "sidebar" | "bottombar";
};

export default function NavLinks({ variant }: Props) {
  const pathname = usePathname();

  return (
    <>
      {sidebarLinks.map((link) => (
        <Link
          key={link.label}
          href={link.route}
          className={clsx("relative flex transition hover:bg-slate-500/20", {
            "justify-start gap-4 rounded-lg p-4": variant === "sidebar",
            "flex-col items-center gap-2 rounded-lg p-2 sm:flex-1 sm:px-2 sm:py-2.5":
              variant === "bottombar",
            "bg-primary-500 hover:bg-primary-500": pathname === link.route,
          })}
        >
          <Image alt={link.label} src={link.imgURL} width={24} height={24} />
          <p
            className={clsx({
              "text-light-1 max-lg:hidden": variant === "sidebar",
              "text-subtle-medium text-light-1 max-sm:hidden":
                variant === "bottombar",
            })}
          >
            {variant === "sidebar" ? link.label : link.label.split(/\s+/)[0]}
          </p>
        </Link>
      ))}
    </>
  );
}
