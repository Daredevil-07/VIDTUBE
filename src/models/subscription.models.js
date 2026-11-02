import mongoose ,{Schema} from "mongoose";

const subscriptionSchema = new Schema (
    {
        channel:{
            type: Schema.Types.ObjectId, //one who IS SUBSCRIBING 
            ref: "User"
        },
        subscriber:{
             type: Schema.Types.ObjectId, // one to whom `subscriber` is SUBSCRIBING
            ref: "User"
        }
    },
    {timestamps: true}
)

export const Subscription = mongoose.model("Subscription", subscriptionSchema)