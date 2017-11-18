const {Server} = require('hapi');

const server = new Server();
server.connection({port: 3030});

server.route({
    method: 'GET',
    path: '/ping',
    handler(_, reply) {
        reply('PONG\n');
    }
});


module.exports = {
    bootstrap: (done) => server.start(done),
    teardown: (done) => server.stop(done)
}