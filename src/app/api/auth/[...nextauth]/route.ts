import parseServerErrors from "@/utils/parseServerErrors";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "Enter your email address",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        try {
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/auth/login`,
            {
              method: "post",
              body: JSON.stringify({
                email: credentials?.email,
                password: credentials?.password,
              }),
            }
          );
          const resData = await res.json();
          // console.log(resData);
          if (res.status === 200) {
            return resData;
          } else {
            throw new Error(parseServerErrors(resData));
          }
        } catch (e: any) {
          console.log(e);
          throw new Error(e);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn(data) {
      // console.log("signin callback", data);
      return true;
    },
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      // console.log("session callback", { session, token, user });
      if (session) {
        // console.log(session);
        // console.log(token);
        session.user = token;

        return session;
      } else {
        return null;
      }
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
