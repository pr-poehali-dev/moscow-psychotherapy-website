
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Specialists from "./pages/Specialists";
import FAQ from "./pages/FAQ";
import Structure from "./pages/Structure";
import Documents from "./pages/Documents";
import Contacts from "./pages/Contacts";
import Events from "./pages/Events";
import Webinars from "./pages/Webinars";
import Materials from "./pages/Materials";
import JournalAbout from "./pages/JournalAbout";
import JournalProfessional from "./pages/JournalProfessional";
import JournalLife from "./pages/JournalLife";
import Sections from "./pages/Sections";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/sections" element={<Sections />} />
          <Route path="/events" element={<Events />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/journal/about" element={<JournalAbout />} />
          <Route path="/journal/professional" element={<JournalProfessional />} />
          <Route path="/journal/life" element={<JournalLife />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;