class ApiError extends Error {
constructor( nstructor (statusCode, message) {
super();
this.statusCode = statusCode;
this.message = message;
}
}
module.exports = ApiError;