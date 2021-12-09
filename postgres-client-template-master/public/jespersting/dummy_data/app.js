const DUMMY_DATA = [
  { id: 'd1', value: 10, region: 'USA' },
  { id: 'd2', value: 11, region: 'India' },
  { id: 'd3', value: 12, region: 'China' },
  { id: 'd4', value: 6, region: 'German' },
];



//var svg = d3.select("body").

var padding = 5;
var svg = d3.select("#divbar")
.append("svg")
.attr("height",400)
.attr("width",500)



var textdata = ["hej","hoho","hihi"];
var texter = d3.select("#divbar").selectAll("p")
            .data(textdata)
            .enter()
            .append("p")
            .style("color","red")
            .text("hej");


// var bardataset  = [15,28,45];
var bar = svg.selectAll("rect")
            .data(DUMMY_DATA)
            .enter()
            .append("rect")
            //.classed("id", function(d))
            .attr("height",20)
            .attr("fill", "grey") 
            


            .attr("width",function(d){
              return d.value * 20;
            })
            
            .attr("y",function(d,i){
            
              return 20 + (i * 20) + padding * i;
            });











