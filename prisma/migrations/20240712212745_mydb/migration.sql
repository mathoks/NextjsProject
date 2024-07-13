/*
  Warnings:

  - You are about to drop the column `likes` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `postImage` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `review` on the `post_review` table. All the data in the column will be lost.
  - You are about to drop the `ProductBranch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductBranch" DROP CONSTRAINT "ProductBranch_branchId_fkey";

-- DropForeignKey
ALTER TABLE "ProductBranch" DROP CONSTRAINT "ProductBranch_productId_fkey";

-- AlterTable
ALTER TABLE "account" ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "post" DROP COLUMN "likes",
DROP COLUMN "postImage",
ADD COLUMN     "post_image" TEXT;

-- AlterTable
ALTER TABLE "post_review" DROP COLUMN "review";

-- DropTable
DROP TABLE "ProductBranch";

-- CreateTable
CREATE TABLE "product_branch" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "branchId" TEXT NOT NULL,

    CONSTRAINT "product_branch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_branch_productId_branchId_key" ON "product_branch"("productId", "branchId");

-- AddForeignKey
ALTER TABLE "product_branch" ADD CONSTRAINT "product_branch_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_branch" ADD CONSTRAINT "product_branch_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
