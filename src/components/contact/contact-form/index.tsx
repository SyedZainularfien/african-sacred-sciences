"use client";

import { useFormik } from "formik";
import { Toaster, toast } from "sonner";
import { Button } from "@/components/ui/button";
import { fieldClassName, fieldLabelClassName } from "@/components/ui/field-styles";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";

const topics = [
  { value: "General inquiry", label: "General inquiry" },
  { value: "Research and collaboration", label: "Research & collaboration" },
  { value: "Learning and publications", label: "Learning & publications" },
  { value: "Website and privacy", label: "Website & privacy" },
] as const;

interface ContactValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}

function validate(values: ContactValues) {
  const errors: Partial<Record<keyof ContactValues, string>> = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.topic) errors.topic = "Please choose a topic.";
  if (!values.message.trim()) errors.message = "Please enter your message.";
  else if (values.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

export function ContactForm() {
  const formik = useFormik<ContactValues>({
    initialValues: { name: "", email: "", topic: "", message: "" },
    validate,
    onSubmit: () => {
      toast("Contact form coming soon", {
        id: "contact-coming-soon",
        description: "For now, email us directly at Support@Africansacredscience.ai.",
      });
    },
  });

  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "flex w-full items-start rounded-2xl border border-gold/60 bg-[#241526] px-5 py-4 font-sans text-[#fff8e8] shadow-[0_20px_55px_rgba(42,17,43,0.3)]",
            content: "flex flex-col gap-1",
            title: "text-sm font-semibold",
            description: "text-sm leading-relaxed text-[#e7d9db]",
          },
        }}
      />
      <form noValidate onSubmit={formik.handleSubmit} className="flex w-full flex-col gap-5 rounded-[28px] border border-plum/15 bg-white/65 p-5 shadow-[0_24px_80px_rgba(55,26,51,0.06)] sm:gap-7 sm:p-10">
        <div className="flex flex-col gap-2 border-b border-plum/15 pb-5 sm:pb-6">
          <Typography as="h3" variant="h4" className="font-normal! leading-[1.1] text-[#241526]">Send us a <span className="italic text-plum">message.</span></Typography>
          <Typography variant="sm" className="leading-[1.7] text-[#655765]">Share a little about your inquiry and how we can reach you.</Typography>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
          <Input id="contact-name" name="name" label="Your name" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name ? formik.errors.name : undefined} />
          <Input id="contact-email" name="email" label="Email address" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email ? formik.errors.email : undefined} />
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <label htmlFor="contact-topic" id="contact-topic-label" className={fieldLabelClassName}>
            <Typography as="span" variant="sm" className="font-semibold">What’s this about?</Typography>
            <span aria-hidden="true" className="text-plum"> *</span>
          </label>
          <Select
            id="contact-topic"
            name="topic"
            labelId="contact-topic-label"
            required
            value={formik.values.topic}
            placeholder="Select a topic"
            options={topics}
            className={`${fieldClassName} h-11 cursor-pointer pl-3.5 pr-2 sm:h-14 sm:pl-4 sm:pr-3`}
            onValueChange={(value) => {
              void formik.setFieldValue("topic", value);
              void formik.setFieldTouched("topic", true, false);
            }}
            invalid={Boolean(formik.touched.topic && formik.errors.topic)}
            errorId="contact-topic-error"
          />
          {formik.touched.topic && formik.errors.topic && <Typography as="span" id="contact-topic-error" variant="xs" className="text-plum">{formik.errors.topic}</Typography>}
        </div>

        <Textarea id="contact-message" name="message" label="Your message" required maxLength={5000} rows={4} placeholder="Tell us a little about what’s on your mind…" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.message ? formik.errors.message : undefined} />

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" showArrow className="min-h-13 w-full px-7 transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-auto">Send message</Button>
          <Typography variant="xs" className="max-w-[290px] leading-[1.6] text-[#655765]">Online submissions are coming soon. Please use the direct email link for now.</Typography>
        </div>
      </form>
    </>
  );
}
