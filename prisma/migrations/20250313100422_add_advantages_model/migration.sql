-- CreateTable
CREATE TABLE "SectionAdvantages" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,

    CONSTRAINT "SectionAdvantages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Advantages" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "iconUrl" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "sectionAdvantagesId" TEXT,

    CONSTRAINT "Advantages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Advantages" ADD CONSTRAINT "Advantages_sectionAdvantagesId_fkey" FOREIGN KEY ("sectionAdvantagesId") REFERENCES "SectionAdvantages"("id") ON DELETE SET NULL ON UPDATE CASCADE;
