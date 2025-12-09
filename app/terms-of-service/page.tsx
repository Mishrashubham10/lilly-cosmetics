import { PolicyPage } from "@/components/PolicyPage";

export default function TermsOfServicesPage() {
  return (
    <PolicyPage title="Terms of Service" lastUpdated="December 1, 2024">
      <div className="space-y-6 text-foreground/90">
        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Agreement to Terms
          </h2>
          <p className="leading-relaxed">
            By accessing or using the Lilly Cosmetics website and services, you
            agree to be bound by these Terms of Service. If you do not agree to
            these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Use of Our Services
          </h2>
          <p className="leading-relaxed mb-4">
            By using our services, you agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide accurate and complete information when making purchases
            </li>
            <li>Use the website for lawful purposes only</li>
            <li>Not attempt to gain unauthorized access to our systems</li>
            <li>
              Not reproduce, distribute, or modify any content without
              permission
            </li>
            <li>Be at least 18 years old or have parental consent</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Product Information
          </h2>
          <p className="leading-relaxed">
            We strive to provide accurate product descriptions, images, and
            pricing. However, we do not guarantee that all information is
            error-free. Colors may appear differently on various devices. We
            reserve the right to correct any errors and update product
            information at any time.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Pricing and Payment
          </h2>
          <p className="leading-relaxed">
            All prices are listed in USD and are subject to change without
            notice. We reserve the right to refuse or cancel orders if pricing
            errors occur. Payment must be received in full before orders are
            processed.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Intellectual Property
          </h2>
          <p className="leading-relaxed">
            All content on this website, including text, images, logos, and
            graphics, is the property of Lilly Cosmetics and is protected by
            copyright and trademark laws. You may not use any content without
            our written permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            Lilly Cosmetics shall not be liable for any indirect, incidental,
            special, or consequential damages arising from your use of our
            services or products. Our total liability shall not exceed the
            amount you paid for the product or service in question.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Governing Law
          </h2>
          <p className="leading-relaxed">
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the State of New York, without regard to
            its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Changes to Terms
          </h2>
          <p className="leading-relaxed">
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting on our website. Your continued
            use of our services constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="leading-relaxed">
            For questions about these Terms of Service, please contact us at
            legal@lillycosmetics.com.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
}