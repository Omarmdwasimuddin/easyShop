import {PrismaClient} from "@/generated/prisma";
import {NextResponse} from "next/server";

export async function POST(req) {
    try{
        let {searchParams}=new URL(req.url);
        let tran_id= searchParams.get('tran_id');
        const prisma=new PrismaClient();

        const result=await prisma.invoices.updateMany({
            where:{AND:[
                    {tran_id:tran_id},
                ]},
            data:{payment_status:"success"}
        })
        return  NextResponse.json({status:"success",data:result})
    }
    catch (error) {
        return  NextResponse.json({status:"fail",data:error.toString()})
    }
}