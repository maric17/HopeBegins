/**
 * Application configuration
 * Handles environment-specific values for API endpoints and other settings.
 */

const getEnvironment = () => {
  if (process.env.NODE_ENV === 'production') return 'prod';
  if (process.env.NODE_ENV === 'test') return 'test';
  return 'local';
};

const ENV = getEnvironment();

const CONFIG = {
  local: {
    API_URL: 'http://localhost:3003/api',
    BASE_URL: 'http://localhost:3000',
  },
  dev: {
    API_URL: 'https://dev-api.hopebegins.com/api',
    BASE_URL: 'https://dev.hopebegins.com',
  },
  prod: {
    API_URL: 'https://api.hopebegins.com/api',
    BASE_URL: 'https://hopebegins.com',
  },
};

// Selection of config based on environment
// Defaults to local if environment not found or for local development
export const config = CONFIG[ENV as keyof typeof CONFIG] || CONFIG.local;

export default config;
