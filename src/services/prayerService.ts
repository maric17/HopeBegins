import { fetchWithAuth } from './api';
import { Prayer, prayerSchema } from '@/types/prayer';

export const prayerService = {
  getPrayers: async (): Promise<Prayer[]> => {
    return fetchWithAuth('/api/prayers/requests');
  },

  createPrayer: async (data: Prayer): Promise<Prayer> => {
    const validated = prayerSchema.parse(data);
    return fetchWithAuth('/api/prayers/requests/', {
      method: 'POST',
      body: JSON.stringify(validated),
    });
  },

  deletePrayer: async (id: string): Promise<void> => {
    return fetchWithAuth(`/api/prayers/requests/${id}/`, {
      method: 'DELETE',
    });
  },
};
