const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");

module.exports = {
  images: {
    domains: ["localhost", "images.pexels.com"],
  },
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};
