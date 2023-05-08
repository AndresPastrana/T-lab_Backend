const { Schema, model } = require("mongoose");

const CareerSchema = Schema({
  name: {
    type: "String",
    required: true,
    unique: true,
  },
  // alias: {
  //   type: ["String"],
  // },
});

const CarrerModel = model("career", CareerSchema);

module.exports = {
  CarrerModel,
};
