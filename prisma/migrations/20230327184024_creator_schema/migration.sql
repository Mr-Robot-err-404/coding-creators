-- CreateTable
CREATE TABLE "Creator" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "subscribers" INTEGER,
    "views" INTEGER,
    "videos" INTEGER,

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("id")
);
