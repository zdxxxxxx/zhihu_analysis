const cookieParser = require('cookie');
function getCookies(str) {
    const obj = cookieParser.parse(str);
    return Object.keys(obj).map(o => {
        return { name: o, value: obj[o] }
    })
}

module.exports = getCookies;