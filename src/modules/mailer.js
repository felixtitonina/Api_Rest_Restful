const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../config/mail.json'); // (desistruturação) pegando só o que eu quero

const transport = nodemailer.createTransport({
  host, // sintaxe curta  
  port,
  auth: { user, pass },
});

transport.use('compile', hbs({
  viewEngine: 'handlebars',
//   partialsDir: './src/resources/mail/',
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}));

module.exports = transport;
