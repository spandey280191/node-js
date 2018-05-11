var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'password'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'toemail@gmail.com',
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
