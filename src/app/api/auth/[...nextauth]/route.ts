
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your username" },
                password: { label: "password", type: "password", placeholder: "Enter your password"},
                },
            async authorize(credentials:any) {


                console.log(credentials);

                return {

                    id:"user1",
                }
            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET
})



export const GET = handler;

export const POST = handler;






