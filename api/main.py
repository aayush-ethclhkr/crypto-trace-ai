from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="CryptoTrace AI API",
    description="Multi-Chain Blockchain Intelligence & VASP Attribution API",
    version="1.0.0"
)

# CORS configuration for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your Vercel domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import engine modules
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'engine'))

try:
    from modules.wallet_detector import detect_wallet
    from modules.balance_checker import get_eth_balance, get_btc_balance, get_trx_balance
    from modules.transaction_intelligence import get_transaction_intelligence, get_btc_transaction_intelligence
    from modules.registry_checker import check_registry
    from modules.risk_engine import calculate_risk
    from modules.case_manager import create_new_case, get_all_cases, get_case_by_id
    
    ENGINE_AVAILABLE = True
except ImportError as e:
    print(f"Warning: Engine modules not fully available: {e}")
    ENGINE_AVAILABLE = False

# Request/Response Models
class WalletAnalysisRequest(BaseModel):
    address: str

class CaseCreateRequest(BaseModel):
    case_id: str
    complaint_type: str
    wallet_address: str
    description: str
    amount_lost: Optional[float] = 0.0

class RegistryCheckRequest(BaseModel):
    address: str

# Health check endpoint
@app.get("/")
async def root():
    return {
        "message": "CryptoTrace AI API",
        "status": "operational",
        "version": "1.0.0"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Wallet Analysis Endpoint
@app.post("/api/wallet/analyze")
async def analyze_wallet(request: WalletAnalysisRequest):
    """
    Analyze a cryptocurrency wallet address across multiple chains
    """
    try:
        address = request.address.strip()
        
        if not ENGINE_AVAILABLE:
            raise HTTPException(status_code=503, detail="Analysis engine temporarily unavailable")
        
        # Detect network
        network = detect_wallet(address)
        
        if not network or network == "Unknown":
            raise HTTPException(status_code=400, detail="Invalid wallet address or unsupported network")
        
        # Get balance based on network
        balance = 0
        symbol = network[:3].upper()
        
        if network == "Ethereum":
            balance = get_eth_balance(address) or 0
            symbol = "ETH"
        elif network == "Bitcoin":
            balance = get_btc_balance(address) or 0
            symbol = "BTC"
        elif network == "Tron":
            balance = get_trx_balance(address) or 0
            symbol = "TRX"
        
        # Get transaction intelligence
        tx_data = None
        if network == "Ethereum":
            tx_data = get_transaction_intelligence(address)
        elif network == "Bitcoin":
            tx_data = get_btc_transaction_intelligence(address)
        
        tx_count = 0
        transactions = []
        if tx_data:
            tx_count = tx_data.get("total_transactions", 0)
            transactions = tx_data.get("recent_transactions", [])[:10]
        
        # Check registry for sanctions/threats
        registry_result = check_registry(address)
        registry_hit = {
            "found": registry_result.get("found", False),
            "threatLevel": registry_result.get("threat_level"),
            "reason": registry_result.get("reason"),
            "caseId": registry_result.get("case_id")
        }
        
        # Calculate risk score
        risk_result = calculate_risk(
            balance=balance,
            tx_count=tx_count,
            registry_hit=registry_hit["found"],
            linked_cases=1 if registry_hit["found"] else 0,
            network=network
        )
        
        return {
            "success": True,
            "data": {
                "address": address,
                "network": network,
                "symbol": symbol,
                "balance": balance,
                "balanceUSD": balance * 3000 if network == "Ethereum" else balance * 50000 if network == "Bitcoin" else 0,  # Rough estimate
                "transactionCount": tx_count,
                "transactions": transactions,
                "registryHit": registry_hit,
                "riskScore": risk_result.get("risk_score", 0),
                "riskLevel": risk_result.get("threat_level", "UNKNOWN"),
                "riskFactors": risk_result.get("risk_factors", [])
            }
        }
    except HTTPException:
        raise
    except Exception as e:
        print(f"Analysis error: {str(e)}")  # Log for debugging
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

# Registry Check Endpoint
@app.post("/api/registry/check")
async def check_registry_endpoint(request: RegistryCheckRequest):
    """
    Check if wallet address is in sanctions/threat registry
    """
    try:
        if not ENGINE_AVAILABLE:
            return {"success": True, "data": {"found": False}}
            
        address = request.address.strip()
        result = check_registry(address)
        
        return {
            "success": True,
            "data": result
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Registry check failed: {str(e)}")

# Case Management Endpoints
@app.post("/api/case/create")
async def create_case(request: CaseCreateRequest):
    """
    Create a new investigation case
    """
    try:
        case_data = {
            "case_id": request.case_id,
            "complaint_type": request.complaint_type,
            "wallet_address": request.wallet_address,
            "description": request.description,
            "amount_lost": request.amount_lost
        }
        
        if ENGINE_AVAILABLE:
            result = create_new_case(
                case_id=case_data["case_id"],
                wallet=case_data["wallet_address"],
                complaint_type=case_data["complaint_type"],
                description=case_data["description"]
            )
        else:
            result = case_data
        
        return {
            "success": True,
            "message": "Case created successfully",
            "data": result
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create case: {str(e)}")

@app.get("/api/case/list")
async def list_cases():
    """
    Get all investigation cases
    """
    try:
        if ENGINE_AVAILABLE:
            cases = get_all_cases()
        else:
            cases = []
        
        return {
            "success": True,
            "data": cases
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch cases: {str(e)}")

@app.get("/api/case/{case_id}")
async def get_case(case_id: str):
    """
    Get specific case details
    """
    try:
        if not ENGINE_AVAILABLE:
            raise HTTPException(status_code=404, detail="Case not found")
            
        case = get_case_by_id(case_id)
        
        if not case:
            raise HTTPException(status_code=404, detail="Case not found")
        
        return {
            "success": True,
            "data": case
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch case: {str(e)}")

# Statistics Endpoint
@app.get("/api/stats")
async def get_statistics():
    """
    Get system statistics
    """
    try:
        stats = {
            "totalCases": len(get_all_cases()) if ENGINE_AVAILABLE else 0,
            "registryEntries": 0,  # Would need registry_checker.get_count()
            "systemStatus": "operational" if ENGINE_AVAILABLE else "limited"
        }
        
        return {
            "success": True,
            "data": stats
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch statistics: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
