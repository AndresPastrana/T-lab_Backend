const { Schema, model } = require("express");
const StudentSchema = Schema({
  name: {
    type: "String",
    unique: true,
    required: true,
  },

  //   age: {},

  //   One student belongs to a course
  //   curso: {
  //     type: "String",
  //     default : `${new Date().}`
  //   },

  //   One student belongs to a Carrer
  career: {
    type: Schema.Types.ObjectId,
    rel: "carrer",
    required: true,
  },

  //   associated_predefenses :[{id_predefense : ObjectId, id_tribunal}]
  //   associated_corte_de_tesis

  //   live_ procees "topic_aproval ,predefense, defense,"

  //   id_tuthor:{

  //   }
});
const StudentModel = model("student", StudentSchema);
module.exports = StudentModel;
