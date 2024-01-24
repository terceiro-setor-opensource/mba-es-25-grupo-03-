import axios, { AxiosResponse } from 'axios';
import { getAccessToken } from '~/utils';

export interface Response extends AxiosResponse { }



export const setBaseAdress = () => {
	axios.defaults.baseURL = "https://impacta03.autowaresolucoes.com.br";
}

export const getAPI = (url: string, extraparam?: any): Promise<Response> =>
	new Promise(async (resolve, reject) => {
		axios
			.get(url, { ...(extraparam || {}), headers: { Authorization: `Bearer ${await getAccessToken()}` } })
			.then((response: Response) => {
				if (response) {
					resolve(response);
				} else {
					reject();
				}
			})
			.catch((error: unknown) => reject(error));
	});


export const initApi = () => setBaseAdress();

export const postAPI = (url: string, data?: any, extraparam?: any): Promise<Response> => {
	return new Promise(async (resolve, reject) => {
		axios
			.post(url, data, { ...(extraparam || {}), headers: { Authorization: `Bearer ${await getAccessToken()}` } })
			.then((response: Response) => {
				if (response) {
					resolve(response);
				} else {
					reject();
				}
			})
			.catch((error: unknown) => {
				reject(error);

			});
	});
};


export const putAPI = (url: string, data: any, extraparam?: any): Promise<Response> =>
	new Promise(async (resolve, reject) => {
		axios
			.put(url, data, { ...(extraparam || {}), headers: { Authorization: `Bearer ${await getAccessToken()}` } })
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
	new Promise(async (resolve, reject) => {
		axios
			.delete(url, { ...(extraparam || {}), headers: { Authorization: `Bearer ${await getAccessToken()}` } })
			.then((response: Response) => {
				if (response) {
					resolve(response);
				} else {
					reject();
				}
			})
			.catch((error: unknown) => reject(error));
	});



