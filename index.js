const server = require("./utils/app/index")();
const dbInit = require("./utils/db/index").dbInit;
const api = require("./api/index");
dbInit();
api(server);
