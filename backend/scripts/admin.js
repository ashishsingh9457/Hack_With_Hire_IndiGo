import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../models/Auth.js'; // Adjust the path based on your project structure

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    if (adminExists) {
      console.log('Admin user already exists');
      return;
    }

    // Create a new admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = new User({
      fullName: 'Admin',
      email: 'admin@example.com',
      contactNumber: '123456789',
      password: hashedPassword,
      isAdmin: true,
    });

    await adminUser.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.disconnect();
  }
};

createAdmin();
