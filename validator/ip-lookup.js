'use strict';

module.exports = (ValidationSchema, Joi) => {
  return [
    ValidationSchema.define('FetchInfoByIp', Joi.object().keys({
      // ip: Joi.string().regex(RegExp('/^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/')).required()
      ip: Joi.string().required()
    }))
  ];
};