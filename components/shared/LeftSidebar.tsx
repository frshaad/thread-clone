"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

import LogOutButton from "./LogOutButton";

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <aside className="custom-scrollbar sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          return (
            <Link
              key={link.label}
              href={link.route}
              className={clsx(
                "relative flex justify-start gap-4 rounded-lg p-4",
                {
                  "bg-primary-500": pathname === link.route,
                },
              )}
            >
              <Image
                alt={link.label}
                src={link.imgURL}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <LogOutButton hasLabel />
      </div>
    </aside>
  );
}
