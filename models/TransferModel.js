const Joi = require('@hapi/joi');
const schema = Joi.object().keys({
    to: Joi.object().keys({
        counterparty_id: Joi.string()
    }).required(),
    value: Joi.object().keys({
        currency: Joi.string().required(),
        amount: Joi.number().required()
    }).required(),
    description: Joi.string().required(),
    concept: Joi.string().required(),
    emails: Joi.array().items(Joi.string().email()).required()
});

class TransferModel {
    constructor(jsonModel) {
        if (jsonModel == undefined) throw Error("JsonModel undefined");
        const validate = schema.validate(jsonModel).error;
        if (validate) throw Error(validate.details[0].message);
        this.jsonModel = jsonModel;
    }

    get json() {
        return this.jsonModel;
    }
}

module.exports = TransferModel;