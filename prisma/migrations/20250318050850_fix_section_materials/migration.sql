/*
  Warnings:

  - You are about to drop the `MaterialsSection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MaterialsSection";

-- CreateTable
CREATE TABLE "SectionMaterials" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT[],
    "imageUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "SectionMaterials_pkey" PRIMARY KEY ("id")
);
