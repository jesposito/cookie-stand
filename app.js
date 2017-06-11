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
  this.hours = ['Hours','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
  this.results = [];
}

var firstAndPike = new Store('firstAndPike','First and Pike' , 23 , 65, 6.3);
var seaTacAir = new Store('seaTacAir', 'Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 'Seattle Center', 11, 38, 3.7);
var capHill = new Store('capHill', 'Capitol Hill', 20, 38, 2.3);
var alki = new Store('alki', 'Alki Beach', 2, 16, 4.6);

var stores = [firstAndPike, seaTacAir, seattleCenter, capHill, alki];
var hWritten = false;

for (var s = 0; s < stores.length; s++) {
  //Let's drop the current store (position in the stores array) into a variable in the loop called currentStore
  var currentStore = stores[s];
  //Figure out the hourly sales for each business hour and deposit into the current sotre's results array.
  for (var i = 1; i < currentStore['hours'].length - 1; i++) {
    currentStore.hourlySales = Math.floor((currentStore.avgCPH() * currentStore.avgCPC));
    currentStore.totalSales += currentStore.hourlySales;
    var currentHour = currentStore.hours[i];
    currentStore.results.push(currentStore.hourlySales);
  }

  //locate the table and store it
  var tableEl = document.getElementById('Sales');

  //TABLE HEAD
  var tableHeadEl = document.createElement('thead');
  tableEl.appendChild(tableHeadEl);
    //define the first row and append it to the table head
  var tRowEl = document.createElement('tr');
  tableHeadEl.appendChild(tRowEl);
  //Loop through currentStore.hours and append each index to a th
  for (var i = 0; i <= currentStore['hours'].length && hWritten == false; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = currentStore.hours[i];
    tRowEl.appendChild(thEl);
  }
  hWritten = true;

//TABLE BODY
  var tableBodyEl = document.createElement('tbody');
  //create the row and write the store name into the first th
  var newRow = document.createElement('tr');
  var bodyThEl = document.createElement('th');
  bodyThEl.textContent = currentStore.location;
  tableEl.appendChild(tableBodyEl);
  tableBodyEl.appendChild(newRow);
  newRow.appendChild(bodyThEl);

  tableBodyEl.appendChild(newRow);
  //write the results array values to corresponding cells
  for (var i = 0; i < currentStore['results'].length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = currentStore.results[i];
    newRow.appendChild(tdEl);
  }
  var totalsTh = document.createElement('th');
  totalsTh.textContent = currentStore.totalSales;
  newRow.appendChild(totalsTh);
};
