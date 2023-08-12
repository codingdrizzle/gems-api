class ResponsePool {
    //constructor();

    SuccessResponseWithData(res, message, data) {
        return res.status(200).json(data)
    }
    
    SuccessResponse(res, message) {
        return res.status(200).json({ message: message || "Successfully created" })
    }

    ErrorResponse(res, code, message) {
        return res.status(code || 500).json({ message: message || "Internal Server Error"})
    }
}

const ApiResponse = new ResponsePool()

module.exports = ApiResponse;