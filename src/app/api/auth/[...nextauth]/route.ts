
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter your username" },
                password: { label: "password", type: "text", placeholder: "Enter your password"},
                },
            async authorize(credentials:any) {

                return {

                    id:"user1",
                }
            }
        })
    ]
})





