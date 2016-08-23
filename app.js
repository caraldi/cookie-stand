'use strict';

function Store(name, avg, min, max) {
  this.storeName = name;
  this.avgCookies = avg;
  this.minCust = min;
  this.maxCust = max;
}

Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

Store.prototype.cookiesPerHour = function() {
  return this.generateRandom() * this.avgCookies;
};

Store.prototype.cookiesPerDay = function() {
  for (var i = 0; i < 14; i++) {
    this.hoursArray[i][1] = Math.floor(this.cookiesPerHour());
    this.totalCookies += this.hoursArray[i][1];
  }
  this.hoursArray[(this.hoursArray.length - 1)][1] = this.totalCookies;
};

var pike = new Store('Pike Place', 6.3, 23, 65);
var seaTac = new Store('SeaTac', 1.2, 3, 24);
var seaCenter = new Store('Seattle Center', 3.7, 11, 38);
var capHill = new Store('Capitol Hill', 2.3, 20, 38);
var alki = new Store('Alki', 4.6, 2, 16);

// var salesTable = document.createElement('table');
//
// //creating thead
// var headerContent = ['', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];
// var salesHead     = document.createElement('thead');
// var tableRow      = document.createElement('tr');
//
// for(var i = 0; i < headerContent.length; i++) {
//   var th = document.createElement('th');
//   th.textContent = headerContent[i];
//   tableRow.appendChild(th);
// }
//
// salesHead.appendChild(tableRow);
// salesTable.appendChild(salesHead);
//
// //creating tbody
// var bodyContent = [];
// var tbody       = document.createElement('tbody');
// var bodyRow     = document.createElement('tr');
// var rowHeader   = document.createElement('th');
//
// rowHeader.textContent = 'Pike Place';
// bodyRow.appendChild(rowHeader);
//
// for(var i = 0; i < bodyContent.length; i++) {
//   var td = document.createElement('td');
//   td.textContent = bodyContent[i];
//   bodyRow.appendChild(td);
// };
//
// tbody.appendChild(bodyRow);
// salesTable.appendChild(tbody);
//
// //adding table to dom
// var main = document.getElementById('sales_data');
// main.appendChild(salesTable);

  //Renders number of cookies sold per each hour of operation and total cookies sold per day for store location
  render: function() {
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    this.cookiesPerDay();
    h2.textContent = 'Pike';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    var main = document.getElementById('store_info');
    main.appendChild(ul);

    for (var j = 0; j < 14; j++) {
      var hourLi = document.createElement('li');
      hourLi.textContent = this.hoursArray[j][0] + ': ' + this.hoursArray[j][1];
      ul.appendChild(hourLi);
    }
  }
};
pike.cookiesPerDay();
pike.render();

// //Function to display number of cookies sold per each hour of operation as nested array
// function displayHours() {
//   var hour;
//   var hoursArray = [];
//   for(var i = 0; i <= 14; i++) {
//     if (i < 6) {
//       hour = i + 6 + ' AM';
//     } else if (i === 6){
//       hour = '12 PM';
//     } else if (i < 14) {
//       hour = i - 6 + ' PM';
//     } else {
//       hour = 'Total: ';
//     }
//     hoursArray[i] = [hour];
//   }
//   return hoursArray;
// };
