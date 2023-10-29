"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  setFiles: Dispatch<SetStateAction<File[]>>;
  form: UseFormReturn<
    {
      name: string;
      username: string;
      bio: string;
      profile_photo: string;
    },
    any,
    undefined
  >;
};

export default function ProfilePicFormInput({ form, setFiles }: Props) {
  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    onFieldChange: (value: string) => void,
  ) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));
      if (!file.type.includes("image")) return;
      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        onFieldChange(imageDataUrl);
      };
      ``;
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <FormField
      control={form.control}
      name="profile_photo"
      render={({ field }) => (
        <FormItem className="flex items-center gap-4">
          <FormLabel className="flex h-24 w-24 items-center justify-center rounded-full bg-dark-4">
            {field.value ? (
              <Image
                src={field.value}
                alt="profile photo"
                width={96}
                height={96}
                priority
                className="rounded-full object-contain"
              />
            ) : (
              <Image
                src="/assets/profile.svg"
                alt="profile photo"
                width={24}
                height={24}
                className="object-contain"
              />
            )}
          </FormLabel>
          <FormControl className="flex-1 text-base-semibold text-gray-200">
            <Input
              type="file"
              accept="image/*"
              placeholder="Upload a photo"
              className="cursor-pointer border-none bg-transparent outline-none file:text-blue"
              onChange={(e) => handleImage(e, field.onChange)}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
