function logger(req, res, next) {
    const {ip, method, url, UserAgent } = req
    const agent = req.get("User-Agent")
        console.log(`ip: ${ip}, method: ${method}, url: ${url}, agent: ${agent}`)
    next ()
}

module.exports = logger