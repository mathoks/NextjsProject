/*
  Warnings:

  - Added the required column `prodId` to the `prodimage` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `prodimage` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "prodimage" DROP CONSTRAINT "prodimage_id_fkey";

-- AlterTable
ALTER TABLE "prodimage" ADD COLUMN     "prodId" TEXT NOT NULL,
ALTER COLUMN "image" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "prodimage" ADD CONSTRAINT "prodimage_prodId_fkey" FOREIGN KEY ("prodId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
