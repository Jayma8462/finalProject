'use strict';
function Restaurant (category, name, priceRange, address, phoneNumber, hours, link, imagePath) {
  this.category = category;
  this.name = name;
  this.priceRange = priceRange;
  this.address = address;
  this.phoneNumber = phoneNumber;
  this.hours = hours;
  this.link = link;
  this.imagePath = imagePath;
}

//Asian Restaurants
var thanhSonTofu = new Restaurant ('asian', 'Thanh Son Tofu', '$', '1248 S King St, Seattle, WA 98144', '(206) 320-1316', '8AM to 6PM', '', '');
var aPieceOfCake = new Restaurant ('asian', 'A Piece Of Cake', '$', '2401 2nd Ave, Seattle, WA 98121', '(206) 623-8284', '9AM to 9PM', 'apieceofcakeseattle.com', '');
var moonLight = new Restaurant ('asian', 'Moon Light Cafe', '$', '1919 S Jackson St, Seattle, WA 98144', '(206) 322-3378', '11:00AM to 9:30PM', '', '');
var bambooGarden = new Restaurant ('asian', 'Bamboo Garden Vegetarian', '$$', '364 Roy Street, Seattle, WA 98109', '(206) 282-6616', '11AM to 10PM', 'http://www.bamboo-garden.co/', '');
var wedgwood = new Restaurant ('asian', 'Wedgwood Vegetarian Thai', '$$', '420 Broadway E., Seattle, WA 98102', '(206) 724-0655', '12:00PM to 9:30PM', 'http://wedgwoodii.com/', '');
var roti = new Restaurant ('asian', 'Roti Indian Cuisine', '$$', '530 Queen Anne Ave N, Seattle, WA 98109', '(206) 216-7684', '11:30AM to 9:45PM', 'http://rotirestaurantseattle.com/', '');
var harbor = new Restaurant ('asian', 'Harbor City Restaurant', '$$', '707 S King St., Seattle, WA 98104', '(206) 621-2228', '8:30AM to 11:00PM', '');
var sevenBeef = new Restaurant ('asian', 'Seven Beef', '$$$', '1305 E Jefferson St., Seattle WA 98122', '(206) 328-7090', '5:00PM to 10:00PM', 'sevenbeef.com', '');
var shiros = new Restaurant ('asian', 'Shiro\'s', '$$$', '2401 2nd Ave, Seattle WA 98121', '(206) 443-9844', '5:30PM to 10:30PM', 'https://shiros.com/', '');
//Mexican Restaurants
var tacosC = new Restaurant ('mexican', 'Tacos Chukis', '$', '219 Broadway E Seattle, WA 98102', '(206) 328-4447', '11:00AM to 10:00pm', 'https://www.yelp.com/biz/tacos-chukis-seattle?osq=Mexican+Food');
var elCam = new Restaurant ('mexican', 'El Camión', '$', '6416 15th Ave NW Seattle, WA 98107 at 64th St Ballard', '(206) 784-5411', '9:30AM to 10:00pm', 'https://www.yelp.com/biz/el-cami%C3%B3n-seattle-7?osq=Mexican+Food');
var tacosEl = new Restaurant ('mexican', 'Tacos El Asadero', '$', '3517 Rainier Ave S Seattle, WA 98118 Columbia City, Mount Baker', '(206) 722-9977', '10:00AM to 10:00PM', 'https://www.yelp.com/biz/tacos-el-asadero-seattle-2?osq=Mexican+Food');
var fogon = new Restaurant ('mexican', 'Fogón Cocina Mexicana', '$$', '600 E Pine St Seattle, WA 98122 b/t Boylston Ave & Belmont Ave  Capitol Hill', '(206) 320-7777', '11:00AM to 11:00PM', 'fogonseattle.com');
var villaEs = new Restaurant ('mexican', 'Villa Escondida', '$$', '2203 1st Ave Seattle, WA 98121 b/t Bell St & Blanchard St  Belltown', '(206) 448-2393', '11:00AM to 10:00PM', 'villaescondidaseattle.com');
var elLegend = new Restaurant ('mexican', 'El Legendario Mexican Restaurant', '$$', '4705 Aurora Ave N Seattle, WA 98103 b/t 47th St & 48th St  Fremont', '(206) 539-9731', '11:00AM to 10:00PM', 'ellegendariomxrestaurant.com');
var laAnt = new Restaurant ('mexican', 'La Antigua Casa Maria', '$$$', '1100 N 115th St Ste 101 Seattle, WA 98133 b/t N Stone Ave & N Aurora Ave Haller Lake', '(206) 420-1158', '11:00AM to 10:00PM', 'laantiguacasamaria.com');
var zocalo = new Restaurant ('mexican', 'Zocálo', '$$$', '224 Occidental Ave S Seattle, WA 98104 b/t Main St & Washington St  Pioneer Square', '(206) 623-0550', '11:00AM to 10:00PM', 'zocaloseattle.com');
var taqueria = new Restaurant ('mexican', 'Taqueria Cantina', '$$$', '2630 1st Ave Seattle, WA 98121 b/t Cedar St & Vine St Belltown','(206) 995-8588', '11:00AM to 11:00PM', 'taqueriacantina.com');
//Italian Restaurants
