console.log(cityGrowths);


//The first step is to sort the cities by population growth. For this she will use the sort() method,
// which in turn will call an anonymous function to sort objects by the Increase_from_2016 property
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

//The next step is to select only the top five cities by population growth. We'll use
// slice() to perform this task.
var topFiveCities = sortedCities.slice(0,5);

//Now we need to create two arrays: an array of city names, and an array of corresponding population
//growths. We'll use the map() method to extract these properties. These arrays will be the x and y axis
//data of the Plotly chart.
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

//parseInt(city.Increase_from_2016)converts strings into integers. While JavaScript is flexible enough to
//interpret numbers enclosed in quotation marks as numbers, it's good practice to explicitly transform, 
//or cast, strings into numbers.

//Create a Bar Chart with the Arrays, The final task is to render these arrays in Plotly
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

//Heres whats happening above:
//The trace specifies the type of graph as a bar chart as well as defines the x- and y-axis data.
//The variable data encloses trace in an array to meet Plotly's format requirement.
//The variable layout is assigned to an object that specifies the chart's title and axis labels.
//Finally, the graph is rendered with Plotly.newPlot().