import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText, Search, Plus, Trash2, ArrowUpRight, CheckCircle2, ShieldAlert
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollReveal from "@/components/ScrollReveal";

interface CaseRecord {
  id: string;
  wallet: string;
  network: string;
  riskScore: number;
  threatLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  status: "OPEN" | "UNDER_INVESTIGATION" | "VASP_NOTIFIED" | "ASSETS_FROZEN" | "CLOSED";
  source: string;
  notes: string;
  reportedAt: string;
}

const DEFAULT_CASES: CaseRecord[] = [
  {
    id: "CYB-GGN-2026-001",
    wallet: "0x7f367cc41522ce07553e823bf3be79a889debe1b",
    network: "Ethereum",
    riskScore: 95,
    threatLevel: "CRITICAL",
    status: "UNDER_INVESTIGATION",
    source: "NCRP Complaint #98214",
    notes: "Suspected Lazarus Group ransomware proceeds. High velocity split-transfers observed.",
    reportedAt: "2026-02-14 11:22:00",
  },
  {
    id: "NCRP-2026-00128",
    wallet: "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
    network: "Bitcoin",
    riskScore: 85,
    threatLevel: "HIGH",
    status: "VASP_NOTIFIED",
    source: "State Cyber Cell Gurugram",
    notes: "Investment extortion fraud victim wallet. Direct outflow to unhosted mixer.",
    reportedAt: "2026-02-17 09:40:15",
  },
  {
    id: "SAHYOG-2026-7842",
    wallet: "0x901bb9583b24d97e995513c6778dc6888ab6870e",
    network: "Ethereum",
    riskScore: 90,
    threatLevel: "CRITICAL",
    status: "OPEN",
    source: "SAHYOG Inter-Agency Alert",
    notes: "Tornado Cash relayer interaction flagged during darknet extortion probe.",
    reportedAt: "2026-02-18 04:15:20",
  },
  {
    id: "LEA-MUM-2026-054",
    wallet: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    network: "Ethereum",
    riskScore: 15,
    threatLevel: "LOW",
    status: "CLOSED",
    source: "Manual Verification Request",
    notes: "Public entity reference check completed. Inconclusive correlation to reported phishing lure.",
    reportedAt: "2026-02-10 14:00:00",
  },
];

