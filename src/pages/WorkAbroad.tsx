import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Code, Heart, Building, Wrench, Users, FileText, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import workImg from "@/assets/work-abroad.jpg";

const sectors = [
  { icon: Heart, title: "Healthcare", desc: "Nurses, doctors, and caregivers in high demand across the UK, Canada, and Australia." },
  { icon: Code, title: "Information Technology", desc: "Software engineers, data scientists, and cybersecurity experts needed globally." },
  { icon: Wrench, title: "Engineering", desc: "Civil, mechanical, and electrical engineers with opportunities in Germany and the Middle East." },
  { icon: Building, title: "Hospitality", desc: "Hotel management, culinary arts, and tourism professionals in the UAE and Europe." },
];

const services = [
  { icon: FileText, title: "CV & Resume Optimization", desc: "Professional CV formatting tailored to international standards and employer expectations." },
  { icon: Mic, title: "Interview Preparation", desc: "Mock interviews, common questions, and confidence-building sessions with career coaches." },
  { icon: Users, title: "Employer Partnerships", desc: "Direct connections with verified employers seeking international talent." },
  { icon: Briefcase, title: "Job Placement", desc: "End-to-end support from job search to offer letter and work permit processing." },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const WorkAbroad = () => (
  <div>
    <section className="relative pt-20">
      <div className="absolute inset-0 h-[50vh]">
        <img src={workImg} alt="Professional working abroad" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 to-navy/80" />
      </div>
      <div className="relative container-narrow section-padding pt-24 text-center">
        <motion.h1 {...fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
          Work <span className="text-gradient-gold">Abroad</span>
        </motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Launch your international career. We connect you with employers and opportunities worldwide.
        </motion.p>
        <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
          <Link to="/apply"><Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading badge="Sectors" title="In-Demand Industries" subtitle="Explore high-demand sectors where your skills are needed most." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border hover:border-gold/30 transition-colors">
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
        <SectionHeading badge="Our Support" title="How We Help You Succeed" />
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex gap-4 bg-card rounded-2xl p-6 border border-border">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0"><s.icon className="w-5 h-5 text-gold" /></div>
              <div>
                <h3 className="font-heading font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="gradient-navy section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">Start Your International Career</h2>
        <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">Submit your application and let us match you with the perfect opportunity abroad.</p>
        <Link to="/apply"><Button size="lg" className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">Apply Now <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
      </div>
    </section>
  </div>
);

export default WorkAbroad;
