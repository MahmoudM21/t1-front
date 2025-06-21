import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import ProcessSection from '@/components/ProcessSection';
import PricingSection from '@/components/PricingSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeatureSection />
      <ProcessSection />
      <PricingSection />
      <CallToAction />
    </Layout>
  );
};

export default Index;
