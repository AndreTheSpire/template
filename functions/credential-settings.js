module.exports = {
  wrapUrl (path) {
    let requestUrl = 'http://localhost:3005/yoga/' + path
    if (process.env.USE_LOCAL === 'false') {
      requestUrl = 'https://api.imavi.org/yoga/' + path
    }
    return requestUrl
  }
}
