# API Documentation

## Base URL

**Development**: `http://localhost:8000`  
**Production**: `https://your-api-domain.com`

---

## Authentication

Currently, the API does not require authentication. For production deployments, implement appropriate authentication mechanisms.

---

## Endpoints

### Health Check

**GET** `/health`

Check API service status.

**Response**:
```json
{
  "status": "healthy"
}
```

---

### Wallet Analysis

**POST** `/api/wallet/analyze`

Analyze a cryptocurrency wallet address across multiple blockchains.

**Request Body**:
```json
{
  "address": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "address": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    "network": "Ethereum",
    "symbol": "ETH",
    "balance": 123.45,
    "balanceUSD": 370350.00,
    "transactionCount": 1543,
    "transactions": [...],
    "registryHit": {
      "found": false
    },
    "riskScore": 15,
    "riskLevel": "LOW",
    "riskFactors": []
  }
}
```

---

### Registry Check

**POST** `/api/registry/check`

Check if an address is in the sanctions or threat registry.

**Request Body**:
```json
{
  "address": "0x7F367cC41522cE07553e823bf3be79A889DEbe1B"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "found": true,
    "threatLevel": "CRITICAL",
    "reason": "OFAC sanctioned — Lazarus Group (DPRK)",
    "caseId": "OFAC-2022-ETH-001"
  }
}
```

---

### Create Case

**POST** `/api/case/create`

Create a new investigation case.

**Request Body**:
```json
{
  "case_id": "CYB-2026-001",
  "complaint_type": "Ransomware",
  "wallet_address": "0x...",
  "description": "Investigation details",
  "amount_lost": 50000.00
}
```

**Response**:
```json
{
  "success": true,
  "message": "Case created successfully",
  "data": {
    "case_id": "CYB-2026-001",
    ...
  }
}
```

---

### List Cases

**GET** `/api/case/list`

Retrieve all investigation cases.

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "CYB-2026-001",
      "wallet": "0x...",
      "status": "OPEN",
      ...
    }
  ]
}
```

---

### Get Case Details

**GET** `/api/case/{case_id}`

Retrieve specific case information.

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "CYB-2026-001",
    "wallet": "0x...",
    "status": "OPEN",
    ...
  }
}
```

---

### System Statistics

**GET** `/api/stats`

Get system-wide statistics.

**Response**:
```json
{
  "success": true,
  "data": {
    "totalCases": 42,
    "registryEntries": 150,
    "systemStatus": "operational"
  }
}
```

---

## Error Responses

**400 Bad Request**:
```json
{
  "detail": "Invalid wallet address or unsupported network"
}
```

**404 Not Found**:
```json
{
  "detail": "Case not found"
}
```

**500 Internal Server Error**:
```json
{
  "detail": "Analysis failed: <error message>"
}
```

---

## Rate Limiting

No rate limiting is currently implemented. Consider implementing rate limiting for production deployments.

---

## CORS

The API is configured to allow cross-origin requests. Update the `allow_origins` configuration in `api/main.py` for production deployments.
