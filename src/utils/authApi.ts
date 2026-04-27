const BASE_URL =
  import.meta.env.VITE_BACKEND_BASE_URL?.trim() || "http://localhost:8080";

type JsonLike = Record<string, unknown> | string;

export const getAuthApiUrl = (path: string) => `${BASE_URL}${path}`;

export const parseBackendError = async (
  response: Response,
  fallbackMessage: string,
) => {
  try {
    const raw = await response.text();
    if (!raw) {
      return fallbackMessage;
    }

    let parsed: JsonLike;
    try {
      parsed = JSON.parse(raw) as JsonLike;
    } catch {
      return raw;
    }

    if (typeof parsed === "string") {
      return parsed;
    }

    const firstError = Object.values(parsed)[0];
    if (typeof firstError === "string" && firstError.trim().length > 0) {
      return firstError;
    }

    return fallbackMessage;
  } catch {
    return fallbackMessage;
  }
};
