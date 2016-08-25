'use strict';

// Create Store object using constructor notation from literal notation properties
function Store(name, avg, min, max) {
  this.storeName = name;
  this.avgCookies = avg;
  this.minCust = min;
  this.maxCust = max;
  this.totalCookies = 0;
  this.hoursArray = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
  this.hourlyCookies = [];
}

//Multiple instances of Store object created with values of each new object's properties
var pike = new Store('Pike Place', 6.3, 23, 65);
var seaTac = new Store('SeaTac', 1.2, 3, 24);
var seaCenter = new Store('Seattle Center', 3.7, 11, 38);
var capHill = new Store('Capitol Hill', 2.3, 20, 38);
var alki = new Store('Alki', 4.6, 2, 16);

//Create prototype of Store object (allows method of object to be applied in more than one instance and save memory)

//Method for generating random number to be used in calculating number of cookies sold per hour (using avg, min, max for each store)
Store.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

//Method for generating number of cookies sold per hour
Store.prototype.cookiesPerHour = function() {
  return Math.floor(this.generateRandom() * this.avgCookies);
};

//Method for generating number of total cookies sold per day
Store.prototype.cookiesPerDay = function() {
  for (var i = 0; i < this.hoursArray.length; i++) {
    var hourlySales = this.cookiesPerHour();
    this.hourlyCookies.push(hourlySales);
    this.totalCookies += hourlySales;
  }
};

//Method for rendering properties as table with rows for each location data
Store.prototype.renderData = function() {
//Create table
  var salesTable    = document.createElement('table');
//Create thead
  var headerContent = ['', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
  var salesHead     = document.createElement('thead');
  var tableRow      = document.createElement('tr');
  var tableHead     = document.createElement('th');

  for(var k = 0; k < headerContent.length; k++) {
    var th = document.createElement('th');
    th.textContent = headerContent[k];
    tableRow.appendChild(th);
  }

  salesHead.appendChild(tableRow);
  salesTable.appendChild(salesHead);

  //Create tbody
  var bodyContent = this.hourlyCookies;
  var tbody       = document.createElement('tbody');
  var bodyRow     = document.createElement('tr');
  var rowHeader   = document.createElement('th');

  rowHeader.textContent = this.storeName;
  bodyRow.appendChild(rowHeader);

  for(var l = 0; l < bodyContent.length; l++) {
    var td = document.createElement('td');
    td.textContent = bodyContent[l];
    bodyRow.appendChild(td);
  };

  tbody.appendChild(bodyRow);
  salesTable.appendChild(tbody);

  //Add sales table to the DOM
  var main = document.getElementById('store_info');
  main.appendChild(salesTable);
};

pike.renderData();
seaTac.renderData();
seaCenter.renderData();
capHill.renderData();
alki.renderData();
