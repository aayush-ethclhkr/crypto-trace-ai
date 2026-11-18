// API Configuration
export const API_CONFIG = {
  // Use environment variable for production, localhost for development
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  timeout: 30000, // 30 seconds
};

// API endpoints
export const API_ENDPOINTS = {
  health: '/health',
  walletAnalyze: '/api/wallet/analyze',
  registryCheck: '/api/registry/check',
  caseCreate: '/api/case/create',
  caseList: '/api/case/list',
  caseGet: (id: string) => `/api/case/${id}`,
  stats: '/api/stats',
};

// Helper function to build full URL
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.baseURL}${endpoint}`;
};
