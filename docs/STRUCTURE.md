# Project Structure

```
CryptoTrace-AI/
│
├── api/                          # Backend API Server
│   ├── main.py                  # FastAPI application
│   ├── requirements.txt         # Python dependencies
│   ├── .env                     # API environment variables
│   └── .env.example            # Environment template
│
├── engine/                       # Forensics Engine
│   ├── startup.py               # CLI interface
│   ├── requirements.txt         # Engine dependencies
│   ├── .env                     # Engine environment variables
│   ├── assets/                  # Brand assets
│   ├── database/                # SQLite databases
│   │   ├── cases.db            # Investigation cases
│   │   ├── registry.db         # Sanctions registry
│   │   └── init_db.py          # Database initialization
│   ├── modules/                 # Analysis modules
│   │   ├── balance_checker.py  # Multi-chain balance
│   │   ├── case_manager.py     # Case CRUD operations
│   │   ├── dashboard.py        # Statistics dashboard
│   │   ├── pdf_report.py       # PDF generation
│   │   ├── registry_checker.py # Sanctions screening
│   │   ├── risk_engine.py      # Risk scoring
│   │   ├── transaction_*.py    # Transaction analysis
│   │   ├── wallet_detector.py  # Network detection
│   │   └── wallet_tracker.py   # Watchlist monitoring
│   └── reports/                 # Generated reports
│
├── src/                          # Frontend Application
│   ├── components/              # React components
│   │   ├── ui/                 # Base UI components
│   │   ├── Footer.tsx          # Application footer
│   │   ├── Navbar.tsx          # Navigation bar
│   │   └── ScrollReveal.tsx    # Animation wrapper
│   ├── pages/                   # Application pages
│   │   ├── TraceEngine.tsx     # Wallet analysis
│   │   ├── CaseManager.tsx     # Case management
│   │   ├── SanctionsRegistry.tsx # Registry explorer
│   │   └── SihAlignment.tsx    # SIH documentation
│   ├── services/                # API services
│   │   └── api.service.ts      # Backend API client
│   ├── config/                  # Configuration
│   │   └── api.ts              # API endpoints
│   ├── data/                    # Static data
│   │   └── knownThreats.ts     # Threat database
│   ├── lib/                     # Utilities
│   │   └── utils.ts            # Helper functions
│   ├── App.tsx                  # Main application
│   ├── main.tsx                 # Entry point
│   ├── index.css                # Global styles
│   └── vite-env.d.ts           # TypeScript definitions
│
├── public/                       # Static assets
│   ├── favicon.ico
│   └── robots.txt
│
├── docs/                         # Documentation
│   ├── API.md                   # API reference
│   ├── DEPLOYMENT.md            # Deployment guide
│   ├── CONTRIBUTING.md          # Contributing guidelines
│   └── STRUCTURE.md             # This file
│
├── .dockerignore                 # Docker exclusions
├── .env                          # Frontend environment
├── .env.example                  # Environment template
├── .gitignore                    # Git exclusions
├── CHANGELOG.md                  # Version history
├── LICENSE                       # MIT License
├── Procfile                      # Heroku/Render config
├── README.md                     # Project overview
├── bun.lock                      # Bun lock file
├── index.html                    # HTML entry point
├── package.json                  # Node dependencies
├── postcss.config.js             # PostCSS configuration
├── railway.toml                  # Railway deployment
├── render.yaml                   # Render deployment
├── run_api.bat                   # API quick start (Windows)
├── run_engine.bat                # Engine quick start (Windows)
├── run_fullstack.bat             # Full-stack start (Windows)
├── run_web.bat                   # Web quick start (Windows)
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
├── tsconfig.node.json            # Node TypeScript config
├── vercel.json                   # Vercel deployment
└── vite.config.ts                # Vite configuration
```

## Key Directories

### `/api`
Backend REST API built with FastAPI. Handles wallet analysis, case management, and registry operations.

### `/engine`
Python-based forensics engine with CLI interface and modular analysis components.

### `/src`
React frontend application with TypeScript and Tailwind CSS.

### `/docs`
Project documentation including API reference, deployment guides, and contribution guidelines.

## Configuration Files

- **Environment**: `.env`, `.env.example`
- **Package Management**: `package.json`, `requirements.txt`
- **Build Tools**: `vite.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- **Deployment**: `vercel.json`, `railway.toml`, `render.yaml`, `Procfile`

## Entry Points

- **Web Frontend**: `npm run dev` or `bun run dev`
- **Backend API**: `python api/main.py`
- **CLI Engine**: `python engine/startup.py`
- **Full-Stack**: `run_fullstack.bat` (Windows)
