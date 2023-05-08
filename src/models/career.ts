import { Schema, model } from "mongoose";

interface ICarreer {
  name: String;
}

const CareerSchema = new Schema<ICarreer>({
  name: {
    type: "String",
    required: true,
    unique: true,
  },
});

const CarrerModel = model<ICarreer>("career", CareerSchema);

export { CarrerModel, ICarreer };
