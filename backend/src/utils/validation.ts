import Joi from 'joi'

export const schemas = {
  register: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  flight: Joi.object({
    airline: Joi.string().required(),
    flightNumber: Joi.string().required(),
    departureAirport: Joi.string().required(),
    arrivalAirport: Joi.string().required(),
    departureTime: Joi.date().required(),
    arrivalTime: Joi.date().required(),
    totalSeats: Joi.number().required(),
    price: Joi.number().required(),
  }),
}

export const validate = (schema: Joi.ObjectSchema, data: any) => {
  return schema.validate(data, { abortEarly: false })
}
