const logRequest = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
}

module.exports = logRequest;