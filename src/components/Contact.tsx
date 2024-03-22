import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "@/lib/Constants";
import emailjs from "@emailjs/browser";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import Section from "./Section";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import * as yup from "yup"; // Import Yup
import { yupResolver } from "@hookform/resolvers/yup";

const yupSchema = yup.object().shape({
  from_firstName: yup.string().required("First name is required"),
  from_lastName: yup.string().required("Last name is required"),
  user_email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

function Contact() {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: yupResolver(yupSchema),
    defaultValues: {
      from_firstName: "",
      from_lastName: "",
      user_email: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = async () => {
    setIsSending(true);

    await emailjs
      .sendForm(
        "service_mzeclsf",
        "template_momqrgr",
        formRef.current as HTMLFormElement,
        // data as HTMLFormElement,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result);
          form.reset();
          setIsSending(false);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    sendEmail();
    form.reset();
  };

  return (
    <Section title="Bookings & Enquiries" id="contact">
      <Form {...form}>
        <form
          ref={formRef}
          onSubmit={form.handleSubmit(onSubmit)}
          className=" rounded-lg border-none w-full md:w-1/2 p-4 px-3 md:px-6
          focus-within:shadow-sm grid grid-cols-10 gap-2 h-full"
        >
          <FormField
            control={form.control}
            name="from_firstName"
            render={({ field }) => (
              <FormItem className="col-span-5 lg:col-span-5">
                <FormControl className="m-0 p-0">
                  <Input
                    className="px-2 text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isSending}
                    placeholder="First name"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="from_lastName"
            render={({ field }) => (
              <FormItem className="col-span-5 lg:col-span-5">
                <FormControl className="m-0 p-0">
                  <Input
                    className=" px-2 text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isSending}
                    placeholder="Last name"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="user_email"
            render={({ field }) => (
              <FormItem className="col-span-10 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Input
                    className="px-2 text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isSending}
                    placeholder="Your e-mail address"
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-10 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Textarea
                    className="px-2 text-blue-600 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent  h-40"
                    disabled={isSending}
                    placeholder="Your message. Please include the date and location of your event and any other relevant information."
                    {...field}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className={cn(
              "col-span-10 lg:col-span-10 w-1/2 bg-orange-700 mx-auto",
              {
                "bg-green-500": isSent,
              }
            )}
            disabled={isSending}
            type="submit"
            // onClick={form.handleSubmit(onSubmit)}
          >
            {isSending ? "Sending..." : isSent ? "Sent!" : "Send!"}
          </Button>
        </form>
      </Form>
    </Section>
  );
}

export default Contact;
