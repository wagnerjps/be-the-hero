const express = require("express");
const { celebrate, Segments, Joi } = require('celebrate');

const InitController = require("./controllers/InitControlres");
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentsController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//Apenas um Hello World com SEND
//return response.send('Hello World');
routes.get('/', InitController.testeRaiz);

//Exemplo que Query Params
routes.get('/users', InitController.exQueryParams);

//Exemplo de Route Params
routes.get('/users/:id', InitController.exRouteParams);

//Exemplo de Request Body
routes.post('/users', InitController.exRequestBody);

//Metodo de listagem de ongs existentes no Banco de Dados
routes.get('/ongs', OngController.index);

//Metodo de cadastro de novas Ongs no Banco de Dados
//Inserção da validação
// whatsapp: Joi.number().min(1000000000).max(99999999999).required(),
//whatsapp: Joi.number().greater(999999999).less(100000000000).required(),
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().min(1000000000).max(99999999999).required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);


//Metodo de listagem de casos existentes no Banco de Dados
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentsController.index);

//Metodo de cadastro de novos Casos no Banco de Dados
routes.post('/incidents', IncidentsController.create);

//Metodo para deletar um caso do banco de dados
//Validação do PARAMS
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentsController.delete);

//Metodo para listar os casos de uma ONG especifica
//Validação do HEADERS
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

//Metodo login
routes.post('/sessions', SessionController.create);

module.exports = routes;