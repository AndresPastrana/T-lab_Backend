import { Schema, Types, Model } from "mongoose";
export type CustomType = "a" | 2 | { name: string };

export interface Person {
  name: string;
  ci: string;
}

export interface Profesor extends Person {}

export interface Student extends Person {}

export interface ICountry {
  name: string;
}


//Example below to add instace's methods
// export interface ICountryMethods {
// }

// Create a new Model type that knows about IUserMethods...
// export type CountryModel = Model<ICountry, {}, ICountryMethods>;

export interface IState extends Country {
  id_country: Types.ObjectId;
}

export interface ICity extends Country {
  id_state: Types.ObjectId;
}
