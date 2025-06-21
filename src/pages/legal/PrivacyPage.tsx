
import React from 'react';
import Layout from '@/components/Layout';

const PrivacyPage = () => {
  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-description">
          Last updated: April 25, 2025
        </p>
      </div>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto prose prose-invert dark:prose-invert">
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how T1Translator ("we", "our", or "us") collects, uses, and shares information about you when you use our website, mobile applications, and services (collectively, the "Services").
            </p>
            <p>
              We are committed to protecting your privacy and ensuring you have a positive experience when using our Services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide to Us</h3>
            <p>
              We collect information you provide directly to us when you:
            </p>
            <ul>
              <li>Create an account or sign up for our Services</li>
              <li>Upload content for translation</li>
              <li>Make a purchase or subscribe to our Services</li>
              <li>Contact our customer support</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            
            <h3>2.2 Information We Collect Automatically</h3>
            <p>
              When you access or use our Services, we automatically collect certain information, including:
            </p>
            <ul>
              <li>Log Information: Such as your IP address, browser type, operating system, referring web page, and pages visited.</li>
              <li>Device Information: Such as device identifiers, device type, and settings.</li>
              <li>Usage Information: Such as features you use, actions you take, and time, frequency, and duration of activities.</li>
            </ul>
            
            <h2>3. How We Use Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize and improve the Services</li>
            </ul>
            
            <h2>4. Sharing of Information</h2>
            <h3>4.1 With Your Consent</h3>
            <p>
              We may share your information with third parties when you have given us your consent to do so.
            </p>
            
            <h3>4.2 Service Providers</h3>
            <p>
              We may share your information with third-party vendors, consultants, and other service providers who need access to your information to perform services on our behalf.
            </p>
            
            <h3>4.3 Legal Requirements</h3>
            <p>
              We may disclose your information if required to do so by law or in response to valid requests by public authorities.
            </p>
            
            <h2>5. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2>6. Your Rights and Choices</h2>
            <h3>6.1 Account Information</h3>
            <p>
              You may update, correct, or delete your account information at any time by logging into your account or contacting us.
            </p>
            
            <h3>6.2 Cookies</h3>
            <p>
              Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject cookies.
            </p>
            
            <h3>6.3 Promotional Communications</h3>
            <p>
              You may opt out of receiving promotional emails from us by following the instructions in those emails.
            </p>
            
            <h2>7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information against unauthorized or unlawful processing and against accidental loss, destruction, or damage.
            </p>
            
            <h2>8. International Data Transfers</h2>
            <p>
              Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country.
            </p>
            
            <h2>9. Children's Privacy</h2>
            <p>
              Our Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.
            </p>
            
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at privacy@t1translator.com.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPage;
