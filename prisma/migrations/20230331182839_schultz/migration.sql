/*
  Warnings:

  - You are about to drop the column `published` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `videos` on the `Creator` table. All the data in the column will be lost.
  - The `views` column on the `Creator` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `subs` column on the `Creator` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rank` column on the `Creator` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "published",
DROP COLUMN "videos",
ADD COLUMN     "monthlyViews" TEXT,
ADD COLUMN     "popularVid" TEXT,
ADD COLUMN     "recentVid" TEXT,
ADD COLUMN     "videoNum" TEXT[],
ADD COLUMN     "weeklyViews" TEXT,
ADD COLUMN     "yearlyViews" TEXT,
DROP COLUMN "views",
ADD COLUMN     "views" TEXT[],
DROP COLUMN "subs",
ADD COLUMN     "subs" TEXT[],
DROP COLUMN "rank",
ADD COLUMN     "rank" INTEGER[];
