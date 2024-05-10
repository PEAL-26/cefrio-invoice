import { authConfig } from '@/configs/auth-config';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

export async function auth(req: any, res?: any) {
  const session = await getServerSession(
    req as unknown as NextApiRequest,
    {
      ...res,
      getHeader: (name: string) => res?.headers?.get(name),
      setHeader: (name: string, value: string) => res?.headers?.set(name, value),
    } as unknown as NextApiResponse,
    authConfig,
  );
  if (!session) return null;

  return { ...session, user: session?.user as any };
}
