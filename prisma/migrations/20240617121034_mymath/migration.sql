/*
  Warnings:

  - You are about to drop the `verificationtokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "verificationtokens";

-- CreateTable
CREATE TABLE "verificationtoken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "verificationtoken_identifier_token_key" ON "verificationtoken"("identifier", "token");
