
var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
    name:String,
    image: String,
    price: String,
    description: String,
    author: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
});
//model 和create的object一定要一致！！！
module.exports = mongoose.model('Campground', campgroundSchema);