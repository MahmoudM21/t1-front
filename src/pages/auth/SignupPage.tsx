import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox";
import ThemeToggle from '@/components/ThemeToggle';
import { apiPost } from '@/utils/api';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);
    try {
      setErrorMessage('');
      const data = await apiPost('/signup/', {
        first_name: firstName,
        last_name: lastName,
        email,
        password
      });
      if (data?.token) {
        localStorage.setItem('token', data.token);
        navigate('/profile');
      } else {
        setErrorMessage('Signup succeeded but no token received.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage('Signup failed: ' + err.message);
      } else {
        setErrorMessage('An unknown error occurred during signup.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-t1-background text-t1-textSecondary dark:text-white">
      <ThemeToggle />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block text-2xl font-bold gradient-text mb-2">T1 Translator</Link>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-t1-textSecondary dark:text-t1-textSecondary">Start your 7-day free trial, no credit card required</p>
          </div>
          <div className="bg-card border border-t1-textSecondary/10 dark:border-white/10 rounded-xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="text-red-500 text-sm text-center">{errorMessage}</div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input 
                    id="first-name" 
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input 
                    id="last-name" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com" 
                  className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                  required
                  disabled={loading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                  required
                  disabled={loading}
                />
                <p className="text-xs text-t1-textSecondary dark:text-t1-textSecondary">
                  Must be at least 8 characters with 1 uppercase, 1 lowercase and 1 number
                </p>
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" required className="data-[state=checked]:bg-t1-accentBlue dark:data-[state=checked]:bg-t1-accentLight" disabled={loading} />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <Link to="/legal/terms" className="text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/legal/privacy" className="text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-blue-gradient dark:bg-blue-gradient hover:opacity-90 button-glow transition-all mt-4" disabled={loading}>
                {loading ? 'Creating account...' : 'Create account'}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">
                Already have an account?{' '}
                <Link to="/auth/login" className="text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-6 bg-t1-accentBlue/5 dark:bg-t1-accentBlue/10 border border-t1-accentBlue/20 dark:border-t1-accentBlue/30 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-2">Free trial includes:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-t1-accentBlue dark:text-t1-accentLight mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <span>5 hours of video translation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-t1-accentBlue dark:text-t1-accentLight mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <span>10 supported languages</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-t1-accentBlue dark:text-t1-accentLight mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <span>Basic subtitle customization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;


/*
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react'; // Changed from Checkbox to Check for the icon
import { Checkbox } from "@/components/ui/checkbox"; // Import the proper Checkbox component
import ThemeToggle from '@/components/ThemeToggle';

const SignupPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup submission
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-t1-background text-t1-textSecondary dark:text-white">
      <ThemeToggle />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block text-2xl font-bold gradient-text mb-2">T1Translator</Link>
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="text-t1-textSecondary dark:text-t1-textSecondary">Start your 7-day free trial, no credit card required</p>
          </div>
          
          <div className="bg-card border border-t1-textSecondary/10 dark:border-white/10 rounded-xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input 
                    id="first-name" 
                    className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input 
                    id="last-name" 
                    className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                  required
                />
                <p className="text-xs text-t1-textSecondary dark:text-t1-textSecondary">
                  Must be at least 8 characters with 1 uppercase, 1 lowercase and 1 number
                </p>
              </div>
              
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox id="terms" required className="data-[state=checked]:bg-t1-accentBlue dark:data-[state=checked]:bg-t1-accentLight" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{' '}
                  <Link to="/legal/terms" className="text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/legal/privacy" className="text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              
              <Button type="submit" className="w-full bg-blue-gradient dark:bg-blue-gradient hover:opacity-90 button-glow transition-all mt-4">
                Create account
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">
                Already have an account?{' '}
                <Link to="/auth/login" className="text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-t1-accentBlue/5 dark:bg-t1-accentBlue/10 border border-t1-accentBlue/20 dark:border-t1-accentBlue/30 p-4 rounded-lg text-sm">
            <h3 className="font-medium mb-2">Free trial includes:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-t1-accentBlue dark:text-t1-accentLight mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <span>5 hours of video translation</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-t1-accentBlue dark:text-t1-accentLight mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <span>10 supported languages</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-t1-accentBlue dark:text-t1-accentLight mr-2">
                  <Check className="h-4 w-4" />
                </div>
                <span>Basic subtitle customization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
*/