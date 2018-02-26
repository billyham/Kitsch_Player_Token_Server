const server = require('./lib/server');
const port = process.env.PORT || 4000;

console.log('Server listening on port: ', port);
server.listen(port);
