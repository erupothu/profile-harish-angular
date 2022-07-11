import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { red } from 'color-name';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  line_xaxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  line_yaxisData = [820, 932, 901, 934, 1290, 1330, 1320];

  selectedXAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  selectedYAxisData = [220, 232, 201, 234, 290, 230, 220];
  selectedYAxisData2 = [120, 132, 101, 134, 90, 230, 210];
  types = ['line', 'bar', 'pie']
  selectedType = 'pie';

  chartOption: EChartOption;
  constructor() { }

  ngOnInit(): void {
    this.changeChart();
  }

  changeChart() {
    this.chartOption = {
      title: {
        text: 'Daily visitors Chart',
        subtext: 'Website visitors',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['visitors']
      },
      grid: {
        left: '23%',
        right: '24%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.selectedXAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'visitors',
          stack: 'counts',
          areaStyle: {
            color: 'blue'
          },
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: this.selectedYAxisData2,
          type: this.selectedType
        }
      ]
    }
  }

  changeMultipleChart() {
    this.chartOption = {
      title: {
        text: 'Daily visitors Chart',
        subtext: 'Website visitors',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['X-1', 'X-2']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.selectedXAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'X-1',
          stack: 'counts',
          areaStyle: {
            color: 'red'
          },
          data: this.selectedYAxisData,
          type: this.selectedType
        },
        {
          name: 'X-2',
          stack: 'counts',
          areaStyle: {
            color: 'blue'
          },
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          data: this.selectedYAxisData2,
          type: this.selectedType
        }
      ]
    }
  }

}
