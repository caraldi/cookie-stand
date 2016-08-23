'use strict';

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  hoursArray: [],
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      var hourlyCookies = this.cookiesPerHour();
      this.totalCookies += hourlyCookies;
      this.hoursArray.push(hourlyCookies);
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'Pike';

    ul.appendChild(h2);

    for (var j = 0; j < 14; j++) {
      var hourLi = document.createElement('li');
      hourLi.textContent = this.hoursArray[j];
      ul.appendChild(hourLi);
    }

    var li = document.createElement('li');
    li.textContent = 'Total: ' + this.totalCookies;
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

pike.cookiesPerDay();
pike.render();

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.totalCookies += this.cookiesPerHour();
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'SeaTac';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

seaTac.cookiesPerDay();
seaTac.render();

var seaCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.totalCookies += this.cookiesPerHour();
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'Seattle Center';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

seaCenter.cookiesPerDay();
seaCenter.render();

var capHill = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.totalCookies += this.cookiesPerHour();
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'Capitol Hill';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

capHill.cookiesPerDay();
capHill.render();

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  totalCookies: 0,
  generateRandom: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookiesPerHour: function() {
    return this.generateRandom() * this.avgCookies;
  },
  cookiesPerDay: function() {
    for (var i = 0; i < 14; i++) {
      this.totalCookies += this.cookiesPerHour();
    }
  },
  render: function() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var h2 = document.createElement('h2');
    var main = document.getElementById('store_info');

    h2.textContent = 'Alki';
    li.textContent = 'Total: ' + this.totalCookies;

    ul.appendChild(h2);
    ul.appendChild(li);

    main.appendChild(ul);
  }
};

alki.cookiesPerDay();
alki.render();
