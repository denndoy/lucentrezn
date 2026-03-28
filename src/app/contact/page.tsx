import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Lucentrez",
  description: "Contact Lucentrez for sizing, collabs, and product inquiries.",
};

export default function ContactPage() {
  return (
    <main className="w-full px-4 py-10 md:px-6 lg:px-10">
      <h1 className="font-display text-5xl uppercase leading-none text-foreground md:text-7xl">
        Contact
      </h1>

      <ContactForm />
    </main>
  );
}
