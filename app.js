const express = require("express");
const app = express();
const path = require("path");
const routes = require('./api/routes');
const config = require('./config/config');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// app.set('port',3000);
if (app.get('env') !== 'production') app.use(cors());
app.use(morgan('dev'));

app.use(function(req,res,next){
 console.log(req.method,req.url);
 next();
});

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',routes);

app.listen(config.port, () => console.log(`Express has started on port: ${config.port}`));
