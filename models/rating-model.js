import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema({
    hotelId: {
        required: true,
        type: Object  
    },
    userId: {
        required: true,
        type: Object
    },
    rating: {
        required: true,
        type: Number
    }
});

export const ratingModel = mongoose.models.ratings ?? mongoose.model("ratings", ratingSchema);