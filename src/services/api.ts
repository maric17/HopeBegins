export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  });

  // Handle empty responses (204 No Content, 205 Reset Content)
  if (response.status === 204 || response.status === 205) {
    if (!response.ok) {
      throw new Error('An error occurred');
    }
    return null;
  }

  const text = await response.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    // If not valid JSON, treat text as the message or return null
    data = text ? { message: text } : null;
  }

  if (!response.ok) {
    const errorMessage =
      data?.message ||
      data?.detail ||
      data?.data?.message ||
      (typeof text === 'string' && text) ||
      'Something went wrong';
    throw new Error(errorMessage);
  }

  // If the response follows the standardized format, extract the data payload
  if (data && typeof data === 'object' && 'status' in data && 'data' in data) {
    return data.data;
  }

  return data;
}
