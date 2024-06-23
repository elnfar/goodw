// next-auth.d.ts
import NextAuth, { DefaultSession, User } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

 declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: User & { id: string };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    user?: User & { id: string };
  }
}

