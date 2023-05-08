const { request, response } = require("express");
const { CarrerModel } = require("../models/career");

const getAllCareers = async (req, resp) => {
  try {
    const carrers = await CarrerModel.find();
    return resp.json({
      ok: true,
      data: carrers,
    });
  } catch (error) {
    return resp.json({ error });
    console.log(error);
  }
};

const insertCareer = async (req, resp) => {
  try {
    const { body } = req;
    const insertedCarrer = await CarrerModel.create(body);
    return resp.status(201).json({ ok: true, data: insertedCarrer });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({ ok: false });
  }
  // try {
  //   const inserted = CarrerModel.insertOne(body);

  //   console.log(inserted);
  // } catch (error) {}
};

const deleteCareer = async (req = request, resp) => {
  try {
    const { id: _id } = req.params;
    const deletedElement = await CarrerModel.findByIdAndDelete(_id);

    return resp.json({ ok: true, data: { _id: deletedElement._id } });
  } catch (error) {
    return resp.status(500).json({ ok: false, data: null, error });
  }
};

const updateCareer = async (req = request, resp = response) => {
  try {
    const { body, params } = req;
    const { id: _id } = params;
    const res = await CarrerModel.updateOne({ _id }, body);
    if (res.modifiedCount >= 1) {
      return resp.status(201).json({ ok: true, data: { _id, ...body } });
    }
  } catch (error) {
    return resp.status(500);
  }
};

module.exports = {
  getAllCareers,
  insertCareer,
  deleteCareer,
  updateCareer,
};
