import { Award, Heart, Leaf, Sparkles } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Cruelty-Free',
    description:
      'We never test on animals. All our products are certified cruelty-free and ethically produced.',
  },
  {
    icon: Leaf,
    title: 'Clean Beauty',
    description:
      'Formulated with clean, safe ingredients. Free from parabens, sulfates, and harmful chemicals.',
  },
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description:
      'Every product is crafted with the finest ingredients for exceptional performance and results.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description:
      'Recognized by beauty experts worldwide for innovation, quality, and outstanding results.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-primary text-sm uppercase tracking-widest">
                Our Story
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                Beauty That
                <span className="block text-gradient">Celebrates You</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2025, Lilly Cosmetics was born from a simple belief:
                everyone deserves access to luxurious, high-quality cosmetics
                that enhance their natural beauty without compromise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our founder, Lily Cosmetics, started this journey in her small
                apartment, handcrafting lipsticks that combined the richness of
                professional-grade products with clean, ethical ingredients.
                Today, we&apos;ve grown into a beloved beauty brand, but our
                commitment remains the same—creating products that make you feel
                beautiful, confident, and empowered.
              </p>
            </div>
            <div className="relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden border-gradient glow-primary">
                <Image
                  src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800&q=80"
                  alt="Lilly Cosmetics founder"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              What We Believe
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {
                'To create beauty products that not only look luxurious but are formulated with integrity—for you and for our planet.'
              }
            </h2>
            <p className="text-muted-foreground">— Lily Chen, Founder & CEO</p>
          </div>
        </div>
      </section>
    </>
  );
}