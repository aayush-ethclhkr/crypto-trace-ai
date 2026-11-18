# CryptoTrace AI

> Multi-Chain Blockchain Intelligence & VASP Attribution Forensics Suite

**Smart India Hackathon 2026** | Problem Statement: SIH26182 (Primary) & SIH26183 (Related)  
**Organization**: Ministry of Home Affairs (MHA) · Indian Cyber Crime Coordination Centre (I4C)  
**Category**: Blockchain & Cybersecurity

---

## Overview

CryptoTrace AI is a comprehensive cryptocurrency forensics and investigative intelligence platform designed for Law Enforcement Agencies (LEAs), cybercrime cells, and regulatory compliance analysts. The system provides automated multi-chain wallet analysis, sanctions screening, and evidence generation for cryptocurrency-related investigations.

### Key Capabilities

- **Multi-Chain Analysis**: Support for Ethereum, Bitcoin, Tron, Litecoin, Dogecoin, XRP, and Cardano
- **Sanctions Screening**: Integrated OFAC SDN List and known threat actor database
- **Risk Assessment**: Multi-factor risk scoring engine with intelligent threat classification
- **Case Management**: Complete investigation workflow from complaint intake to evidence preservation
- **Court-Ready Reports**: Cryptographically verifiable JSON evidence packages and PDF forensic dossiers

---

## Architecture

### Frontend
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom cybersecurity theme
- **Features**: Real-time wallet tracing, case management dashboard, sanctions registry explorer

### Backend
- **API**: FastAPI (Python 3.11+)
- **Database**: SQLite for case records and registry data
- **Integration**: Etherscan, TronGrid, and other blockchain explorer APIs
- **Modules**: Modular Python engine for balance checking, transaction intelligence, and risk scoring

---

## Quick Start

### Prerequisites
- Node.js 18+ or Bun 1.4+
- Python 3.11+
- API Keys: Etherscan, TronGrid (free tiers available)

### Installation

```bash
# Install frontend dependencies
bun install

# Install backend dependencies
cd api && pip install -r requirements.txt
cd ../engine && pip install -r requirements.txt
```

### Configuration

Create `.env` files:

**Root `.env`** (Frontend):
```env
VITE_API_URL=http://localhost:8000
VITE_ETHERSCAN_API_KEY=your_etherscan_key
VITE_TRONGRID_API_KEY=your_trongrid_key
```

**`api/.env`** (Backend):
```env
ETHERSCAN_API_KEY=your_etherscan_key
TRONGRID_API_KEY=your_trongrid_key
PORT=8000
```

### Development

**Frontend**:
```bash
bun run dev
# Access at http://localhost:5173
```

**Backend API**:
```bash
cd api
python main.py
# API available at http://localhost:8000
```

**CLI Engine** (Optional):
```bash
cd engine
python startup.py
```

---

## Production Deployment

### Backend (Railway / Render)

**Railway**:
```bash
# Automatically uses railway.toml configuration
# Set environment variables in dashboard
```

**Render**:
```bash
# Automatically uses render.yaml configuration
# Set environment variables in dashboard
```

### Frontend (Vercel)

```bash
# Automatically uses vercel.json configuration
# Set VITE_API_URL to your backend URL
# Set API keys in environment variables
```

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Service health check |
| `/api/wallet/analyze` | POST | Analyze cryptocurrency wallet |
| `/api/registry/check` | POST | Check sanctions registry |
| `/api/case/create` | POST | Create investigation case |
| `/api/case/list` | GET | List all cases |
| `/api/case/{id}` | GET | Get case details |
| `/api/stats` | GET | System statistics |

---

## Project Structure

```
CryptoTrace-AI/
├── api/                    # FastAPI backend
│   ├── main.py            # API server
│   ├── requirements.txt   # Python dependencies
│   └── .env              # API configuration
│
├── engine/                # Python forensics engine
│   ├── startup.py        # CLI interface
│   ├── modules/          # Analysis modules
│   ├── database/         # SQLite databases
│   └── requirements.txt  # Engine dependencies
│
├── src/                  # React frontend
│   ├── pages/           # Application pages
│   ├── components/      # React components
│   ├── services/        # API services
│   └── config/          # Configuration
│
├── public/              # Static assets
├── railway.toml         # Railway deployment
├── render.yaml          # Render deployment
├── vercel.json          # Vercel deployment
└── package.json         # Node dependencies
```

---

## Technology Stack

**Frontend**
- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.19
- Tailwind CSS 3.4.17
- Lucide React (icons)

**Backend**
- FastAPI 0.115.5
- Uvicorn 0.34.0
- Python 3.11.9
- SQLite3

**Analysis Engine**
- Rich (Terminal UI)
- Requests (HTTP client)
- ReportLab (PDF generation)
- Python-dotenv (Environment management)

---

## Security & Compliance

- **Evidence Integrity**: Cryptographically structured evidence packages
- **Data Privacy**: No storage of sensitive user data
- **API Security**: CORS configuration for controlled access
- **Audit Trail**: Complete logging of all investigative actions

---

## Contributing

This project is developed for Smart India Hackathon 2026. For collaboration inquiries, please contact the project maintainers.

---

## License

Internal Development & Smart India Hackathon Submission — All Rights Reserved

---

## Acknowledgments

- Ministry of Home Affairs (MHA)
- Indian Cyber Crime Coordination Centre (I4C)
- Smart India Hackathon 2026 Initiative

---

**Version**: 1.0.0  
**Last Updated**: November 2026  
**Status**: Production Ready
