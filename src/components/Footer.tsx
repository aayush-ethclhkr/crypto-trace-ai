import { Link } from "react-router-dom";
import { Shield, Bitcoin, Terminal, FileCode, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/40 mt-16 text-muted-foreground text-xs">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Bitcoin className="h-5 w-5 text-primary" />
              <span className="font-bold text-foreground text-sm">CryptoTrace AI</span>
            </div>
            <p className="text-muted-foreground/80 leading-relaxed text-xs">
              Specialized cryptocurrency tracing, high-risk wallet identification, and VASP attribution engine designed for Law Enforcement Agencies (LEAs) and cybercrime investigators.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-primary font-mono text-[11px] border border-primary/20">
              <CheckCircle2 className="h-3 w-3" /> SIH26182 &amp; SIH26183 Aligned
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-3">Investigation Suite</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Forensic Trace Engine</Link></li>
              <li><Link to="/cases" className="hover:text-primary transition-colors">Case Management &amp; Dossiers</Link></li>
              <li><Link to="/registry" className="hover:text-primary transition-colors">OFAC Sanctions &amp; Darknet Registry</Link></li>
              <li><Link to="/alignment" className="hover:text-primary transition-colors">SIH Alignment &amp; Workflow</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-3">CLI &amp; Engine Access</h4>
            <ul className="space-y-2 font-mono text-[11px]">
              <li><code className="text-primary">python startup.py</code> — Rich Terminal Menu</li>
              <li><code className="text-primary">modules/wallet_detector.py</code></li>
              <li><code className="text-primary">modules/risk_engine.py</code></li>
              <li><code className="text-primary">database/cases.db</code> — SQLite Engine</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-3">Lawful Action Boundary</h4>
            <p className="text-muted-foreground/80 text-[11px] leading-relaxed">
              Public blockchain data indicates flow patterns but does not confirm beneficial legal ownership. All entity attributions must be corroborated with verified VASP compliance channels prior to asset freezing orders.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} CryptoTrace AI. Built for SIH Problem Statement SIH26182 (Ministry of Home Affairs / I4C).
          </div>
          <div className="flex gap-4">
            <span className="font-mono text-primary">v1.0.0-standalone</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
