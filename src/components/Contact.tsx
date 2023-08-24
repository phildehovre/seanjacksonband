import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "@/lib/Constants";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "./ui/input";
import Section from "./Section";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
import { cn } from "@/lib/utils";

function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from_firstName: "",
      from_lastName: "",
      user_email: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const isLoading = form.formState.isSubmitting;

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w9z916m",
        "template_momqrgr",
        formRef.current as unknown as HTMLFormElement,
        // data as HTMLFormElement,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    sendEmail(data);
  };

  return (
    <Section title="Contact" id="contact">
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className=" rounded-lg border-none w-full md:w-2/3 p-4 px-3 md:px-6
          focus-within:shadow-sm grid grid-cols-12 gap-2 h-full"
        >
          <FormField
            name="from_firstName"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input
                    className="text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="First name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="from_lastName"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input
                    className="text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="Last name"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="user_email"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input
                    className="text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="Your e-mail address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Textarea
                    className="text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="Your message"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
        <Button
          className={cn("col-span-12 lg:col-span-2 w-15 bg-red-500")}
          disabled={isLoading}
          type="submit"
          onClick={sendEmail}
        >
          Send!
        </Button>
      </Form>
    </Section>
  );
}

export default Contact;
