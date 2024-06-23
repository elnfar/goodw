-- AlterTable
ALTER TABLE "Tenant" ALTER COLUMN "inviteKey" SET DEFAULT replace(cast(gen_random_uuid() as text), '-', '');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'VIEWER';
