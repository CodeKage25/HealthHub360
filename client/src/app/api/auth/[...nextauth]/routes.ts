import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import Providers from 'next-auth/providers';
import { MongoClient } from 'mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

const MONGO_URL = process.env.MONGO_URL;


export const authOptions: NextAuthOptions = {
    providers: [
        Providers.Google({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter({ db: await MongoClient.connect(MONGO_URL) }),
}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }