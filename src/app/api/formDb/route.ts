// src/app/api/formDb/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/form/formDb/lib/mongodb'; // Adjust path if needed
import mongoose from 'mongoose';

// 1. Define Mongoose Schema & Model
const formSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  gender: String,
  bio: String,
});

const FormModel = mongoose.models.Form || mongoose.model('Form', formSchema);

// 2. Export POST handler for App Router
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received form data:', body);

    await connectToDatabase();
    console.log('Connected to MongoDB');

    const form = await FormModel.create(body);

    return NextResponse.json({ success: true, data: form }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

// ✅ GET: Fetch all forms
export async function GET() {
  try {
    await connectToDatabase();
    const forms = await FormModel.find().sort({ _id: -1 }); // latest first
    return NextResponse.json({ success: true, data: forms }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
