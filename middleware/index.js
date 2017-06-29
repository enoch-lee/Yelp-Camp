//all the middleware goes here
var middlewareObj = {};
var Campground = require('../models/campground');
var Comment = require('../models/comment');

middlewareObj.checkCampgroundOwnership = function(req, res, next){
   if(req.isAuthenticated()){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            req.flash('error', 'Campground not found');
            res.redirect('back');
        }else{
            if(foundCampground.author.id.equals(req.user._id)){
                next();
                //res.render('campgrounds/edit', {campground: foundCampground});
            }else{
                req.flash('error', 'You do not have permission!');
                res.redirect('back');
            }
        }
    });
    }else{
        req.flash('error', 'You need to login!')
        res.redirect('back');
        //res.send('you need login');
    }
        //dose user own the campground
    //if not redirect
};

middlewareObj.checkCommentOwnership = function(req, res, next){
   if(req.isAuthenticated()){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect('back');
        }else{
            if(foundComment.author.id.equals(req.user._id)){
                next();
                //res.render('campgrounds/edit', {campground: foundCampground});
            }else{
                req.flash('error', 'You do not have permission!');
                res.redirect('back');
            }
        }
    });
    }else{
        req.flash('error', 'You need to login!');
        res.redirect('back');
        //res.send('you need login');
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'You need to login!');//display on next page
    res.redirect('/login');
};


module.exports = middlewareObj;