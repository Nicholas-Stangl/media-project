const mongoose = require("mongoose")


const ThingSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "Title is required!"],
        minLength: [3, "Title must be at least 3 chars"],
        maxLength: [1000, "Title exceeds max length 1000 chars"]
    },

    type:{
        type: String,
        required:[true, "Media type is required!"],
        minLength: [3, "Media type must be at least 3 chars"],
        maxLength: [1000, "Media type exceeds max length 1000 chars"]
    },

    desc:{
        type: String,
        required:[true, "Description is required!"],
        minLength: [3, "Description must be at least 3 chars"],
        maxLength: [1000, "Description exceeds max length 1000 chars"]
    },

    release_date:{
        type: Date
    },

    rec_by:{
        type: String
    },

    pic:{
        type: String
    },

    link:{
        type: String
    },


}, {timestamps:true})


const Thing = mongoose.model("Thing", ThingSchema );

module.exports = Thing;