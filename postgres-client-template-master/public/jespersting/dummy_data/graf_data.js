d3.json("api/By", {
  method: "GET",
}).then(function (by_response) {
  d3.json("api/Temperatur", {
    method: "GET",
  }).then(function (temperatur_response) {

    const temperatur_dataset = temperatur_response.data;
    const by_dataset = by_response.data;

    var dropdown = d3 
      .select("body") 
      .append("select")
      .attr("By", "name")
      .attr("id", "drop", "by_id")

      .on("change", function (d) { 
        var selectedOption = d3.select("#drop").property("value")
        var by_id = temperatur_dataset.filter(x => x.by_id == selectedOption)
        console.log(selectedOption, by_id[0].max) 

      });
    var option = dropdown
      .selectAll("option")
      .data(by_dataset)
      .enter()
      .append("option")


    option.text(function (d, i) {

      return d.by;
    })

      .attr("value", function (d) {
        return d.id;


      })
  })

});
