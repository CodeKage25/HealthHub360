// typings.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      MONGO_URL: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      // Add other environment variables here as needed
    }
  }
  