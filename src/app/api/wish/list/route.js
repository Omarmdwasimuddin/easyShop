import {NextResponse} from "next/server";
import {PrismaClient} from "@/generated/prisma"
import { headers } from "next/headers";


export async function POST(req){
    try {
 
        let headerList = await headers();
        let id= parseInt(headerList.get('id'));

        let reqBody = await req.json();


        const prisma=new PrismaClient();
        const result = await prisma.productWishes.create({
            data:{
                productId: reqBody.productId,
                userId: id
            }
        });


        return  NextResponse.json({status:"success",data:result})

    }catch (error) {
        return  NextResponse.json({status:"fail",data:error.toString()})
    }
}

export async function GET(req){
    try {
        let headerList = await headers();
        let id= parseInt(headerList.get('id'));

        const prisma=new PrismaClient();
        const result = await prisma.productWishes.findMany({
            where:{ userId: id },
            include:{ product: true}
        });

        return  NextResponse.json({status:"success",data:result})

    }catch (error) {
        return  NextResponse.json({status:"fail",data:error.toString()})
    }
}

export async function DELETE(req){
    try {
        let headerList = await headers();
        let userId= parseInt(headerList.get('id'));
        let reqBody = await req.json();

        const prisma=new PrismaClient();
        const result = await prisma.productWishes.deleteMany({
            where:{
                AND:[
                    {productId:reqBody.productId},
                    {userId:userId}
                ]
            }
        });

        return  NextResponse.json({status:"success",data:result})

    }catch (error) {
        return  NextResponse.json({status:"fail",data:error.toString()})
    }
}