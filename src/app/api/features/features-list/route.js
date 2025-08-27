import { NextResponse } from "next/server";
import { PrismaClient } from '@/generated/prisma';


export async function GET(req) {
    try {

        const prisma = new PrismaClient();
        const result = await prisma.features.findMany({})

        return NextResponse.json({status: "success", data: result}, {status: 200});
    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message}, {status: 500});
    }
}