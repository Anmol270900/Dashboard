import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          }
        ],
        responsive: [{
            breakpoint: undefined,
            options: {},
        }]
      };
    }
    render() {
      return (
          <div>
            <div className="row">
                <div className="mixed-chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="line"
                    width="425"
                />
                </div>
            </div>
          </div>
        
      );
    }
  }

export default LineChart;
