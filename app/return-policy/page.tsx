import { PolicyPage } from "@/components/PolicyPage";

export default function ReturnPolicyPage() {
  return (
    <PolicyPage title="Return Policy" lastUpdated="December 1, 2024">
      <div className="space-y-6 text-foreground/90">
        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            30-Day Return Window
          </h2>
          <p className="leading-relaxed">
            We offer a 30-day return window from the date of delivery. If you&lsquo;re
            not completely satisfied with your purchase, you can return it for a
            full refund or exchange.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Return Conditions
          </h2>
          <p className="leading-relaxed mb-4">
            To be eligible for a return, items must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be in their original, unopened packaging</li>
            <li>Include all original tags and labels</li>
            <li>Be returned within 30 days of delivery</li>
            <li>Be accompanied by the original receipt or proof of purchase</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            How to Initiate a Return
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Log into your account and navigate to your order history</li>
            <li>Select the item(s) you wish to return</li>
            <li>Choose your preferred return method (refund or exchange)</li>
            <li>Print the prepaid return label provided</li>
            <li>Pack the item(s) securely and attach the return label</li>
            <li>Drop off the package at any authorized shipping location</li>
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Return Shipping
          </h2>
          <p className="leading-relaxed">
            We provide free return shipping for all orders within the United
            States. For international returns, customers are responsible for
            return shipping costs unless the item was received damaged or
            defective.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Opened Products
          </h2>
          <p className="leading-relaxed">
            Due to health and safety regulations, we cannot accept returns on
            opened cosmetic products unless they are defective or caused an
            allergic reaction. If you experience any issues with a product,
            please contact our customer service team immediately.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Exchanges
          </h2>
          <p className="leading-relaxed">
            If you&lsquo;d like to exchange an item for a different shade, size, or
            product, please indicate this when initiating your return. Exchanges
            are subject to availability and will be processed once we receive
            your returned item.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Need Help?
          </h2>
          <p className="leading-relaxed">
            For any questions about returns, please reach out to our customer
            service team at lillycosmeticsecommercepvtltd@gmail.com or call +91 8097899448.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
}