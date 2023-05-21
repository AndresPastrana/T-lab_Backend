import { Types } from "mongoose";

// Enums
export type Sex = "masculino" | "femenino" | "rathernotsay";
export type TeachingCategory =
  | "adiestrado"
  | "instructor"
  | "asistente"
  | "auxiliar"
  | "titular";
export type ScientificCategory = "ing" | "lic" | "msc" | "drc";
export type ProcesState = "open" | "close";

export type Career = {
  name: string;
};

export interface ICountry {
  name: string;
}

//Example below to add instace's methods
// export interface ICountryMethods {
// }

// Create a new Model type that knows about IUserMethods...
// export type CountryModel = Model<ICountry, {}, ICountryMethods>;

interface DefenseMetatda {
  scheduled_for: Date;
  place: string;
  requirements: Array<string>;
  selectedStudents: Array<Types.ObjectId>;
  state: ProcesState;
}

// interface PreDefense extends DefenseMetatda {

// }

interface Defense extends DefenseMetatda {
  doc_url: string;
}


type ThesisTopic = {
  student: Types.ObjectId;
  titule: string;
  topic: string;
  wasAproved: {
    state: "aproved" | "denied" | "pending";
    date: Date | null;
    by: { id: Types.ObjectId | null};
  };
  // Arreglo de predefensas con sus recomendaciones y evaluacion 
  
};

export interface IState extends Country {
  id_country: Types.ObjectId;
}

export interface ICity extends Country {
  id_state: Types.ObjectId;
}

export interface IPerson {
  ci: string;
  first_name: string;
  middle_name?: string;
  surenames: Array<string>;
  address: string;
  sex: Sex;
  country: Types.ObjectId;
  state: Types.ObjectId;
  city: ?Types.ObjectId;
}

export interface IProfesor extends IPerson {
  id_metadata: Types.ObjectId;
  court?: Types.ObjectId;
  teaching_category: TeachingCategory;
  scientific_category: ScientificCategory;
}

export interface IStudent extends IPerson {
  metadata: Types.ObjectId;
  career: Types.ObjectId;
  thesis_topic: Types.ObjectId;
  tutor: ?Types.ObjectId;
  court: ?Types.ObjectId;
  defense: Types.ObjectId;
  pre_defenses: Array<StudentPredfense>;
  scholarship: boolean;
  status: boolean;
}
