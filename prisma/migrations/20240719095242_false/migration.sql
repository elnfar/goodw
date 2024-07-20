-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "inviteKey" SET DEFAULT replace(cast(gen_random_uuid() as text), '-', '');

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isOnboarded" SET DEFAULT false;
