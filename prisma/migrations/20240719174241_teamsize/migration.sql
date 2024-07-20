-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "teamSize" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "inviteKey" SET DEFAULT replace(cast(gen_random_uuid() as text), '-', '');
