'use strict';
//////////////////////////////////////////////////////////
//First object - First and Pike location
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
console.log(firstAndPike.results);
//////////////////////////////////////////////
//Second object - Seatac Airport Store
var seaTacAir = {
  minCPH: 3,
  maxCPH: 24,
  avgCPC: 1.2,
  avgCPH: function() { return Math.random() * (this.maxCPH - this.minCPH) + this.minCPH;},
  hourlySales: 0,
  totalSales: 0,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '],
  results: []
};

//Figure out the hourly sales for each business hour and deposit into results array.
for (var i = 0; i < seaTacAir['hours'].length; i++) {
  var node = document.createElement('LI');
  seaTacAir.hourlySales = Math.floor((seaTacAir.avgCPH() * seaTacAir.avgCPC));
  seaTacAir.totalSales += seaTacAir.hourlySales;
  var currentHour = seaTacAir.hours[i];
  seaTacAir.results.push(currentHour + seaTacAir.hourlySales + ' cookies');
  //Wrtie each element in the array as a <li> within the <ul id="seaTacAir"
  var liNode = document.createTextNode(seaTacAir.results[i]);
  node.appendChild(liNode);
  document.getElementById('seaTacAir').appendChild(node);
  //Write the total into the results array on the last cycle.
  if (i === 14) {
    var node = document.createElement('LI');
    seaTacAir.results.push('Total: ' + seaTacAir.totalSales + ' cookies');
    var totalNode = document.createTextNode(seaTacAir.results[15]);
    node.appendChild(totalNode);
    document.getElementById('seaTacAir').appendChild(node);
  }
};
//////////////////////////////////////////////
//Third object - Seattle Center
var seattleCenter = {
  minCPH: 11,
  maxCPH: 38,
  avgCPC: 3.7,
  avgCPH: function() { return Math.random() * (this.maxCPH - this.minCPH) + this.minCPH;},
  hourlySales: 0,
  totalSales: 0,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '],
  results: []
};

//Figure out the hourly sales for each business hour and deposit into results array.
for (var i = 0; i < seattleCenter['hours'].length; i++) {
  var node = document.createElement('LI');
  seattleCenter.hourlySales = Math.floor((seattleCenter.avgCPH() * seattleCenter.avgCPC));
  seattleCenter.totalSales += seattleCenter.hourlySales;
  var currentHour = seattleCenter.hours[i];
  seattleCenter.results.push(currentHour + seattleCenter.hourlySales + ' cookies');
  //Wrtie each element in the array as a <li> within the <ul id="seattleCenter"
  var liNode = document.createTextNode(seattleCenter.results[i]);
  node.appendChild(liNode);
  document.getElementById('seattleCenter').appendChild(node);
  //Write the total into the results array on the last cycle.
  if (i === 14) {
    var node = document.createElement('LI');
    seattleCenter.results.push('Total: ' + seattleCenter.totalSales + ' cookies');
    var totalNode = document.createTextNode(seattleCenter.results[15]);
    node.appendChild(totalNode);
    document.getElementById('seattleCenter').appendChild(node);
  }
};
//////////////////////////////////////////////
//Fourth object - Capitol Hill
var capHill = {
  minCPH: 20,
  maxCPH: 38,
  avgCPC: 2.3,
  avgCPH: function() { return Math.random() * (this.maxCPH - this.minCPH) + this.minCPH;},
  hourlySales: 0,
  totalSales: 0,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '],
  results: []
};

//Figure out the hourly sales for each business hour and deposit into results array.
for (var i = 0; i < capHill['hours'].length; i++) {
  var node = document.createElement('LI');
  capHill.hourlySales = Math.floor((capHill.avgCPH() * capHill.avgCPC));
  capHill.totalSales += capHill.hourlySales;
  var currentHour = capHill.hours[i];
  capHill.results.push(currentHour + capHill.hourlySales + ' cookies');
  //Wrtie each element in the array as a <li> within the <ul id="capHill"
  var liNode = document.createTextNode(capHill.results[i]);
  node.appendChild(liNode);
  document.getElementById('capHill').appendChild(node);
  //Write the total into the results array on the last cycle.
  if (i === 14) {
    var node = document.createElement('LI');
    capHill.results.push('Total: ' + capHill.totalSales + ' cookies');
    var totalNode = document.createTextNode(capHill.results[15]);
    node.appendChild(totalNode);
    document.getElementById('capHill').appendChild(node);
  }
};
//////////////////////////////////////////////
//Fifth object - Alki
var alki = {
  minCPH: 2,
  maxCPH: 16,
  avgCPC: 4.6,
  avgCPH: function() { return Math.random() * (this.maxCPH - this.minCPH) + this.minCPH;},
  hourlySales: 0,
  totalSales: 0,
  hours: ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '],
  results: []
};

//Figure out the hourly sales for each business hour and deposit into results array.
for (var i = 0; i < alki['hours'].length; i++) {
  var node = document.createElement('LI');
  alki.hourlySales = Math.floor((alki.avgCPH() * alki.avgCPC));
  alki.totalSales += alki.hourlySales;
  var currentHour = alki.hours[i];
  alki.results.push(currentHour + alki.hourlySales + ' cookies');
  //Wrtie each element in the array as a <li> within the <ul id="alki"
  var liNode = document.createTextNode(alki.results[i]);
  node.appendChild(liNode);
  document.getElementById('alki').appendChild(node);
  //Write the total into the results array on the last cycle.
  if (i === 14) {
    var node = document.createElement('LI');
    alki.results.push('Total: ' + alki.totalSales + ' cookies');
    var totalNode = document.createTextNode(alki.results[15]);
    node.appendChild(totalNode);
    document.getElementById('alki').appendChild(node);
  }
};
