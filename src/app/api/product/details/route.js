import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";



export async function POST(req) {
    try {
        let { searchParams } = new URL(req.url);
        let id = parseInt(searchParams.get("id"));

        const prisma = new PrismaClient();
        const result = await prisma.products.findUnique({
            where: {id: id},
            include: {product_details: true}
        });

        return NextResponse.json({status: "success", data: result});

    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message});
    } 
}