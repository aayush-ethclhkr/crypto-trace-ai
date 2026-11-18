import requests
import os
from dotenv import load_dotenv

load_dotenv()

ETH_API_KEY = os.getenv("ETHERSCAN_API_KEY")
TRON_API_KEY = os.getenv("TRONGRID_API_KEY")

def get_eth_balance(address):
    url = (
        f"https://api.etherscan.io/v2/api"
        f"?chainid=1"
        f"&module=account"
        f"&action=balance"
        f"&address={address}"
        f"&tag=latest"
        f"&apikey={ETH_API_KEY}"
    )
    try:
        response = requests.get(url, timeout=10)
        data = response.json()
        if data.get("status") == "1":
            wei = int(data["result"])
            eth = wei / 1e18
            return round(eth, 6)
        return None
    except Exception as e:
        print(f"[ERROR] ETH Balance lookup failed: {e}")
        return None

def get_btc_balance(address):
    try:
        url = f"https://blockchain.info/rawaddr/{address}?limit=1"
        res = requests.get(url, timeout=10)
        if res.status_code == 200:
            data = res.json()
            return round(data.get("final_balance", 0) / 1e8, 6)
        return None
    except Exception as e:
        print(f"[ERROR] BTC Balance lookup failed: {e}")
        return None

def get_trx_balance(address):
    try:
        url = f"https://api.trongrid.io/v1/accounts/{address}"
        headers = {"TRON-PRO-API-KEY": TRON_API_KEY} if TRON_API_KEY else {}
        res = requests.get(url, headers=headers, timeout=10)
        if res.status_code == 200:
            data = res.json()
            accounts = data.get("data", [])
            if accounts:
                return round(accounts[0].get("balance", 0) / 1e6, 4)
        return None
    except Exception as e:
        print(f"[ERROR] TRX Balance lookup failed: {e}")
        return None

def get_ltc_balance(address):
    return None

def get_doge_balance(address):
    return None

def get_xrp_balance(address):
    return None

def get_ada_balance(address):
    return None
