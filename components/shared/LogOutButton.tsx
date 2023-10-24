"use client";

import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  hasLabel?: boolean;
};

export default function LogOutButton({ hasLabel }: Props) {
  const router = useRouter();

  return (
    <SignedIn>
      <SignOutButton signOutCallback={() => router.push("/sign-in")}>
        <button className="flex gap-4 p-4">
          <Image
            alt="log out"
            src="/assets/logout.svg"
            width={24}
            height={24}
          />
          {hasLabel ? (
            <p className="text-light-2 max-lg:hidden">Logout</p>
          ) : null}
        </button>
      </SignOutButton>
    </SignedIn>
  );
}
