import { PrismaClient } from "@/generated/prisma";
import { headers } from "next/headers";
import { NextResponse } from "next/server";



export async function GET(req) {
    try {
        let headerList = await headers();
        let id = parseInt(headerList.get("id"));

        const prisma = new PrismaClient();
        const result = await prisma.customerProfiles.findUnique({
            where: { userId: id }
        })

        return NextResponse.json({status: 'success', data: result});
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error.message});
        
    }
}



export async function POST(req) {
    try {
        let headerList = await headers();
        let id = parseInt(headerList.get("id"));

        const reqBody = await req.json();

        const prisma = new PrismaClient();
        const result = await prisma.customerProfiles.upsert({
            where: { userId: id},
            update: reqBody,
            create: {...reqBody, userId: id }
        })

        return NextResponse.json({status: 'success', data: result});
    } catch (error) {
        return NextResponse.json({status: 'fail', data: error.message});
        
    }
}