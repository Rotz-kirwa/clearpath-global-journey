import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground">
    <div className="container-narrow section-padding !pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
              <span className="font-heading font-bold text-sm text-accent-foreground">C</span>
            </div>
            <span className="font-heading font-bold text-xl">
              Clear<span className="text-gold">path</span>
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Helping students and professionals achieve their dreams of studying and working abroad since 2018.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/study-abroad" className="hover:text-gold transition-colors">Study Abroad</Link></li>
            <li><Link to="/work-abroad" className="hover:text-gold transition-colors">Work Abroad</Link></li>
            <li><Link to="/visa-immigration" className="hover:text-gold transition-colors">Visa & Immigration</Link></li>
            <li><Link to="/consultation" className="hover:text-gold transition-colors">Book Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Blog & Resources</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            <li><Link to="/apply" className="hover:text-gold transition-colors">Apply Now</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +254 700 123 456</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> info@clearpath.co.ke</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5" /> Westlands, Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/50">© {new Date().getFullYear()} Clearpath. All rights reserved.</p>
        <div className="flex gap-4 text-xs text-primary-foreground/50">
          <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
