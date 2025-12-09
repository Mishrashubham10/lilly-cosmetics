import { PolicyPage } from "@/components/PolicyPage";

export default function ShippingPolicyPage() {
  return (
    <PolicyPage title="Shipping Policy" lastUpdated="December 1, 2024">
      <div className="space-y-6 text-foreground/90">
        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Free Shipping
          </h2>
          <p className="leading-relaxed">
            We offer FREE standard shipping on all orders over ₹2599 within India.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Shipping Options
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-semibold">Method</th>
                  <th className="py-3 pr-4 font-semibold">Delivery Time</th>
                  <th className="py-3 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Standard Shipping</td>
                  <td className="py-3 pr-4">5-7 business days</td>
                  <td className="py-3">Free over ₹1599 / ₹2599</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Express Shipping</td>
                  <td className="py-3 pr-4">2-3 business days</td>
                  <td className="py-3">₹199</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Overnight Shipping</td>
                  <td className="py-3 pr-4">1 business day</td>
                  <td className="py-3">₹299</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Order Processing
          </h2>
          <p className="leading-relaxed">
            Orders placed before 2:00 PM EST on business days are processed the
            same day. Orders placed after 2:00 PM EST or on weekends/holidays
            will be processed the next business day.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            International Shipping
          </h2>
          <p className="leading-relaxed mb-4">
            We ship to select countries worldwide. International shipping rates
            and delivery times vary by destination:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Canada: $15.99 (7-14 business days)</li>
            <li>United Kingdom: ₹469 (10-14 business days)</li>
            <li>European Union: ₹799 (10-18 business days)</li>
            <li>Australia: ₹949 (14-21 business days)</li>
          </ul>
          <p className="leading-relaxed mt-4 text-muted-foreground">
            Note: International orders may be subject to customs duties and
            taxes, which are the responsibility of the recipient.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Order Tracking
          </h2>
          <p className="leading-relaxed">
            Once your order ships, you&apos;ll receive an email with a tracking
            number. You can track your package by logging into your account or
            using the tracking link provided in your shipping confirmation
            email.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
            Lost or Damaged Packages
          </h2>
          <p className="leading-relaxed">
            If your package is lost or arrives damaged, please contact us within
            48 hours of the expected delivery date. We&apos;ll work with the carrier
            to locate your package or ship a replacement.
          </p>
        </section>
      </div>
    </PolicyPage>
  );
}