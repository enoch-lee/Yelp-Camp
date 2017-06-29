var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    bodyParser              = require("body-parser"),
    methodOverride          = require("method-override"),
    flash                   = require('connect-flash');
    
//requring routes
var commentRoutes = require('./routes/comments'),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

var app = express();
mongoose.connect(process.env.DATABASEURL);
//mongoose.connect('mongodb://lzs:13092952156@ds127260.mlab.com:27260/yelpcamp');
//console.log(process.env.DATABASEURL);

//SCHEMA SETUP
var Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds");
    
//seedDB(); //seed the database
app.use(flash());


//passport config
app.use(require("express-session")({
    secret: 'Rusy win',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===============
//added in all templates and routes
app.use(function(req, res, next){
   res.locals.currentUser = req.user; 
   res.locals.error = req.flash('error');
   res.locals.success =req.flash('success');
   next();
});



app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+ '/public'));
app.set('view engine', 'ejs');
//_method 与edit.js ?_method 一定要一致
//不要写成__method !!!!
app.use(methodOverride('_method'));

app.use('/', indexRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/campgrounds', campgroundRoutes);



app.listen(process.env.PORT, process.env.IP, function(){
    console.log('YelpCamp Started');
});


// Campground.create(  
//     {
//     name: 'Moutain Coast',
//     image:'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg',
//     description: 'This is a huge hill, not bathrooms. No water. Beautiful!'
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log('Newly Created Campground');
//             console.log(campground);
//         }
//     });

// var campgrounds = [
//         {name: 'Salmon Creek', image:'https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg'},
//         {name: 'Granite Hill', image:'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
//         {name: 'Moutain Coast', image:'https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg'},
//         {name: 'Salmon Creek', image:'https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg'},
//         {name: 'Granite Hill', image:'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
//         {name: 'Moutain Coast', image:'https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg'},
//         {name: 'Salmon Creek', image:'https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg'},
//         {name: 'Granite Hill', image:'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
//         {name: 'Moutain Coast', image:'https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg'}
//         ];