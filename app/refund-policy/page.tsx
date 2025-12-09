import { PolicyPage } from "@/components/PolicyPage";

export default function RefundPolicyPage() {
  return (
    <PolicyPage title="Refund Policy" lastUpdated="December 1, 2024">
      <div className="space-y-6 text-foreground/90">
        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Our Commitment to You
          </h2>
          <p className="leading-relaxed">
            At Lilly Cosmetics, we want you to be completely satisfied with your
            purchase. If you&apos;re not happy with your order for any reason,
            we&apos;re here to help.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Eligibility for Refunds
          </h2>
          <p className="leading-relaxed mb-4">
            You may be eligible for a refund if:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your order arrives damaged or defective</li>
            <li>You received the wrong product</li>
            <li>
              The product doesn&apos;t match the description on our website
            </li>
            <li>You request a refund within 30 days of delivery</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            How to Request a Refund
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              Contact our customer service team at lillycosmeticsecommercepvtltd@gmail.com
            </li>
            <li>Include your order number and reason for the refund request</li>
            <li>Attach photos if the product is damaged or defective</li>
            <li>
              Wait for our team to review your request (1-2 business days)
            </li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Refund Processing
          </h2>
          <p className="leading-relaxed">
            Once your refund is approved, it will be processed within 5-7
            business days. The refund will be credited to your original payment
            method. Please note that it may take additional time for the refund
            to appear in your account depending on your bank or payment
            provider.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Non-Refundable Items
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gift cards</li>
            <li>Sale or clearance items (unless defective)</li>
            <li>Products used more than once for testing</li>
            <li>Products without original packaging</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Questions?
          </h2>
          <p className="leading-relaxed">
            If you have any questions about our refund policy, please don&apos;t
            hesitate to contact us at hello@lillycosmetics.com or call us at +91 8097899448.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
}