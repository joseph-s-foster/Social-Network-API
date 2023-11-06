const mongoose = require("mongoose");
const dateFormat = require("../utils/helpers");
const reactionSchema = require("./Reaction");

const thoughtSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      minLength: 1,
      maxLength: 280,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: (TS) => dateFormat(TS),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("numReactions").get(function () {
  return this.reactions.length;
});

module.exports = mongoose.model("Thought", thoughtSchema);
