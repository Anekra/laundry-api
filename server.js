require('dotenv').config();
const express = require('express');
const { json, urlencoded, static } = require('express');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./app/models');
const cors = require('cors');

const app = express();

app.use(json());
app.use(
  urlencoded({
    extended: true
  })
);
app.use(cookieParser());
app.use(static('app/public'));
app.use(cors());

const title = process.env.DB_DEV_NAME;
const port = process.env.PORT;
const baseUrl = process.env.URL + port;

require('./app/router/router.js')(app);

app.listen(port, () => console.log(title + ' run on ' + baseUrl));
