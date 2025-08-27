import { NextResponse } from "next/server";
import { PrismaClient } from '@/generated/prisma';


export async function GET(req) {
    try {
        let { searchParams } = new URL(req.url);
        let type = searchParams.get("type");

        const prisma = new PrismaClient();
        const result = await prisma.policies.findMany({
            where: {type:type}
        })

        return NextResponse.json({status: "success", data: result}, {status: 200});
    } catch (error) {
        return NextResponse.json({status: "fail", data: error.message}, {status: 500});
    }
}