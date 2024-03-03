const PROXY_CONFIG = [
  {
    context: ["/contacts"],
    target: "http://localhost:8080/",
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
