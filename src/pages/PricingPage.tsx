
import React from 'react';
import Layout from '@/components/Layout';
import PricingSection from '@/components/PricingSection';

const PricingPage = () => {
  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">
          Simple, <span className="gradient-text">Transparent Pricing</span>
        </h1>
        <p className="page-description">
          Choose the perfect plan for your needs. All plans include our core translation features.
        </p>
      </div>
      <PricingSection />
    </Layout>
  );
};

export default PricingPage;
