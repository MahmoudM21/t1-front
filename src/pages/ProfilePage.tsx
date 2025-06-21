import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, CheckCircle, Key, User, Upload } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { apiGet } from '../utils/api';

const ProfilePage = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        const data = await apiGet('/profile/', token);
        setProfile(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const copyAPIKey = () => {
    if (profile?.api_key) {
      navigator.clipboard.writeText(profile.api_key);
      setCopied(true);
      toast({
        title: "API Key Copied",
        description: "The API key has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">
          My <span className="gradient-text">Profile</span>
        </h1>
        <p className="page-description">
          Manage your account settings and view subscription information.
        </p>
      </div>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Profile Information */}
            <div className="md:col-span-1">
              <Card className="bg-card border border-t1-textSecondary/10 dark:border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>Your personal information</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center pt-4">
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full bg-t1-accentBlue/10 dark:bg-t1-accentBlue/20 border-2 border-dashed border-t1-accentBlue/30 dark:border-t1-accentBlue/50 flex items-center justify-center overflow-hidden">
                      <User className="w-12 h-12 text-t1-textSecondary dark:text-white/60" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-full">
                        <div className="text-white text-xs flex flex-col items-center">
                          <Upload className="w-5 h-5 mb-1" />
                          <span>Upload</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {loading ? (
                    <div className="text-center py-4">Loading...</div>
                  ) : error ? (
                    <div className="text-center py-4 text-red-500">{error}</div>
                  ) : profile ? (
                    <>
                      <h3 className="text-lg font-medium">{profile.name || profile.username || 'User'}</h3>
                      <p className="text-t1-textSecondary dark:text-t1-textSecondary text-sm">{profile.email}</p>
                      <div className="w-full mt-6">
                        <Button variant="outline" className="w-full">
                          Edit Profile
                        </Button>
                      </div>
                    </>
                  ) : null}
                </CardContent>
              </Card>
            </div>
            {/* Right Column - Account Details */}
            <div className="md:col-span-2 space-y-8">
              {/* Subscription Info */}
              <Card className="bg-card border border-t1-textSecondary/10 dark:border-white/10">
                <CardHeader>
                  <CardTitle>Subscription</CardTitle>
                  <CardDescription>Your current plan and billing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-4 rounded-md bg-t1-accentBlue/5 dark:bg-t1-accentBlue/10 border border-t1-accentBlue/20 dark:border-t1-accentBlue/30">
                    <div className="flex flex-wrap justify-between items-center">
                      <div>
                        <h4 className="font-semibold mb-1">Professional Plan</h4>
                        <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">Renews on May 15, 2025</p>
                      </div>
                      <span className="text-t1-accentBlue dark:text-t1-accentLight font-bold">$79/month</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-t1-textSecondary/10 dark:border-white/10 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">Usage</p>
                        <p className="text-lg font-medium">12.4h / 20h</p>
                      </div>
                      <div>
                        <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">Languages Used</p>
                        <p className="text-lg font-medium">8 / 30</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Billing History</Button>
                  <Button className="bg-blue-gradient dark:bg-blue-gradient hover:opacity-90">Upgrade Plan</Button>
                </CardFooter>
              </Card>
              {/* API Key */}
              <Card className="bg-card border border-t1-textSecondary/10 dark:border-white/10">
                <CardHeader>
                  <CardTitle>API Access</CardTitle>
                  <CardDescription>Your secret API key for integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-3 rounded-md bg-background border border-t1-textSecondary/10 dark:border-white/10">
                    <div className="flex items-center">
                      <Key className="w-5 h-5 mr-2 text-t1-textSecondary dark:text-white/60" />
                      <span className="font-mono text-sm">{profile?.api_key || '••••••••••••••••••••••••••••••••'}</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={copyAPIKey} className="flex items-center" disabled={!profile?.api_key}>
                      {copied ? <CheckCircle className="w-4 h-4 mr-1 text-green-500" /> : <Copy className="w-4 h-4 mr-1" />}
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                  </div>
                  <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary mt-3">
                    Keep this key secret. Never share it or use it directly in client-side code.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Regenerate Key</Button>
                </CardFooter>
              </Card>
              {/* Preferences */}
              <Card className="bg-card border border-t1-textSecondary/10 dark:border-white/10">
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Notification and account settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">Receive updates about your translations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-t1-textSecondary/10 dark:border-white/10">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-t1-textSecondary dark:text-t1-textSecondary">Add an extra layer of security</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage;
