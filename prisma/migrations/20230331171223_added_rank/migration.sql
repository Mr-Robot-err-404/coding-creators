/*
  Warnings:

  - You are about to drop the column `position` on the `Creator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "position",
ADD COLUMN     "rank" INTEGER;
