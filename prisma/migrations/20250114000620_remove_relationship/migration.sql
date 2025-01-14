/*
  Warnings:

  - You are about to drop the column `gym_id` on the `pets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "pets" DROP CONSTRAINT "pets_gym_id_fkey";

-- AlterTable
ALTER TABLE "pets" DROP COLUMN "gym_id";
