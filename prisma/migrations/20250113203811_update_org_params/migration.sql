/*
  Warnings:

  - You are about to drop the column `latitude` on the `orgs` table. All the data in the column will be lost.
  - You are about to drop the column `longitude` on the `orgs` table. All the data in the column will be lost.
  - Made the column `phone` on table `orgs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "latitude",
DROP COLUMN "longitude",
ALTER COLUMN "phone" SET NOT NULL;
