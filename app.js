"use strict";
//Constructor for all stores
var StoreConstructor = function (name, minCustomer, maxCustomer, avgCookie){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookie  = avgCookie;
  this.cookiesPerHour = [];
}



// creating stores
var pike = new StoreConstructor ('1st & Pike', 23, 65, 6.3);
var seaTac = new StoreConstructor ('SeaTac', 3, 24, 1.2);
var seaCenter = new StoreConstructor ('Seattle Center', 11, 38, 3.7);
var capHill= new StoreConstructor ('Capitol Hill', 20, 38, 2.3);
var alki= new StoreConstructor ('Alki', 2, 16, 4.6 );


//prototype 
StoreConstructor.prototype.cookieSales = function(){
  var cookieTotal = 0;
      
  for (var i = 0; i < 15; i++) {
    // customer and cookie math
    var randomCustThisHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
    var cookieSalesThisHour = Math.ceil(this.avgCookie * randomCustThisHour);
    cookieTotal += cookieSalesThisHour;
    //this.cookiesPerHour.(cookieSalesThisHour); (didn't need this line - pushing from elsewhere)
    //console.log("customers" + randomCustThisHour + "hourly cookie sales" + cookieSalesThisHour);

    // store hours math
    var storeHour = i + 6; 
    if (storeHour < 12){
      storeHour += 'am: '
    } else if(storeHour > 12) {
      storeHour -= 12;
      storeHour += "pm: ";
    } else {
      storeHour += "pm: ";
    }
    
    //combining customer & cookie with store hours math
    var cookieSentence = storeHour + cookieSalesThisHour + " cookies";
    //console.log(cookieSentence);
    this.cookiesPerHour.push(cookieSentence);
  }
    //making our ul and li
  var target = document.getElementById('sales');
  var h1El = document.createElement('h1');
  h1El.textContent = this.name;
  target.appendChild(h1El);
  var ulEl = document.createElement('ul'); 
  for (var i = 0; i < this.cookiesPerHour.length; i++) { 
    var liEl = document.createElement('li');
    liEl.textContent = this.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }
  var liElfinal = document.createElement('li');
  liElfinal.textContent = 'Total: ' + cookieTotal + ' cookies';
  ulEl.appendChild(liElfinal);
  target.appendChild(ulEl);
};     

StoreConstructor.prototype.makeTable = function(){
  var cookieTable = document.getElementById('cookieTable');
  var tableHeaderRowEl = document.createElement('tr');
  tableEl.textContent = storeHour;
  cookieTable.appendChild(tableHeaderRowEl);
} 
pike.cookieSales();
seaTac.cookieSales();
seaCenter.cookieSales();
capHill.cookieSales();
alki.cookieSales();







































