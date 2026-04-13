import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    children: [
      { label: "Study Abroad", path: "/study-abroad" },
      { label: "Work Abroad", path: "/work-abroad" },
      { label: "Visa & Immigration", path: "/visa-immigration" },
    ],
  },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border/50">
      <div className="container-narrow section-padding !py-0 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-gold flex items-center justify-center">
            <span className="font-heading font-bold text-sm text-accent-foreground">C</span>
          </div>
          <span className="font-heading font-bold text-xl text-foreground">
            Clear<span className="text-gold">path</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 mt-2 w-52 bg-card rounded-xl shadow-xl border border-border p-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/consultation">
            <Button variant="outline" size="sm">
              Book Consultation
            </Button>
          </Link>
          <Link to="/apply">
            <Button size="sm" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">
              Apply Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path!}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-4 flex flex-col gap-2">
                <Link to="/consultation" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">Book Consultation</Button>
                </Link>
                <Link to="/apply" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">Apply Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
