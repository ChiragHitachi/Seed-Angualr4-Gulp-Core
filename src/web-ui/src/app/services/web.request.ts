import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod, ResponseContentType, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IResponse, IAPIResponse, IAppConfig } from '../models/viewModels';
import { responseStatus } from '../models/enums';
import { IWebRequest, ICommonService } from '../interfaces/interfaces';

@Injectable()
export class WebRequest implements IWebRequest {
		patch: <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => Observable<IResponse<T>>;
		get: <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => Observable<IResponse<T>>;
		post: <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => Observable<IResponse<T>>;
		put: <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => Observable<IResponse<T>>;
		 
		constructor(private http: Http, @Inject('ICommonService') private commonService: ICommonService, @Inject('IAppConfig') private config: IAppConfig) {
				var vm = this;

				vm.get = <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => {
						let options = vm.getRequestOption(RequestMethod.Get, url, data, header ? header : vm.commonService.getRequestHeader());

						return vm.http.request(new Request(options)).map(response => {
								var apiRespose: IAPIResponse<T> = response.json();
								var result = vm.handleAPIResponse<T>(apiRespose, url);
								return result;
						},
						).catch((error: any) => {
								return vm.handleError<T>(error.status, url);
						});
				};

				vm.post = <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => {
						let options = vm.getRequestOption(RequestMethod.Post, url, data, header ? header : vm.commonService.getRequestHeader());

						return vm.http.request(new Request(options)).map(response => {
								var apiRespose: IAPIResponse<T> = response.json();
								var result = vm.handleAPIResponse<T>(apiRespose, url);
								return result;
						},
						).catch((error: any) => {
								return vm.handleError<T>(error.status, url);
						});
				};

				vm.put = <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => {
						let options = vm.getRequestOption(RequestMethod.Put, url, data, header ? header : vm.commonService.getRequestHeader());
						
						return vm.http.request(new Request(options)).map(response => {
								var apiRespose: IAPIResponse<T> = response.json();
								var result = vm.handleAPIResponse<T>(apiRespose, url);
								return result;
						},
						).catch((error: any) => {
								return vm.handleError<T>(error.status, url);
						});
				};

				vm.patch = <T>(url: string, data?: any, header?: any, goToErrorState?: boolean) => {
						let options = vm.getRequestOption(RequestMethod.Patch, url, data, header ? header : vm.commonService.getRequestHeader());
						
						return vm.http.request(new Request(options)).map(response => {
								var apiRespose: IAPIResponse<T> = response.json();
								var result = vm.handleAPIResponse<T>(apiRespose, url);
								return result;
						},
						).catch((error: any) => {
								return vm.handleError<T>(error.status, url);
						});
				};
		}

		private getRequestOption(method: any, url: string, data?: any, header?: any) {
				let urlParams = new URLSearchParams();
				for (let key in data) {
						urlParams.set(key, data[key]);
				}
				if (method === RequestMethod.Get) {
						return new RequestOptions({ method: method, url: url, responseType: ResponseContentType.Json, search: urlParams, headers: header });
				}
				else {
						return new RequestOptions({ method: method, url: url, responseType: ResponseContentType.Json, headers: header, body: JSON.stringify(data) });
				}
		}
		private handleAPIResponse<T>(apiResponse: IAPIResponse<any>, url: string) {
				let result: IResponse<T> = {
						apiUrl: url,
						data: null,
						messageKey: '',
						status: responseStatus.Success
				};
				result.messageKey = apiResponse.code;
				if (apiResponse.code.slice(6, 9) === '000') {
						result.data = apiResponse.data;
				}
				else if (apiResponse.code.slice(6, 9) === '005') {
						result.status = responseStatus.Timeout;
				}
				else {
						result.status = responseStatus.APIError;
				}

				return result;
		}

		private handleError<T>(status: any, url: string) {
				let result: IResponse<T> = {
						apiUrl: url,
						data: null,
						messageKey: 'DefaultError',
						status: responseStatus.Failure
				};

				if (status === 500) {
						result.status = responseStatus.Failure;
				}
				else if (status === 401 || status === 403) {
						result.status = responseStatus.NotAuthorized;
						result.messageKey = 'NotAuthorized';
				}
				else if (status === 404 || status === 503) {
						result.status = responseStatus.ApiNotAvailable;
				}
				

				//log the error
				return Observable.throw(result);
		}
}
