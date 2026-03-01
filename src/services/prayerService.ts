import { fetchWithAuth } from './api';
import { Prayer, prayerSchema } from '@/types/prayer';
import { config } from '@/config';

export const prayerService = {
  getPrayers: async (): Promise<Prayer[]> => {
    return fetchWithAuth(`${config.API_URL}/prayers/requests`);
  },

  createPrayer: async (data: Prayer): Promise<Prayer> => {
    const validated = prayerSchema.parse(data);
    return fetchWithAuth(`${config.API_URL}/prayers/requests/`, {
      method: 'POST',
      body: JSON.stringify(validated),
    });
  },

  deletePrayer: async (id: string): Promise<void> => {
    return fetchWithAuth(`${config.API_URL}/prayers/requests/${id}/`, {
      method: 'DELETE',
    });
  },
};
