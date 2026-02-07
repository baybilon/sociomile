import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

type RegisterValues = {
  name: string;
  email: string;
  phone?: string;
};

const Page = () => {
  const form = useForm<RegisterValues>();

  const onSubmit = (data: RegisterValues) => {
    // TODO: replace with real submit logic (API call)
    // kept intentionally simple for now
    console.log("register submit:", data);
  };

  return (
    <div className="flex flex-col gap-6 p-8 max-w-5xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">Name</FieldLabel>
              <Input
                id="form-name"
                {...form.register("name", { required: true })}
                type="text"
                placeholder="Evil Rabbit"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Email</FieldLabel>
              <Input
                id="form-email"
                {...form.register("email", { required: true })}
                type="email"
                placeholder="john@example.com"
              />
              <FieldDescription>
                We&apos;ll never share your email with anyone.
              </FieldDescription>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                <Input
                  id="form-phone"
                  {...form.register("phone")}
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </Field>
            </div>
            <Field orientation="horizontal">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </form>
      </Form>
    </div>
  );
};

export default Page;
