import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, FileText, MessageSquare, Shield, ClipboardList, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import visaImg from "@/assets/visa-services.jpg";

const steps = [
  { icon: ClipboardList, title: "Eligibility Assessment", desc: "We evaluate your profile and determine the best visa category for your goals." },
  { icon: FileText, title: "Document Preparation", desc: "Comprehensive checklist and guided preparation of all required documents." },
  { icon: MessageSquare, title: "Interview Coaching", desc: "Mock interviews and expert tips to ace your visa interview with confidence." },
  { icon: Shield, title: "Application Submission", desc: "We review, compile, and submit your application for maximum approval chances." },
];

const checklist = [
  "Valid passport (6+ months validity)",
  "Academic transcripts & certificates",
  "Financial proof / bank statements",
  "Offer letter from institution/employer",
  "Medical examination reports",
  "Police clearance certificate",
  "Passport-size photographs",
  "Statement of Purpose (SOP)",
  "Sponsorship letter (if applicable)",
  "English proficiency test results",
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const VisaImmigration = () => (
  <div>
    <section className="relative pt-20">
      <div className="absolute inset-0 h-[50vh]">
        <img src={visaImg} alt="Visa and travel documents" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 to-navy/80" />
      </div>
      <div className="relative container-narrow section-padding pt-24 text-center">
        <motion.h1 {...fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
          Visa & <span className="text-gradient-gold">Immigration</span>
        </motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
          95% visa success rate. Expert guidance through every step of the visa process.
        </motion.p>
        <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
          <Link to="/apply"><Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">Start Your Visa Process <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading badge="Process" title="Our Visa Guidance Steps" subtitle="A proven 4-step process to get your visa approved." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><s.icon className="w-6 h-6 text-gold" /></div>
              <h3 className="font-heading font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <SectionHeading badge="Checklist" title="Required Documents" subtitle="Make sure you have these documents ready for your visa application." />
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-6 border border-border space-y-3">
            {checklist.map((item) => (
              <motion.div key={item} {...fadeUp} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow text-center">
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border max-w-2xl mx-auto">
          <Award className="w-12 h-12 text-gold mx-auto mb-4" />
          <h3 className="font-heading text-2xl font-bold mb-2">95% Visa Approval Rate</h3>
          <p className="text-muted-foreground mb-6">Our expert team has successfully processed over 2,000 visa applications with an industry-leading success rate.</p>
          <Link to="/consultation"><Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">Book a Consultation</Button></Link>
        </div>
      </div>
    </section>
  </div>
);

export default VisaImmigration;
