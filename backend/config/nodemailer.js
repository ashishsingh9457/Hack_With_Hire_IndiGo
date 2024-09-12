import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'SendGrid',
//   auth: {
//     user: 'apikey', // SendGrid username
//     pass: process.env.SENDGRID_API_KEY // Your SendGrid API key
//   }
// });

// backend/config/nodemailer.js

import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS,
  },
});



const mailOptions = {
  from: 'sender@example.com',
  to: 'recipient@example.com',
  subject: 'Subject Text',
  text: 'Email Body'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

export default transporter;