import React, { Component } from "react";
import "./MarketSnapShot.css";
import * as d3 from "d3";

class MarketSnapshot extends Component {
  componentDidMount() {
    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
      width = this.props.width - margin.left, //- margin.right,
      height = this.props.height - margin.top, //- margin.bottom,
      direction = this.props.direction ? this.props.direction : "left",
      data = [
        {
          Name: "0.7564",
          team: "b",
          gamea: 200,
          gameb: 300,
          gamec: 200
        },
        {
          Name: "0.7563",
          team: "a",
          gamea: 0,
          gameb: 0,
          gamec: 200
        },
        {
          Name: "0.7562",
          team: "a",
          gamea: 100,
          gameb: 300,
          gamec: 200
        },
        {
          Name: "0.7561",
          team: "a",
          gamea: 50,
          gameb: 300,
          gamec: 120
        },
        {
          Name: "0.7570",
          team: "a",
          gamea: 0,
          gameb: 500,
          gamec: 70
        },
        {
          Name: "0.7586",
          team: "a",
          gamea: 150,
          gameb: 45,
          gamec: 56
        }
      ],
      svg = d3
        .select("#" + this.props.id)
        .append("svg")
        .attr("width", width)
        .attr("height", height),
      mainGtranslate = direction === "right" ? -margin.left : -margin.right,
      g = svg
        .append("g")
        .attr("transform", "translate(" + mainGtranslate + "," + 0 + ")");
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
    var x_max = d3.max(data, function(d) {
      return d.total;
    });
    //setting domains
    if (direction === "right") {
      x.domain([x_max, 0]).nice();
    } else {
      x.domain([0, x_max]).nice();
    }
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
        return direction === "right" ? x(d[1]) : x(d[0]);
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
        return direction === "right" ? x(d[0]) - x(d[1]) : x(d[1]) - x(d[0]);
      });

    g.append("g")
      .attr("class", "x axis")
      .attr(
        "transform",
        "translate(" +
          (margin.left + margin.right) +
          "," +
          (height - margin.top) +
          ")"
      )
      .call(d3.axisBottom(x).ticks(4));
    var yaxis = d3.axisLeft(y);
    if (direction === "right") {
      yaxis = d3.axisRight(y);
    }
    g.append("g")
      .attr("class", "y axis")
      .call(yaxis.ticks(null, "s"))
      .attr(
        "transform",
        "translate(" +
          (direction === "right"
            ? width - margin.right
            : margin.left + margin.right) +
          "," +
          0 +
          ")"
      );
  }

  render() {
    return (
      <React.Fragment>
        <div
          id={this.props.id}
          className={this.props.class_name}
          style={{ float: "left" }}
        />
      </React.Fragment>
    );
  }
}

export default MarketSnapshot;
