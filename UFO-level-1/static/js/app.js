// from data.js
var tableData = data;

//console.log(tableData)

// YOUR CODE HERE!
//find the table in the html
let tbody = d3.select("tbody");



//find the button and the form in the html

let button = d3.select("#filter-btn");
let form = d3.select("#form");

//fill html table

function populateTable(data){
    tbody.html("");
    data.forEach(ufoData => {
        let row = tbody.append("tr");
        Object.values(ufoData).forEach(value => {
            let cell = row.append("td");
            cell.text(value);
        });
    
    });

}



 
//create event handler 

function dataFilter() {
    //alert ("hi");
   let filterData = tableData;
   let dateSearch = d3.select("#datetime").property("value");
   if (dateSearch) { 
       let searchResult = tableData.filter(row => row.datetime === dateSearch);
       populateTable(searchResult);

   }
}


button.on("click", dataFilter);

//d3.event.preventDefault();

populateTable(tableData);

d3.event.preventDefault();
