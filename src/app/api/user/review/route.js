import { PrismaClient } from "@/generated/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        let headerList = await headers();
        let id = parseInt(headerList.get("id"));
        const reqBody = await req.json();
        const prisma = new PrismaClient();

        const customer = await prisma.customerProfiles.findUnique({
            where: { userId: id}
        })

        reqBody.customerId = customer.id;

        const result = await prisma.productReviews.create({
            data: reqBody
        })

        return NextResponse.json({status: 'success', data: result});
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error.message});
        
    }
}