-- CreateTable
CREATE TABLE "Hymn" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hymn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HymnTranslation" (
    "id" TEXT NOT NULL,
    "hymnId" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "HymnTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HymnTranslation_hymnId_locale_key" ON "HymnTranslation"("hymnId", "locale");

-- AddForeignKey
ALTER TABLE "Hymn" ADD CONSTRAINT "Hymn_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HymnTranslation" ADD CONSTRAINT "HymnTranslation_hymnId_fkey" FOREIGN KEY ("hymnId") REFERENCES "Hymn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
