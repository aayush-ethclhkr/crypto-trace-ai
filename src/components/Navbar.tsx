import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Bitcoin, Terminal, Menu, X, ExternalLink, Activity } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: "/", label: "Trace Engine" },
    { to: "/cases", label: "Case Manager" },
    { to: "/registry", label: "Sanctions Directory" },
    { to: "/about", label: "About Project" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-primary/10 border border-primary/30 group-hover:border-primary/60 transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)]">
            <Bitcoin className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight">
                Crypto<span className="text-primary text-glow">Trace</span> AI
              </span>
              <span className="text-[10px] font-mono uppercase bg-primary/15 text-primary border border-primary/30 px-1.5 py-0.5 rounded font-bold">
                LIVE
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground tracking-wider">
              BLOCKCHAIN INTELLIGENCE &amp; VASP ATTRIBUTION
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-card/60 p-1 rounded-xl border border-border/50">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  active
                    ? "bg-primary/15 text-primary border border-primary/30 font-semibold shadow-[0_0_12px_rgba(0,229,255,0.15)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Info: Live chains & CLI indicator */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ETH · BTC · TRX LIVE</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border/50 text-xs font-mono text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-primary" />
            <span>python startup.py</span>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-b border-border/60 bg-card/95 backdrop-blur-xl px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  active ? "bg-primary/15 text-primary font-semibold" : "text-muted-foreground hover:bg-muted/40"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-border/50 flex flex-col gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Multi-Chain Live Endpoints Connected</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
