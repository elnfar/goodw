/*
  Warnings:

  - Added the required column `tenantId` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Issue" ADD COLUMN     "tenantId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "inviteKey" SET DEFAULT replace(cast(gen_random_uuid() as text), '-', '');

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
