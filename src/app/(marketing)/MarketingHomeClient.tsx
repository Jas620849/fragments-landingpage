"use client";

import { useEffect } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import Hero from "../components/landing/Hero";
import TrustStrip from "../components/landing/TrustStrip";
import WhyJoinSection from "../components/landing/WhyJoinSection";
import EngagementSection from "../components/landing/EngagementSection";
import DemoVideoSection from "../components/landing/DemoVideoSection";
import WorkflowSection from "../components/landing/WorkflowSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import ComparisonSection from "../components/landing/ComparisonSection";
import PilotVoicesSection from "../components/landing/PilotVoicesSection";
import DisciplinesSection from "../components/landing/DisciplinesSection";
import SuggestDisciplineSection from "../components/landing/SuggestDisciplineSection";
import FinalCtaSection from "../components/landing/FinalCtaSection";

config.autoAddCss = false;

export default function MarketingHomeClient() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyJoinSection />
      <EngagementSection />
      <DemoVideoSection />
      <WorkflowSection />
      <FeaturesSection />
      <ComparisonSection />
      <PilotVoicesSection />
      <DisciplinesSection />
      <SuggestDisciplineSection />
      <FinalCtaSection />
    </>
  );
}
