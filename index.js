const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { port, env, dbURI } = require('./config/config');
const routes = require('./config/routes');

const app = express();

mongoose.connect(dbURI);

if(env !== 'test') app.use(morgan('dev'));

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
