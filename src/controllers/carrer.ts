import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import { CarrerModel, ICarreer } from "../models/career";

// TODO: Fix this unused param
export const getAllCareers = async (undefined: any, resp: Response) => {
  try {
    // A list of Carrers Documents
    const carrers = await CarrerModel.find();
    return resp.json({
      ok: true,
      data: carrers,
    });
  } catch (error) {
    return resp.json({ error });
  }
};

export const insertCareer = async (req: Request, resp: Response) => {
  try {
    const { body } = req;

    const newCarrer: HydratedDocument<ICarreer> = new CarrerModel(body);
    await newCarrer.save();
    return resp.status(201).json({ ok: true, data: newCarrer });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({ ok: false });
  }
  // try {
  //   const inserted = CarrerModel.insertOne(body);

  //   console.log(inserted);
  // } catch (error) {}
};

export const deleteCareer = async (req: Request, resp: Response) => {
  try {
    const { id: _id } = req.params;
    const deletedElement = await CarrerModel.findByIdAndDelete(_id);

    return resp.json({ ok: true, data: deletedElement });
  } catch (error) {
    return resp.status(500).json({ ok: false, data: null, error });
  }
};

export const updateCareer = async (req: Request, resp: Response) => {
  try {
    const { body, params } = req;
    const { id: _id } = params;
    await CarrerModel.updateOne({ _id }, body);

    return resp.status(201).json({ ok: true, data: { _id, ...body } });
  } catch (error) {
    return resp.status(500);
  }
};
