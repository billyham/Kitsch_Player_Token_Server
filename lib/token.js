const jwt = require('jsonwebtoken');
const privateKey = process.env.MUSIC_KIT_PRIVATE_KEY;
const kid = process.env.MUSIC_KIT_KEY_ID;
const teamId = process.env.APPLE_TEAM_ID;

module.exports = {
  sign() {
    if (!privateKey || !kid || !teamId) {
      return new Promise.reject('Failed to read environment variables');
    }
    return new Promise( (resolve, reject) => {
      jwt.sign({
	      "alg": "ES256",
	      "kid": kid
      },
      privateKey,
      {
        header: {
          "iss": teamId,
	        "iat": 1519621510,
	        "exp": 1535068800
        }
      },
      (err, token) => {
        if (err) return reject(err);
        resolve(token);
      });
    });
  }
}
