import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
 

export async function GET(req) {
    try {
        const prisma = new PrismaClient();
        const categoryList = await prisma.categories.findMany({});

        return NextResponse.json({status: "success", data: categoryList});

    } catch (error) {
        return NextResponse.json({status: "fail",error: error.message});
    } 
}
