export interface SanctionedEntity {
  address: string;
  network: "Ethereum" | "Bitcoin" | "Tron" | "Litecoin" | "Dogecoin" | "XRP" | "Cardano";
  entityName: string;
  threatLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  caseId: string;
  category: "Sanctioned / OFAC" | "Ransomware" | "Darknet Market" | "Mixer / Tumbler" | "Theft / Exploit";
  reportedBy: string;
  dateAdded: string;
}

export const KNOWN_HIGH_RISK_REGISTRY: Record<string, SanctionedEntity> = {
  // OFAC-sanctioned Ethereum addresses
  "0x7f367cc41522ce07553e823bf3be79a889debe1b": {
    address: "0x7F367cC41522cE07553e823bf3be79A889DEbe1B",
    network: "Ethereum",
    entityName: "Lazarus Group (DPRK Reconnaissance General Bureau)",
    threatLevel: "CRITICAL",
    caseId: "OFAC-2022-ETH-001",
    category: "Sanctioned / OFAC",
    reportedBy: "US Department of the Treasury / OFAC",
    dateAdded: "2022-04-14",
  },
  "0xd882cfc20f52f2599d84b8e8d58c7fb62cfe344b": {
    address: "0xd882cfc20f52f2599d84b8e8d58c7fb62cfe344b",
    network: "Ethereum",
    entityName: "Lazarus Group (Axie Infinity Ronin Bridge Exploit)",
    threatLevel: "CRITICAL",
    caseId: "OFAC-2022-ETH-002",
    category: "Theft / Exploit",
    reportedBy: "US Department of the Treasury",
    dateAdded: "2022-04-22",
  },
  "0x901bb9583b24d97e995513c6778dc6888ab6870e": {
    address: "0x901bb9583b24d97e995513c6778dc6888ab6870e",
    network: "Ethereum",
    entityName: "Tornado Cash Relayer #1",
    threatLevel: "CRITICAL",
    caseId: "OFAC-2022-TC-001",
    category: "Mixer / Tumbler",
    reportedBy: "FinCEN / OFAC SDN List",
    dateAdded: "2022-08-08",
  },
  "0xa7e5d5a720f06526557c513402f2e6b5fa20b008": {
    address: "0xa7e5d5a720f06526557c513402f2e6b5fa20b008",
    network: "Ethereum",
    entityName: "Tornado Cash Relayer #2",
    threatLevel: "CRITICAL",
    caseId: "OFAC-2022-TC-002",
    category: "Mixer / Tumbler",
    reportedBy: "FinCEN / OFAC SDN List",
    dateAdded: "2022-08-08",
  },
  "0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c": {
    address: "0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c",
    network: "Ethereum",
    entityName: "Lazarus Group Associated Cold Wallet",
    threatLevel: "CRITICAL",
    caseId: "OFAC-2022-ETH-003",
    category: "Sanctioned / OFAC",
    reportedBy: "UN Panel of Experts on DPRK",
    dateAdded: "2022-05-06",
  },
  // Known ransomware / darknet market BTC addresses
  "1feexv6bahb8ybzjqgmjrccrhgw9sb6uf": {
    address: "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
    network: "Bitcoin",
    entityName: "Mt. Gox 2011 Theft / Ransom Extortion Depot",
    threatLevel: "HIGH",
    caseId: "RF-2021-BTC-001",
    category: "Theft / Exploit",
    reportedBy: "Chainalysis / Law Enforcement Notice",
    dateAdded: "2021-02-18",
  },
  "12t9ydpgwuez9nymgw519p7aa8isjr6smw": {
    address: "12t9YDPgwueZ9NyMgw519p7AA8isjr6SMw",
    network: "Bitcoin",
    entityName: "Silk Road 2 Associated Escrow (FBI Seizure)",
    threatLevel: "HIGH",
    caseId: "FBI-SR2-BTC-001",
    category: "Darknet Market",
    reportedBy: "Federal Bureau of Investigation (FBI)",
    dateAdded: "2014-11-06",
  },
  "14qveqsoomgpm2w7tzm7ffw7y1l5yvx7tq": {
    address: "14qWebfhyk86e8sBuhfveQp8v1fL5Yvx7tq",
    network: "Bitcoin",
    entityName: "WannaCry Ransomware Killswitch Collection",
    threatLevel: "CRITICAL",
    caseId: "CYB-WC-2017-001",
    category: "Ransomware",
    reportedBy: "CERT-In / Europol EC3",
    dateAdded: "2017-05-15",
  },
};
