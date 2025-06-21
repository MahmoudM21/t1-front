
import React from 'react';
import Layout from '@/components/Layout';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Mahmoud Hamaad",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Mahmoud founded T1Translator with a vision to break language barriers in digital content."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Sarah leads our engineering team with expertise in AI and machine translation."
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Michael's research drives our cutting-edge translation models and voice preservation technology."
    },
    {
      name: "Emma Wilson",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      bio: "Emma ensures our platform offers an intuitive and seamless experience for all users."
    },
  ];

  const milestones = [
    { year: 2020, title: "Company Founded", description: "T1Translator begins as a research project at MIT." },
    { year: 2021, title: "First Beta Release", description: "Limited access launch with support for 10 languages." },
    { year: 2022, title: "Series A Funding", description: "$8M raised to expand language support and improve accuracy." },
    { year: 2023, title: "Voice Clone Technology", description: "Breakthrough in preserving speaker's voice across languages." },
    { year: 2024, title: "Global Launch", description: "Public release with support for 50+ languages and enterprise features." }
  ];

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">
          About <span className="gradient-text">T1Translator</span>
        </h1>
        <p className="page-description">
          We're on a mission to eliminate language barriers in digital content worldwide.
        </p>
      </div>

      {/* Mission Section */}
      <section className="section-padding bg-secondary/30 dark:bg-t1-secondaryBg">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg mb-8">
              At T1Translator, we believe language should never be a barrier to accessing valuable content. 
              Our AI-powered platform makes video translation accessible to everyone, preserving the 
              speaker's voice, tone, and emotion across languages.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left mt-12">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-t1-accentBlue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accuracy First</h3>
                  <p>Our translations prioritize contextual accuracy over literal word-for-word conversion.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-t1-accentBlue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Voice Preservation</h3>
                  <p>We maintain the speaker's unique voice characteristics across all supported languages.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-t1-accentBlue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
                  <p>Supporting 50+ languages to help creators reach a truly global audience.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-t1-accentBlue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ethical AI</h3>
                  <p>Committed to responsible AI development and transparent usage policies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto mb-5 w-40 h-40 overflow-hidden rounded-full border-2 border-t1-accentBlue dark:shadow-[0_0_15px_rgba(0,119,255,0.3)]">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-t1-accentBlue dark:text-t1-accentLight mb-2">{member.role}</p>
                <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section-padding bg-secondary/30 dark:bg-t1-secondaryBg">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-t1-accentBlue to-t1-accentLight"></div>
            
            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-gradient z-10"></div>
                
                {/* Content */}
                <div className={`w-1/2 px-6 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="glass-card p-5 rounded-lg">
                    <span className="text-sm font-semibold text-t1-accentBlue dark:text-t1-accentLight">{milestone.year}</span>
                    <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                    <p className="text-sm">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
