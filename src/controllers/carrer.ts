import { Request, Response } from "express";
import { CarrerModel} from "../models/career";

// Return a list of type Carreer in the body of the response
export const getAllCareers = async (_: Request, resp: Response) => {
  try {
    // A list of Carrers Documents
    const carrers = await CarrerModel.find();
    resp.json({
      ok: true,
      data: carrers,
    });
    return;
  } catch (error) {
    resp.json({ error });
  }
};
// Returns the inserted  carreer in the body of the response or null
export const insertCareer = async (req: Request, resp: Response) => {
  try {
    const { body } = req;
 console.log(body);
 
    resp.status(201).json({ ok: true });
  } catch (error) {
    console.log(error);
    resp.status(500).json({ ok: false });
  }
  // try {
  //   const inserted = CarrerModel.insertOne(body);

  //   console.log(inserted);
  // } catch (error) {}
};
// Returns the deleted carreer in the body of the response or null
export const deleteCareer = async (req: Request, resp: Response) => {
  try {
    const { id: _id } = req.params;
    const deletedElement = await CarrerModel.findByIdAndDelete(_id);

    resp.json({ ok: true, data: deletedElement });
  } catch (error) {
    resp.status(500).json({ ok: false, data: null, error });
  }
};
// Returns the udapted carreer in the body of the response or null
export const updateCareer = async (req: Request, resp: Response) => {
  try {
    const { body, params } = req;
    const { id: _id } = params;
    await CarrerModel.updateOne({ _id }, body);

    resp.status(201).json({ ok: true, data: { _id, ...body } });
    return;
  } catch (error) {
    resp.status(500);
  }
};
