import { motion } from "framer-motion";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  { slug: "study-in-canada", title: "How to Study in Canada: A Complete Guide for Kenyan Students", excerpt: "Everything you need to know about Canadian universities, visa requirements, and living costs.", category: "Study Abroad", date: "Mar 10, 2026", readTime: "8 min" },
  { slug: "top-countries-kenyan-students", title: "Top 5 Countries for Kenyan Students in 2026", excerpt: "Discover the best destinations for African students based on education quality, cost, and career prospects.", category: "Guides", date: "Feb 25, 2026", readTime: "6 min" },
  { slug: "visa-interview-tips", title: "10 Visa Interview Tips That Will Guarantee Approval", excerpt: "Expert advice from our visa specialists on how to prepare for and ace your visa interview.", category: "Visa Tips", date: "Feb 12, 2026", readTime: "5 min" },
  { slug: "scholarship-opportunities", title: "Fully Funded Scholarships for African Students", excerpt: "A curated list of scholarship opportunities across Canada, UK, USA, and Australia for 2026.", category: "Scholarships", date: "Jan 30, 2026", readTime: "7 min" },
  { slug: "work-permit-guide", title: "Post-Study Work Permits: What You Need to Know", excerpt: "Understanding work permit options after graduation in major study destinations.", category: "Work Abroad", date: "Jan 15, 2026", readTime: "6 min" },
  { slug: "ielts-preparation", title: "IELTS Preparation: Score 7+ with These Tips", excerpt: "Practical strategies and resources to help you achieve the IELTS score your dream university requires.", category: "Study Tips", date: "Jan 5, 2026", readTime: "5 min" },
];

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const Blog = () => (
  <div className="pt-20">
    <div className="container-narrow section-padding">
      <SectionHeading badge="Blog & Resources" title="Latest Articles" subtitle="Expert guides, tips, and insights for your international journey." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article key={post.slug} {...fadeUp} transition={{ delay: i * 0.08 }} className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-gold/30 hover:shadow-lg transition-all">
            <div className="h-40 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
              <span className="px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-semibold">{post.category}</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              </div>
              <h3 className="font-heading font-bold text-sm leading-snug mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-gold">Read More <ArrowRight className="w-3 h-3" /></span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;
