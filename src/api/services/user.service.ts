import { makeRequest } from "../core/request";
import type { UserResponse } from "../interfaces/user.interfaces";
import { USER_ROUTES } from "../routes/user.routes";

export const UserProfile = async () => {
  try {
    const response = await makeRequest<UserResponse>({
      url: USER_ROUTES.PROFILE,
      method: 'POST'
    });
    return response;
  } catch (error) {
    throw error;
  }
};