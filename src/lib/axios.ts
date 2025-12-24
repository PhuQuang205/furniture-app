import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import { refreshAccessToken } from "./refreshToken";

const api = axios.create({
	baseURL: "http://localhost/api",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use((config) => {
	if (typeof window !== "undefined") {
		const token = localStorage.getItem("accessToken");
		if (token) {
			config.headers.set("Authorization", `Bearer ${token}`);
		}
	}
	return config;
});

api.interceptors.response.use(
	(response: AxiosResponse) => response,
	async (error: AxiosError) => {
		const originalRequest = error.config as AxiosRequestConfig & {
			_retry?: boolean;
		};

		if (
			error.response?.status !== 401 ||
			originalRequest._retry ||
			originalRequest.url?.includes("/oauth/token/refresh")
		) {
			return Promise.reject(error);
		}

		originalRequest._retry = true;

		try {
			const newToken = await refreshAccessToken();
			originalRequest.headers = {
				...originalRequest.headers,
				Authorization: `Bearer ${newToken}`,
			};
			return api(originalRequest);
		} catch (err) {
			return Promise.reject(err);
		}
	}
);

export default api;
