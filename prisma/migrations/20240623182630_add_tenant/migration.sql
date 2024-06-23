/*
  Warnings:

  - Added the required column `tenantId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'ADMIN', 'BILLING', 'USER', 'TRACKER', 'VIEWER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "tenantId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "stripeCustomerId" TEXT,
    "expirationDate" TIMESTAMP(3),
    "inviteKey" TEXT NOT NULL DEFAULT replace(cast(gen_random_uuid() as text), '-', ''),

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscribers" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "newsletterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscribers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_inviteKey_key" ON "Tenant"("inviteKey");

-- CreateIndex
CREATE UNIQUE INDEX "Subscribers_email_key" ON "Subscribers"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscribers" ADD CONSTRAINT "Subscribers_newsletterId_fkey" FOREIGN KEY ("newsletterId") REFERENCES "Newsletter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
