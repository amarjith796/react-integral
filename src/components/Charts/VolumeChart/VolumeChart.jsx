import React, { Component } from "react";
import "./VolumeChart.css";
import * as d3 from "d3";

class VolumeChart extends Component {
  componentDidMount() {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = this.props.width - margin.left, //- margin.right,
      height = this.props.height - margin.top, //- margin.bottom,
      data = [
        {
          Name: "DB",
          team: "b",
          gamea: 2000,
          gameb: 3000,
          gamec: 2000
        },
        {
          Name: "HSBC",
          team: "a",
          gamea: 0,
          gameb: 0,
          gamec: 2000
        },
        {
          Name: "BOAN",
          team: "a",
          gamea: 1000,
          gameb: 3000,
          gamec: 2000
        },
        {
          Name: "CITIP",
          team: "a",
          gamea: 0,
          gameb: 3000,
          gamec: 0
        },
        {
          Name: "WFNA",
          team: "a",
          gamea: 1000,
          gameb: 5000,
          gamec: 0
        },
        {
          Name: "SG",
          team: "a",
          gamea: 1000,
          gameb: 500,
          gamec: 3500
        }
      ],
      svg = d3
        .select("#" + this.props.id)
        .append("svg")
        .attr("width", width)
        .attr("height", height),
      g = svg.append("g").attr("transform", "translate(" + 0 + "," + 0 + ")");
    var x = d3
      .scaleLinear()
      .rangeRound([0, width - (margin.left + margin.right + 20)]);

    var y = d3
      .scaleBand()
      .rangeRound([0, height - margin.top])
      .paddingInner(0.5);

    var z = {
      a: d3.scaleOrdinal(d3["schemeSet1"]),
      b: d3.scaleOrdinal(d3["schemeSet1"]),
      c: d3.scaleOrdinal(d3["schemeSet1"])
    };
    var columns = Object.keys(data[0]).slice(2);
    for (var d = 0; d < data.length; d++) {
      var t = 0;
      for (var i = 0; i < columns.length; ++i) {
        data[d][columns[i]] = +data[d][columns[i]];
        t += data[d][columns[i]];
      }
      data[d].total = t;
    }

    //setting domains
    x.domain([
      0,
      d3.max(data, function(d) {
        return d.total;
      })
    ]).nice();
    y.domain(
      data.map(function(d) {
        return d.Name;
      })
    );
    for (var key in z) {
      z[key].domain(key);
    }
    //drawing chart
    g.append("g")
      .attr("class", "stackbar")
      .attr(
        "transform",
        "translate(" + (margin.left + margin.right) + "," + 0 + ")"
      )
      .selectAll("g")
      .data(d3.stack().keys(columns)(data))
      .enter()
      .append("g")
      .selectAll("rect")
      .data(d => d)
      .enter()
      .append("rect")
      .attr("fill", function(d, i) {
        var key = d3.select(this.parentNode).datum().key;
        return z[d.data.team](key);
      })
      .attr("x", function(d) {
        return x(d[0]);
      })
      .attr("y", function(d) {
        return y(d.data.Name);
      })
      .attr("width", 0)
      .attr("height", function(d) {
        return y.bandwidth();
      })
      .transition()
      .delay(800)
      .ease(d3.easeLinear)
      .attr("width", function(d) {
        return x(d[1]) - x(d[0]);
      });

    g.append("g")
      .attr("class", "axis")
      .attr(
        "transform",
        "translate(" +
          (margin.left + margin.right) +
          "," +
          (height - margin.top) +
          ")"
      )
      .call(d3.axisBottom(x).ticks(4));

    g.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y).ticks(null, "s"))
      .attr(
        "transform",
        "translate(" + (margin.left + margin.right) + "," + 0 + ")"
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

export default VolumeChart;
