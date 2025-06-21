import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { apiPost } from '@/utils/api';

const ForgotPasswordPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiPost('/password-reset/', { email });
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-t1-background text-t1-textSecondary dark:text-white">
      <ThemeToggle />
      
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block text-2xl font-bold gradient-text mb-2">T1Translator</Link>
            <h1 className="text-2xl font-bold">Reset your password</h1>
            <p className="text-t1-textSecondary dark:text-t1-textSecondary">
              {!submitted ? 
                "We'll send you a link to reset your password" :
                "Check your email for the reset link"
              }
            </p>
          </div>
          
          <div className="bg-card border border-t1-textSecondary/10 dark:border-white/10 rounded-xl p-6 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="text-red-500 text-sm text-center">{error}</div>}
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="name@example.com" 
                    className="focus:border-t1-accentBlue dark:focus:border-t1-accentLight transition-colors"
                    required
                    disabled={loading}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-gradient dark:bg-blue-gradient hover:opacity-90 button-glow transition-all" disabled={loading}>
                  {loading ? 'Sending...' : 'Send reset link'}
                </Button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="mx-auto w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reset link sent!</h3>
                <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary mb-6">
                  We've sent a password reset link to your email address. Please check your inbox.
                </p>
                <Button variant="outline" className="w-full" onClick={() => setSubmitted(false)}>
                  Send again
                </Button>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <Link 
                to="/auth/login" 
                className="text-sm inline-flex items-center text-t1-accentBlue dark:text-t1-accentLight hover:opacity-80"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
