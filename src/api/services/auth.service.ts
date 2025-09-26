import { makeRequest } from "../core/request";
import type { AuthResponse, Login } from "../interfaces/auth.interfaces";
import { AUTH_ROUTES } from "../routes/auth.routes";

export const AuthLogin = async (data: Login) => {
  try {
    const response = await makeRequest<AuthResponse>({
      url: AUTH_ROUTES.LOGIN,
      method: 'POST',
      data: data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};