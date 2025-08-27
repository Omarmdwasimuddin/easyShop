-- CreateEnum
CREATE TYPE "public"."products_remark" AS ENUM ('popular', 'new', 'top', 'special', 'trending', 'regular');

-- CreateEnum
CREATE TYPE "public"."invoice_delivery_status" AS ENUM ('Pending', 'Processing', 'Completed');

-- CreateEnum
CREATE TYPE "public"."policies_type" AS ENUM ('about', 'terms', 'refund', 'contact', 'complain');

-- CreateTable
CREATE TABLE "public"."Brands" (
    "id" SERIAL NOT NULL,
    "brandName" VARCHAR(50) NOT NULL,
    "brandImage" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Categories" (
    "id" SERIAL NOT NULL,
    "categoryName" VARCHAR(50) NOT NULL,
    "categoryImage" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Products" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "short_des" VARCHAR(500) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" BOOLEAN NOT NULL,
    "discount_price" DOUBLE PRECISION NOT NULL,
    "image" VARCHAR(200) NOT NULL,
    "stock" BOOLEAN NOT NULL,
    "star" DOUBLE PRECISION NOT NULL,
    "remark" "public"."products_remark" NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "brandId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductDetails" (
    "id" SERIAL NOT NULL,
    "img1" VARCHAR(200) NOT NULL,
    "img2" VARCHAR(200) NOT NULL,
    "img3" VARCHAR(200) NOT NULL,
    "img4" VARCHAR(200) NOT NULL,
    "img5" VARCHAR(200) NOT NULL,
    "img6" VARCHAR(200) NOT NULL,
    "img7" VARCHAR(200) NOT NULL,
    "img8" VARCHAR(200) NOT NULL,
    "des" TEXT NOT NULL,
    "color" VARCHAR(200) NOT NULL,
    "size" VARCHAR(200) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductSliders" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "short_des" VARCHAR(500) NOT NULL,
    "price" VARCHAR(100) NOT NULL,
    "image" VARCHAR(200) NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductSliders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "otp" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CustomerProfiles" (
    "id" SERIAL NOT NULL,
    "cus_name" VARCHAR(100) NOT NULL,
    "cus_add" VARCHAR(500) NOT NULL,
    "cus_city" VARCHAR(50) NOT NULL,
    "cus_state" VARCHAR(50) NOT NULL,
    "cus_postcode" VARCHAR(50) NOT NULL,
    "cus_country" VARCHAR(50) NOT NULL,
    "cus_phone" VARCHAR(50) NOT NULL,
    "cus_fax" VARCHAR(50) NOT NULL,
    "ship_name" VARCHAR(100) NOT NULL,
    "ship_add" VARCHAR(100) NOT NULL,
    "ship_city" VARCHAR(100) NOT NULL,
    "ship_state" VARCHAR(100) NOT NULL,
    "ship_postcode" VARCHAR(100) NOT NULL,
    "ship_country" VARCHAR(100) NOT NULL,
    "ship_phone" VARCHAR(50) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CustomerProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductCards" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "color" VARCHAR(200) NOT NULL,
    "size" VARCHAR(200) NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductWishes" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductWishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProductReviews" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(1000) NOT NULL,
    "rating" VARCHAR(10) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,

    CONSTRAINT "ProductReviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Invoices" (
    "id" SERIAL NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "vat" DOUBLE PRECISION NOT NULL,
    "payable" DOUBLE PRECISION NOT NULL,
    "cus_details" VARCHAR(500) NOT NULL,
    "ship_details" VARCHAR(500) NOT NULL,
    "tran_id" VARCHAR(100) NOT NULL,
    "val_id" VARCHAR(100) NOT NULL DEFAULT '0',
    "delivery_status" "public"."invoice_delivery_status" NOT NULL,
    "payment_status" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InvoiceProducts" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "invoiceId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "qty" DOUBLE PRECISION NOT NULL,
    "sale_price" DOUBLE PRECISION NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "size" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InvoiceProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Policies" (
    "id" SERIAL NOT NULL,
    "type" "public"."policies_type" NOT NULL,
    "des" TEXT NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Policies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sslcommerz_accounts" (
    "id" SERIAL NOT NULL,
    "store_id" VARCHAR(255) NOT NULL,
    "store_passwd" VARCHAR(255) NOT NULL,
    "currency" VARCHAR(255) NOT NULL,
    "success_url" VARCHAR(255) NOT NULL,
    "fail_url" VARCHAR(255) NOT NULL,
    "cancel_url" VARCHAR(255) NOT NULL,
    "ipn_url" VARCHAR(255) NOT NULL,
    "init_url" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Sslcommerz_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Features" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "image" VARCHAR(300) NOT NULL,
    "createdAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Features_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brands_brandName_key" ON "public"."Brands"("brandName");

-- CreateIndex
CREATE UNIQUE INDEX "Categories_categoryName_key" ON "public"."Categories"("categoryName");

-- CreateIndex
CREATE UNIQUE INDEX "ProductDetails_productId_key" ON "public"."ProductDetails"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductSliders_productId_key" ON "public"."ProductSliders"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CustomerProfiles_userId_key" ON "public"."CustomerProfiles"("userId");

-- AddForeignKey
ALTER TABLE "public"."Products" ADD CONSTRAINT "Products_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "public"."Brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductDetails" ADD CONSTRAINT "ProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductSliders" ADD CONSTRAINT "ProductSliders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CustomerProfiles" ADD CONSTRAINT "CustomerProfiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductCards" ADD CONSTRAINT "ProductCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductCards" ADD CONSTRAINT "ProductCards_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductWishes" ADD CONSTRAINT "ProductWishes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductWishes" ADD CONSTRAINT "ProductWishes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductReviews" ADD CONSTRAINT "ProductReviews_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProductReviews" ADD CONSTRAINT "ProductReviews_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."CustomerProfiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoices" ADD CONSTRAINT "Invoices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InvoiceProducts" ADD CONSTRAINT "InvoiceProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InvoiceProducts" ADD CONSTRAINT "InvoiceProducts_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."Invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InvoiceProducts" ADD CONSTRAINT "InvoiceProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
