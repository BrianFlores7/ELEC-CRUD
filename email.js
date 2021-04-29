//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '193216@ids.upchiapas.edu.mx',
    pass: 'T27oct01'
  }
});

var mensaje = "Hola desde nodejs...";

var mailOptions = {
  from: '193216@ids.upchiapas.edu.mx',
  to: 'brianbtfa@hotmail.com',
  subject: 'Asunto Del Correo',
  text: mensaje
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email enviado: ' + info.response);
  }
});