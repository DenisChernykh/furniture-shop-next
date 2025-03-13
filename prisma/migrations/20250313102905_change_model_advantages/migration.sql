/*
  Warnings:

  - Made the column `sectionAdvantagesId` on table `Advantages` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Advantages" DROP CONSTRAINT "Advantages_sectionAdvantagesId_fkey";

-- AlterTable
ALTER TABLE "Advantages" ALTER COLUMN "sectionAdvantagesId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Advantages" ADD CONSTRAINT "Advantages_sectionAdvantagesId_fkey" FOREIGN KEY ("sectionAdvantagesId") REFERENCES "SectionAdvantages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
