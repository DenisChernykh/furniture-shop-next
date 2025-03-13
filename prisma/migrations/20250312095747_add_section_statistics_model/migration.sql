-- CreateTable
CREATE TABLE "SectionStatistics" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "indicator" TEXT NOT NULL,

    CONSTRAINT "SectionStatistics_pkey" PRIMARY KEY ("id")
);
