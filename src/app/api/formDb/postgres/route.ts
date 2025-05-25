import { NextRequest, NextResponse } from 'next/server';
import prisma  from '@/lib/prisma';

// POST: Create a new form entry
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('Received form data:', body);

    const form = await prisma.form.create({
      data: body,
    });

    return NextResponse.json({ success: true, data: form }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

// GET: Fetch all form entries
export async function GET() {
  try {
    const forms = await prisma.form.findMany({
      orderBy: { id: 'desc' }, // latest first
    });

    return NextResponse.json({ success: true, data: forms }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
