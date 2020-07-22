const knex = require("knex");
const configuration = require("../../knexfile");

const env = process.env.NODE_ENV;

const config = (env === 'test') ? configuration.test : 
    (env === 'prod') ? configuration.production : configuration.development;

console.log(config)
//config = (env === 'test') ? configuration.development : configuration.development

const connection = knex(config);

module.exports = connection;