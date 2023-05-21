import { Schema, model,  } from 'mongoose';



const CursoSchema = new Schema({
      starts : {
        type: Date,
        required : true,
      },
      ends : {
        type: Date,
        required : true,
      },
      status : {
        type : 'string'
      }
})



export const CursoModel = model('Curso', CursoSchema);