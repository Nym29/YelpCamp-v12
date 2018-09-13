var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comments");

var data = [
    // {
    //     name: "Cloud's Rest", 
    //     image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
    //     description: "Vestibulum a metus id metus vehicula porttitor. Cras tincidunt egestas enim, eu lobortis odio pellentesque vel. Nullam a suscipit nibh. Etiam ornare, nulla in sagittis fermentum, lectus urna feugiat mi, et aliquam leo risus et metus. Sed luctus tortor sed risus pharetra convallis. Morbi hendrerit metus at lacus commodo, congue commodo dui sodales. Sed non mauris fringilla, pellentesque leo sit amet, convallis ex. Proin fermentum lectus eget nisl fringilla, eget feugiat tortor hendrerit. Praesent ut tellus ante. Quisque at nulla sed tellus vulputate condimentum. Fusce eget metus luctus, aliquam lorem ac, vehicula risus. Morbi iaculis auctor purus nec sodales."
    // },
    // {
    //     name: "Desert Mesa", 
    //     image: "https://images.unsplash.com/photo-1525177089949-b1488a0ea5b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2133a2e6648c39b6d1845bcc603b09ce&auto=format&fit=crop&w=1500&q=80",
    //     description: "Vestibulum a metus id metus vehicula porttitor. Cras tincidunt egestas enim, eu lobortis odio pellentesque vel. Nullam a suscipit nibh. Etiam ornare, nulla in sagittis fermentum, lectus urna feugiat mi, et aliquam leo risus et metus. Sed luctus tortor sed risus pharetra convallis. Morbi hendrerit metus at lacus commodo, congue commodo dui sodales. Sed non mauris fringilla, pellentesque leo sit amet, convallis ex. Proin fermentum lectus eget nisl fringilla, eget feugiat tortor hendrerit. Praesent ut tellus ante. Quisque at nulla sed tellus vulputate condimentum. Fusce eget metus luctus, aliquam lorem ac, vehicula risus. Morbi iaculis auctor purus nec sodales."
    // },
    // {
    //     name: "Canyon Floor", 
    //     image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
    //     description: "Vestibulum a metus id metus vehicula porttitor. Cras tincidunt egestas enim, eu lobortis odio pellentesque vel. Nullam a suscipit nibh. Etiam ornare, nulla in sagittis fermentum, lectus urna feugiat mi, et aliquam leo risus et metus. Sed luctus tortor sed risus pharetra convallis. Morbi hendrerit metus at lacus commodo, congue commodo dui sodales. Sed non mauris fringilla, pellentesque leo sit amet, convallis ex. Proin fermentum lectus eget nisl fringilla, eget feugiat tortor hendrerit. Praesent ut tellus ante. Quisque at nulla sed tellus vulputate condimentum. Fusce eget metus luctus, aliquam lorem ac, vehicula risus. Morbi iaculis auctor purus nec sodales."
    // }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
