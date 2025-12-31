'use client';

import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from "zod";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address').max(255),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'lillycosmeticsecommercepvtltd@gmail.com',
    subtitle: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 8097899448',
    subtitle: 'Mon-Fri 9am - 6pm',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Office No. E-611, 6th Floor, Crystal Plaza, New Linkroad',
    subtitle: 'Infinity Mall, Andheri, Mumbai (400053)',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday',
    subtitle: '9:00 AM - 6:00 PM',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Message Sent!', {
      description: `Thank you for contacting us. We'll get back to you soon.`,
    });
    form.reset();
    setIsSubmitting(false);
    console.log(data);
  };

  return (
    <>
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-widest mb-2">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions about our products or need assistance? We&apos;re here
              to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your inquiry..."
                            className="min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-foreground">{item.content}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}