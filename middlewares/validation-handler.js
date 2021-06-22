'use strict';

const Joi = require('joi');

const appCodes = require('../lib/app-codes');
const AppError = require('../lib/app-error').AppError;
const responseHandler = require('../utils/response-handler');

module.exports = (objectSchema) => {
  return function validationHandler(req, res, next) {
    const validationResult = objectSchema.validate(req.body);

    if (typeof validationResult.error !== 'undefined' && validationResult.error !== null) {
      const err = new AppError(
        appCodes.BAD_REQUEST,
        {
          details: validationResult.error.details.pop().message
        }
      );

      return responseHandler(err, req, res);
    }

    next();
  };
};