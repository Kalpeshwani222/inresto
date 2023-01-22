const joi = require('@hapi/joi');

const userSchema = joi.object({
    name: joi.string().min(2).required(),
    email : joi.string().email().lowercase().required(),
    password: joi.string().min(2).required()
})

const loginSchema = joi.object({
    email : joi.string().email().lowercase().required(),
    password: joi.string().min(2).required()
})

module.exports = {
    userSchema,
    loginSchema,
}