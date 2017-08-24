"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var enums_1 = require("../models/enums");
var WebRequest = (function () {
    function WebRequest(http, commonService, config) {
        this.http = http;
        this.commonService = commonService;
        this.config = config;
        var vm = this;
        vm.get = function (url, data, header, goToErrorState) {
            var options = vm.getRequestOption(http_1.RequestMethod.Get, url, data, header ? header : vm.commonService.getRequestHeader());
            return vm.http.request(new http_1.Request(options)).map(function (response) {
                var apiRespose = response.json();
                var result = vm.handleAPIResponse(apiRespose, url);
                return result;
            }).catch(function (error) {
                return vm.handleError(error.status, url);
            });
        };
        vm.post = function (url, data, header, goToErrorState) {
            var options = vm.getRequestOption(http_1.RequestMethod.Post, url, data, header ? header : vm.commonService.getRequestHeader());
            return vm.http.request(new http_1.Request(options)).map(function (response) {
                var apiRespose = response.json();
                var result = vm.handleAPIResponse(apiRespose, url);
                return result;
            }).catch(function (error) {
                return vm.handleError(error.status, url);
            });
        };
        vm.put = function (url, data, header, goToErrorState) {
            var options = vm.getRequestOption(http_1.RequestMethod.Put, url, data, header ? header : vm.commonService.getRequestHeader());
            return vm.http.request(new http_1.Request(options)).map(function (response) {
                var apiRespose = response.json();
                var result = vm.handleAPIResponse(apiRespose, url);
                return result;
            }).catch(function (error) {
                return vm.handleError(error.status, url);
            });
        };
        vm.patch = function (url, data, header, goToErrorState) {
            var options = vm.getRequestOption(http_1.RequestMethod.Patch, url, data, header ? header : vm.commonService.getRequestHeader());
            return vm.http.request(new http_1.Request(options)).map(function (response) {
                var apiRespose = response.json();
                var result = vm.handleAPIResponse(apiRespose, url);
                return result;
            }).catch(function (error) {
                return vm.handleError(error.status, url);
            });
        };
    }
    WebRequest.prototype.getRequestOption = function (method, url, data, header) {
        var urlParams = new http_1.URLSearchParams();
        for (var key in data) {
            urlParams.set(key, data[key]);
        }
        if (method === http_1.RequestMethod.Get) {
            return new http_1.RequestOptions({ method: method, url: url, responseType: http_1.ResponseContentType.Json, search: urlParams, headers: header });
        }
        else {
            return new http_1.RequestOptions({ method: method, url: url, responseType: http_1.ResponseContentType.Json, headers: header, body: JSON.stringify(data) });
        }
    };
    WebRequest.prototype.handleAPIResponse = function (apiResponse, url) {
        var result = {
            apiUrl: url,
            data: null,
            messageKey: '',
            status: enums_1.responseStatus.Success
        };
        result.messageKey = apiResponse.code;
        if (apiResponse.code.slice(6, 9) === '000') {
            result.data = apiResponse.data;
        }
        else if (apiResponse.code.slice(6, 9) === '005') {
            result.status = enums_1.responseStatus.Timeout;
        }
        else {
            result.status = enums_1.responseStatus.APIError;
        }
        return result;
    };
    WebRequest.prototype.handleError = function (status, url) {
        var result = {
            apiUrl: url,
            data: null,
            messageKey: 'DefaultError',
            status: enums_1.responseStatus.Failure
        };
        if (status === 500) {
            result.status = enums_1.responseStatus.Failure;
        }
        else if (status === 401 || status === 403) {
            result.status = enums_1.responseStatus.NotAuthorized;
            result.messageKey = 'NotAuthorized';
        }
        else if (status === 404 || status === 503) {
            result.status = enums_1.responseStatus.ApiNotAvailable;
        }
        //log the error
        return Observable_1.Observable.throw(result);
    };
    return WebRequest;
}());
WebRequest = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject('ICommonService')), __param(2, core_1.Inject('IAppConfig')),
    __metadata("design:paramtypes", [http_1.Http, Object, Object])
], WebRequest);
exports.WebRequest = WebRequest;
//# sourceMappingURL=web.request.js.map