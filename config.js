var path = require('path'),

module.exports = {
    production: {
        url: process.env.HEROKU_URL,
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.MAILGUN_SMTP_LOGIN,
                    pass: process.env.MAILGUN_SMTP_PASSWORD
                }
            }
        },
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
