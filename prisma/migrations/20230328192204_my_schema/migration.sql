/*
  Warnings:

  - The primary key for the `Creator` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `content` on the `Creator` table. All the data in the column will be lost.
  - You are about to drop the column `subscribers` on the `Creator` table. All the data in the column will be lost.
  - Added the required column `picture` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subs` to the `Creator` table without a default value. This is not possible if the table is not empty.
  - Made the column `views` on table `Creator` required. This step will fail if there are existing NULL values in that column.
  - Made the column `videos` on table `Creator` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Creator" DROP CONSTRAINT "Creator_pkey",
DROP COLUMN "content",
DROP COLUMN "subscribers",
ADD COLUMN     "picture" TEXT NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "subs" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "views" SET NOT NULL,
ALTER COLUMN "views" SET DATA TYPE TEXT,
ALTER COLUMN "videos" SET NOT NULL,
ALTER COLUMN "videos" SET DATA TYPE TEXT,
ADD CONSTRAINT "Creator_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Creator_id_seq";
