
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-t1-background text-t1-textSecondary dark:text-white">
      <Navbar />
      <ThemeToggle />
      
      <main className="flex-grow pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
