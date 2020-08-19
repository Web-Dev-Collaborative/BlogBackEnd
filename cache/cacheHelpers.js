var mcache = require('memory-cache');

module.exports = {
	cache
};

function cache(duration) {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.status(200).json(cachedBody)
      return
    } else {
      res.sendResponse = res.status(200).json
      res.status(200).json = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}