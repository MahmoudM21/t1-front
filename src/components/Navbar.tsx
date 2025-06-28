import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem('token'));


  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-t1-background dark:bg-t1-background bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md border-b border-white/10 dark:border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold gradient-text">T1Translator</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/pricing" className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors">Pricing</Link>
          <Link to="/about" className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors">About Us</Link>
          <Link to="/contact" className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors">Contact</Link>
          <Link to="/history" className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors">History</Link>
          {isAuthenticated && (
            <>
              <Link to="/video-upload" className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors">Upload Video</Link>
              <Link to="/voice-clone" className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors">Voice Clone</Link>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link to="/auth/login">
                <Button variant="ghost" className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-gradient hover:opacity-90 button-glow transition-all">
                  Start Free Trial
                </Button>
              </Link>
            </>
          ) : (
            <Button variant="outline" onClick={handleLogout} className="text-t1-textSecondary dark:text-white/80">Logout</Button>
          )}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-t1-secondaryBg dark:bg-t1-secondaryBg p-4">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/pricing" 
              className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/history" 
              className="text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue transition-colors p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/video-upload" className="p-2 text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue" onClick={() => setIsMenuOpen(false)}>
                  Upload Video
                </Link>
                <Link to="/voice-clone" className="p-2 text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue" onClick={() => setIsMenuOpen(false)}>
                  Voice Clone
                </Link>
              </>
            )}
            {!isAuthenticated ? (
              <>
                <Link to="/auth/login" className="p-2 text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" className="p-2 text-t1-textSecondary dark:text-white/80 hover:text-t1-accentBlue" onClick={() => setIsMenuOpen(false)}>
                  Start Free Trial
                </Link>
              </>
            ) : (
              <Button variant="outline" onClick={() => { setIsMenuOpen(false); handleLogout(); }} className="text-t1-textSecondary dark:text-white/80 w-full mt-2">Logout</Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
