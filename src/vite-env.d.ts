/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ETHERSCAN_API_KEY: string;
  readonly VITE_TRONGRID_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
