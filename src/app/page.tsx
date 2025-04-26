import Hero from "@/components/hero/Hero";
import Card from "@/components/home/Card";
import FeaturesGrid from "@/components/home/FeatureGrid";
import FeaturesSection from "@/components/home/FeatureSection";
import Silder from "@/components/home/Silder";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <Silder />

      <FeaturesSection />

      <FeaturesGrid />

      <Card />
    </div>
  );
};

export default HomePage;
