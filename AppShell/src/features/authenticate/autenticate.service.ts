import { api } from "../../services/api";

const API_URL = "/auth/login";

const login = async (useData: any) => {
  const response = await api.post(API_URL, useData);

  if (response.data) {
    localStorage.setItem("user",(response.data.token));
  }

  return response.data;
};

const logout = () => localStorage.removeItem("user");

const authService = {
  login,
  logout,
};

export default authService;
