import api from "@/lib/axios";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const subscribeTokenRefresh = (cb: (token: string) => void) => {
	refreshSubscribers.push(cb);
};

const onRefreshed = (token: string) => {
	refreshSubscribers.forEach((cb) => cb(token));
	refreshSubscribers = [];
};

export const refreshAccessToken = async (): Promise<string> => {
	if (isRefreshing) {
		return new Promise((resolve) => {
			subscribeTokenRefresh(resolve);
		});
	}

	isRefreshing = true;

	try {
		const customer = localStorage.getItem("customer");
		const email = customer ? JSON.parse(customer).email : null;

		const res = await api.post<{ accessToken: string }>(
			"/oauth/token/refresh",
			{ email },
			{ withCredentials: true }
		);
		const newToken = res.data.accessToken;
		localStorage.setItem("accessToken", newToken);
		onRefreshed(newToken);
		return newToken;
	} finally {
		isRefreshing = false;
	}
};
