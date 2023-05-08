const { validationResult } = require("express-validator");
const { request, response } = require("express");
const checkForErrors = (req = request, resp = response, next) => {
  const { errors } = validationResult(req);
  if (errors.length > 0) {
    return resp.status(400).json({
      ok: true,
      errors,
      data: null,
    });
  }
  next();
};

module.exports = { checkForErrors };
