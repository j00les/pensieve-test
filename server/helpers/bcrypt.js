const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const passHash = (pass) => bcrypt.hashSync(pass, 10);
const passCompare = (pass, hash) => bcrypt.compareSync(pass, hash);


module.exports = { passHash, passCompare};