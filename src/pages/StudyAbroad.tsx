import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, DollarSign, Globe, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import studyImg from "@/assets/study-abroad.jpg";

const countries = [
  { name: "Canada", flag: "🇨🇦", unis: ["University of Toronto", "UBC", "McGill University"], programs: "500+ Programs", intake: "Sep, Jan, May" },
  { name: "United Kingdom", flag: "🇬🇧", unis: ["King's College London", "University of Manchester", "University of Leeds"], programs: "400+ Programs", intake: "Sep, Jan" },
  { name: "United States", flag: "🇺🇸", unis: ["MIT", "Stanford", "NYU"], programs: "600+ Programs", intake: "Aug, Jan" },
  { name: "Australia", flag: "🇦🇺", unis: ["University of Melbourne", "RMIT", "Monash University"], programs: "350+ Programs", intake: "Feb, Jul" },
  { name: "Germany", flag: "🇩🇪", unis: ["TU Munich", "Heidelberg University", "LMU Munich"], programs: "200+ Programs", intake: "Oct, Apr" },
];

const levels = [
  { icon: BookOpen, title: "Undergraduate", desc: "Bachelor's degrees at world-renowned universities across all disciplines." },
  { icon: GraduationCap, title: "Master's", desc: "Specialized postgraduate programs to advance your career and expertise." },
  { icon: Globe, title: "PhD", desc: "Research-intensive doctoral programs with funding and scholarships." },
];

const steps = [
  { step: "01", title: "Free Consultation", desc: "Meet our counselors to discuss your goals and eligibility." },
  { step: "02", title: "University Selection", desc: "We help you choose the best programs and universities." },
  { step: "03", title: "Application Support", desc: "Complete applications, SOPs, and recommendation letters." },
  { step: "04", title: "Visa & Departure", desc: "Visa processing, interview prep, and pre-departure briefing." },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const StudyAbroad = () => (
  <div>
    {/* Hero */}
    <section className="relative pt-20">
      <div className="absolute inset-0 h-[50vh]">
        <img src={studyImg} alt="Students graduating abroad" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 to-navy/80" />
      </div>
      <div className="relative container-narrow section-padding pt-24 text-center">
        <motion.h1 {...fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
          Study <span className="text-gradient-gold">Abroad</span>
        </motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Access world-class education at top universities across 15+ countries. Your academic journey starts here.
        </motion.p>
        <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
          <Link to="/apply"><Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">Start Your Application <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
        </motion.div>
      </div>
    </section>

    {/* Programs */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading badge="Programs" title="Choose Your Level" subtitle="We support students at every academic stage." />
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((l, i) => (
            <motion.div key={l.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><l.icon className="w-6 h-6 text-gold" /></div>
              <h3 className="font-heading font-bold text-lg mb-2">{l.title}</h3>
              <p className="text-sm text-muted-foreground">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Countries */}
    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <SectionHeading badge="Destinations" title="Top Countries & Universities" />
        <div className="space-y-4">
          {countries.map((c, i) => (
            <motion.div key={c.name} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl p-6 border border-border flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex items-center gap-3 min-w-[180px]">
                <span className="text-3xl">{c.flag}</span>
                <h3 className="font-heading font-bold">{c.name}</h3>
              </div>
              <div className="flex-1 flex flex-wrap gap-2">
                {c.unis.map((u) => <span key={u} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">{u}</span>)}
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {c.programs}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {c.intake}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading badge="How It Works" title="Your Application Journey" subtitle="A simple 4-step process to your international education." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.step} {...fadeUp} transition={{ delay: i * 0.1 }} className="relative">
              <span className="font-heading text-5xl font-bold text-gold/20">{s.step}</span>
              <h3 className="font-heading font-bold text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="gradient-navy section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Ready to Study Abroad?</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">Apply today and let us handle the rest. Your future awaits.</p>
        <Link to="/apply"><Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">Apply Now <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
      </div>
    </section>
  </div>
);

export default StudyAbroad;
