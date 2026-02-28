import { config } from '@/config';
import { fetchWithAuth } from './api';

export const adminService = {
  /**
   * Admin login service
   * Uses the provided API to authenticate the admin user.
   */
  login: async (credentials: any) => {
    // Making a POST request to the provided API
    // Using the environment-based config
    return fetchWithAuth(`${config.API_URL}/users/login/`, {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  /**
   * Admin profile service
   * Fetches user profile data.
   */
  getProfile: async (token: string) => {
    return fetchWithAuth(`${config.API_URL}/users/profile/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  /**
   * Admin logout service
   * Invalidates the refresh token on the server.
   * Requires the access token for authentication.
   */
  logout: async (accessToken: string, refreshToken: string) => {
    return fetchWithAuth(`${config.API_URL}/users/logout/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });
  },
};

export default adminService;
