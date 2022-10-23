import * as Joi from "joi";

export const createCatSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(1)
        .required(),
    breed: Joi.string()
        .alphanum()
        .min(2),
    age: Joi.number()
        .min(0)

})