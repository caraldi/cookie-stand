'use strict';

//Pike location
var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hoursArray: displayHours(),
  totalCookies: 0,
  //Generates number of customers per hour
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  //Calculates number of cookies sold per each hour open
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  //Calculates total number of cookies sold per day and displays array with number of cookies sold per each hour (var i represents the operating hours of the store)
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.hoursArray[i][1] = Math.floor(this.cookiesPerHour());
      this.totalCookies += this.hoursArray[i][1];
    }
    this.hoursArray[(this.hoursArray.length - 1)][1] = this.totalCookies;
  },
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

//SeaTac location
var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  hoursArray: displayHours(),
  totalCookies: 0,
  //Generates number of customers per hour
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  //Calculates number of cookies sold per each hour open
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  //Calculates total number of cookies sold per day and displays array with number of cookies sold per each hour (var i represents the operating hours of the store)
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.hoursArray[i][1] = Math.floor(this.cookiesPerHour());
      this.totalCookies += this.hoursArray[i][1];
    }
    this.hoursArray[(this.hoursArray.length - 1)][1] = this.totalCookies;
  },
  //Renders number of cookies sold per each hour of operation and total cookies sold per day for store location
  render: function() {
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    this.cookiesPerDay();
    h2.textContent = 'SeaTac';
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
seaTac.cookiesPerDay();
seaTac.render();

//Seattle Center location
var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  hoursArray: displayHours(),
  totalCookies: 0,
  //Generates number of customers per hour
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  //Calculates number of cookies sold per each hour open
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  //Calculates total number of cookies sold per day and displays array with number of cookies sold per each hour (var i represents the operating hours of the store)
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.hoursArray[i][1] = Math.floor(this.cookiesPerHour());
      this.totalCookies += this.hoursArray[i][1];
    }
    this.hoursArray[(this.hoursArray.length - 1)][1] = this.totalCookies;
  },
  //Renders number of cookies sold per each hour of operation and total cookies sold per day for store location
  render: function() {
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    this.cookiesPerDay();
    h2.textContent = 'Seattle Center';
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
seaCenter.cookiesPerDay();
seaCenter.render();

//Capitol Hill location
var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hoursArray: displayHours(),
  totalCookies: 0,
  //Generates number of customers per hour
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  //Calculates number of cookies sold per each hour open
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  //Calculates total number of cookies sold per day and displays array with number of cookies sold per each hour (var i represents the operating hours of the store)
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.hoursArray[i][1] = Math.floor(this.cookiesPerHour());
      this.totalCookies += this.hoursArray[i][1];
    }
    this.hoursArray[(this.hoursArray.length - 1)][1] = this.totalCookies;
  },
  //Renders number of cookies sold per each hour of operation and total cookies sold per day for store location
  render: function() {
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    this.cookiesPerDay();
    h2.textContent = 'Capitol Hill';
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
capHill.cookiesPerDay();
capHill.render();

//Alki location
var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hoursArray: displayHours(),
  totalCookies: 0,
  //Generates number of customers per hour
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  //Calculates number of cookies sold per each hour open
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  //Calculates total number of cookies sold per day and displays array with number of cookies sold per each hour (var i represents the operating hours of the store)
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.hoursArray[i][1] = Math.floor(this.cookiesPerHour());
      this.totalCookies += this.hoursArray[i][1];
    }
    this.hoursArray[(this.hoursArray.length - 1)][1] = this.totalCookies;
  },
  //Renders number of cookies sold per each hour of operation and total cookies sold per day for store location
  render: function() {
    var h2 = document.createElement('h2');
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    this.cookiesPerDay();
    h2.textContent = 'Alki';
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
alki.cookiesPerDay();
alki.render();

//Function to display number of cookies sold per each hour of operation as nested array
function displayHours() {
  var hour;
  var hoursArray = [];
  for(var i = 0; i <= 14; i++) {
    if (i < 6) {
      hour = i + 6 + ' AM';
    } else if (i === 6){
      hour = '12 PM';
    } else if (i < 14) {
      hour = i - 6 + ' PM';
    } else {
      hour = 'Total: ';
    }
    hoursArray[i] = [hour];
  }
  return hoursArray;
};
