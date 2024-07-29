/*
  Warnings:

  - You are about to drop the column `height` on the `product_attribute` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `product_attribute` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "product_attribute" DROP COLUMN "height",
DROP COLUMN "width",
ADD COLUMN     "material" TEXT,
ADD COLUMN     "warranty" INTEGER,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'NEW';
