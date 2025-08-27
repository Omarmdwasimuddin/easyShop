import {NextResponse} from "next/server";
import {PrismaClient} from "@/generated/prisma"
import { headers } from "next/headers";


export async function POST(req){
    try {
 
        let headerList = await headers();
        let id= parseInt(headerList.get('id'));

        let reqBody = await req.json();
        reqBody.userId=id;


        const prisma=new PrismaClient();
        const result = await prisma.productCards.create({
            data:reqBody
        });


        return  NextResponse.json({status:"success",data:result})

    }catch (error) {
        return  NextResponse.json({status:"fail",data:error.toString()})
    }
}

export async function PUT(req){
    try {
 
        let headerList = await headers();
        let userId= parseInt(headerList.get('id'));
        let reqBody = await req.json();
   


        const prisma=new PrismaClient();
        const result = await prisma.productCards.updateMany({
            where: {
                AND: [
                    {id: reqBody.id},
                    {userId: userId}
                ]
            },
            data: { color: reqBody.color, size: reqBody.size, qty: reqBody.qty }
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
        const result = await prisma.productCards.findMany({
            where:{ userId: id },
            include:{ product: true }
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
        const result = await prisma.productCards.delete({
            where:{
                id:reqBody.id
            }
        });

        return  NextResponse.json({status:"success",data:result})

    }catch (error) {
        return  NextResponse.json({status:"fail",data:error.toString()})
    }
}