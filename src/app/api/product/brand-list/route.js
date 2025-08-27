import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";




export async function GET(req) {
    try {

        const prisma = new PrismaClient();
        const brands = await prisma.brands.findMany({})

        return NextResponse.json({ status:"success", data: brands});
    } catch (error) {
        console.error("Error creating brands:", error);
        return NextResponse.json({ status:"fail", data: error.message }, { status: 500 });
    }
}