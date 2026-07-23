"use client";

import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import Hero from "../components/landing/Hero";
import TrustStrip from "../components/landing/TrustStrip";
import DemoVideoSection from "../components/landing/DemoVideoSection";
import WorkflowSection from "../components/landing/WorkflowSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ComparisonSection from "../components/landing/ComparisonSection";
import PilotVoicesSection from "../components/landing/PilotVoicesSection";
import DisciplinesSection from "../components/landing/DisciplinesSection";
import FAQSection from "../components/landing/FAQSection";
import FinalCtaSection from "../components/landing/FinalCtaSection";

config.autoAddCss = false;

export default function MarketingHomeClient() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    // Legacy deep link: /#explore → product tour / workflow
    const target = id === "explore" ? "workflow" : id;
    const t = window.setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <Hero />
      <TrustStrip />
      <WorkflowSection />
      <DemoVideoSection />
      <FeaturesSection />
      <ComparisonSection />
      <PilotVoicesSection />
      <DisciplinesSection />
      <FAQSection />
      <FinalCtaSection />
    </>
  );
}
