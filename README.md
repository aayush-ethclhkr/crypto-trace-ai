# CryptoTrace AI — Multi-Chain Blockchain Intelligence & VASP Attribution Suite

> **Aligned with Smart India Hackathon (SIH 2026)**  
> **Problem Statement ID:** `SIH26182` (Primary) & `SIH26183` (Related)  
> **Organization:** Ministry of Home Affairs (MHA) · Indian Cyber Crime Coordination Centre (I4C)  
> **Theme:** Blockchain & Cybersecurity

---

## 📌 Executive Overview

**CryptoTrace AI** is a dedicated, full-stack cryptocurrency forensics and investigative intelligence platform engineered for Law Enforcement Agencies (LEAs), cybercrime cells, and regulatory compliance analysts.

When an online extortion or crypto theft complaint is received on the **NCRP** (National Cyber Crime Reporting Portal) or via **SAHYOG**, investigators often possess only a suspect wallet address without knowing which Virtual Asset Service Provider (VASP / Exchange) received the proceeds.

CryptoTrace AI bridges this gap through:

1. **Automated Multi-Chain Triage** (Ethereum, Bitcoin, Tron, Litecoin, Dogecoin, XRP, Cardano)
2. **Global Sanctions & Darknet Correlation** (OFAC SDN List, DPRK Lazarus Group, Tornado Cash relayers, ransomware depots)
3. **Multi-Signal Risk Engine** (Holding tiers, transaction frequency, velocity, and case linkages)
4. **VASP Legal Attribution Model** (Exact evidence-backed entity matches vs. rigorous inconclusive reporting)
5. **Court-Ready Evidentiary Output** (Cryptographically structured JSON evidence packages and signed PDF forensic dossiers)

---

## 🏗 System Architecture & Project Layout

CryptoTrace AI is delivered as an integrated dual-mode system:

- **Web Application:** High-performance, reactive UI built with Vite, React 18, TypeScript, and Tailwind CSS
- **Forensic CLI & Engine:** Rich Python terminal suite backed by SQLite databases for offline evidence tracking

```
CryptoTrace-AI/
├── engine/                                  # Standalone Python Forensics Suite
│   ├── startup.py                           # Interactive CLI menu with Rich ASCII UI
│   ├── requirements.txt                     # rich, reportlab, requests, python-dotenv
│   ├── venv/                                # Configured Python virtual environment
│   ├── .env                                 # Python API keys
│   ├── assets/                              # Brand marks and dossier logos
│   ├── database/
│   │   ├── cases.db                         # SQLite investigation cases database
│   │   ├── evidence.db                      # Raw ledger transaction evidence store
│   │   ├── registry.db                      # High-risk OFAC & sanctions database
│   │   ├── init_db.py                       # Database table initialization
│   │   └── watchlist.txt                    # Active suspect monitored addresses
│   ├── modules/
│   │   ├── balance_checker.py               # Multi-chain live balance fetcher
│   │   ├── case_lookup.py                   # Correlated case cross-referencing
│   │   ├── case_manager.py                  # CLI Case CRUD operations
│   │   ├── dashboard.py                     # Terminal telemetry & case statistics
│   │   ├── pdf_report.py                    # ReportLab vector PDF generator
│   │   ├── registry_checker.py              # Exact hash registry matcher
│   │   ├── report_generator.py              # Structured text report compiler
│   │   ├── risk_engine.py                   # 0-100 multi-tier heuristic scorer
│   │   ├── transaction_history.py           # Historical transaction extractor
│   │   ├── transaction_intelligence.py      # Ledger velocity & counterparty parser
│   │   ├── wallet_detector.py               # Network heuristic address classifier
│   │   ├── wallet_registry.py               # Registry management menu
│   │   └── wallet_tracker.py                # Watchlist polling module
│   └── reports/                             # Generated audit reports
│
├── src/                                     # Modern Web Application (Vite + React)
│   ├── components/
│   │   ├── Navbar.tsx                       # Navigation bar with live network status
│   │   ├── Footer.tsx                       # Compliance notes & statutory references
│   │   ├── ScrollReveal.tsx                 # Smooth viewport entrance animations
│   │   └── ui/                              # Primitive UI components (Button, Input)
│   ├── pages/
│   │   ├── TraceEngine.tsx                  # Core multi-chain forensics workspace
│   │   ├── CaseManager.tsx                  # NCRP / SAHYOG complaint case manager
│   │   ├── SanctionsRegistry.tsx            # Interactive OFAC & darknet explorer
│   │   └── SihAlignment.tsx                 # SIH26182 compliance documentation
│   ├── data/
│   │   └── knownThreats.ts                  # Sanctioned entities database
│   ├── lib/
│   │   └── utils.ts                         # Class merge utility (cn)
│   ├── App.tsx                              # Route definitions & layout wrapper
│   ├── index.css                            # Cyber theme styling & custom scrollbars
│   ├── main.tsx                             # React entry point
│   └── vite-env.d.ts                        # TypeScript environment definitions
│
├── .env                                     # Web frontend API configuration
├── .env.example                             # Environment template
├── index.html                               # HTML5 entry with metadata
├── package.json                             # Node.js dependencies & scripts
├── run_web.bat                              # One-click Windows launcher for Web App
├── run_engine.bat                           # One-click Windows launcher for CLI
├── tailwind.config.ts                       # Custom cyber palette & glow keyframes
└── vite.config.ts                           # Vite configuration with path aliases
```

