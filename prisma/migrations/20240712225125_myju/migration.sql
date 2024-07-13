/*
  Warnings:

  - You are about to drop the column `rating` on the `user` table. All the data in the column will be lost.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "rating",
ALTER COLUMN "email" SET NOT NULL;
