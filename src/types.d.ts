import { Schema } from "mongoose";
export type CustomType = "a" | 2 | { name: string };

export interface Person {
  name: string;
  ci: string;
}

export interface Profesor extends Person {}

export interface Student extends Person {}

export interface Country {
  _id: Schema.Types.ObjectId;
  name: string;
}

export interface State extends Country {
  id_country: Schema.Types.ObjectId;
}

export interface City extends Country {
  id_state: Schema.Types.ObjectId;
}
