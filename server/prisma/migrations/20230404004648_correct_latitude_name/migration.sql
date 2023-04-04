/*
  Warnings:

  - You are about to drop the column `longitud` on the `Veterinary` table. All the data in the column will be lost.
  - Added the required column `longitude` to the `Veterinary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Veterinary" DROP COLUMN "longitud",
ADD COLUMN     "longitude" TEXT NOT NULL;
