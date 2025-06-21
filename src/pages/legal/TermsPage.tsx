
import React from 'react';
import Layout from '@/components/Layout';

const TermsPage = () => {
  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">Terms of Service</h1>
        <p className="page-description">
          Last updated: April 25, 2025
        </p>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto prose prose-invert dark:prose-invert">
            <h2>1. Introduction</h2>
            <p>
              Welcome to T1Translator. By using our service, you agree to these Terms of Service. Please read them carefully.
            </p>
            <p>
              T1Translator provides an AI-powered video translation platform ("Service") that allows users to translate video content into multiple languages.
            </p>
            
            <h2>2. Using Our Service</h2>
            <h3>2.1 Account Registration</h3>
            <p>
              To use certain features of the Service, you may be required to register for an account. You must provide accurate, current, and complete information during registration and keep your account information updated.
            </p>
            
            <h3>2.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2>3. Subscription and Payments</h2>
            <h3>3.1 Free Trial</h3>
            <p>
              We may offer a free trial period for new users. At the end of the trial period, your account will automatically convert to a paid subscription unless you cancel before the trial ends.
            </p>
            
            <h3>3.2 Subscription Plans</h3>
            <p>
              We offer various subscription plans with different features and limitations. You can upgrade, downgrade, or cancel your subscription at any time through your account settings.
            </p>
            
            <h3>3.3 Payment</h3>
            <p>
              Payment is charged at the beginning of each billing period. All fees are non-refundable except as expressly set forth in these Terms.
            </p>
            
            <h2>4. Content and Intellectual Property</h2>
            <h3>4.1 Your Content</h3>
            <p>
              You retain ownership of any content you upload to the Service. By uploading content, you grant us a worldwide, non-exclusive license to use, reproduce, modify, and distribute your content solely for the purpose of operating and improving the Service.
            </p>
            
            <h3>4.2 Our Intellectual Property</h3>
            <p>
              The Service and its original content, features, and functionality are owned by T1Translator and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            
            <h2>5. Privacy Policy</h2>
            <p>
              Please refer to our Privacy Policy for information on how we collect, use, and disclose information from our users.
            </p>
            
            <h2>6. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              In no event shall T1Translator be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the new Terms on the Service and/or by sending you an email.
            </p>
            
            <h2>9. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at legal@t1translator.com.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;
