from rich.console import Console

console = Console()

# ─── Balance threshold tiers per network ──────────────────────────────────────
# Defines (low_threshold, medium_threshold, high_threshold) in native coin units.
# A wallet holding >= threshold gains the corresponding penalty score.
#
# Score contribution:
#   balance >= low_threshold    → +10
#   balance >= medium_threshold → +20
#   balance >= high_threshold   → +30
# (cumulative — a balance exceeding high_threshold earns +60 total)

_BALANCE_TIERS = {
    "Ethereum": (1,       10,      100),       # ETH
    "Bitcoin":  (0.05,    0.5,     5),         # BTC
    "Tron":     (1000,    10000,   100000),    # TRX
    "Litecoin": (5,       50,      500),       # LTC
    "Dogecoin": (5000,    50000,   500000),    # DOGE
    "XRP":      (100,     1000,    10000),     # XRP
    "Cardano":  (500,     5000,    50000),     # ADA
}


def calculate_risk(balance, tx_count, registry_hit, linked_cases, network="Ethereum"):

    score = 0

    tiers = _BALANCE_TIERS.get(network, _BALANCE_TIERS["Ethereum"])
    low_thresh, mid_thresh, high_thresh = tiers

    # Balance scoring — scaled to coin value
    if balance is not None:
        if balance >= low_thresh:
            score += 10
        if balance >= mid_thresh:
            score += 20
        if balance >= high_thresh:
            score += 30

    # Transaction volume scoring — same across all networks
    if tx_count > 100:
        score += 10
    if tx_count > 1000:
        score += 20

    # Registry hit
    if registry_hit:
        score += 30

    # Linked case penalty
    if isinstance(linked_cases, int):
        score += linked_cases * 5
    elif linked_cases is not None:
        score += len(linked_cases) * 5

    # Cap at 100
    score = min(score, 100)

    if score < 25:
        threat_level = "LOW"
    elif score < 50:
        threat_level = "MEDIUM"
    elif score < 75:
        threat_level = "HIGH"
    else:
        threat_level = "CRITICAL"

    return score, threat_level
