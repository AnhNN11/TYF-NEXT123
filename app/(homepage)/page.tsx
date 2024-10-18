import React, { Suspense } from "react";

import { FAQSection } from "@/components/landing/Accordion ";
import { HeroSection } from "@/components/landing/Carousel";
import { PricingSection } from "@/components/home/Pricing";
import ContactButton from "@/components/ContactButton";
import Scene from "@/components/3d/Scene";
import { BenefitsSection } from "@/components/landing/Benefits";
import { TestimonialSection } from "@/components/landing/Testimonial";
import { ContactSection } from "@/components/landing/Contact";
import { SponsorsSection } from "@/components/landing/Sponsor";
import Navbar from "@/components/navbar/Navbar";
import { TeamSection } from "../team/Team";

function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <section>
      <HeroSection />
      <SponsorsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </section>
  );
}

export default HomePage;
