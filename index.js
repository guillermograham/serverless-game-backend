const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express    = require('express');
const app        = express();
const routes     = require('./config/routes');

app.use(bodyParser.json({ strict: false }));
app.use(routes);

module.exports.handler = serverless(app);
