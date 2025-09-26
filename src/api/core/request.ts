import type { AxiosResponse } from 'axios';
import api from './api';

interface AxiosRequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: Record<string, any>;
  data?: Record<string, any> | FormData;
  dataHash?: Record<string, any> | FormData;
  headers?: Record<string, string>;
  hash?: boolean;
}

export async function makeRequest<T>({
  url,
  method,
  params,
  data,
  headers,
}: AxiosRequestProps): Promise<AxiosResponse<T>> {
  try {
    const response = await api.request<T>({
      url,
      method,
      params,
      data,
      headers,
    });

    return response;
  } catch (error: any) {
    console.error('Erro em makeRequest:', error);

    if (error.response) {
      throw {
        status: error.response.status,
        message: error.response.data?.message || 'Erro na resposta da API',
        data: error.response.data,
      };
    }

    throw {
      status: 500,
      message: error.message || 'Erro inesperado na requisição',
    };
  }
}
