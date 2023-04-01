<script>
    var word1, word2, word3, word4 = "";
    // var w2v = require( 'word2vec' );
    // import * as druid from "@saehrimnir/druidjs";
    // convert the words to vectors and then do a PCA on them to get the 2D coordinates
    // normalize those coordinates
    // and Plot those coordinates using arrows

    // Let the user pick the words, dimensional reduction technique and 
    // word2vec model to use.

    var selected_word2vec_model = "Google Word2Vec";
    var selected_dim_reduction_technique = "PCA";

    var word2vec_models = [
        "Google Word2Vec",
        "GloVe"]
    
    var dim_reduction_techniques = [
        "PCA",
        "t-SNE",
        "UMAP"]

    var sample_data = [
        [12,123,45,667,678,456,234,243,234],
        [12,123,45,123,678,123,231,243,234],
        [12,123,45,123,678,322,132,243,234],
        [12,123,45,341,678,223,123,243,234]
    ]

    var parms = {
        "PCA": {},
        "UMAPS": {
            "n_neighbors": 10,
            "min_dist": 1,
            "local_conn": 1
        },
        "t-SNE":{
            "perplexity": 10,
            "epsilon": 5,
        }
    }




    function vectorize(event){
        event.preventDefault();
        console.log("vectorize", word1, word2, word3, word4, selected_word2vec_model, selected_dim_reduction_technique)
    }


// set the dimensions and margins of the graph
var margin = {top: 10, right: 100, bottom: 30, left: 30},
width = 460 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

console.log("Hello from dataviz.js");
// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// List of groups (here I have one group per column)
var allGroup = ["valueA", "valueB", "valueC"]

// add the options to the button
d3.select("#selectButton")
  .selectAll('myOptions')
  .data(allGroup)
  .enter()
  .append('option')
  .text(function (d) { return d; }) // text showed in the menu
  .attr("value", function (d) { return d; }) // corresponding value returned by the button

// Add X axis --> it is a date format
var x = d3.scaleLinear()
  .domain([0,10])
  .range([ 0, width ]);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear()
  .domain( [0,20])
  .range([ height, 0 ]);
svg.append("g")
  .call(d3.axisLeft(y));

// Initialize line with group a
var line = svg
  .append('g')
  .append("path")
    .datum(data)
    .attr("d", d3.line()
      .x(function(d) { return x(+d.time) })
      .y(function(d) { return y(+d.valueA) })
    )
    .attr("stroke", "black")
    .style("stroke-width", 4)
    .style("fill", "none")

// Initialize dots with group a
var dot = svg
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
    .attr("cx", function(d) { return x(+d.time) })
    .attr("cy", function(d) { return y(+d.valueA) })
    .attr("r", 7)
    .style("fill", "#69b3a2")


// A function that update the chart
function update(selectedGroup) {

  // Create new data with the selection?
  var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })

  // Give these new data to update line
  line
      .datum(dataFilter)
      .transition()
      .duration(1000)
      .attr("d", d3.line()
        .x(function(d) { return x(+d.time) })
        .y(function(d) { return y(+d.value) })
      )
  dot
    .data(dataFilter)
    .transition()
    .duration(1000)
      .attr("cx", function(d) { return x(+d.time) })
      .attr("cy", function(d) { return y(+d.value) })
}

// When the button is changed, run the updateChart function
d3.select("#selectButton").on("change", function(d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value")
    // run the updateChart function with this selected option
    update(selectedOption)
})


</script>


<div>
    <form>
        <!-- Let the user select the techniques and models form drop box-->
        <select bind:value={selected_word2vec_model}>
            {#each word2vec_models as model}
                <option value={model}>{model}</option>
            {/each}
        </select>
        <select bind:value={selected_dim_reduction_technique}>
            {#each dim_reduction_techniques as technique}
                <option value={technique}>{technique}</option>
            {/each}
        </select>
        <br>
        <input type="text" bind:value={word1} placeholder="word1"/>
        <input type="text" bind:value={word2} placeholder="word2"/>
        <input type="text" bind:value={word3} placeholder="word3"/>
        <input type="text" bind:value={word4} placeholder="word4"/>

        <button on:click={vectorize}>Get Vectors</button>
    </form>
    <!-- Create a div where the graph will take place -->
</div>