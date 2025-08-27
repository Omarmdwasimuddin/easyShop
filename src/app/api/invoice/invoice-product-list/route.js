import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET(req) {
  try {
    let headerList = await headers();
    let userId = parseInt(headerList.get("id"));

    const { searchParams } = new URL(req.url);
    let invoiceId = parseInt(searchParams.get("invoice_id"));

    const prisma = new PrismaClient();

    const result = await prisma.invoiceProducts.findMany({
      where: {
        AND: [
          { invoiceId: invoiceId },
          { userId: userId },
        ],
      },
      include: { product: true },
    });

    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    return NextResponse.json({ status: "fail", data: error.toString() });
  }
}
