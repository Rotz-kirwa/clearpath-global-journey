import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const StickyApplyButton = () => (
  <motion.div
    initial={{ y: 100 }}
    animate={{ y: 0 }}
    className="fixed bottom-6 right-6 z-40 lg:hidden"
  >
    <Link
      to="/apply"
      className="flex items-center gap-2 px-5 py-3 rounded-full bg-gold text-accent-foreground font-semibold text-sm shadow-lg hover:bg-gold-dark transition-colors"
    >
      Apply Now <ArrowRight className="w-4 h-4" />
    </Link>
  </motion.div>
);

export default StickyApplyButton;
