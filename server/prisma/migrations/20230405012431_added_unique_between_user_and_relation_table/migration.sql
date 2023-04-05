/*
  Warnings:

  - A unique constraint covering the columns `[user_id,product_id]` on the table `Product_favorite` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,veterinary_id]` on the table `Review` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,veterinary_id]` on the table `Veterinary_favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Review_user_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "Product_favorite_user_id_product_id_key" ON "Product_favorite"("user_id", "product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Review_user_id_veterinary_id_key" ON "Review"("user_id", "veterinary_id");

-- CreateIndex
CREATE UNIQUE INDEX "Veterinary_favorite_user_id_veterinary_id_key" ON "Veterinary_favorite"("user_id", "veterinary_id");
