
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Video",
      description: "Upload your video file or provide a URL. We support all major formats including MP4, MOV, AVI, and more.",
    },
    {
      number: "02",
      title: "Select Languages",
      description: "Choose from 50+ target languages for your translation. You can select multiple languages in a single process.",
    },
    {
      number: "03",
      title: "Choose Translation Style",
      description: "Select between literal translations or natural, context-aware adaptations powered by advanced AI.",
    },
    {
      number: "04",
      title: "Get Translated Videos",
      description: "Receive your professionally translated videos with perfectly synchronized audio and optional subtitles.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-t1-background to-t1-secondaryBg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="gradient-text">Four-Step Process</span>
          </h2>
          <p className="text-t1-textSecondary max-w-2xl mx-auto">
            Our streamlined workflow makes video translation quick and effortless, with results in minutes rather than days.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-t1-secondaryBg rounded-xl p-6 border border-white/10 h-full group hover:border-t1-accentBlue/50 transition-all">
                <div className="text-4xl font-bold gradient-text mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-t1-textSecondary">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#00C6FB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
