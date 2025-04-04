import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import insurerRoutes from './routes/insurer.js';
import doctorRoutes from './routes/doctor.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/insurer', insurerRoutes);
app.use('/api/doctor', doctorRoutes);

// MongoDB Connection
const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI; // Correct environment variable name
    if (!MONGO_URI) {
      throw new Error('❌ MONGO_URI is missing in .env file!');
    }
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit the application if the connection fails
  }
};

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB(); // Ensure MongoDB is connected before starting the server
  console.log(`🚀 Server running on port ${PORT}`);
});
