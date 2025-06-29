import React from "react";
import Header from '@/components/navbar'
import Footer from '@/components/footer'

const PrivacyPolicy: React.FC = () => (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-zinc-900">Privacy Policy</h1>
        <p className="mb-4 text-zinc-700">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
          <ul className="list-disc pl-6 text-zinc-700">
            <li>Personal identification information (Name, email address, phone number, etc.)</li>
            <li>Usage data and cookies</li>
            <li>Other information you provide directly to us</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-zinc-700">
            <li>To provide and maintain our services</li>
            <li>To improve and personalize your experience</li>
            <li>To communicate with you, including customer support</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">How We Protect Your Information</h2>
          <p className="text-zinc-700">
            We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet is 100% secure.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
          <p className="text-zinc-700">
            You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at <a href="mailto:support@example.com" className="text-blue-600 underline">waglogy.in@gmail.com</a>.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
          <p className="text-zinc-700">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>
        <p className="mt-8 text-zinc-500 text-sm">
          Last updated: June 29, 2025
        </p>
      </main>
      <Footer />
    </>
);

export default PrivacyPolicy;