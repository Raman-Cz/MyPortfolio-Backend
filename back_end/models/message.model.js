import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
    {
    name:{
        type:String,
        required: [true, "Name is required"]
    },
    phoneNumber:{
        type:String,
        required: [true, "Phone Number is required"]
    },
    email:{
        type:String,
        required: [true, "Email is required"]
    },
    subject:{
        type:String
    },
    message:{
        type:String,
        required:true
    }
    },
    {
        timestamps:true
    }
)

const Message = mongoose.model("Message",messageSchema);

export default Message;