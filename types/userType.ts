export type UserData = {
  id: string;
  objectId: string | undefined;
  username: string | null;
  name: string | null;
  bio: string | undefined;
  imageUrl: string;
};

export type TUserInfoFromDb = {
  _id: string;
  username: string;
  name: string;
  bio: string;
  imageUrl: string;
};
