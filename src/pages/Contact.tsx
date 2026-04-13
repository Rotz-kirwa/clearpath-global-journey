import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent successfully!");
  };

  return (
    <div className="pt-20">
      <div className="container-narrow section-padding">
        <SectionHeading badge="Get In Touch" title="Contact Us" subtitle="Have questions? Reach out and our team will get back to you within 24 hours." />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-gold" /></div>
                <div>
                  <h3 className="font-heading font-bold text-sm">Phone</h3>
                  <p className="text-sm text-muted-foreground">+254 700 123 456</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-gold" /></div>
                <div>
                  <h3 className="font-heading font-bold text-sm">Email</h3>
                  <p className="text-sm text-muted-foreground">info@clearpath.co.ke</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-gold" /></div>
                <div>
                  <h3 className="font-heading font-bold text-sm">Office</h3>
                  <p className="text-sm text-muted-foreground">Westlands, Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254700123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-emerald-600" />
              <div>
                <p className="font-heading font-bold text-sm text-emerald-800">Chat on WhatsApp</p>
                <p className="text-xs text-emerald-600">Quick replies during business hours</p>
              </div>
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8175827893766!2d36.80277!3d-1.2635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTUnNDguNiJTIDM2wrA0OCcxMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Clearpath office location"
              />
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-2xl border border-border p-6 space-y-4">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-bold text-lg">Send us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>First Name</Label><Input placeholder="John" required /></div>
                  <div><Label>Last Name</Label><Input placeholder="Doe" required /></div>
                </div>
                <div><Label>Email</Label><Input type="email" placeholder="john@example.com" required /></div>
                <div><Label>Phone</Label><Input placeholder="+254 700 123 456" /></div>
                <div><Label>Message</Label><Textarea placeholder="How can we help you?" rows={4} required /></div>
                <Button type="submit" className="w-full bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
