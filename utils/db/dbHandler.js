const createRecord = async (model, payload) => {
  const recordInstance = new model(payload);
  await recordInstance.save();
};

const findRecord = async (model, query = {}) => {
  const data = await model.findOne(query);
  return data;
};

const findAllRecord = async (model, query = {}) => {
  const data = await model.find(query);
  return data;
};

const updateRecordByQuery = async (model, query, payload) => {
  const data = await model.findOneAndUpdate(
    query,
    { $set: payload },
    { new: true }
  );
  return data;
};

const pushAttributeInRecord = async (model, query, payload) => {
  const data = await model.findOneAndUpdate(
    query,
    { $push: payload },
    { new: true }
  );
  return data;
};

const deleteRecord = async (model, query) => {
  await model.deleteOne(query);
};

module.exports = {
  createRecord,
  updateRecordByQuery,
  deleteRecord,
  pushAttributeInRecord,
  findAllRecord,
  findRecord,
};
