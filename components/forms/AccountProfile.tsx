"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { userFormSchema } from "@/lib/validations/userValidation";

type Props = {
  user: UserDataType;
  buttonTitle: string;
};

type FormFieldProps = {
  fieldName: "name" | "username" | "bio";
};

export default function AccountProfile({ user, buttonTitle }: Props) {
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: user?.name || "",
      username: user?.username || "",
      profile_photo: user?.imageUrl || "",
      bio: user?.bio || "",
    },
  });

  const CustomFormField = ({ fieldName }: FormFieldProps) => (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col items-start gap-2">
          <FormLabel className="text-base-semibold capitalize text-light-2">
            {fieldName}
          </FormLabel>
          <FormControl>
            {fieldName === "bio" ? (
              <Textarea
                rows={10}
                className="border border-dark-4 bg-dark-3 text-light-1 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                {...field}
              />
            ) : (
              <Input
                type="text"
                className="border border-dark-4 bg-dark-3 text-light-1 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    e.preventDefault();
  };

  const onSubmit = (values: z.infer<typeof userFormSchema>) => {
    console.log("Form data:", values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10"
      >
        {/* Start of the Profile Picture field */}
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
        {/* End of the Profile Picture field */}
        <CustomFormField fieldName="name" />
        <CustomFormField fieldName="username" />
        <CustomFormField fieldName="bio" />

        <Button type="submit" className="bg-primary-500">
          {buttonTitle}
        </Button>
      </form>
    </Form>
  );
}