/*var pike = new Pike(); {
    pike.name = "1st and Pike";
    pike.minCustomer = 23;
    pike.maxCustomer = 65;
    pike.avgCookie  = 6.3;
    pike.cookiesPerHour = [];
    
    pike.cookieSales = function () {
      var cookieTotal = 0;
      
      for (var i = 0; i < 15; i++) {
        // customer and cookie math
        var randomCustThisHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
        var cookieSalesThisHour = Math.ceil(this.avgCookie * randomCustThisHour);
        cookieTotal += cookieSalesThisHour;
        //this.cookiesPerHour.(cookieSalesThisHour); (didn't need this line - pushing from elsewhere)
        //console.log("customers" + randomCustThisHour + "hourly cookie sales" + cookieSalesThisHour);

        // store hours math
        var storeHour = i + 6; 
        if (storeHour < 12){
          storeHour += 'am: '
        } else if(storeHour > 12) {
          storeHour -= 12;
          storeHour += "pm: ";
        } else {
          storeHour += "pm: ";
        }
        
        //combining customer & cookie with store hours math
        var cookieSentence = storeHour + cookieSalesThisHour + " cookies";
        //console.log(cookieSentence);
        this.cookiesPerHour.push(cookieSentence);
      }
        //making our ul and li
      var target = document.getElementById('sales');
      var h1El = document.createElement('h1');
      h1El.textContent = this.name;
      target.appendChild(h1El);
      var ulEl = document.createElement('ul'); 
      for (var i = 0; i < this.cookiesPerHour.length; i++) { 
        var liEl = document.createElement('li');
        liEl.textContent = this.cookiesPerHour[i];
        ulEl.appendChild(liEl);
      }
      var liElfinal = document.createElement('li');
      liElfinal.textContent = 'Total: ' + cookieTotal + ' cookies';
      ulEl.appendChild(liElfinal);
      target.appendChild(ulEl); 
}     
      
} 
      
  pike.cookieSales();

  
 var seaTac = {
    name: 'SeaTac Airport',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookie: 1.2,
    cookiesPerHour: [],
    cookieSales: function (){
    var cookieTotal = 0;

    for (var i = 0; i < 15; i++) {
      // customer and cookie math
      var randomCustThisHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
      var cookieSalesThisHour = Math.ceil(this.avgCookie * randomCustThisHour);
      cookieTotal += cookieSalesThisHour;

      var storeHour = i + 6; 
      if (storeHour < 12){
        storeHour += 'am: '
      } else if(storeHour > 12) {
        storeHour -= 12;
        storeHour += "pm: ";
      } else {
        storeHour += "pm: ";
      }
    var cookieSentence = storeHour + cookieSalesThisHour + ' cookies';
    this.cookiesPerHour.push(cookieSentence);
  }

  var target = document.getElementById('sales');
      var h1El = document.createElement('h1');
      h1El.textContent = this.name;
      target.appendChild(h1El);
      var ulEl = document.createElement('ul'); 
      for (var i = 0; i < this.cookiesPerHour.length; i++) { 
        var liEl = document.createElement('li');
        liEl.textContent = this.cookiesPerHour[i];
        ulEl.appendChild(liEl);
      }
      var liElfinal = document.createElement('li');
      liElfinal.textContent = 'Total: ' + cookieTotal + ' cookies';
      ulEl.appendChild(liElfinal);
      target.appendChild(ulEl); 


  }
}   

seaTac.cookieSales();

var seaCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookie: 3.7,
  cookiesPerHour: [],
  cookieSales: function () {
    var cookieTotal = 0;

    for (var i = 0; i < 15; i++) {
      var randomCustThisHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
      var cookieSalesThisHour = Math.ceil(this.avgCookie * randomCustThisHour);
      cookieTotal += cookieSalesThisHour; 

      var storeHour = i + 6; 
      if (storeHour < 12){
        storeHour += 'am: '
      } else if(storeHour > 12) {
        storeHour -= 12;
        storeHour += "pm: ";
      } else {
        storeHour += "pm: ";
      }
    var cookieSentence = storeHour + cookieSalesThisHour + ' cookies';
    this.cookiesPerHour.push(cookieSentence);
 }

 var target = document.getElementById('sales');
 var h1El = document.createElement('h1');
 h1El.textContent = this.name;
 target.appendChild(h1El);
 var ulEl = document.createElement('ul'); 
 for (var i = 0; i < this.cookiesPerHour.length; i++) { 
   var liEl = document.createElement('li');
   liEl.textContent = this.cookiesPerHour[i];
   ulEl.appendChild(liEl);
 }
 var liElfinal = document.createElement('li');
 liElfinal.textContent = 'Total: ' + cookieTotal + ' cookies';
 ulEl.appendChild(liElfinal);
 target.appendChild(ulEl); 

}
}
  seaCenter.cookieSales();

var capHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  avgCookie: 2.3,
  cookiesPerHour: [],
  cookieSales: function (){
    var cookieTotal = 0;
    for (var i = 0; i < 15; i++) {
      var randomCustThisHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
      var cookieSalesThisHour = Math.ceil(this.avgCookie * randomCustThisHour);
      cookieTotal += cookieSalesThisHour; 

      var storeHour = i + 6; 
      if (storeHour < 12){
        storeHour += 'am: '
      } else if(storeHour > 12) {
        storeHour -= 12;
        storeHour += "pm: ";
      } else {
        storeHour += "pm: ";
      }
    var cookieSentence = storeHour + cookieSalesThisHour + ' cookies';
    this.cookiesPerHour.push(cookieSentence);
  }
  var target = document.getElementById('sales');
 var h1El = document.createElement('h1');
 h1El.textContent = this.name;
 target.appendChild(h1El);
 var ulEl = document.createElement('ul'); 
 for (var i = 0; i < this.cookiesPerHour.length; i++) { 
   var liEl = document.createElement('li');
   liEl.textContent = this.cookiesPerHour[i];
   ulEl.appendChild(liEl);
 }
 var liElfinal = document.createElement('li');
 liElfinal.textContent = 'Total: ' + cookieTotal + ' cookies';
 ulEl.appendChild(liElfinal);
 target.appendChild(ulEl); 
}
}
  capHill.cookieSales();

  var alki = {
    name: 'Alki',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookie: 4.6,
    cookiesPerHour: [],
  cookieSales: function (){
    var cookieTotal = 0;
    for (var i = 0; i < 15; i++) {
      var randomCustThisHour = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
      var cookieSalesThisHour = Math.ceil(this.avgCookie * randomCustThisHour);
      cookieTotal += cookieSalesThisHour; 

      var storeHour = i + 6; 
      if (storeHour < 12){
        storeHour += 'am: '
      } else if(storeHour > 12) {
        storeHour -= 12;
        storeHour += "pm: ";
      } else {
        storeHour += "pm: ";
      }
    var cookieSentence = storeHour + cookieSalesThisHour + ' cookies';
    this.cookiesPerHour.push(cookieSentence);
  }
  var target = document.getElementById('sales');
  var h1El = document.createElement('h1');
  h1El.textContent = this.name;
  target.appendChild(h1El);
  var ulEl = document.createElement('ul'); 
  for (var i = 0; i < this.cookiesPerHour.length; i++) { 
    var liEl = document.createElement('li');
    liEl.textContent = this.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }
  var liElfinal = document.createElement('li');
  liElfinal.textContent = 'Total: ' + cookieTotal + ' cookies';
  ulEl.appendChild(liElfinal);
  target.appendChild(ulEl); 
}
  }
  alki.cookieSales();*/

