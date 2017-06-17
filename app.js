'use strict';

var firstAndPike = new Store('firstAndPike','First and Pike' , 23 , 65, 6.3);
var seaTacAir = new Store('seaTacAir', 'Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('seattleCenter', 'Seattle Center', 11, 38, 3.7);
var capHill = new Store('capHill', 'Capitol Hill', 20, 38, 2.3);
var alki = new Store('alki', 'Alki Beach', 2, 16, 4.6);

var stores = [firstAndPike, seaTacAir, seattleCenter, capHill, alki];

function Store(id,location,minCPH,maxCPH,avgCPC) {
  this.id = id;
  this.location = location;
  this.minCPH = minCPH;
  this.maxCPH = maxCPH;
  this.avgCPC = avgCPC;
  this.hourlySales = 0;
  this.totalSales = 0;
  this.hours = ['Hours','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','Total'];
  this.results = [];
}

Store.prototype.randnum = function() {
  return Math.random() * (this.maxCPH - this.minCPH) + this.minCPH;
};

Store.prototype.makeRow = function() {
  //Ccreate the row  element
  var newRowEl = document.createElement('tr');
  //write store name to row with new class 'location'
  var cellEl = document.createElement('th');
  cellEl.id = 'location';
  cellEl.textContent = this.location;
  newRowEl.appendChild(cellEl);
  //write results data to row
  for (var i = 0; i < this.results.length; i++) {
    var cellEl = document.createElement('td');
    cellEl.id = this.hours[i + 1] + 'val';
    cellEl.textContent = this.results[i];
    newRowEl.appendChild(cellEl);
  }
  //write the total sales for the day to the end of the row.
  var totalDataEl = document.createElement('td');
  totalDataEl.id = this.hours[16] + 'val';
  totalDataEl.textContent = this.totalSales;
  newRowEl.appendChild(totalDataEl);
  tableBodyEl.appendChild(newRowEl);
};

Store.prototype.makeHeader = function () {
  var headRowEl = document.createElement('tr');
  tableHeadEl.appendChild(headRowEl);
  for (var i = 0; i < this.hours.length; i++) {
    var headerDataEl = document.createElement('th');
    headerDataEl.textContent = this.hours[i];
    headRowEl.appendChild(headerDataEl);
  }
};

//BUILD TABLE
//make header
var tableEl = document.getElementById('sales');
var tableHeadEl = document.createElement('thead');
tableEl.appendChild(tableHeadEl);
//build the table body
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);
//Populate the table header
stores[0].makeHeader();

var hourlyTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//Loop through each store and create object with appropriate data
for (var s = 0; s < stores.length; s++) {
  //Let's drop the current store (position in the stores array) into a variable in the loop called currentStore
  var currentStore = stores[s];
  //Figure out the hourly sales for each business hour and deposit into the current sotre's results array.
  for (var i = 1; i < currentStore['hours'].length - 1; i++) {
    currentStore.hourlySales = Math.floor((currentStore.randnum() * currentStore.avgCPC));
    currentStore.totalSales += currentStore.hourlySales;
    var currentHour = currentStore.hours[i];
    currentStore.results.push(currentStore.hourlySales);
    hourlyTotals[i - 1] += currentStore.hourlySales;
  }
  hourlyTotals[15] += (currentStore.totalSales);
  currentStore.makeRow();
}

var createFooterRow = function () {
  var footerRowEl = document.createElement('tr');
  footerRowEl.id = 'footerRow';
  tableBodyEl.appendChild(footerRowEl);
  var footerLabelEl = document.createElement('th');
  footerLabelEl.textContent = 'Hourly Totals';
  footerRowEl.appendChild(footerLabelEl);
  for (var i = 1; i < stores[0].hours.length; i++) {
    var footerDataEl = document.createElement('td');
    footerDataEl.id = stores[0].hours[i];
    footerDataEl.textContent = hourlyTotals[i - 1];
    footerRowEl.appendChild(footerDataEl);
  }
};

createFooterRow();

var formEl = document.getElementById('makeNewStore');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  var id = event.target.id.value;
  var location = event.target.location.value;
  var minCPH = event.target.minCPH.value;
  var maxCPH = event.target.maxCPH.value;
  var avgCPH = event.target.avgCPH.value;
  var newLocation = new Store(id,location,minCPH,maxCPH,avgCPH);
  stores.push(newLocation);
  var index = stores.length - 1;
  for (var i = 1; i < stores[index]['hours'].length - 1; i++) {
    stores[index].hourlySales = Math.floor((stores[index].randnum() * stores[index].avgCPC));
    stores[index].totalSales += stores[index].hourlySales;
    var currentHour = stores[index].hours[i];
    stores[index].results.push(stores[index].hourlySales);
    hourlyTotals[i - 1] += stores[index].hourlySales;
  }
  hourlyTotals[15] += (stores[index].totalSales);
  var footerRow = document.getElementById('footerRow');
  footerRow.parentNode.removeChild(footerRow);
  stores[index].makeRow();
  createFooterRow();
  console.log(stores[index]);
}