export default function CaseManager() {
  const [cases, setCases] = useState<CaseRecord[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");
  const [showNewModal, setShowNewModal] = useState(false);

  const [newId, setNewId] = useState("");
  const [newWallet, setNewWallet] = useState("");
  const [newNetwork, setNewNetwork] = useState("Ethereum");
  const [newSource, setNewSource] = useState("NCRP Portal Complaint");
  const [newNotes, setNewNotes] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("cryptotrace_cases_all");
    if (saved) {
      try {
        setCases(JSON.parse(saved));
      } catch {
        setCases(DEFAULT_CASES);
      }
    } else {
      setCases(DEFAULT_CASES);
      localStorage.setItem("cryptotrace_cases_all", JSON.stringify(DEFAULT_CASES));
    }
  }, []);

  const saveCases = (updated: CaseRecord[]) => {
    setCases(updated);
    localStorage.setItem("cryptotrace_cases_all", JSON.stringify(updated));
  };

  const handleAddCase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWallet.trim()) return;
    const record: CaseRecord = {
      id: newId.trim() || `CASE-${Date.now().toString().slice(-6)}`,
      wallet: newWallet.trim(),
      network: newNetwork,
      riskScore: 50,
      threatLevel: "MEDIUM",
      status: "OPEN",
      source: newSource,
      notes: newNotes.trim() || "Initial intake registered via dashboard.",
      reportedAt: new Date().toISOString().replace("T", " ").slice(0, 19),
    };
    saveCases([record, ...cases]);
    setShowNewModal(false);
    setNewId("");
    setNewWallet("");
    setNewNotes("");
  };

  const handleDelete = (id: string) => {
    if (confirm(`Remove case ${id} from local dashboard?`)) {
      saveCases(cases.filter((c) => c.id !== id));
    }
  };

  const filtered = cases.filter((c) => {
    const matchesSearch =
      c.id.toLowerCase().includes(search.toLowerCase()) ||
      c.wallet.toLowerCase().includes(search.toLowerCase()) ||
      c.notes.toLowerCase().includes(search.toLowerCase()) ||
      c.source.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterStatus === "ALL" || c.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getThreatBadge = (level: string) => {
    switch (level) {
      case "CRITICAL": return "bg-red-500/20 text-red-400 border-red-500/40";
      case "HIGH": return "bg-orange-500/20 text-orange-400 border-orange-500/40";
      case "MEDIUM": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/40";
      default: return "bg-emerald-500/20 text-emerald-400 border-emerald-500/40";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "OPEN": return "bg-blue-500/15 text-blue-400 border-blue-500/30";
      case "UNDER_INVESTIGATION": return "bg-yellow-500/15 text-yellow-400 border-yellow-500/30";
      case "VASP_NOTIFIED": return "bg-purple-500/15 text-purple-400 border-purple-500/30";
      case "ASSETS_FROZEN": return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";
      default: return "bg-muted text-muted-foreground border-border/50";
    }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono mb-2">
                <FileText className="h-3.5 w-3.5" />
                <span>CASE REGISTER &amp; EVIDENCE DOSSIERS</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight">
                Investigation <span className="text-primary text-glow">Case Manager</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage suspect cryptocurrency complaints, track VASP notices, and access chain-of-custody logs.
              </p>
            </div>
            <Button onClick={() => setShowNewModal(true)} className="gap-2 self-start md:self-auto">
              <Plus className="h-4 w-4" /> Register New Case
            </Button>
          </div>
        </ScrollReveal>

        {/* Stats Row */}
        <ScrollReveal delay={60}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="p-4 rounded-xl border border-border/60 bg-card/50">
              <p className="text-xs text-muted-foreground mb-1">Total Cases Logged</p>
              <p className="text-2xl font-bold font-mono">{cases.length}</p>
            </div>
            <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
              <p className="text-xs text-red-400 mb-1">Sanctioned / Critical</p>
              <p className="text-2xl font-bold font-mono text-red-400">
                {cases.filter((c) => c.threatLevel === "CRITICAL").length}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5">
              <p className="text-xs text-yellow-400 mb-1">VASP Notices Dispatched</p>
              <p className="text-2xl font-bold font-mono text-yellow-400">
                {cases.filter((c) => c.status === "VASP_NOTIFIED").length}
              </p>
            </div>
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
              <p className="text-xs text-emerald-400 mb-1">Resolved / Frozen</p>
              <p className="text-2xl font-bold font-mono text-emerald-400">
                {cases.filter((c) => c.status === "ASSETS_FROZEN" || c.status === "CLOSED").length}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Search & Filter Bar */}
        <ScrollReveal delay={90}>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by Case ID, wallet address, or investigator notes..."
                className="pl-9 font-mono text-xs sm:text-sm"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="h-10 rounded-md border border-input bg-card px-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="ALL">All Statuses</option>
              <option value="OPEN">Open</option>
              <option value="UNDER_INVESTIGATION">Under Investigation</option>
              <option value="VASP_NOTIFIED">VASP Notified</option>
              <option value="ASSETS_FROZEN">Assets Frozen</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>
        </ScrollReveal>

        {/* Cases Table */}
        <ScrollReveal delay={120}>
          <div className="rounded-xl border border-border/60 bg-card/50 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/40 border-b border-border/60 text-muted-foreground uppercase font-mono text-[11px]">
                  <tr>
                    <th className="p-4">Case / Complaint</th>
                    <th className="p-4">Suspect Wallet</th>
                    <th className="p-4">Network</th>
                    <th className="p-4">Risk Tier</th>
                    <th className="p-4">Investigation Status</th>
                    <th className="p-4">Logged At</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-mono">
                  {filtered.map((item) => (
                    <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-bold text-foreground">
                        <div>{item.id}</div>
                        <div className="text-[10px] text-muted-foreground font-sans">{item.source}</div>
                      </td>
                      <td className="p-4">
                        <span className="truncate max-w-[180px] sm:max-w-[220px] block">{item.wallet}</span>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded border border-border/50 bg-background/50">
                          {item.network}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded font-bold border ${getThreatBadge(item.threatLevel)}`}>
                          {item.threatLevel} ({item.riskScore})
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded border text-[10px] ${getStatusBadge(item.status)}`}>
                          {item.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground text-[11px]">
                        {item.reportedAt}
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <Link
                            to={`/?wallet=${item.wallet}&case=${item.id}`}
                            className="p-1.5 rounded-md hover:bg-primary/10 hover:text-primary transition-colors inline-block"
                            title="Trace in Engine"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="p-1.5 rounded-md hover:bg-red-500/10 hover:text-red-400 transition-colors"
                            title="Delete Case"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-8 text-center text-muted-foreground">
                        No investigation cases matched the current search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Modal: Register New Case */}
        {showNewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="bg-card border border-border/80 rounded-2xl p-6 max-w-md w-full shadow-2xl">
              <h3 className="text-lg font-bold mb-1">Register Suspect Wallet Case</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Record new victim complaint reference and target address into database.
              </p>

              <form onSubmit={handleAddCase} className="space-y-3 text-xs">
                <div>
                  <label className="font-medium text-muted-foreground mb-1 block">Case / Reference ID</label>
                  <Input
                    value={newId}
                    onChange={(e) => setNewId(e.target.value)}
                    placeholder="e.g. NCRP-2026-11849"
                    className="font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="font-medium text-muted-foreground mb-1 block">Suspect Wallet Address</label>
                  <Input
                    value={newWallet}
                    onChange={(e) => setNewWallet(e.target.value)}
                    placeholder="0x... or 1... or T..."
                    className="font-mono"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-medium text-muted-foreground mb-1 block">Network</label>
                    <select
                      value={newNetwork}
                      onChange={(e) => setNewNetwork(e.target.value)}
                      className="h-10 w-full rounded-md border border-input bg-card px-2 text-xs"
                    >
                      <option value="Ethereum">Ethereum</option>
                      <option value="Bitcoin">Bitcoin</option>
                      <option value="Tron">Tron</option>
                      <option value="Litecoin">Litecoin</option>
                      <option value="Dogecoin">Dogecoin</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-medium text-muted-foreground mb-1 block">Intake Source</label>
                    <select
                      value={newSource}
                      onChange={(e) => setNewSource(e.target.value)}
                      className="h-10 w-full rounded-md border border-input bg-card px-2 text-xs"
                    >
                      <option value="NCRP Portal">NCRP Portal</option>
                      <option value="SAHYOG Alert">SAHYOG Alert</option>
                      <option value="Manual LEA">Manual LEA</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-medium text-muted-foreground mb-1 block">Investigator Notes</label>
                  <textarea
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    placeholder="Summary of victim allegations, transaction hashes, loss amount..."
                    rows={3}
                    className="w-full rounded-md border border-input bg-card p-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-border/40">
                  <Button type="button" variant="ghost" onClick={() => setShowNewModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Save Case
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
