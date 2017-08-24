"use strict";
var responseStatus;
(function (responseStatus) {
    responseStatus[responseStatus["Success"] = 0] = "Success";
    responseStatus[responseStatus["Failure"] = 1] = "Failure";
    responseStatus[responseStatus["APIError"] = 2] = "APIError";
    responseStatus[responseStatus["Forbidden"] = 3] = "Forbidden";
    responseStatus[responseStatus["ApiNotAvailable"] = 4] = "ApiNotAvailable";
    responseStatus[responseStatus["InvalidInput"] = 5] = "InvalidInput";
    responseStatus[responseStatus["NotAuthorized"] = 6] = "NotAuthorized";
    responseStatus[responseStatus["NoDataFound"] = 7] = "NoDataFound";
    responseStatus[responseStatus["SessionExpired"] = 8] = "SessionExpired";
    responseStatus[responseStatus["UnknownError"] = 9] = "UnknownError";
    responseStatus[responseStatus["Timeout"] = 10] = "Timeout";
})(responseStatus = exports.responseStatus || (exports.responseStatus = {}));
var opMode;
(function (opMode) {
    opMode[opMode["Create"] = 1] = "Create";
    opMode[opMode["Edit"] = 2] = "Edit";
    opMode[opMode["View"] = 3] = "View";
})(opMode = exports.opMode || (exports.opMode = {}));
var messageType;
(function (messageType) {
    messageType[messageType["Success"] = 1] = "Success";
    messageType[messageType["Warning"] = 2] = "Warning";
    messageType[messageType["Error"] = 3] = "Error";
})(messageType = exports.messageType || (exports.messageType = {}));
var sortOrder;
(function (sortOrder) {
    sortOrder[sortOrder["Asc"] = 1] = "Asc";
    sortOrder[sortOrder["Desc"] = 2] = "Desc";
})(sortOrder = exports.sortOrder || (exports.sortOrder = {}));
//# sourceMappingURL=enums.js.map