/*
  Warnings:

  - Added the required column `prod_id` to the `prod_review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "prod_review" DROP CONSTRAINT "comment_ffk";

-- AlterTable
ALTER TABLE "prod_review" ADD COLUMN     "prod_id" TEXT NOT NULL,
ALTER COLUMN "comment" DROP NOT NULL,
ALTER COLUMN "review" DROP DEFAULT;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "prod_review" ADD CONSTRAINT "comment_ffk" FOREIGN KEY ("prod_id") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
