import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

const StatCounter = ({ value, suffix = "", label, light = false }: StatCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className={`font-heading text-4xl sm:text-5xl font-bold ${light ? "text-gold" : "text-gold"}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <p className={`mt-2 text-sm font-medium ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{label}</p>
    </motion.div>
  );
};

export default StatCounter;
