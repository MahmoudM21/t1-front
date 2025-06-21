
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-t1-secondaryBg border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-xl font-bold gradient-text mb-4">T1Translator</div>
            <p className="text-t1-textSecondary mb-4">
              Breaking language barriers with AI-powered video translation technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-t1-accentBlue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-t1-accentBlue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-t1-accentBlue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-t1-accentBlue transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.017 2.0c-5.517 0-9.997 4.48-9.997 9.997 0 4.418 2.865 8.166 6.839 9.488.5.092.685-.217.685-.477 0-.237-.007-.866-.01-1.698-2.782.605-3.369-1.338-3.369-1.338-.454-1.152-1.11-1.459-1.11-1.459-.909-.62.069-.606.069-.606 1.002.07 1.527 1.025 1.527 1.025.89 1.524 2.336 1.084 2.902.829.09-.645.35-1.084.634-1.334-2.22-.25-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.104-.253-.448-1.269.097-2.647 0 0 .838-.269 2.75 1.022a9.606 9.606 0 012.5-.336c.85.004 1.705.115 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.378.203 2.394.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.308.678.919.678 1.85 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12.017 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-t1-textSecondary hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-t1-textSecondary text-sm">
            © 2025 T1Translator. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-t1-textSecondary hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-t1-textSecondary hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-t1-textSecondary hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
