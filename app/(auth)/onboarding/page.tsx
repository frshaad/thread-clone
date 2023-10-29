import { currentUser } from "@clerk/nextjs";

import AccountProfile from "@/components/forms/AccountProfile";
import { TUserInfoFromDb, UserData } from "@/types/userType";

export default async function Onboarding() {
  const user = await currentUser();
  if (!user) return null;

  // fetch user data from db
  const userInfoFromDb: TUserInfoFromDb = {
    _id: "",
    bio: "",
    imageUrl: "",
    name: "",
    username: "",
  };

  const userData: UserData = {
    id: user.id,
    objectId: userInfoFromDb?._id,
    username: userInfoFromDb?.username || user.username,
    name: userInfoFromDb?.name || user.firstName,
    bio: userInfoFromDb?.bio || "",
    imageUrl: userInfoFromDb?.imageUrl || user.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-heading2-bold text-light-1">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile to use Threads
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} buttonTitle="Continue" />
      </section>
    </main>
  );
}
