
// C:\nextjs-app\src\app\form\route.ts
import prisma from "@/app/form/lib/prisma"; 

import { NextResponse } from "next/server";

// ✅ Handle Product Creation (POST)
export async function POST(req: Request) {
  try {
    const { title, price, description } = await req.json();
    
    // Validate input
    if (!title || !price || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: { title, price: parseFloat(price), description },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}

// ✅ Fetch All Products (GET)
export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
