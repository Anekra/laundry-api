require('dotenv').config();

const secret = process.env.SECRET;
const roles = ['admin', 'customer'];

module.exports = { secret, roles };
