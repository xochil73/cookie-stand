"use strict";
var pike = {
    name: "1st and Pike",
    minCustomer: 23,
    maxCustomer: 65,
    avgCookie: 6.3,
    cookiesPerHour: [],
    cookieSales: function () {
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
// var seatac = {
//     minCustomer:3,
//     maxCustomer: 24,
//     avgCookie: 1.2,
//     cookiesPerHour: [],
//     avgCustomers: function (minCustomer, maxCustomer) {
//     minCustomer = Math.ceil(minCustomer);
//     maxCustomer = Math.floor(maxCustomer);
//     var customer: Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;
//     return customers;   
//     }
//       }
      
// }

// var seattleCenter = {
//     minCustomer: 11,
//     maxCustomer: 38,
//     avgCookie:3.7,
//     cookiesPerHour:[],
//     avgCustomers: function (minCustomer, maxCustomer) {
//     minCustomer = Math.ceil(minCustomer);
//     maxCustomer = Math.floor(maxCustomer);
//     var customers: Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer; 
//     return customers; 
//       };
      
      
// };

// var capHill = {
//     minCustomer:20,
//     maxCustomer:38,
//     avgCookie: 2.3,
//     cookiesPerHour:[],
//     avgCustomers: function (minCustomer, maxCustomer) {
//     minCustomer = Math.ceil(minCustomer);
//     maxCustomer = Math.floor(maxCustomer);
//     var customers: Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer; 
//     return customers;

//       }
//       }
      
// }

// var alki = {
//     minCustomer:2,
//     maxCustomer:16,
//     avgCookie:4.6,
//     cookiesPerHour:[],
//     avgCustomers: function (minCustomer, maxCustomer) {
//     minCustomer = Math.ceil(minCustomer);
//     maxCustomer = Math.floor(maxCustomer);
//     var customers:Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer; 
//     return customers;
//       }
//       }
      
// }
