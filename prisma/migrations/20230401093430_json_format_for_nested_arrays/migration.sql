/*
  Warnings:

  - Changed the type of `videoNum` on the `Creator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `views` on the `Creator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `subs` on the `Creator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rank` on the `Creator` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Creator" DROP COLUMN "videoNum",
ADD COLUMN     "videoNum" JSONB NOT NULL,
DROP COLUMN "views",
ADD COLUMN     "views" JSONB NOT NULL,
DROP COLUMN "subs",
ADD COLUMN     "subs" JSONB NOT NULL,
DROP COLUMN "rank",
ADD COLUMN     "rank" JSONB NOT NULL;
