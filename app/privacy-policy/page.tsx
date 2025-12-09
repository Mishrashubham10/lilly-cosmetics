import { PolicyPage } from "@/components/PolicyPage";

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy Policy" lastUpdated="December 1, 2024">
      <div className="space-y-6 text-foreground/90">
        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Introduction
          </h2>
          <p className="leading-relaxed">
            At Lilly Cosmetics, we respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we
            collect, use, and safeguard your information when you visit our
            website or make a purchase.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Information We Collect
          </h2>
          <p className="leading-relaxed mb-4">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, and phone number</li>
            <li>Shipping and billing addresses</li>
            <li>
              Payment information (processed securely through our payment
              provider)
            </li>
            <li>Order history and preferences</li>
            <li>Communication preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            How We Use Your Information
          </h2>
          <p className="leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Prevent fraud and maintain security</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Data Security
          </h2>
          <p className="leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information. All payment transactions are encrypted using
            SSL technology. We regularly review and update our security
            practices to ensure your data remains protected.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Cookies
          </h2>
          <p className="leading-relaxed">
            We use cookies and similar tracking technologies to enhance your
            browsing experience, analyze site traffic, and personalize content.
            You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Your Rights
          </h2>
          <p className="leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have questions about this privacy policy or your personal
            data, please contact us at privacy@lillycosmetics.com or write to us
            at: Lilly Cosmetics, 123 Beauty Boulevard, New York, NY 10001.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
}