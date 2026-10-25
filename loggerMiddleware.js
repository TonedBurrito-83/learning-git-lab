//middleware
// Student Name: Schira, Kendra
// Student ID: 1233270677
// IFT 458: MModule 5 Lab 1
// Due Date: 10/25/2026

function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

module.exports = loggerMiddleware;