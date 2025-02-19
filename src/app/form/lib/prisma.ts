// C:\nextjs-app\src\app\form\lib\prisma.ts
import { PrismaClient } from "@prisma/client";
// import prisma from "@/app/form/lib/prisma";

const prisma = new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export async function addProduct(title: string, price: number, description: string) {
  return await prisma.product.create({
    data: { title, price, description },
  });
}

export default prisma;
