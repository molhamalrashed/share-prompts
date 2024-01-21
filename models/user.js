import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email: { 
    type:String,
    unique:[true, "email already exists"],
    required:[true, "you must enter your email"]
    },
    username:{
    type:String,
    required:[true, "you must enter your username"],
    match:[/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,"username is invalid, it should contain 8-20 alphanumeric letters and should be unique"]
    },
    image: {
        type:String,
    }
});

const User = models.user || model("user" , UserSchema);

export default User;