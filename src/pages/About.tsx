import { motion } from "framer-motion";
import { Target, Heart, Users, Globe, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Helping Africans access global opportunities for education and career advancement." },
  { icon: Heart, title: "Student-First", desc: "Every decision we make puts our students' and clients' success at the center." },
  { icon: Shield, title: "Integrity", desc: "Transparent processes, honest advice, and ethical business practices always." },
  { icon: Globe, title: "Global Network", desc: "Partnerships with universities and employers across 15+ countries worldwide." },
];

const team = [
  { name: "David Kamau", role: "Founder & CEO", desc: "15+ years in international education consulting" },
  { name: "Sarah Njeri", role: "Head of Admissions", desc: "Former university admissions officer with UK experience" },
  { name: "Michael Odhiambo", role: "Visa Specialist", desc: "Expert in immigration law and visa processing" },
  { name: "Amina Hassan", role: "Career Counselor", desc: "International HR professional and career coach" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const About = () => (
  <div>
    <section className="gradient-navy pt-20">
      <div className="container-narrow section-padding pt-24 text-center">
        <motion.h1 {...fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
          About <span className="text-gradient-gold">Clearpath</span>
        </motion.h1>
        <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
          Since 2018, we've been helping students and professionals navigate the path to international education and careers. Our mission is to make global opportunities accessible to every ambitious African.
        </motion.p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 -mt-12">
          <StatCounter value={2000} suffix="+" label="Students Placed" />
          <StatCounter value={95} suffix="%" label="Visa Success Rate" />
          <StatCounter value={6} suffix="+" label="Years Experience" />
          <StatCounter value={50} suffix="+" label="Partner Institutions" />
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted/50">
      <div className="container-narrow">
        <SectionHeading badge="Our Values" title="What We Stand For" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div key={v.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><v.icon className="w-6 h-6 text-gold" /></div>
              <h3 className="font-heading font-bold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow">
        <SectionHeading badge="Our Team" title="Meet the Experts" subtitle="Dedicated professionals committed to your success." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <motion.div key={t.name} {...fadeUp} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading font-bold">{t.name}</h3>
              <p className="text-sm text-gold font-medium">{t.role}</p>
              <p className="text-xs text-muted-foreground mt-2">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
