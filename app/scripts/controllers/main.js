'use strict';
(function() {
  angular.module('angulacartApp');

  app.controller('ProductCtrl', function(){
    this.product = boards;
  });

  app.controller('NavCtrl', function(){
    this.tab = 1;

    this.setNav = function(nav){
      this.nav = nav;
    };

    this.isSet = function(nav){
      return (this.nav === nav);
    };
  });

  app.controller('ImgCtrl', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });

  app.controller("ReviewCtrl", function(){
    this.review = {};
    this.addReview = function (product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive("productDescription", function() {
    return {
      restrict: "E",
      templateUrl: "product-description.html"
    };
  });

  var boards = [
    {
      name: 'The Lovebird',
      description: "The Lovebird features a slightly narrower nose than most longboards, a subtle amount of tail rocker, a diamond tail with a bit of scoop on the deck, and a slight Vee to accentuate maneuverability.",
      price: 850,
      image: [
        "images/lovebird.png"
      	],
      reviews: [{
        stars: 5,
        content: "sweeeeet ride!",
        author: "swayzee@surf.com",
      }, {
        stars: 5,
        content: "KILLER!",
        author: "sick@waves.com",
      }]
    }, {
      name: 'The Levitator',
      description: "The Levitator is a great all-around noserider.  It features a subtle step deck and a slightly wider outline than most longboards.  It's chock full of volume for float with plenty of stability and plenty of lift in the nose.",
      price: 1100,
      image: [
        "images/levitator.gif"
      ],
      reviews: [{
      	stars: 4,
        content: "cool, brah, but prrrriiiiiccceeeyyyyyyyyy",
        author: "BBBBO@brotown.com"
      }]
    }, {
      name: 'The Dharma',
      description: "The Dharma combines progressive surfing with the subtleties of a retro fish style.  According to Matt Calvani, it is Bing's best Folly Beach shortboard.  It has great early wave entry, is super maneuverable, and maintains speed.  With both a beveled rail and a concave deck, it combines rail sensitivity for quick turns and overall volume for down-the-line speed.",
      price: 1000,
      image: [
        "images/dharma.jpg"
      ],
      reviews: [{
        stars: 5,
        content: "Love it!",
        author: "busyswimmer@water.com"
      }]
    }
  ];
})();
