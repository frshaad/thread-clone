import { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type FormFieldProps = {
  fieldName: "name" | "username" | "bio";
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

export default function CustomFormField({ fieldName, form }: FormFieldProps) {
  return (
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
}
