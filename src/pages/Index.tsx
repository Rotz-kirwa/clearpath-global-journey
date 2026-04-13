import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Briefcase, FileCheck, Globe, Users, Award, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import visaImg from "@/assets/visa-services.jpg";

const studyImg = "https://i.pinimg.com/736x/51/46/2b/51462bff02c31d97324d43de3928996d.jpg";
const workImg = "https://i.pinimg.com/1200x/78/5a/17/785a174ccbedf1d2b007e312aae0f2fc.jpg";

const heroSlides = [
  { src: "https://i.pinimg.com/736x/25/1e/1b/251e1b5992b5ac13797edc62ae60fb27.jpg", position: "object-center" },
  { src: "https://i.pinimg.com/736x/ee/94/b4/ee94b446174cf4fb4353f369f988c118.jpg", position: "object-center" },
  { src: "https://i.pinimg.com/736x/b4/56/87/b45687e15fab79a7743cdffe05a553d6.jpg", position: "object-top" },
];

const countries = [
  { name: "Canada", flag: "🇨🇦", desc: "Top destination for students & skilled workers" },
  { name: "United Kingdom", flag: "🇬🇧", desc: "World-class education & career pathways" },
  { name: "United States", flag: "🇺🇸", desc: "Ivy League universities & tech opportunities" },
  { name: "Australia", flag: "🇦🇺", desc: "Quality education with post-study work rights" },
  { name: "Germany", flag: "🇩🇪", desc: "Tuition-free universities & engineering hubs" },
  { name: "UAE", flag: "🇦🇪", desc: "Fast-growing job market & business hub" },
];

const services = [
  { icon: GraduationCap, title: "Study Abroad", desc: "Get admitted to top universities worldwide with our expert guidance and application support.", img: studyImg, link: "/study-abroad" },
  { icon: Briefcase, title: "Work Abroad", desc: "Land your dream international career with our job placement services and employer connections.", img: workImg, link: "/work-abroad" },
  { icon: FileCheck, title: "Visa & Immigration", desc: "Navigate complex visa processes with our 95% success rate and dedicated support team.", img: visaImg, link: "/visa-immigration" },
];

const testimonials = [
  { name: "Grace M.", role: "Student, University of Toronto", text: "Clearpath made my dream of studying in Canada a reality. From application to visa, they guided me every step of the way.", rating: 5 },
  { name: "James O.", role: "Software Engineer, London", text: "I got my UK Skilled Worker visa in record time. The team's expertise and professionalism is unmatched.", rating: 5 },
  { name: "Faith W.", role: "Nurse, Melbourne", text: "Thanks to Clearpath, I'm now working as a registered nurse in Australia. They handled everything seamlessly.", rating: 5 },
];

const partners = ["University of Toronto", "University of Melbourne", "TU Munich", "King's College London", "University of British Columbia", "RMIT University"];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);

    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.img
              key={current}
              src={heroSlides[current].src}
              alt="Hero background"
              className={`absolute inset-0 w-full h-full object-cover ${heroSlides[current].position}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              width={1920}
              height={1080}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-gold" : "w-2 bg-white/50"}`}
            />
          ))}
        </div>
        <div className="relative container-narrow section-padding pt-28 lg:pt-32">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wider uppercase mb-6"
            >
              <Award className="w-3.5 h-3.5" /> Trusted by 2,000+ students
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-primary-foreground"
            >
              Your Clear Path to{" "}
              <span className="text-gradient-gold">Study & Work</span> Abroad
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-primary-foreground/80 max-w-lg"
            >
              We help you secure admissions, visas, and jobs globally. Your international future starts here.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/apply">
                <Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold text-base px-8">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/consultation">
                <Button size="lg" className="bg-white text-navy border-2 border-white hover:bg-white/90 font-semibold text-base px-8" style={{ color: 'hsl(220 60% 18%)' }}>
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex items-center gap-6 text-primary-foreground/60 text-sm"
            >
              <div className="flex items-center gap-2"><Globe className="w-4 h-4 text-gold" /> 15+ Countries</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-gold" /> Expert Counselors</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> 95% Visa Success</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading badge="Destinations" title="Explore Top Countries" subtitle="Discover opportunities in the world's most sought-after destinations for education and careers." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {countries.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="group bg-card rounded-2xl p-5 text-center border border-border hover:border-gold/30 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{c.flag}</div>
                <h3 className="font-heading font-semibold text-sm">{c.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading badge="What We Do" title="Our Services" subtitle="Comprehensive support for every step of your international journey." />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.15, duration: 0.5 }} className="h-full">
                <Link to={s.link} className="group flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-2xl transition-all duration-300">
                  <div className="h-72 overflow-hidden relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" width={1280} height={720} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center shadow-lg">
                        <s.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-xl mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gradient-navy section-padding">
        <div className="container-narrow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value={2000} suffix="+" label="Students Placed" light />
            <StatCounter value={95} suffix="%" label="Visa Success Rate" light />
            <StatCounter value={15} suffix="+" label="Countries Covered" light />
            <StatCounter value={50} suffix="+" label="Partner Universities" light />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading badge="Testimonials" title="What Our Students Say" subtitle="Real stories from real people who achieved their dreams with Clearpath." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{ delay: i * 0.15 }} className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-muted/50">
        <div className="container-narrow">
          <SectionHeading badge="Trusted Partners" title="Our University & Employer Partners" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((p) => (
              <div key={p} className="bg-card rounded-xl p-4 flex items-center justify-center border border-border h-20">
                <span className="text-xs font-semibold text-muted-foreground text-center">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy section-padding">
        <div className="container-narrow text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your <span className="text-gradient-gold">Global Journey?</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
              Take the first step towards your international education or career. Our experts are ready to guide you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold text-base px-8">
                  Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
