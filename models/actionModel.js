import mongoose from 'mongoose';

const actionSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    imgUrl : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    trailerId : {
        type : String,
        required : true
    },
    production : {
        type : String,
        required : true
    },
    release : {
        type : String,
        required : true
    },
    director : {
        type : String,
        required : true
    },
    producer : {
        type : String,
        required : true
    },
    cast : {
        type : String,
        required : true
    },
    viewAt : {
        type : String,
        required : true
    }
});

export default mongoose.model("action", actionSchema);