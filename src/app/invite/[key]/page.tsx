import { Button } from '@/components/ui/button'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'


import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


const prisma = new PrismaClient().$extends(withAccelerate())

export default async function AcceptInvitePage({
  params
}: {
  params: { key: string }
}) {
  async function accept() {
    'use server'
    cookies().set('invite_key', params.key)
    redirect('/api/auth/signin')
  }

  const tenant = await prisma.tenant.findUnique({
    where: {
      inviteKey: params.key
    }
  })

  return (
    <main className="mx-auto max-w-lg mt-8 space-y-8 bg-white">
      <h1>Accept Invite to &quot;{tenant?.name || '(Not Named)'}&quot;</h1>
      <form action={accept}>
        <Button className="w-full" type="submit">
          Accept
        </Button>
      </form>
    </main>
  )
}