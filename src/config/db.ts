import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();


const dbURI: string = process.env.dbURI || '';


const connectToMongo = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1); // Exit with failure
  }
};

export default connectToMongo;
