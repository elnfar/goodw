import { auth } from "@/auth"

export const session = async ({ session, token }: any) => {
  session.user.id = token.id
  session.user.tenant = token.tenant
  return session
}

export const getUserSession = async () => {
    const authUserSession = await auth();
    if (!authUserSession) throw new Error('unauthorized')
    return authUserSession.user
  }