
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 bg-hero-gradient flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Translate Videos Instantly in <span className="gradient-text">50+ Languages</span>
            </h1>
            <p className="text-lg text-t1-textSecondary max-w-xl">
              Transform your content for global audiences with AI-powered video translation that preserves tone, context, and emotion.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-blue-gradient hover:opacity-90 button-glow transition-all text-lg py-6 px-8">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/5 text-lg py-6 px-8">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-gradient opacity-10 rounded-2xl blur-xl animate-pulse-glow"></div>
            <div className="relative bg-t1-secondaryBg rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-video w-full relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-full bg-blue-gradient flex items-center justify-center animate-pulse-glow cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="mt-4 font-medium text-white">Watch how it works</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Video translation preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
