import React, { Component } from "react";
import Chart from "react-apexcharts";

class DonutChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        options: {},
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']
      }
      
    }
    render() {
      return (
          <div>
            <div className="donut">
                <Chart options={this.state.options} series={this.state.series} type="donut" width="425" />
            </div>
          </div>
        
      );
    }
  }

export default DonutChart;
