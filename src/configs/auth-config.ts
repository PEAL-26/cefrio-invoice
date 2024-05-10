import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { prisma } from '@/libs/prisma';
import { authenticate } from '@/services/auth-service';

export const nextAuthUrl = process.env.NEXTAUTH_URL;
export const secret = process.env.NEXTAUTH_SECRET;

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (typeof credentials === 'undefined') return null;

        const user = await authenticate(`${credentials.email}`, `${credentials.password}`);
        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }: any) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  secret,
  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
  logger: {
    error(error) {
      console.error(error);
    },
    warn(warning) {
      console.warn(warning);
    },
  },
};
