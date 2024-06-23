-- CreateTable
CREATE TABLE "Newsletter" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subscriberAmount" TEXT NOT NULL DEFAULT '0',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Newsletter_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Newsletter" ADD CONSTRAINT "Newsletter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
