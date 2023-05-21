import { Request, Response } from "express";

const getAllCourses = (_req: Request, resp: Response) => {
  return resp.json({ a: "" });
};

const getCourseById = (_req: Request, _resp: Response) => {
  return { a: "" };
};

const updateCourse = (_req: Request, _resp: Response) => {
  return { a: "" };
};

const newCourse = (_req: Request, _resp: Response) => {
  return { a: "" };
};

const CourseController = Object.freeze({
  getAllCourses,
  getCourseById,
  updateCourse,
  newCourse,
});

export default CourseController;
