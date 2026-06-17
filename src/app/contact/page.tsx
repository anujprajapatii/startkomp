import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Startkomp to submit your startup or register as an investor.",
};

export default function ContactPage() {
  return (
    <section className="container py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        description="Submit your startup or register your interest as an investor."
      />
      <div className="mx-auto mt-12 max-w-xl">
        <Card>
          <CardContent className="p-6 md:p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
