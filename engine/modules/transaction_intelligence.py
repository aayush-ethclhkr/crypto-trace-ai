import requests
import os
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

ETH_API_KEY = os.getenv("ETHERSCAN_API_KEY")

def get_transaction_intelligence(address):
    url = (
        f"https://api.etherscan.io/v2/api"
        f"?chainid=1"
        f"&module=account"
        f"&action=txlist"
        f"&address={address}"
        f"&startblock=0"
        f"&endblock=99999999"
        f"&sort=desc"
        f"&apikey={ETH_API_KEY}"
    )

    try:
        response = requests.get(url, timeout=20)
        data = response.json()
        if data.get("status") != "1":
            return None

        txs = data.get("result", [])
        total_tx = len(txs)
        incoming = 0
        outgoing = 0
        total_received = 0
        total_sent = 0
        recent_transactions = []

        for tx in txs:
            value = int(tx["value"]) / 1e18
            if tx.get("to", "").lower() == address.lower():
                incoming += 1
                total_received += value
            elif tx.get("from", "").lower() == address.lower():
                outgoing += 1
                total_sent += value

            if len(recent_transactions) < 5:
                recent_transactions.append({
                    "hash": tx["hash"][:18] + "...",
                    "value": round(value, 4),
                    "date": datetime.fromtimestamp(int(tx["timeStamp"])).strftime("%d-%m-%Y")
                })

        first_activity = "Unknown"
        last_activity = "Unknown"
        wallet_age = 0

        if total_tx > 0:
            first_ts = int(txs[-1]["timeStamp"])
            last_ts = int(txs[0]["timeStamp"])
            first_activity = datetime.fromtimestamp(first_ts).strftime("%d-%m-%Y")
            last_activity = datetime.fromtimestamp(last_ts).strftime("%d-%m-%Y")
            wallet_age = max(0, (datetime.now() - datetime.fromtimestamp(first_ts)).days)

        return {
            "total_tx": total_tx,
            "incoming": incoming,
            "outgoing": outgoing,
            "received": round(total_received, 4),
            "sent": round(total_sent, 4),
            "first_activity": first_activity,
            "last_activity": last_activity,
            "wallet_age": wallet_age,
            "recent_transactions": recent_transactions
        }
    except Exception as e:
        print(f"[ERROR] ETH intelligence error: {e}")
        return None

def get_btc_transaction_intelligence(address):
    try:
        url = f"https://blockchain.info/rawaddr/{address}?limit=5"
        res = requests.get(url, timeout=15)
        if res.status_code != 200:
            return None
        data = res.json()
        txs = data.get("txs", [])
        total_tx = data.get("n_tx", len(txs))
        total_received = data.get("total_received", 0) / 1e8
        total_sent = data.get("total_sent", 0) / 1e8

        recent_transactions = []
        for tx in txs[:5]:
            out = tx.get("out", [])
            val = sum(o.get("value", 0) for o in out if o.get("addr") == address) / 1e8
            recent_transactions.append({
                "hash": tx.get("hash", "")[:18] + "...",
                "value": round(val, 6),
                "date": datetime.fromtimestamp(tx.get("time", 0)).strftime("%d-%m-%Y")
            })

        first_activity = "Unknown"
        last_activity = "Unknown"
        wallet_age = 0
        if txs:
            first_ts = txs[-1].get("time", 0)
            last_ts = txs[0].get("time", 0)
            if first_ts > 0:
                first_activity = datetime.fromtimestamp(first_ts).strftime("%d-%m-%Y")
                wallet_age = max(0, (datetime.now() - datetime.fromtimestamp(first_ts)).days)
            if last_ts > 0:
                last_activity = datetime.fromtimestamp(last_ts).strftime("%d-%m-%Y")

        return {
            "total_tx": total_tx,
            "incoming": 0,
            "outgoing": 0,
            "received": round(total_received, 4),
            "sent": round(total_sent, 4),
            "first_activity": first_activity,
            "last_activity": last_activity,
            "wallet_age": wallet_age,
            "recent_transactions": recent_transactions
        }
    except Exception as e:
        print(f"[ERROR] BTC intelligence error: {e}")
        return None

def get_trx_transaction_intelligence(address):
    return None

def get_ltc_transaction_intelligence(address):
    return None

def get_doge_transaction_intelligence(address):
    return None

def get_xrp_transaction_intelligence(address):
    return None

def get_ada_transaction_intelligence(address):
    return None
