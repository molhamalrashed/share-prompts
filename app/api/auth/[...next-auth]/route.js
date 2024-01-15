import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from '@utils/database';

    
const handler = NextAuth({
    providers:[
        GoogleProvider({
            userId: process.env.GOOGLE_ID,
            userSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session ({session}){

    },
    async signIn({profile}){
        try {
           await connectToDb();
        } catch (error) {
            
        }

    }
})



export {handler as GET, handler as POST};