import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";



export async function GET(req) {
    try {
        let { searchParams } = new URL(req.url);
        const keyword = searchParams.get("keyword");

        const prisma = new PrismaClient();
        const result = await prisma.products.findMany({
            where: {title:{contains: keyword}}
        });

        return NextResponse.json({status: "success", data: result});

    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message});
    } 
}