import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, User, GraduationCap, Globe, BookOpen, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const steps = [
  { icon: User, label: "Personal Details" },
  { icon: GraduationCap, label: "Education" },
  { icon: Globe, label: "Destination" },
  { icon: BookOpen, label: "Interests" },
  { icon: DollarSign, label: "Budget" },
];

const countries = ["Canada", "United Kingdom", "United States", "Australia", "Germany", "UAE", "Other"];
const educationLevels = ["High School", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"];
const budgets = ["Under $5,000", "$5,000 - $15,000", "$15,000 - $30,000", "$30,000 - $50,000", "Above $50,000"];

const Apply = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    education: "", institution: "",
    country: "", secondCountry: "",
    interest: "", courseField: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const canNext = () => {
    if (step === 0) return form.firstName && form.lastName && form.email;
    if (step === 1) return form.education;
    if (step === 2) return form.country;
    if (step === 3) return form.interest;
    if (step === 4) return form.budget;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    toast.success("Application submitted successfully!");
  };

  const eligibility = () => {
    const eligible: string[] = [];
    if (form.education === "Bachelor's Degree" || form.education === "Master's Degree" || form.education === "PhD") {
      eligible.push("Canada", "UK", "Australia", "Germany");
    }
    if (form.education === "High School" || form.education === "Diploma") {
      eligible.push("Canada", "Australia");
    }
    if (form.country && !eligible.includes(form.country)) eligible.push(form.country);
    return [...new Set(eligible)];
  };

  if (submitted) {
    const el = eligibility();
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-gold" />
          </div>
          <h1 className="font-heading text-3xl font-bold mb-4">Application Submitted!</h1>
          <p className="text-muted-foreground mb-6">Thank you, {form.firstName}. Our team will review your application and contact you within 24 hours.</p>
          {el.length > 0 && (
            <div className="bg-muted rounded-2xl p-6 text-left">
              <p className="text-sm font-semibold mb-3">Based on your profile, you may qualify for:</p>
              <div className="flex flex-wrap gap-2">
                {el.map((c) => <span key={c} className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-semibold">{c}</span>)}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container-narrow section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-2">Apply Now</h1>
            <p className="text-muted-foreground">Complete the form below to start your journey abroad.</p>
          </motion.div>

          {/* Steps indicator */}
          <div className="flex items-center justify-between mb-10 px-4">
            {steps.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  i <= step ? "bg-gold text-accent-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <CheckCircle className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                </div>
                <span className="text-[10px] text-muted-foreground hidden sm:block">{s.label}</span>
              </div>
            ))}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-2xl border border-border p-6 sm:p-8">
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold mb-4">Personal Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>First Name *</Label><Input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="John" /></div>
                  <div><Label>Last Name *</Label><Input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Doe" /></div>
                </div>
                <div><Label>Email *</Label><Input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@example.com" /></div>
                <div><Label>Phone</Label><Input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+254 700 123 456" /></div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold mb-4">Education Level</h2>
                <div><Label>Highest Education *</Label>
                  <Select value={form.education} onValueChange={(v) => update("education", v)}>
                    <SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger>
                    <SelectContent>{educationLevels.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Institution Name</Label><Input value={form.institution} onChange={(e) => update("institution", e.target.value)} placeholder="University of Nairobi" /></div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold mb-4">Preferred Destination</h2>
                <div><Label>Primary Country *</Label>
                  <Select value={form.country} onValueChange={(v) => update("country", v)}>
                    <SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger>
                    <SelectContent>{countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label>Second Choice</Label>
                  <Select value={form.secondCountry} onValueChange={(v) => update("secondCountry", v)}>
                    <SelectTrigger><SelectValue placeholder="Optional" /></SelectTrigger>
                    <SelectContent>{countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold mb-4">Course / Job Interest</h2>
                <div><Label>What are you looking for? *</Label>
                  <Select value={form.interest} onValueChange={(v) => update("interest", v)}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="study">Study Abroad</SelectItem>
                      <SelectItem value="work">Work Abroad</SelectItem>
                      <SelectItem value="both">Both Study & Work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div><Label>Specific Field / Course</Label><Input value={form.courseField} onChange={(e) => update("courseField", e.target.value)} placeholder="e.g. Computer Science, Nursing" /></div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <h2 className="font-heading text-xl font-bold mb-4">Budget Range</h2>
                <div><Label>Estimated Budget *</Label>
                  <Select value={form.budget} onValueChange={(v) => update("budget", v)}>
                    <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                    <SelectContent>{budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 0}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
              {step < 4 ? (
                <Button onClick={() => setStep(step + 1)} disabled={!canNext()} className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">
                  Next <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!canNext()} className="bg-gold text-accent-foreground hover:bg-gold-dark font-semibold">
                  Submit Application <CheckCircle className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
