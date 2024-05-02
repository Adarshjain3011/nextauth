
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

import { NEXT_AUTH_CONFIG } from "@/app/lib/auth";

const handler = NextAuth(NEXT_AUTH_CONFIG)



export const GET = handler;

export const POST = handler;








