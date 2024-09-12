// backend/controller/notificationController.js
import Notification from '../models/Notification.js';
import twilio from 'twilio';
import dotenv from 'dotenv';
import transporter from '../config/nodemailer.js';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Create Notification Preference
export const createNotification = async (req, res) => {
  const { fullName, email, contactNumber, flightNumber, notificationType } = req.body;

  try {
    const notification = new Notification({ fullName, email, contactNumber, flightNumber, notificationType });

    await notification.save();

    // Send SMS notification if the type is 'sms' or 'both'
    if (notificationType === 'sms' || notificationType === 'both') {
      await client.messages.create({
        body: `📢 Notification preference saved successfully for flight ${flightNumber}. ✈️\n\nनोटिफिकेशन प्रेफरेंस सफलतापूर्वक सेव हो गया है। फ्लाइट नंबर: ${flightNumber}. 🚀`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: contactNumber
      });
    }
    

    // Send Email notification if the type is 'email' or 'both'
    if (notificationType === 'email' || notificationType === 'both') {
      const mailOptions = {
        from: 'sender@example.com', // Update with your sender email
        to: email,
        subject: 'Notification Preference Saved',
        text: `Notification preference saved successfully for flight ${flightNumber}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    }

    res.status(201).json({ message: 'Notification preference saved successfully' });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get All Notifications
export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Notification Preference
export const updateNotification = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, contactNumber, flightNumber, notificationType } = req.body;

  try {
    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    notification.fullName = fullName;
    notification.email = email;
    notification.contactNumber = contactNumber;
    notification.flightNumber = flightNumber;
    notification.notificationType = notificationType;

    await notification.save();

    res.json({ message: 'Notification updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
