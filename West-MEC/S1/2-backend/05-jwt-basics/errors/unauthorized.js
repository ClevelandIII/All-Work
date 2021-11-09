const {StatusCodes} = require('http-status-codes');
const CustomApiError = require('./custom-error');

class UnauthError extends CustomApiError{
    constructor (message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthError