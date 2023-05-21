import { Schema, model } from 'mongoose'
import { Career } from '../types'



const CareerSchema = new Schema<Career>({
  name: {
    type: 'String',
    required: true,
    unique: true
  }
})

const CarrerModel = model<Career>('career', CareerSchema)

export { CarrerModel}
