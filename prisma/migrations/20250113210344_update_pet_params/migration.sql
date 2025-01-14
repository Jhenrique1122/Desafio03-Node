/*
  Warnings:

  - You are about to drop the column `characteristics` on the `pets` table. All the data in the column will be lost.
  - Added the required column `breed` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `species` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pets" DROP COLUMN "characteristics",
ADD COLUMN     "breed" TEXT NOT NULL,
ADD COLUMN     "species" TEXT NOT NULL;