---

## 🚀 Quick Start Guide

### 1. Launching the Modern Web Dashboard

#### Option A: Quick-Launch Batch File (Windows)
Double-click `run_web.bat` in the root folder.

#### Option B: Terminal Command
```bash
# Using Bun (Recommended - Fast)
bun run dev

# Or using NPM
npm run dev
```

Open **`http://localhost:5173`** in your browser.

---

### 2. Launching the Python Forensics CLI Engine

#### Option A: Quick-Launch Batch File (Windows)
Double-click `run_engine.bat` in the root folder.

#### Option B: Terminal Command
```bash
cd engine
.\venv\Scripts\python.exe startup.py
```

The interactive terminal menu provides:
```
[1]  🔍  Wallet Analysis (Multi-chain balance, transactions & risk)
[2]  📋  Case Management (Record complaints, search & close cases)
[3]  👁   Wallet Tracker / Watchlist (Monitor suspect wallets)
[4]  🗂   Wallet Registry (OFAC, darknet & sanctions maintenance)
[5]  📄  Report Generator (Generate PDF & TXT dossiers)
[6]  📊  System Dashboard (Real-time telemetry & active counts)
[0]  ❌  Exit
```

---

## 🔑 Environment Configuration

Create a `.env` file in the project root:

```env
# Etherscan API Key (https://etherscan.io/apis)
VITE_ETHERSCAN_API_KEY=your_etherscan_key_here

# TronGrid API Key (https://www.trongrid.io)
VITE_TRONGRID_API_KEY=your_trongrid_key_here
```

A matching `.env` file is also pre-configured in `engine/.env` for the Python suite.

---

## 🧪 Demonstration & Test Wallets

To evaluate the system during presentation or triage:

| Scenario / Subject | Address | Network | Expected Finding |
|---|---|---|---|
| **DPRK Lazarus Group** | `0x7F367cC41522cE07553e823bf3be79A889DEbe1B` | Ethereum | **CRITICAL (95/100)** · OFAC SDN Match · Lazarus Group |
| **Tornado Cash Relayer** | `0x901bb9583b24d97e995513c6778dc6888ab6870e` | Ethereum | **CRITICAL (90/100)** · Tumbler / Mixer Match |
| **Silk Road 2 Seizure** | `12t9YDPgwueZ9NyMgw519p7AA8isjr6SMw` | Bitcoin | **HIGH (85/100)** · FBI SR2 Escrow Match |
| **Vitalik Buterin (Public)** | `0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045` | Ethereum | **LOW / MEDIUM** · Clear Sanctions · Live Balance & TXs |
| **Bitcoin Genesis Wallet** | `1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa` | Bitcoin | **LOW** · Unsanctioned · Live Satoshi balance |

---

## ⚖️ Statutory Restraint & Lawful Boundary

Public blockchain consensus data reflects pseudo-anonymous transfers between cryptographic key pairs. CryptoTrace AI enforces strict evidentiary discipline:

- **No False Positives:** The system will never attribute an address to an exchange without verified cluster match data
- **Inconclusive Transparency:** Unhosted wallets are clearly identified as `PUBLIC DATA INCONCLUSIVE` with guidance for Section 91 CrPC notice dispatch
- **Audit Trail:** Every generated evidence package records timestamps, consensus state, and officer signature blocks for judicial submission

---

## 📄 License

Internal Development & Smart India Hackathon Submission — All Rights Reserved.
