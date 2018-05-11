var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'spandey280191@gmail.com',
      pass: 'Language28!'
    }
  });
  
  var mailOptions = {
    from: 'spandey280191@gmail.com',
    to: 'sayali22kasliwal@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'It is very easy to send email using node.js'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });