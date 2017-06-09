'use strict';

var firstAndPike = {
  minCPH: 23,
  maxCPH: 65,
  avgCPC: 6.3,
  avgCPH: function() { return Math.random() * (this.maxCPH - this.minCPH) + this.minCPH;},
  hourlySales: 0,
  totalSales: 0,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '],
  results: []
};

//Figure out the hourly sales for each business hour and deposit into results array.
for (var i = 0; i < firstAndPike['hours'].length; i++) {
  var node = document.createElement('LI');
  firstAndPike.hourlySales = Math.floor((firstAndPike.avgCPH() * firstAndPike.avgCPC));
  firstAndPike.totalSales += firstAndPike.hourlySales;
  var currentHour = firstAndPike.hours[i];
  firstAndPike.results.push(currentHour + firstAndPike.hourlySales + ' cookies');
  //Wrtie each element in the array as a <li> within the <ul id="firstAndPike"
  var liNode = document.createTextNode(firstAndPike.results[i]);
  node.appendChild(liNode);
  document.getElementById('firstAndPike').appendChild(node);
  //Write the total into the results array on the last cycle.
  if (i === 14) {
    var node = document.createElement('LI');
    firstAndPike.results.push('Total: ' + firstAndPike.totalSales + ' cookies');
    var totalNode = document.createTextNode(firstAndPike.results[15]);
    node.appendChild(totalNode);
    document.getElementById('firstAndPike').appendChild(node);
  }
};
