import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from 'mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';

// const MONGO_URL = process.env.MONGO_URL;

// let dbClient: MongoClient | null = null;

// async function connectToMongo(): Promise<MongoClient> {
//   if (!dbClient) {
//     dbClient = new MongoClient(MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     await dbClient.connect();
//     console.log('MongoDB connected');
//   }
//   return dbClient;
// }

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
//   adapter: MongoDBAdapter({ client: connectToMongo() }), // Pass the promise of the MongoDB client
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
