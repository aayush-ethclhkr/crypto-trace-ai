import { API_CONFIG, API_ENDPOINTS, buildApiUrl } from '@/config/api';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

class ApiService {
  private async fetch<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = buildApiUrl(endpoint);
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'API request failed');
      }

      return data;
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  async healthCheck(): Promise<ApiResponse<{ status: string }>> {
    return this.fetch(API_ENDPOINTS.health);
  }

  async analyzeWallet(address: string): Promise<ApiResponse<any>> {
    return this.fetch(API_ENDPOINTS.walletAnalyze, {
      method: 'POST',
      body: JSON.stringify({ address }),
    });
  }

  async checkRegistry(address: string): Promise<ApiResponse<any>> {
    return this.fetch(API_ENDPOINTS.registryCheck, {
      method: 'POST',
      body: JSON.stringify({ address }),
    });
  }

  async createCase(caseData: {
    case_id: string;
    complaint_type: string;
    wallet_address: string;
    description: string;
    amount_lost?: number;
  }): Promise<ApiResponse<any>> {
    return this.fetch(API_ENDPOINTS.caseCreate, {
      method: 'POST',
      body: JSON.stringify(caseData),
    });
  }

  async listCases(): Promise<ApiResponse<any[]>> {
    return this.fetch(API_ENDPOINTS.caseList);
  }

  async getCase(caseId: string): Promise<ApiResponse<any>> {
    return this.fetch(API_ENDPOINTS.caseGet(caseId));
  }

  async getStats(): Promise<ApiResponse<any>> {
    return this.fetch(API_ENDPOINTS.stats);
  }
}

export const apiService = new ApiService();
export default apiService;
