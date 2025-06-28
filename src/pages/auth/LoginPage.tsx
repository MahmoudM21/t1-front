//export default LoginPage;

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';
import { apiPost } from '@/utils/api';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    try {
      setErrorMessage('');
      const data = await apiPost('/login/', {
        email,
        password
      });
      if (data?.token) {
        localStorage.setItem('token', data.token);
        navigate('/profile');
      } else {
        setErrorMessage('Login succeeded but no token received.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage('Login failed: ' + err.message);
      } else {
        setErrorMessage('An unknown error occurred during login.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-t1-background text-t1-textSecondary dark:text-white">
      <ThemeToggle />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block text-2xl font-bold gradient-text mb-2">T1Translator</Link>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-t1-textSecondary dark:text-t1-textSecondary">Sign in to your account</p>
          </div>

          <div className="bg-card border border-t1-textSecondary/10 dark:border-white/10 rounded-xl p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="text-red-500 text-sm text-center">{errorMessage}</div>
              )}

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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link 
                    to="/auth/forgot-password" 
                    className="text-sm text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                  required
                  disabled={loading}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-gradient dark:bg-blue-gradient hover:opacity-90 button-glow transition-all"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">
                Don't have an account?{' '}
                <Link to="/signup" className="text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-t1-textSecondary dark:text-t1-textSecondary">
            By signing in, you agree to our{' '}
            <Link to="/legal/terms" className="underline hover:text-t1-accentBlue dark:hover:text-t1-accentLight">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/legal/privacy" className="underline hover:text-t1-accentBlue dark:hover:text-t1-accentLight">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

