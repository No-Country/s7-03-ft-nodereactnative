-- CreateTable
CREATE TABLE "Veterinary_favorite" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "veterinary_id" UUID NOT NULL,

    CONSTRAINT "Veterinary_favorite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Veterinary_favorite" ADD CONSTRAINT "Veterinary_favorite_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Veterinary_favorite" ADD CONSTRAINT "Veterinary_favorite_veterinary_id_fkey" FOREIGN KEY ("veterinary_id") REFERENCES "Veterinary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
