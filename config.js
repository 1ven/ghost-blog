var path = require('path'),

module.exports = {
    production: {
        url: process.env.HEROKU_URL,
        mail: {},
        database: {
            client: 'postgres',
            connection: process.env.DATABASE_URL,
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
};
