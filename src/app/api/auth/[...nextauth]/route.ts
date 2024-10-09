import { PrismaAdapter } from "@auth/prisma-adapter";
import { handlers } from "../../../lib/auth" // Referring to the auth.ts we just created
import prisma from "@/app/lib/prisma";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";
import NextAuthOptions from "next-auth";
// import { mergeAnonymousCartIntoUserCart } from "@/app/lib/db/cart";
// export const authOptions: NextAuthOptions = {
//     adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
    
//     callbacks: {
//         session({session, user}) {
//             session.user.id = user.id
//             return session;
//         },
//     },

//     events: {
//        async signIn({user}){
//         await mergeAnonymousCartIntoUserCart(user.id);
//         }
//     }
// }

export const { GET, POST } = handlers