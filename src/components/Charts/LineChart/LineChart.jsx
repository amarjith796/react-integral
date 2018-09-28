import React, { Component } from "react";
import "./LineChart.css";
import * as d3 from "d3";

class LineChart extends Component {
  componentDidMount() {
    var data = [
      { date: "12-09-17", value: 83, module: 0 },
      { date: "19-09-17", value: 79, module: 1 },
      { date: "26-09-17", value: 78, module: 2 },
      { date: "30-09-17", value: 73, module: 3 },
      { date: "08-10-17", value: 71, module: 4 },
      { date: "15-10-17", value: 67, module: 5 },
      { date: "22-10-17", value: 65, module: 6 }
    ];
    function transition(path) {
      path
        .transition()
        .duration(1000)
        .attrTween("stroke-dasharray", tweenDash);
    }
    function tweenDash() {
      var l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l);
      return function(t) {
        return i(t);
      };
    }
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = this.props.width, //- margin.left - margin.right,
      height = this.props.height - margin.top; // - margin.bottom;
    var svg = d3
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    // parse the date / time
    var parseTime = d3.timeParse("%d-%m-%y");

    var x = d3.scaleTime().range([0, width - (margin.left + margin.right)]);
    var y = d3.scaleLinear().range([height - margin.bottom, 0]);

    var line = d3
      .line()
      .x(function(d) {
        return x(d.date);
      })
      .y(function(d) {
        return y(d.value);
      });

    var g = svg
      .append("g")
      .attr("transform", "translate(" + 0 + "," + 10 + ")");

    data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.value = +d.value;
      d.module = +d.module;
    });

    x.domain(
      d3.extent(data, function(d) {
        return d.date;
      })
    );
    y.domain(
      d3.extent(data, function(d) {
        return d.value;
      })
    );

    // add the Y gridlines
    g.append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisLeft(y)
          .tickSize(-(width - (margin.left + margin.right)))
          .tickFormat("")
          .ticks(6)
      )
      .attr(
        "transform",
        "translate(" + (margin.left + margin.right) / 2 + "," + 0 + ")"
      );
    // Data line and dots group
    var lineAndDots = g
      .append("g")
      .attr("class", "line-and-dots")
      .attr(
        "transform",
        "translate(" + (margin.left + margin.right) / 2 + "," + 0 + ")"
      );
    lineAndDots
      .append("path")
      .data([data])
      .attr("class", "line data-line")
      .attr("d", line)
      .call(transition);

    // add the dots with tooltips
    lineAndDots
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "data-circle")
      .attr("r", 5)
      .attr("cx", function(d) {
        return x(d.date);
      })
      .attr("cy", function(d) {
        return y(d.value);
      })
      .call(transition);

    // add the X Axis
    g.append("g")
      .attr("class", "x axis")
      .attr(
        "transform",
        "translate(" +
          (margin.left + margin.right) / 2 +
          "," +
          (height - margin.bottom) +
          ")"
      )
      .call(
        d3
          .axisBottom(x)
          .ticks(4)
          .tickFormat(d3.timeFormat("%m"))
      );

    // add the Y Axis
    g.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(y).ticks(4))
      .attr(
        "transform",
        "translate(" + (margin.left + margin.right) / 2 + "," + 0 + ")"
      );
  }

  render() {
    return (
      <React.Fragment>
        <div id={this.props.id} className={this.props.class_name} />
      </React.Fragment>
    );
  }
}

export default LineChart;
