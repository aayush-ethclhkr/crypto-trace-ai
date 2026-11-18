import { Link } from "react-router-dom";
import {
  ShieldCheck, FileText, CheckCircle2, ArrowRight, Layers,
  Terminal, Database, Lock, Scale, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  const steps = [
    { num: "01", title: "Complaint Intake", desc: "Ingest suspect wallet addresses from fraud reports and investigation cases." },
    { num: "02", title: "Chain Recognition", desc: "Automated heuristic pattern detection across Ethereum, Bitcoin, Tron, Litecoin, Dogecoin, XRP, and Cardano." },
    { num: "03", title: "Evidence Collection", desc: "Real-time balance, transaction count, lifetime volume, wallet age, and recent counterparties." },
    { num: "04", title: "Risk Engine", desc: "Weighted risk scoring (0-100) combining holding tiers, transaction frequency, and high-risk registry hits." },
    { num: "05", title: "Fund-Flow Analysis", desc: "Visual counterparty mapping separating incoming fund injections from recipient split paths." },
    { num: "06", title: "VASP Attribution", desc: "Rigorous attribution checking: declares exact match only on verified evidence; flags unhosted wallets as inconclusive." },
    { num: "07", title: "Evidence Export", desc: "One-click export of verifiable JSON evidence packages and court-ready signed PDF dossiers." },
    { num: "08", title: "Lawful Follow-up", desc: "Actionable recommendations for legal notices, exchange freeze requests, and investigation coordination." },
  ];

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono mb-4">
              <ShieldCheck className="h-4 w-4" />
              <span>BLOCKCHAIN FORENSICS & INVESTIGATION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              About <span className="text-primary text-glow">CryptoTrace AI</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              A comprehensive cryptocurrency forensics platform for rapid fund tracing and VASP legal attribution across multiple blockchains.
            </p>
          </div>
        </ScrollReveal>

        {/* Identity Card */}
        <ScrollReveal delay={60}>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 sm:p-8 mb-10 shadow-lg">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-primary font-mono uppercase tracking-wider">
              <Building2 className="h-5 w-5" /> Project Overview
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="text-muted-foreground block text-[10px] uppercase">Product Name</span>
                <span className="font-bold text-foreground text-sm">CryptoTrace AI — Forensic VASP Suite</span>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="text-muted-foreground block text-[10px] uppercase">Category</span>
                <span className="font-bold text-primary text-sm">Blockchain &amp; Cybersecurity</span>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="text-muted-foreground block text-[10px] uppercase">Project Type</span>
                <span className="font-bold text-foreground text-sm">College Mini Project</span>
              </div>
              <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                <span className="text-muted-foreground block text-[10px] uppercase">License</span>
                <span className="font-bold text-foreground text-sm">MIT License (Open Source)</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Problem Statement Details */}
        <ScrollReveal delay={80}>
          <div className="mb-12 space-y-4">
            <h2 className="text-2xl font-bold">The Problem Addressed</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              When cryptocurrency fraud or extortion complaints are filed, investigators receive only the victim's transfer hash or suspect wallet address. Traditional manual tracing across public block explorers is prohibitively slow, especially when perpetrators disperse funds through intermediary unhosted transit wallets, tumblers, and multi-chain bridges.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              CryptoTrace AI automates the initial triage phase: it detects the chain, correlates transaction history, inspects sanctions lists, flags risk tiers, and evaluates whether current evidence links directly to a registered Virtual Asset Service Provider (VASP).
            </p>
          </div>
        </ScrollReveal>

        {/* 8-Step Workflow */}
        <ScrollReveal delay={100}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Standard 8-Stage Investigation Pipeline</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {steps.map((s) => (
                <div key={s.num} className="p-5 rounded-xl border border-border/60 bg-card/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm font-bold text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                      {s.num}
                    </span>
                    <h3 className="font-bold text-sm">{s.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Architecture Comparison */}
        <ScrollReveal delay={120}>
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Architecture: Current vs. Future Implementation</h2>
            <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-muted/40 border-b border-border/60 text-muted-foreground font-mono text-[11px]">
                    <tr>
                      <th className="p-4">Subsystem Layer</th>
                      <th className="p-4">Current Implementation</th>
                      <th className="p-4">Planned Production Upgrade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-mono">
                    <tr>
                      <td className="p-4 font-bold text-foreground">Complaint Intake</td>
                      <td className="p-4 text-primary">Web form with case preservation</td>
                      <td className="p-4 text-muted-foreground">Authenticated REST/Webhook adapters</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-foreground">Chain Adapters</td>
                      <td className="p-4 text-primary">Live Etherscan, Blockchain.info, TronGrid APIs</td>
                      <td className="p-4 text-muted-foreground">Solana RPC, Polygon, BNB Chain, indexed archive nodes</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-foreground">Graph Traversal</td>
                      <td className="p-4 text-primary">1-hop immediate counterparty fund-flow parsing</td>
                      <td className="p-4 text-muted-foreground">Breadth-first multi-hop graph with clustering heuristics</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-foreground">Entity Intelligence</td>
                      <td className="p-4 text-primary">OFAC sanctions, DPRK Lazarus, Tornado Cash registry</td>
                      <td className="p-4 text-muted-foreground">Dynamic VASP cluster tables with deposit address tags</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-foreground">Dossier Output</td>
                      <td className="p-4 text-primary">Signed PDF forensic dossier &amp; JSON package export</td>
                      <td className="p-4 text-muted-foreground">Cryptographically signed manifest with SHA-256 hash stamp</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Honest Prototype Boundary */}
        <ScrollReveal delay={140}>
          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6 mb-10">
            <h3 className="font-bold text-yellow-400 text-sm mb-2 flex items-center gap-2">
              <Scale className="h-4 w-4" /> Evidence Standards &amp; Lawful Restraint
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Public blockchain data reflects pseudo-anonymous cryptographic transactions between unhosted public keys. CryptoTrace AI enforces strict evidentiary discipline: it will never falsely attribute a wallet to an exchange unless an exact verified cluster match exists. Where funds reside in unhosted intermediate addresses, the system explicitly reports <span className="font-mono text-yellow-400 font-semibold">"PUBLIC DATA INCONCLUSIVE"</span> and guides the investigator along the next lawful steps.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={160}>
          <div className="text-center pt-4">
            <Link to="/">
              <Button size="lg" className="gap-2">
                Launch Live Forensic Trace Engine <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
