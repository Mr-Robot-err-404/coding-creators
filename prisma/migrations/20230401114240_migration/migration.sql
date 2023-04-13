/*
  Warnings:

  - The `monthlyViews` column on the `Creator` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `weeklyViews` column on the `Creator` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `yearlyViews` column on the `Creator` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "monthlyViews",
ADD COLUMN     "monthlyViews" JSONB,
DROP COLUMN "weeklyViews",
ADD COLUMN     "weeklyViews" JSONB,
DROP COLUMN "yearlyViews",
ADD COLUMN     "yearlyViews" JSONB;
