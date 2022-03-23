// Esse pacote de utilitário customiza a interação com o Axio
// permitindo utilizar como método da nossa Classe as funcionalidades abaixo
import {AxiosInstance, AxiosResponse} from "axios";

export default class HttpResource {

    constructor(protected http: AxiosInstance, protected resource) {

    }
    list<T = any>(): Promise<AxiosResponse<T>> {
        return this.http.get<T>(this.resource)
    }

    get<T = any>(id): Promise<AxiosResponse<T>> {
        return this.http.get<T>(`${this.resource}/${id}`);
    }

    create<T = any>(data): Promise<AxiosResponse<T>> {
        return this.http.post<T>(this.resource, data);
    }

    update<T = any>(id, data): Promise<AxiosResponse<T>> {
        return this.http.put<T>(`${this.resource}/${id}}`, data);
    }

    delete<T = any>(id): Promise<AxiosResponse<T>> {
        return this.http.delete<T>(`${this.resource}/${id}`);
    }
}