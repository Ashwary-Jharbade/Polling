const resuables = require("../utils/resuables/index");
const { apiResponse, httpConstants } = resuables;

const api = (server) => {
  server.get("/", (req, res) => {
    const code = httpConstants.success;
    res.status(code).json(apiResponse(code, "Successfull"));
  });

  server.all("*", (req, res) => {
    const code = httpConstants.bad_request;
    res.status(code).json(apiResponse(code, "Resource does not exists"));
  });
};

module.exports = api;
