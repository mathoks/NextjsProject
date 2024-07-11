/*
  Warnings:

  - You are about to drop the column `email_verified` on the `user_info` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `about` to the `user_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `user_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `market` to the `user_info` table without a default value. This is not possible if the table is not empty.
  - Made the column `state` on table `user_info` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user_info" DROP COLUMN "email_verified",
ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "market" TEXT NOT NULL,
ALTER COLUMN "state" SET NOT NULL;

-- CreateTable
CREATE TABLE "ProductBranch" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "branId" TEXT NOT NULL,

    CONSTRAINT "ProductBranch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductBranch_productId_branId_key" ON "ProductBranch"("productId", "branId");

-- CreateIndex
CREATE UNIQUE INDEX "product_user_id_key" ON "product"("user_id");

-- AddForeignKey
ALTER TABLE "ProductBranch" ADD CONSTRAINT "ProductBranch_branId_fkey" FOREIGN KEY ("branId") REFERENCES "branche"("branch_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductBranch" ADD CONSTRAINT "ProductBranch_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
