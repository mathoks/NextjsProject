/*
  Warnings:

  - Added the required column `negotiable` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OPTIONS" AS ENUM ('NEGOTIABLE', 'BESTPRICE');

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "negotiable" "OPTIONS" NOT NULL;
