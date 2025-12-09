import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: 'What is your return policy?',
    answer:
      'We offer a 30-day return window from the date of delivery. Items must be in their original, unopened packaging to be eligible for a return. Please visit our Return Policy page for more details.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Standard shipping within the US takes 5-7 business days. We also offer Express (2-3 days) and Overnight shipping options. International shipping varies by destination, typically 10-21 business days.',
  },
  {
    question: 'Are your products cruelty-free?',
    answer:
      'Yes! All Lilly Cosmetics products are 100% cruelty-free. We never test on animals and are certified by Leaping Bunny and PETA.',
  },
  {
    question: 'How do I track my order?',
    answer:
      "Once your order ships, you'll receive an email with a tracking number. You can also log into your account and view your order status under 'My Orders'.",
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes, we ship to select countries worldwide including Canada, UK, European Union, and Australia. Shipping rates and delivery times vary by destination.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay.',
  },
  {
    question: 'How do I find my perfect shade?',
    answer:
      'We offer a virtual shade finder tool on our website that uses AI to recommend the best shades for your skin tone. You can also contact our beauty advisors for personalized recommendations.',
  },
  {
    question: 'Are your products suitable for sensitive skin?',
    answer:
      "Many of our products are formulated for sensitive skin. Look for products labeled 'Sensitive' or 'Hypoallergenic'. We recommend doing a patch test before full application.",
  },
  {
    question: 'How do I contact customer service?',
    answer:
      'You can reach our customer service team via email at hello@lillycosmetics.com, phone at +1 (555) 123-4567 (Mon-Fri 9am-6pm EST), or through our Contact page.',
  },
  {
    question: 'Do you offer gift wrapping?',
    answer:
      "Yes! We offer complimentary gift wrapping on all orders. Simply select 'Gift Wrap' option during checkout and include a personalized message.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              Help Center
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find answers to common questions about our products, shipping,
              returns, and more.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="font-display text-left text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}