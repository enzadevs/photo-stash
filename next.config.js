const dns = require("dns")

dns.setDefaultResultOrder("ipv4first")

module.exports = {    
    images: {
        domains: ['localhost','img.freepik.com','images.pexels.com']
    }
}