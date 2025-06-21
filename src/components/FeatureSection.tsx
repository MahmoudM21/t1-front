
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-t1-secondaryBg rounded-xl p-6 border border-white/10 hover:border-t1-accentBlue/50 transition-colors group">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-t1-accentLight to-t1-accentDark flex items-center justify-center mb-5 group-hover:animate-pulse-glow">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-t1-textSecondary">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-20 bg-t1-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="gradient-text">Translation Features</span>
          </h2>
          <p className="text-t1-textSecondary max-w-2xl mx-auto">
            Our platform uses cutting-edge AI to deliver accurate, natural-sounding translations while preserving the nuance and emotion of your original content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="50+ Languages" 
            description="Translate your videos into over 50 languages with near-native accuracy and natural speech patterns."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>}
          />
          
          <FeatureCard 
            title="AI Voice Cloning" 
            description="Preserve the original speaker's tone, accent, and emotion with our advanced voice cloning technology."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>}
          />
          
          <FeatureCard 
            title="Lip Sync Technology" 
            description="Our advanced AI synchronizes lip movements with translated audio for a seamless viewing experience."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13h8M8 7h5m-5 10h8m4-6v12m0 0l-4-4m4 4l4-4" />
            </svg>}
          />
          
          <FeatureCard 
            title="Subtitles & Captions" 
            description="Generate perfectly timed subtitles in multiple languages with customizable styling options."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>}
          />
          
          <FeatureCard 
            title="Batch Processing" 
            description="Upload multiple videos and process them simultaneously with our powerful cloud infrastructure."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>}
          />
          
          <FeatureCard 
            title="Style Customization" 
            description="Choose between literal translations or natural conversational adaptations to suit your content's needs."
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
