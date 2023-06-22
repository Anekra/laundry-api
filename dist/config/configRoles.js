"use strict";

require('dotenv').config();
var secret = process.env.SECRET;
var roles = ['admin', 'customer'];
module.exports = {
  secret: secret,
  roles: roles
};