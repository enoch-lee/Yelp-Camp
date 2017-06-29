var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");
// var Comment = require("../models/comment");

//INDEX show all campgrounds
router.get('/', function(req, res){
    
    //get all campgrounds from db
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render('campgrounds/index', {campgrounds: allcampgrounds});
        }
    });
   //res.render('campgrounds', {campgrounds:campgrounds}); 
});

//NEW show the form 
router.get('/new', middleware.isLoggedIn, function(req, res) {
   res.render('campgrounds/new'); 
});

//CREATE
router.post('/', middleware.isLoggedIn, function(req, res){
    //res.send('POST');
    var name = req.body.name;//注意：输入为req 输出为res！！！
    var image = req.body.image;
    var description = req.body.description;
    var price = req.body.price;
    var author={
        id: req.user._id,
        username: req.user.username
    };
    
    var newCampground = {name:name, image:image, description:description, author:author, price:price};
    //Create a new campground and save to db
    //campgrounds.push(newCampground);
    Campground.create(newCampground, function(err, newlyCreated){
       if(err){
           console.log(err);
       } else{
           //redirect to campground page
           res.redirect('/campgrounds');//default redirect is a get request
       }
    });
    
    //get data from form

});

//SHOW
router.get('/:id', function(req, res) {
    //find campgrounds with provided ID
    
    Campground.findById(req.params.id).populate('comments').exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            //console.log(foundCampground);
            res.render('campgrounds/show', {campground: foundCampground});
        }
    });
});

//EDIT CAMPGROUND ROUTE
router.get('/:id/edit', middleware.checkCampgroundOwnership, function(req, res) {
    //if user logged in
     Campground.findById(req.params.id, function(err, foundCampground){
            res.render('campgrounds/edit', {campground: foundCampground});
     });
});

//UPDATE CAMPGROUND ROUTE
router.put('/:id', middleware.checkCampgroundOwnership, function(req, res){
   Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
       if(err){
           res.redirect('/campgrounds');
       }else{
           res.redirect('/campgrounds/' + req.params.id);
       }
   }) 
});

//DESTROY CAMPGROUND ROUTE
router.delete('/:id', middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect('/campgrounds');
        }else{
            res.redirect('/campgrounds');
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

function checkCampgroundOwnership(req, res, next){
   if(req.isAuthenticated()){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            res.redirect('back');
        }else{
            if(foundCampground.author.id.equals(req.user._id)){
                next();
                //res.render('campgrounds/edit', {campground: foundCampground});
            }else{
                res.redirect('back');
            }
        }
    });
    }else{
        res.redirect('back');
        //res.send('you need login');
    }
        //dose user own the campground
    //if not redirect
}
 
module.exports = router;