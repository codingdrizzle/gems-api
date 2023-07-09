
const StatusCode = {
    SUCCESS: '000',
    FAILURE: '001',
    RETRY: '002',
    INVALID_ACCESS_TOKEN: '003',
}

const ResponseStatus = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_ERROR: 500,
}

class ApiResponse {
    async successResponse(res, msg) {
        const data = {
            status: ResponseStatus.SUCCESS,
            client_message: msg,
        };
        return res.status(200).json(data);
    }
    async successResponseWithData(res, message, data) {
        const resData = {
            status: ResponseStatus.SUCCESS,
            client_message: message,
            data: data,
        };
        return res.status(ResponseStatus.SUCCESS).json(resData);
    }

    async errorResponse(res, serverMsg, clientMsg) {
        const data = {
            statusCode: StatusCode.FAILURE,
            message: {
                serverMsg: serverMsg,
                clientMsg: clientMsg,
            },
        };
        return res.status(ResponseStatus.INTERNAL_ERROR).json(data);
    }

    async notFoundResponse(res, msg) {
        const data = {
            status: StatusCode.FAILURE,
            client_message: 'Not Found',
            message: msg,
        };
        return res.status(ResponseStatus.NOT_FOUND).json(data);
    }

    async alreadyExistResponse(res, msg) {
        const data = {
            status: StatusCode.FAILURE,
            client_message: 'Resource Conflict',
            message: msg,
        };
        return res.status(ResponseStatus.CONFLICT).json(data);
    }

    async validationErrorWithData(res, msg, data) {
        const resData = {
            status: StatusCode.INVALID_ACCESS_TOKEN,
            server_message: msg,
            data: data,
        };
        return res.status(ResponseStatus.BAD_REQUEST).json(resData);
    }

    async validationErrorOnly(res, msg) {
        const resData = {
            status: StatusCode.FAILURE,
            error: msg,
        };
        return res.status(ResponseStatus.BAD_REQUEST).json(resData);
    }

    async unauthorizedResponse(res) {
        const resData = {
            statusCode: StatusCode.FAILURE,
            client_message: 'Unauthorized Access',
        };
        return res.status(ResponseStatus.UNAUTHORIZED).json(resData);
    }
}

module.exports = new ApiResponse();
