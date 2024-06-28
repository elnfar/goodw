/*
  Warnings:

  - You are about to drop the column `dueDate` on the `Project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Issue" DROP CONSTRAINT "Issue_projectId_fkey";

-- AlterTable
ALTER TABLE "Issue" ALTER COLUMN "projectId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "dueDate";

-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "inviteKey" SET DEFAULT replace(cast(gen_random_uuid() as text), '-', '');

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
