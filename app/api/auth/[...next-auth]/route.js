import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers:[
        GoogleProvider({
            userId: '',
            userSecret:'',
        })
    ],
    async session ({session}){

    },
    async signIn({profile}){

    }
})

export {handler as GET, handler as POST};