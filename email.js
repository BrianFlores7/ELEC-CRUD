//Requerimos el paquete
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '*****',
    pass: '*******'
  }
});

var mensaje = "Hola desde nodejs...";

var mailOptions = {
  from: '********************************',
  to: '********************************',
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