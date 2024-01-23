import axios, { AxiosResponse } from 'axios';

export interface Response extends AxiosResponse { }


export const setBaseAdress = () => {
	axios.defaults.baseURL = "https://impacta03.autowaresolucoes.com.br";
}

export const getAPI = (url: string, extraparam?: any): Promise<Response> =>
	new Promise((resolve, reject) => {
		axios
			.get(url, { ...(extraparam || {}) })
			.then((response: Response) => {
				if (response) {
					resolve(response);
				} else {
					reject();
				}
			})
			.catch((error: unknown) => reject(error));
	});

export const postAPI = (url: string, data?: any, extraparam?: any): Promise<Response> => {
	return new Promise((resolve, reject) => {
		axios
			.post(url, data, { ...(extraparam || {}) })
			.then((response: Response) => {
				if (response) {
					resolve(response);
				} else {
					reject();
				}
			})
			.catch((error: unknown) => reject(error));
	});
};


export const putAPI = (url: string, data: any, extraparam?: any): Promise<Response> =>
	new Promise((resolve, reject) => {
		axios
			.put(url, data, { ...(extraparam || {}) })
			.then((response: Response) => {
				if (response) {
					resolve(response);
				} else {
					reject();
				}
			})
			.catch((error: unknown) => reject(error));
	});

export const deleteAPI = (url: string, extraparam?: any): Promise<Response> =>
	new Promise((resolve, reject) => {
		axios
			.delete(url, { ...(extraparam || {}) })
			.then((response: Response) => {
				if (response) {
					resolve(response);
				} else {
					reject();
				}
			})
			.catch((error: unknown) => reject(error));
	});
