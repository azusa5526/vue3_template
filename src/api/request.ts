import axios from 'axios';
import Cookie from 'js-cookie';
import type { AxiosPromise } from 'axios';

export interface BaseResponse<T, E = any> {
	result: T;
	targetUrl: string | null;
	success: boolean;
	error: E;
	unAuthorizedRequest: boolean;
	__abp: boolean;
}

export interface BaseError {
	code: number;
	details: string | null;
	message: string | null;
	validationErrors: any;
}

export type BasePromise<T, E = any> = AxiosPromise<BaseResponse<T, E>>;

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_PATH,
});

// request interceptor
instance.interceptors.request.use(
	(config) => {
		const tokenInCookie = Cookie.get('token');
		if (tokenInCookie) {
			config.headers.Authorization = 'Bearer ' + tokenInCookie;
		}
		return config;
	},
	(error) => {
		// do something with request error
		return Promise.reject(error);
	}
);

// response interceptor
instance.interceptors.response.use(
	(response) => {
		return Promise.resolve(response);
	},
	(error) => {
		if (error.response) {
			switch (error.response.status) {
				case 401:
					Cookie.remove('token');
					window.location.reload();
					break;
			}
			return Promise.reject(error);
		} else {
			return Promise.reject(error);
		}
	}
);

export default instance;
