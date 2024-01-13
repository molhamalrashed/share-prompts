import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


console.log({userId: process.env.GOOGLE_ID,
    userSecret:process.env.GOOGLE_CLIENT_SECRET,})
    
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

    }
})



export {handler as GET, handler as POST};