import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At <strong>HireBharat</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you use our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        phone number, resume/CV, and job preferences when you:
      </p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Create an account</li>
        <li>Apply for jobs</li>
        <li>Contact us through forms</li>
        <li>Subscribe to newsletters</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc ml-6 mb-4 space-y-1">
        <li>Provide and improve our job portal services</li>
        <li>Match you with relevant job opportunities</li>
        <li>Send you job alerts and updates</li>
        <li>Communicate with you regarding support and inquiries</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your data against
        unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sharing of Information</h2>
      <p className="mb-4">
        We do not sell your personal data. We may share your information with
        employers or recruiters only with your consent or as required by law.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or delete your personal
        information. You can manage your data from your account settings or by
        contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you
        about significant changes through email or platform notifications.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, feel
        free to contact us at:{" "}
        <a
          href="mailto:contact@hirebharat.com"
          className="text-indigo-600 underline"
        >
          contact@hirebharat.com
        </a>
      </p>

      <p className="mt-8 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
