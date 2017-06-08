'use strict';

var firstAndPike = {
  minCPH: 23,
  maxCPH: 65,
  avgCPC: 6.3,
  avgCPH: function() { return Math.floor(Math.random() * (this.maxCPH - this.minCPH)) + this.minCPH;},
  hourlySales: 0,
  totalSales: 0,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '],
  results: []
};

for (i = 0; i < firstAndPike['hours'].length; i++) {
  firstAndPike.hourlySales = Math.floor((firstAndPike.avgCPH() * firstAndPike.avgCPC));
  firstAndPike.totalSales += firstAndPike.hourlySales;
  var currentHour = firstAndPike.hours[i];
  firstAndPike.results.push(currentHour + firstAndPike.hourlySales + ' cookies');
}

firstAndPike.dailyTotal = 'Total: ' + firstAndPike.totalSales + ' cookies';

console.log(firstAndPike.dailyTotal);
console.log(firstAndPike.results);
