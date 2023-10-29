"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useUploadThing } from "@/hooks/useUploadThing";
import { isBase64Image } from "@/lib/utils";
import { UserData } from "@/types/userType";
import { TUserForm, userFormSchema } from "@/types/userValidation";

import CustomFormField from "./CustomFormField";
import ProfilePicFormInput from "./ProfilePicFormInput";

type Props = {
  user: UserData;
  buttonTitle: string;
};

export default function AccountProfile({ user, buttonTitle }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const { startUpload } = useUploadThing("media");

  const form = useForm<TUserForm>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: user?.name || "",
      username: user?.username || "",
      profile_photo: user?.imageUrl || "",
      bio: user?.bio || "",
    },
  });

  const onSubmit = async (values: TUserForm) => {
    const blob = values.profile_photo;
    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgResponse = await startUpload(files);

      if (imgResponse && imgResponse[0].url) {
        values.profile_photo = imgResponse[0].url;
      }
    }

    // TODO: update user profile
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        <ProfilePicFormInput form={form} setFiles={setFiles} />
        <CustomFormField fieldName="name" form={form} />
        <CustomFormField fieldName="username" form={form} />
        <CustomFormField fieldName="bio" form={form} />

        <Button type="submit" className="bg-primary-500">
          {buttonTitle}
        </Button>
      </form>
    </Form>
  );
}
