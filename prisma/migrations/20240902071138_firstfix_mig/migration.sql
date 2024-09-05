-- CreateTable
CREATE TABLE "sesd" (
    "id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sesd_pkey" PRIMARY KEY ("id")
);