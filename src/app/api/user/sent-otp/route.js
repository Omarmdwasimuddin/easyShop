import {NextResponse} from "next/server";
import {PrismaClient} from "@/generated/prisma"
import {SendEmail} from "@/utility/EmailUtility";
export async function GET(req){
    try {
        const prisma=new PrismaClient();
        let {searchParams}=new URL(req.url);
        let email= searchParams.get('email');


        let code=(Math.floor(100000+Math.random()*900000)).toString()
        let EmailText=`Your Verification Code: ${code}`
        let EmailSubject="EasyShop Verification Code";
        await SendEmail(email,EmailText,EmailSubject);

        const result = await prisma.users.upsert({
            where: { email: email },
            update:{otp:code},
            create: {email:email,otp:code}
        });


        return  NextResponse.json({status:"success",data:result})

    }catch (error) {
        return  NextResponse.json({status:"fail",data:error})
    }
}