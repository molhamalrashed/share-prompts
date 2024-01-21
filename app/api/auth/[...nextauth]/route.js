import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDb } from '@utils/database';
import User from '@models/user';

    
const handler = NextAuth({
    providers:[
        GoogleProvider({
            userId: process.env.GOOGLE_ID,
            userSecret:process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session ({session}){
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();
        return session; 
    },
    async signIn({profile}){
        try {
           await connectToDb();

           // check if user already exists
           const userExist = await User.findOne({
            email: profile.email
           })


           //it not, create a new user 
           if(!userExist){
            await User.create({
                email:profile.email,
                username:profile.name.replace(" ","").toLowerCase(),
                image: profile.picture
            })
           }

           return true;
        } catch (error) {
            console.log(error)
            return false;
        }

    }
})



export {handler as GET, handler as POST};