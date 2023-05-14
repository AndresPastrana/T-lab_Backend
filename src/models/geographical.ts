
import { ICity, ICountry, IState } from "../types";
import { Schema, model } from "mongoose";

// const ExampleSchema = new Schema<DocType,Model,InstaceMethods>({
// });

// Countries
const CountrySchema = new Schema<ICountry>({
  name: {
    type: "String",
    required: true,
    unique: true,
  },
  
});

// Mthdos of the schema's instance
CountrySchema.methods.toJSON = function (){
  const {__v,...rest} = this.toObject();
  return rest;
}

const CountryModel = model<ICountry>("Country", CountrySchema);






// States

const StateSchema = new Schema<IState>({
  id_country: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "Country",
  },
});

const CitySchema = new Schema<ICity>({
  id_state: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "State",
  },
});

const StateModel = model<IState>("State", StateSchema);
const CityModel = model<ICity>("City", CitySchema);

export { CountryModel, StateModel, CityModel };
