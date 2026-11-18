import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TraceEngine from "@/pages/TraceEngine";
import CaseManager from "@/pages/CaseManager";
import SanctionsRegistry from "@/pages/SanctionsRegistry";
import SihAlignment from "@/pages/SihAlignment";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<TraceEngine />} />
            <Route path="/cases" element={<CaseManager />} />
            <Route path="/registry" element={<SanctionsRegistry />} />
            <Route path="/alignment" element={<SihAlignment />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
