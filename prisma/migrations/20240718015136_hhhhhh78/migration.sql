/*
  Warnings:

  - You are about to drop the `prod_image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_branch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "prod_image" DROP CONSTRAINT "prod_image_id_fkey";

-- DropForeignKey
ALTER TABLE "product_branch" DROP CONSTRAINT "product_branch_branchId_fkey";

-- DropForeignKey
ALTER TABLE "product_branch" DROP CONSTRAINT "product_branch_productId_fkey";

-- DropTable
DROP TABLE "prod_image";

-- DropTable
DROP TABLE "product_branch";

-- CreateTable
CREATE TABLE "productbranch" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "branchId" TEXT NOT NULL,

    CONSTRAINT "productbranch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prodimage" (
    "id" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prodimage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "productbranch_productId_branchId_key" ON "productbranch"("productId", "branchId");

-- AddForeignKey
ALTER TABLE "productbranch" ADD CONSTRAINT "productbranch_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productbranch" ADD CONSTRAINT "productbranch_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prodimage" ADD CONSTRAINT "prodimage_id_fkey" FOREIGN KEY ("id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
