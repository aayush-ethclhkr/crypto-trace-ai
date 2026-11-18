import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert, Search, Filter, ArrowUpRight, Copy, Check,
  AlertTriangle, Database, ExternalLink, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/ScrollReveal";
import { KNOWN_HIGH_RISK_REGISTRY, SanctionedEntity } from "@/data/knownThreats";

export default function SanctionsRegistry() {
  const [search, setSearch] = useState("");
  const [networkFilter, setNetworkFilter] = useState("ALL");
  const [threatFilter, setThreatFilter] = useState("ALL");
  const [copiedAddr, setCopiedAddr] = useState<string | null>(null);

  const registryItems: SanctionedEntity[] = Object.values(KNOWN_HIGH_RISK_REGISTRY);

  const copy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAddr(text);
      setTimeout(() => setCopiedAddr(null), 2000);
    });
  };

  const filtered = registryItems.filter((item) => {
    const matchesSearch =
      item.address.toLowerCase().includes(search.toLowerCase()) ||
      item.entityName.toLowerCase().includes(search.toLowerCase()) ||
      item.caseId.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase());
    const matchesNetwork = networkFilter === "ALL" || item.network === networkFilter;
    const matchesThreat = threatFilter === "ALL" || item.threatLevel === threatFilter;
    return matchesSearch && matchesNetwork && matchesThreat;
  });

  const getThreatStyle = (threat: string) => {
    switch (threat) {
      case "CRITICAL": return "bg-red-500/20 text-red-400 border-red-500/40";
      case "HIGH": return "bg-orange-500/20 text-orange-400 border-orange-500/40";
      default: return "bg-yellow-500/20 text-yellow-400 border-yellow-500/40";
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono mb-2">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>GLOBAL SANCTIONS &amp; HIGH-RISK DIRECTORY</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight">
              High-Risk <span className="text-red-400 text-glow">Sanctions Registry</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-3xl leading-relaxed">
              Verified catalog of OFAC-sanctioned addresses, state-sponsored cyber threat actors (DPRK Lazarus), decentralized tumblers (Tornado Cash), and ransomware payment depots.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={60}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl border border-border/60 bg-card/50">
              <p className="text-xs text-muted-foreground mb-1">Total Monitored Wallets</p>
              <p className="text-2xl font-bold font-mono">{registryItems.length}</p>
            </div>
            <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
              <p className="text-xs text-red-400 mb-1">State-Sponsored / DPRK</p>
              <p className="text-2xl font-bold font-mono text-red-400">
                {registryItems.filter((i) => i.entityName.includes("Lazarus")).length}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-500/5">
              <p className="text-xs text-purple-400 mb-1">Mixers / Relayers</p>
              <p className="text-2xl font-bold font-mono text-purple-400">
                {registryItems.filter((i) => i.category.includes("Mixer")).length}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-orange-500/30 bg-orange-500/5">
              <p className="text-xs text-orange-400 mb-1">Ransomware &amp; Darknet</p>
              <p className="text-2xl font-bold font-mono text-orange-400">
                {registryItems.filter((i) => i.category.includes("Ransomware") || i.category.includes("Darknet")).length}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Search & Filters */}
        <ScrollReveal delay={90}>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by wallet address, entity name, or OFAC case ID..."
                className="pl-9 font-mono text-xs sm:text-sm"
              />
            </div>
            <select
              value={networkFilter}
              onChange={(e) => setNetworkFilter(e.target.value)}
              className="h-10 rounded-md border border-input bg-card px-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="ALL">All Networks</option>
              <option value="Ethereum">Ethereum (ETH)</option>
              <option value="Bitcoin">Bitcoin (BTC)</option>
              <option value="Tron">Tron (TRX)</option>
            </select>
            <select
              value={threatFilter}
              onChange={(e) => setThreatFilter(e.target.value)}
              className="h-10 rounded-md border border-input bg-card px-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="ALL">All Threat Tiers</option>
              <option value="CRITICAL">Critical</option>
              <option value="HIGH">High</option>
              <option value="MEDIUM">Medium</option>
            </select>
          </div>
        </ScrollReveal>

        {/* Registry Table */}
        <ScrollReveal delay={120}>
          <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/40 border-b border-border/60 text-muted-foreground uppercase font-mono text-[11px]">
                  <tr>
                    <th className="p-4">Entity &amp; Category</th>
                    <th className="p-4">Address</th>
                    <th className="p-4">Network</th>
                    <th className="p-4">Threat Tier</th>
                    <th className="p-4">Authority Reference</th>
                    <th className="p-4">Date Indexed</th>
                    <th className="p-4 text-right">Triage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-mono">
                  {filtered.map((item) => (
                    <tr key={item.address} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-sans">
                        <div className="font-bold text-foreground">{item.entityName}</div>
                        <div className="text-[11px] text-muted-foreground">{item.category}</div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1.5 font-mono">
                          <span className="truncate max-w-[170px] sm:max-w-[200px]">{item.address}</span>
                          <button
                            onClick={() => copy(item.address)}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            title="Copy Address"
                          >
                            {copiedAddr === item.address ? <Check className="h-3 w-3 text-primary" /> : <Copy className="h-3 w-3" />}
                          </button>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded border border-border/50 bg-background/50">
                          {item.network}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded font-bold border ${getThreatStyle(item.threatLevel)}`}>
                          {item.threatLevel}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground text-[11px] font-sans">
                        <div className="font-mono text-foreground">{item.caseId}</div>
                        <div>{item.reportedBy}</div>
                      </td>
                      <td className="p-4 text-muted-foreground text-[11px]">
                        {item.dateAdded}
                      </td>
                      <td className="p-4 text-right">
                        <Link
                          to={`/?wallet=${item.address}&case=${item.caseId}`}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all font-mono text-[11px]"
                        >
                          Trace <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-muted-foreground">
                        No entries found matching your search filter.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Legal Disclaimer */}
        <ScrollReveal delay={150}>
          <div className="mt-8 rounded-xl border border-border/60 bg-card/40 p-5 text-xs text-muted-foreground space-y-2">
            <div className="flex items-center gap-2 font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Official Regulatory &amp; Compliance Statement:</span>
            </div>
            <p className="leading-relaxed">
              Entries in this registry are synchronized with public OFAC SDN notifications, United Nations Sanctions Monitoring reports, and verified CERT-In advisories. Matches generated by CryptoTrace AI provide probable cause for formal inter-agency preservation requests under Indian and international cybersecurity frameworks.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
