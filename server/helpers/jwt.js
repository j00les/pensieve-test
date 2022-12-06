const tokenSign = payload => jwt.sign(payload, process.env.SECRET_KEY);
const tokenVerify = token => jwt.verify(token, process.env.SECRET_KEY);

module.exports = { tokenSign, tokenVerify };
