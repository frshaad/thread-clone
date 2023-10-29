"use client";

import Image from "next/image";
import { UseFormReturn } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

type Props = {
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

const handleImage = (
  e: React.ChangeEvent<HTMLInputElement>,
  onChange: (value: string) => void,
) => {
  e.preventDefault();
  const fileReader = new FileReader();
};

export default function ProfilePicFormInput({ form }: Props) {
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
