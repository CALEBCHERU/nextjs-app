// // C:\nextjs-app\src\app\form\lib\prisma.ts
// import { PrismaClient } from "@prisma/client";
// // import prisma from "@/app/form/lib/prisma";

// // Prisma is an ORM (Object-Relational Mapping) tool for Node.js and TypeScript. It lets you interact with your database using clean, type-safe JavaScript/TypeScript code — instead of writing raw SQL queries.

// const prisma = new PrismaClient(); //This creates an instance of the Prisma client, which is like your connection to the database.



// if (process.env.NODE_ENV !== "production") {
//   globalThis.prisma = prisma;
// }

// export async function addProduct(title: string, price: number, description: string) {
//   return await prisma.product.create({
//     data: { title, price, description },
//   });
// }
// /*
// It does all of the following:
// Connects to the database (defined in your prisma/schema.prisma and .env file)
// Inserts a new record into the Product table
// Automatically escapes values (protecting from SQL injection)
// Returns the created product
// * */
// export default prisma;
