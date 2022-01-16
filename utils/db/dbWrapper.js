const dbHandlers = require("./dbHandler");

const save = (model, data) => {
  return dbHandlers.createRecord(model, data);
};

const find = (model, query) => {
  return dbHandlers.findRecord(model, query);
};

const findAll = (mode, query) => {
  return dbHandlers.findAllRecord(mode, query);
};

const update = (model, query, data) => {
  return dbHandlers.updateRecordByQuery(model, query, data);
};

const push = (model, query, data) => {
  return dbHandlers.pushAttributeInRecord(model, query, data);
};

const remove = (model, query) => {
  return dbHandlers.deleteRecord(model, query);
};

module.exports = {
  save,
  remove,
  update,
  find,
  findAll,
  push,
};
