const Mongoose = require("mongoose");

const SPolling = Mongoose.Schema({
  pollId: {
    type: String,
    required: true,
  },
  statement: {
    type: String,
    required: true,
  },
  refImage: {
    type: Buffer,
  },
  options: [
    {
      optionValue: {
        type: String,
        required: true,
      },
      optionVotes: {
        type: Number,
        default: 0,
      },
    },
  ],
  totalVotes: {
    type: Number,
    default: 0,
  },
  pollType: {
    type: String,
    enum: ["Protected", "Public"],
    default: "Public",
  },
  pollKey: {
    type: String,
    default: "1234",
  },
  email: {
    type: String,
    required: true,
  },
  pollStatus: {
    type: Boolean,
    default: true,
  },
});

const Polling = Mongoose.model("Poll", SPolling);
module.exports = Polling;
