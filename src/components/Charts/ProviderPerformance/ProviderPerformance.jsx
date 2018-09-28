import React, { Component } from "react";
import "./ProviderPerformance.css";
import * as d3 from "d3";

class ProviderPerformance extends Component {
  componentDidMount() {
    var my_values = [
      {
        name: "SG",
        cost: 0.85
      },
      {
        name: "CITIP",
        cost: 0.212
      },
      {
        name: "ANZ",
        cost: 1.25
      },
      {
        name: "AXICORP",
        cost: 1.789
      },
      {
        name: "DB",
        cost: 0.43
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
      .domain([0, 2 * 1000000])
      .range([0, width - margin.left - margin.right]);

    var background = g
      .selectAll(null)
      .data(my_values)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", function(d, i) {
        return 14 + i * 20;
      })
      .attr("height", 3)
      .attr("width", function(d) {
        return scale(scale.domain()[1]);
      })
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
      .style("fill", "steelblue")
      .transition()
      .delay(800)
      .ease(d3.easeLinear)
      .attr("width", function(d) {
        return scale(d.cost * 1000000);
      });
    g.append("g")
      .attr("class", "x- axis")
      .attr(
        "transform",
        "translate(" +
          (margin.left - margin.right - 5) +
          "," +
          (height - margin.top - margin.bottom) +
          ")"
      )
      .call(d3.axisBottom(scale).ticks(4));
  }
  render() {
    return (
      <React.Fragment>
        <div id={this.props.id} className={this.props.class_name} />
      </React.Fragment>
    );
  }
}

export default ProviderPerformance;
