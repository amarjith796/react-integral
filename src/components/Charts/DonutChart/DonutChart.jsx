import React, { Component } from "react";
import "./DonutChart.css";
import * as d3 from "d3";

class DonutChart extends Component {
  componentDidMount() {
    var data = [
      { orderid: "4389132187", confirmed: 3, rejected: 2 },
      { orderid: "4389132233", confirmed: 0, rejected: 8 },
      { orderid: "4389132232", confirmed: 8, rejected: 2 },
      { orderid: "4389132222", confirmed: 2, rejected: 3 }
    ];
    var color = d3.scaleOrdinal(d3["schemeSet1"]);
    var totalCount = data.reduce((a, b) => {
      return a + b.confirmed;
    }, 0);
    let tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "toolTip");
    var width = this.props.width,
      height = this.props.height,
      radius = Math.min(width, height) / 2;
    var marginLeft = this.props.marginLeft;
    var legends = this.props.legends === false ? this.props.legends : true;
    function tweenPie(finish) {
      var start = {
        startAngle: 0,
        endAngle: 0
      };
      var interpolator = d3.interpolate(start, finish);
      return function(d) {
        return arc(interpolator(d));
      };
    }
    var arc = d3
      .arc()
      .outerRadius(radius - 20)
      .innerRadius(30);

    var pie = d3
      .pie()
      .padAngle(0.09)
      .sort(null)
      .value(d => {
        return d.confirmed;
      });

    var svg = d3
      .select("#" + this.props.id)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    var svg_g = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + (width - marginLeft) + "," + (height / 3 + 10) + ")"
      );

    var g = svg_g
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g");

    g.append("path")
      .attr("d", arc)
      .attr("id", d => {
        return this.props.id + "_" + d.data.orderid;
      })
      .style("fill", (d, i) => {
        return color(d.data.orderid);
      })
      .on("mouseover", d => {
        d3.selectAll("." + this.props.id + "_totalCounts").text("");
        d3.select("#totalCounts_" + this.props.id + "_" + d.data.orderid).text(
          d.data.confirmed
        );
        tooltip
          .html(
            "OrderId:" +
              d.data.orderid +
              "<br>" +
              "Confirmed:" +
              d.data.confirmed +
              "<br>" +
              "Rejected:" +
              d.data.rejected
          )
          .style("display", "inline-block")
          .style("left", d3.event.pageX + 10 + "px")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mousemove", d => {
        tooltip
          .style("left", d3.event.pageX + 10 + "px")
          .style("display", "inline-block")
          .style("top", d3.event.pageY - 10 + "px");
      })
      .on("mouseout", d => {
        d3.selectAll("." + this.props.id + "_totalCounts").text(totalCount);
        tooltip.style("display", "none");
      })
      .transition()
      .duration(1000)
      .attrTween("d", tweenPie);
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("class", this.props.id + "_totalCounts")
      .attr("id", d => {
        return "totalCounts_" + this.props.id + "_" + d.data.orderid;
      })
      .attr("font-size", "2em")
      .attr("font-weight", "bold")
      .attr("y", 8)
      .text(totalCount);
    if (legends) {
      var legend_g = svg
        .append("g")
        .attr("transform", "translate(" + 0 + "," + -10 + ")");
      var legendG = legend_g
        .selectAll(".legend") // note appending it to mySvg and not svg to make positioning easier
        .data(pie(data))
        .enter()
        .append("g")
        .attr("transform", function(d, i) {
          return "translate(" + 0 + "," + (i * 20 + 20) + ")";
        })
        .attr("class", "legend");

      legendG
        .append("circle")
        .attr("cx", 5)
        .attr("cy", 5)
        .attr("r", 5)
        .attr("fill", function(d, i) {
          return color(d.data.orderid);
        });

      legendG
        .append("text")
        .text(function(d) {
          return d.data.orderid;
        })
        .style("font-size", 10)
        .attr("y", 10)
        .attr("x", 11)
        .on("mouseover", d => {
          // d3.select(this.parentNode).style("opacity", "0.5");
          d3.select("#" + this.props.id + "_" + d.data.orderid).style(
            "opacity",
            "0.5"
          );
        })
        .on("mousemove", d => {
          // d3.select(this.parentNode).style("opacity", "0.5");
          d3.select("#" + this.props.id + "_" + d.data.orderid).style(
            "opacity",
            "0.5"
          );
        })
        .on("mouseout", d => {
          // d3.select(this.parentNode).style("opacity", "1");
          d3.select("#" + this.props.id + "_" + d.data.orderid).style(
            "opacity",
            "1"
          );
        });
    }
  }
  render() {
    return <div id={this.props.id} className={this.props.class_name} />;
  }
}

export default DonutChart;
