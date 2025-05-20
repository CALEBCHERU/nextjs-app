import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/userform';

// npm install mongoose
// npm install --save-dev @types/mongoose ==>Adds TypeScript types for Mongoose (dev only)


if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
