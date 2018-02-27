const fs = require('fs');
const jwt = require('jsonwebtoken');
const privateKey = fs.readFileSync("AuthKey.p8").toString();
const kid = process.env.MUSIC_KIT_KEY_ID;
const teamId = process.env.APPLE_TEAM_ID;

module.exports = {
  sign() {
    if (!privateKey || !kid || !teamId) {
      return new Promise.reject('Failed to read environment variables');
    }
    const issueTime = Math.floor(new Date() / 1000);
    const expirationTime = issueTime + 15776000; // A few minutes less then 6 months

    return new Promise( (resolve, reject) => {
      jwt.sign(
        {
          "iss": teamId,
          "iat": issueTime,
          "exp": expirationTime
        },
      privateKey,
      {
          algorithm: 'ES256',
  	      keyid: kid
      },
      (err, token) => {
        if (err) return reject(err);
        resolve(token);
      });
    });
  },

  decode(token) {
    const decoded = jwt.decode(token);
    return new Promise( (resolve, reject) => {
      resolve(decoded);
    })
  }
}
