const PROXY_CONFIG = [
  {
      context: [
          "/api/register",
          "/settingsapi",
          "/productapi",
      ],
      target: "http://localhost:1234",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
