const validateMiddleware = (req, res, next) => {
    console.log("ValidateMiddleware");
    next()
}

module.exports = validateMiddleware;