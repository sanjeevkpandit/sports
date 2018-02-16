// exception : For this package, always extract in this way
import swaggerJSDoc = require('swagger-jsdoc');

/**
 * Swagger definition.
 */
const definition = {
  info: {
    title: "process.env.APP_NAME",
    version: "process.env.APP_VERSION",
    description: "process.env.APP_DESCRIPTION"
  },
  host: `0.0.0.0:5000`,
  basePath: '/api'
};

/**
 * Options for the swagger docs.
 */
const options = {
  // import swaggerDefinitions
  swaggerDefinition: definition,
  // path to the API docs
  apis: [
    __dirname + '/routes/routes.js'
  ]
};

/**
 * Initialize swagger-jsdoc.
 */
const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
