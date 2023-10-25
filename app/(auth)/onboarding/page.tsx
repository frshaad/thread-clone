// @ts-nocheck

import { currentUser } from "@clerk/nextjs";

import AccountProfile from "@/components/forms/AccountProfile";

export default async function Onboarding() {
  const user = await currentUser();
  const userInfo = {};

  const userData: UserDataType = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName,
    bio: userInfo?.bio || "",
    imageUrl: userInfo?.imageUrl || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-heading2-bold text-light-1">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile to use Threads
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile userData={userData} buttonTitle="Continue" />
      </section>
    </main>
  );
}
