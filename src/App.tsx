import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyApplyButton from "@/components/StickyApplyButton";
import Index from "./pages/Index";
import StudyAbroad from "./pages/StudyAbroad";
import WorkAbroad from "./pages/WorkAbroad";
import VisaImmigration from "./pages/VisaImmigration";
import Apply from "./pages/Apply";
import Consultation from "./pages/Consultation";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/work-abroad" element={<WorkAbroad />} />
            <Route path="/visa-immigration" element={<VisaImmigration />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <StickyApplyButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
