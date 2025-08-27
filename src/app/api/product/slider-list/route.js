import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";




export async function GET(req) {
    try {
        const prisma = new PrismaClient();
        const productSliders = await prisma.productSliders.findMany({})

        return NextResponse.json({ status:"success", data: productSliders});
    } catch (error) {
        return NextResponse.json({ status:"fail", data: error.message }, { status: 500 });
    }
}