import React, { Component } from "react";
import "./ProgressRectChart.css";
import * as d3 from "d3";

class ProgressRectChart extends Component {
  componentDidMount() {
    var my_values = [
      {
        name: "London",
        cost: 8674000
      },
      {
        name: "New York",
        cost: 8406000
      },
      {
        name: "Sydney",
        cost: 4293000
      },
      {
        name: "Paris",
        cost: 2244000
      }
    ];
    var margin = { top: 20, right: 35, bottom: 30, left: 50 },
      width = this.props.width,
      height = this.props.height;
    var color = d3.scaleOrdinal(d3["schemeSet1"]);
    var svg = d3
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    var g = svg
      .append("g")
      .attr("transform", "translate(" + margin.right + ",0)");
    var scale = d3
      .scaleLinear()
      .domain([0, 12000000])
      .range([0, width - margin.left - margin.right]);

    var background = g
      .selectAll(null)
      .data(my_values)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", function(d, i) {
        return 10 + i * 20;
      })
      .attr("height", 10)
      .attr("width", function(d) {
        return scale(scale.domain()[1]);
      })
      .attr("rx", 5)
      .attr("ry", 5)
      .style("fill", "#ddd");
    svg
      .selectAll(null)
      .data(my_values)
      .enter()
      .append("text")
      .attr("x", 20)
      .attr("y", function(d, i) {
        return 16 + i * 20;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .text(function(d) {
        return d.name;
      });
    svg
      .selectAll(null)
      .data(my_values)
      .enter()
      .append("text")
      .attr("x", width - 20)
      .attr("y", function(d, i) {
        return 16 + i * 20;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .text(function(d) {
        return d.cost;
      });
    var bars = g
      .selectAll(null)
      .data(my_values)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", function(d, i) {
        return 10 + i * 20;
      })
      .attr("height", 10)
      .attr("width", 0)
      .attr("rx", 5)
      .attr("ry", 5)
      .style("fill", "steelblue")
      // .style("fill", function(d) {
      //   return color(d.name);
      // })
      .transition()
      .delay(800)
      .ease(d3.easeLinear)
      .attr("width", function(d) {
        return scale(d.cost);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div id={this.props.id} className={this.props.class_name} />
      </React.Fragment>
    );
  }
}

export default ProgressRectChart;
