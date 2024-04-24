const joi = require('joi')

const schema = joi.object({
    Name: joi.string().required(),
    Super_Power_Category : joi.string().required(),
    Super_Power : joi.string().required(),
    Image : joi.string().uri().required()
})

module.exports = schema