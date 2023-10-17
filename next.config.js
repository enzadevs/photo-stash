const dns = require("dns")

dns.setDefaultResultOrder("ipv4first")

module.exports = {    
    images: {
        domains: ['localhost','images.pexels.com']
    },
    headers: {
        source: '/core/photo',
        headers: [{key: 'Cache-Control',value: 'no-store'}]
    }
}