import { toast } from 'sonner';

/**
 * HopeBegins Notification System
 * Standardized utility for triggering alerts across the platform.
 */
export const notify = {
  success: (message: string, description?: string) => {
    toast.success(message, {
      description,
    });
  },
  error: (message: string, description?: string) => {
    toast.error(message, {
      description,
    });
  },
  warning: (message: string, description?: string) => {
    toast.warning(message, {
      description,
    });
  },
  info: (message: string, description?: string) => {
    toast(message, {
      description,
    });
  },
};

export default notify;
