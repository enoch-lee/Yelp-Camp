var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
    {
    name: "Cloud's Rest",
    image: 'https://static.comicvine.com/uploads/original/8/82727/1525513-the_moutain____by_vincentfavre.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper, nulla eu maximus lobortis, dolor lorem auctor sapien, mollis venenatis neque ipsum sed purus. Cras venenatis nisl at magna fermentum, sed egestas eros gravida. Maecenas mattis luctus sapien at feugiat. Pellentesque et luctus orci. Fusce pretium lorem molestie interdum dictum. Mauris non nunc vel lectus vehicula rutrum. Curabitur ultricies nibh ac ante facilisis, et rhoncus diam imperdiet. Praesent faucibus imperdiet dolor, sit amet efficitur urna congue nec. Curabitur vel neque scelerisque dui cursus mollis. Aenean porta consectetur lorem ultricies laoreet. Quisque sit amet metus lorem. Phasellus porta at massa nec consequat.'
    },
    {
    name: "Hot Moutain",
    image: 'https://nzfrenzysouth.files.wordpress.com/2013/06/the-moutain-cleft-where-helms-deep-was-cgid-into-this-pic-is-from-near-the-erewhon-end-of-the-road.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper, nulla eu maximus lobortis, dolor lorem auctor sapien, mollis venenatis neque ipsum sed purus. Cras venenatis nisl at magna fermentum, sed egestas eros gravida. Maecenas mattis luctus sapien at feugiat. Pellentesque et luctus orci. Fusce pretium lorem molestie interdum dictum. Mauris non nunc vel lectus vehicula rutrum. Curabitur ultricies nibh ac ante facilisis, et rhoncus diam imperdiet. Praesent faucibus imperdiet dolor, sit amet efficitur urna congue nec. Curabitur vel neque scelerisque dui cursus mollis. Aenean porta consectetur lorem ultricies laoreet. Quisque sit amet metus lorem. Phasellus porta at massa nec consequat.'
    },
    {
    name: "West World",
    image: 'https://c1.staticflickr.com/1/498/20471365426_e4d7f72e32_b.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc semper, nulla eu maximus lobortis, dolor lorem auctor sapien, mollis venenatis neque ipsum sed purus. Cras venenatis nisl at magna fermentum, sed egestas eros gravida. Maecenas mattis luctus sapien at feugiat. Pellentesque et luctus orci. Fusce pretium lorem molestie interdum dictum. Mauris non nunc vel lectus vehicula rutrum. Curabitur ultricies nibh ac ante facilisis, et rhoncus diam imperdiet. Praesent faucibus imperdiet dolor, sit amet efficitur urna congue nec. Curabitur vel neque scelerisque dui cursus mollis. Aenean porta consectetur lorem ultricies laoreet. Quisque sit amet metus lorem. Phasellus porta at massa nec consequat.'
    }
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err)
        // }else{
        //     console.log('removed campgrounds');
        // }
        //     //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         }else{
        //             console.log('added a campground');
        //         }
        //         Comment.create({
        //             text: 'This is greate place',
        //             author: 'Zishuo'
        //         }, function(err, comment){
        //             if(err){
        //                 console.log(err);
        //             }else{
        //                 console.log('created a new comment')
        //                 campground.comments.push(comment);
        //                 campground.save();
        //             }
                    
        //         })
        //     });
        // })
    });

    
    //add a few comments
}

module.exports = seedDB;
