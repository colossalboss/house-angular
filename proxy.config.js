const PROXY_CONFIG = [
  {
      context: [
          "/api/register",
          "/api/login",
          "/api/data",
          "/api/isLoggedin",
          "/api/logout",
          "/api/database",
          "/api/houses",
      ],
      target: "http://localhost:1234",
      secure: false
  }
]

module.exports = PROXY_CONFIG;
