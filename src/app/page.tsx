import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Philosophy } from "@/components/home/Philosophy";
import { Ventures } from "@/components/home/Ventures";
import { Testimonials } from "@/components/home/Testimonials";
import { Press } from "@/components/home/Press";
import { Clients } from "@/components/home/Clients";
import { WritingPreview } from "@/components/home/WritingPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Philosophy />
      <Ventures />
      <Testimonials />
      <Press />
      <Clients />
      <WritingPreview />
      <ContactCTA />
    </>
  );
}
