import NextAuth, { Awaitable, NextAuthOptions, RequestInternal } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from "bcrypt";
import z from "zod";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;

    console.log(user);
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // @ts-ignore
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          console.log("passwordsMatch", passwordsMatch, user, password, user.password)

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({url, baseUrl}) {      
      return url.startsWith(baseUrl) ? url : baseUrl + '/dashboard';
    },
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
