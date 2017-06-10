'use strict';

function Store(id,location,minCPH,maxCPH,avgCPC) {
  this.id = id;
  this.location = location;
  this.minCPH = minCPH;
  this.maxCPH = maxCPH;
  this.avgCPC = avgCPC;
  this.avgCPH = function() { return Math.random() * (this.maxCPH - this.minCPH) + this.minCPH;};
  this.hourlySales = 0;
  this.totalSales = 0;
  this.hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: '];
  this.results = [];
}

var firstAndPike = new Store('firstAndPike', 'First and Pike', 23, 65, 6.3);
var seaTacAir = new Store('seaTacAir', 'Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 'Seattle Center', 11, 38, 3.7);
var capHill = new Store('capHill', 'Capitol Hill', 20, 38, 2.3);
var alki = new Store('alki', 'Alki Beach', 2, 16, 4.6);

var stores = [firstAndPike, seaTacAir, seattleCenter, capHill, alki];

for (var s = 0; s < stores.length; s++) {
  var currentStore = stores[s];
  //Figure out the hourly sales for each business hour and deposit into the current sotre's results array.
  for (var i = 0; i < currentStore['hours'].length; i++) {
    var node = document.createElement('LI');
    currentStore.hourlySales = Math.floor((currentStore.avgCPH() * currentStore.avgCPC));
    console.log(currentStore.hourlySales);
    currentStore.totalSales += currentStore.hourlySales;
    var currentHour = currentStore.hours[i];
    currentStore.results.push(currentHour + currentStore.hourlySales + ' cookies');
    //Wrtie each element in the array as a <li> within the <ul id="currentStore"
    var liNode = document.createTextNode(currentStore.results[i]);
    node.appendChild(liNode);
    document.getElementById(currentStore.id).appendChild(node);
    //Write the total into the results array on the last cycle.
    if (i === 14) {
      var node = document.createElement('LI');
      currentStore.results.push('Total: ' + currentStore.totalSales + ' cookies');
      var totalNode = document.createTextNode(currentStore.results[15]);
      node.appendChild(totalNode);
      document.getElementById(currentStore.id).appendChild(node);
    }
  };
}
