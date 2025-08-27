import {PrismaClient} from "@/generated/prisma";
import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(req) {
    try{
        let headerList= await headers();
        let id=parseInt(headerList.get('id'));
        const prisma=new PrismaClient();
        const result=await prisma.invoices.findMany({
            where:{userId:id}
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (error) {
        return  NextResponse.json({status:"fail",data:error.toString()})
    }
}