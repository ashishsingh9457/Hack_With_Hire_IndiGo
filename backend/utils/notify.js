import nodemailer from 'nodemailer';
import User from '../models/Notification.js'; // Import the User model
import dotenv from 'dotenv'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS ,
  },
});

const sendFlightUpdateNotification = async (flight) => {
  try {
    // Fetch all user emails
    const users = await User.find();
    const emails = users.map(user => user.email);

    const mailOptions = {
      // from: process.env.EMAIL_USER,
      // to: emails, // Send to all users
      from: ' brad@sandbox25a7c39219444b968dbdc612ef01c763.mailgun.org', // Update with your sender email
      to: emails, // Send to all users
      subject: `Flight Updated: ${flight.flightNumber}`,
      text: `Flight ${flight.flightNumber} has been updated.\n\nDetails:\nDeparture: ${flight.departure}\nArrival: ${flight.arrival}\nDate: ${flight.date}\nStatus: ${flight.status}\nCurrent Status: ${JSON.stringify(flight.currentStatus, null, 2)}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent to all users successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendFlightUpdateNotification;
