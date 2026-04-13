import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { toast } from "sonner";

const times = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

const Consultation = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !mode || !name || !email) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Consultation booked successfully!");
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-heading text-3xl font-bold mb-4">Consultation Booked!</h1>
          <p className="text-muted-foreground mb-2">Thank you, {name}. Your consultation is confirmed.</p>
          <div className="bg-muted rounded-2xl p-4 text-sm space-y-2 text-left mt-6">
            <p><strong>Date:</strong> {date?.toLocaleDateString()}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Mode:</strong> {mode}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container-narrow section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">Book a Consultation</h1>
          <p className="text-muted-foreground">Schedule a free session with our immigration experts.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-gold" /> Select Date</h3>
              <CalendarUI
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date() || d.getDay() === 0}
                className="pointer-events-auto"
              />
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 mt-4">
              <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-gold" /> Select Time</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                      time === t ? "bg-gold text-accent-foreground border-gold" : "border-border hover:border-gold/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
              <h3 className="font-heading font-bold text-lg mb-2">Your Details</h3>
              <div><Label>Full Name *</Label><Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" required /></div>
              <div><Label>Email *</Label><Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@example.com" required /></div>
              <div><Label>Phone</Label><Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+254 700 123 456" /></div>
              <div>
                <Label>Meeting Mode *</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <button type="button" onClick={() => setMode("Zoom")} className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-colors ${mode === "Zoom" ? "bg-gold text-accent-foreground border-gold" : "border-border hover:border-gold/30"}`}>
                    <Video className="w-4 h-4" /> Zoom
                  </button>
                  <button type="button" onClick={() => setMode("Physical")} className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition-colors ${mode === "Physical" ? "bg-gold text-accent-foreground border-gold" : "border-border hover:border-gold/30"}`}>
                    <MapPin className="w-4 h-4" /> In Person
                  </button>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">
              Confirm Booking <CheckCircle className="w-4 h-4 ml-2" />
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
