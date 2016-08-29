'use strict';

//Multiple instances of Store object will be created with values of each new object's properties
var pike      = new Store('Pike Place', 6.3, 23, 65);
var seaTac    = new Store('SeaTac', 1.2, 3, 24);
var seaCenter = new Store('Seattle Center', 3.7, 11, 38);
var capHill   = new Store('Capitol Hill', 2.3, 20, 38);
var alki      = new Store('Alki', 4.6, 2, 16);

// Create stores variable equal to array of Store object sales data instances
var stores = [pike, seaTac, seaCenter, capHill, alki];
console.log('stores array:', stores);

// Create Store object using constructor notation from literal notation properties
function Store(name, avg, min, max) {
  this.storeName = name;
  this.avgCookies = avg;
  this.minCust = min;
  this.maxCust = max;
  this.totalCookies = 0;
  this.hoursArray = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
};

//Creating prototype of Store object allows method of object to be applied in more than one instance and save memory

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
  this.hourlyCookies = [];

  for (var i = 0; i < this.hoursArray.length; i++) {
    var hourlySales;
    hourlySales = this.cookiesPerHour();
    this.hourlyCookies.push(hourlySales);
    this.totalCookies += hourlySales;
  }
};

//Method for rendering properties as table with rows displaying hourly sales data for each location
Store.prototype.renderData = function() {
  this.cookiesPerDay();

//Render sales data as td elements in tr of tbody
  var bodyRow     = document.createElement('tr');
  var rowHeader   = document.createElement('th');
  var storeTotal  = document.createElement('td');

//Loop through each location's data and use it to render tr in tbody
  for (var l = 0; l < stores.length; l++) {
//Add content to th referencing location name
    rowHeader.textContent = this.storeName[l];
// Append th with location names to tr
    rowHeader.appendChild(bodyRow);
  }

// Loop through hourly sales to display as hourlyData td content
  for(var j = 0; j < this.hourlyCookies.length; j++) {
    var hourlyData   = document.createElement('td');
// Add hourly sales data to td
    tableData.textContent = this.hourlyCookies[j];
// Append hourlyData td to th
    rowHeader.appendChild(hourlyData);
  }

//Reference total cookies sold per hour to display as storeTotal td content
  storeTotal.textContent = this.totalCookies;
//Append storeTotal td to tr
  bodyRow.appendChild(storeTotal);

  return bodyRow;
};

// Create table to display location data with hours of operation as columns, store location names as rows, including td created by renderData function
function createTable() {
  var salesTable   = document.createElement('table');
  
  var salesHead    = document.createElement('thead');
  var headRow      = document.createElement('tr');
  var tableHeader  = document.createElement('th');
  var tableBody    = document.createElement('tbody');
  var main         = document.getElementById('store_info');
  var hourContent;

// Append thead to sales table
  salesTable.appendChild(salesHead);

// Append tr to thead
  salesHead.appendChild(headRow);

//Loop through each hour of operation, display as th content
  for(var k = 0; k < hourContent.length; k++) {
    hourContent = ['', '6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', 'Location Daily Total'];
//Add hours content to th
    tableHeader.textContent += hourContent[k];
// Append th with hours content to tr
    headRow.appendChild(tableHeader);
  }

// Append tbody to thead
  salesHead.appendChild(tableBody);

//Append tr from renderData to tbody
  tableBody.appendChild(bodyRow);

// Append sales table to main element in sales.html
  main.appendChild(salesTable);
};

createTable();

// th = document.createElement('th');
// th.textContent = 'Hour Totals;
// totalsRow.appendChild.th;

// totalsRow.textContent = 'Hourly Totals';

// for (var hour = 0; hour < stores[0].hourCookies.length; hour++) {
// console.log(hours[hour + 1]);

// reset total
// hourTotal = 0;
// totalTh = createElement('th');

// Loop over stores
// for (var store = 0; store < stores.length; store++) {

// Set currentStore to current store in array
// currentStore = stores[store];
// console.log(stores[store].name + ':' + currentStore.hourlyCookies[hour]);

// Add amount for current hour
// hourTotal += currentStore.hourlyCookies[hour];
// }

// totalTh.textcontent = hourTotal;
// totalsRow.appendChild(totalTh);
// console.log('Total: ', hourTotal);
