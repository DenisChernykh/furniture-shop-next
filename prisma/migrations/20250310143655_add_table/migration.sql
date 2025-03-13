-- CreateTable
CREATE TABLE "SectionAbout" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desctiption" TEXT NOT NULL,

    CONSTRAINT "SectionAbout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
