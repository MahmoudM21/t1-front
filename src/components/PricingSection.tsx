
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, price, description, features, isPopular = false }: PricingCardProps) => {
  return (
    <div className={`relative overflow-hidden rounded-xl transition-transform hover:scale-105 ${isPopular ? 'border-2 border-blue-gradient' : 'border border-white/10'}`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-gradient text-white text-sm font-medium py-1 px-4 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="bg-t1-secondaryBg p-6 md:p-8 h-full flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <div className="flex items-baseline mb-1">
            <span className="text-3xl md:text-4xl font-bold">{price}</span>
            {price !== "Custom" && <span className="text-t1-textSecondary ml-2">/month</span>}
          </div>
          <p className="text-t1-textSecondary text-sm">{description}</p>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-t1-accentBlue mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className={`w-full ${isPopular ? 'bg-blue-gradient hover:opacity-90 button-glow' : 'bg-t1-secondaryBg border border-white/20 hover:border-t1-accentBlue/70'}`}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <section className="py-20 bg-t1-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-t1-textSecondary max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core translation features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Starter"
            price="$29"
            description="Perfect for content creators just getting started"
            features={[
              "5 hours of video translation per month",
              "10 supported languages",
              "720p max resolution",
              "Standard processing speed",
              "Basic subtitle options",
              "Email support"
            ]}
          />
          
          <PricingCard 
            title="Professional"
            price="$79"
            description="Ideal for growing channels and businesses"
            features={[
              "20 hours of video translation per month",
              "30 supported languages",
              "4K resolution support",
              "Priority processing",
              "Advanced subtitle customization",
              "Voice tone preservation",
              "Priority email & chat support"
            ]}
            isPopular={true}
          />
          
          <PricingCard 
            title="Enterprise"
            price="Custom"
            description="For organizations with advanced needs"
            features={[
              "Unlimited video translation",
              "All 50+ languages supported",
              "8K resolution support",
              "Fastest processing priority",
              "Custom voice cloning",
              "API access for integration",
              "Dedicated account manager",
              "24/7 premium support"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
