// import { HydratedDocument } from 'mongoose';
// import { ICountry } from "./../types.d";
import { Response, Request } from "express";
import { CountryModel } from "../models";


// *************** COUNTRY CONTROLLERS  ********************
const getCountries = async (_req: Request, res: Response) => {
  try {
    const countries = await CountryModel.find({}); 
    
    res.json({data: countries});
    return;
  } catch (error) {}
};

const getCountryById = (_req: Request, res: Response) => {
  return res.json();
};

const insertCountry = (_req: Request, res: Response) => {
  return res.json();
};

const updateCountry = (_req: Request, res: Response) => {
  return res.json();
};

const deleteCountry = (_req: Request, res: Response) => {
  return res.json();
};

// // *************** STATE CONTROLLERS  ********************

// const getStates = (_req: Request, res: Response) => {
//   return res.json();
// };

// const getStateById = (req: Request, res: Response) => {
//   return res.json();
// };

// const insertState = (req: Request, res: Response) => {
//   return res.json();
// };

// const updateState = (req: Request, res: Response) => {
//   return res.json();
// };

// // *************** CITY CONTROLLERS  ********************

// const getCities = (_req: Request, res: Response) => {
//   return res.json();
// };

// const getCityById = (req: Request, res: Response) => {
//   return res.json();
// };

// const insertCity = (req: Request, res: Response) => {
//   return res.json();
// };

// const updateCity = (req: Request, res: Response) => {
//   return res.json();
// };

const GeographicalController = Object.freeze({
  getCountries,
  getCountryById,
  insertCountry,
  updateCountry,
  deleteCountry,
  // getStates,
  // getStateById,
  // insertState,
  // updateState,
  // getCities,
  // getCityById,
  // insertCity,
  // updateCity,
});

export default GeographicalController;
