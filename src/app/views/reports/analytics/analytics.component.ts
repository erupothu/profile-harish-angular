import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { AnalyticsService } from './analytics.service';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

declare const google: any;

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @ViewChild('world') private worldMap: ElementRef;
   @ViewChild('map') mapRef: ElementRef;

  uluru: Object = { lat: 17.3424766, lng: 78.4079455};
  map: Object;
  marker: Object;
  zoom: number;
 

  indiaMapJsonData: any;
  worldMapJsonData: any;
  w = 1200;
  h = 800;
  // proj = d3.geoMercator();
  bounds = [[68, 38], [97, 8]];
  proj = d3.geoMercator()
    .scale(1500)
    .translate([this.w / 2, this.h / 2])
    .rotate([(this.bounds[0][0] + this.bounds[1][0]) / -2,
    (this.bounds[0][1] + this.bounds[1][1]) / -2]);

  path = d3.geoPath().projection(this.proj);
  t = this.proj.translate(); // the projection's default translation
  s = this.proj.scale() // the projection's default scale

  width = 1400;
  height = 600;
  wordMapproj = d3.geoMercator()
    .scale(150)
    .translate([this.width / 2, this.height / 2]);
  worldMapPath = d3.geoPath().projection(this.wordMapproj);
  wt = this.wordMapproj.translate(); // the projection's default translation
  ws = this.wordMapproj.scale() // the projection's default scale
  buckets = 9;
  colors = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'];

  selectedXAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  usersYAxisData = [220, 232, 201, 234, 290, 230, 220];
  eventsYAxisData = [500, 832, 301, 934, 1200, 830, 510];
  conversionYAxisData = [500, 832, 301, 934, 1200, 830, 510];
  types = ['line', 'bar', 'pie']
  selectedType = 'line';

  userChartOption: EChartOption;
  eventChartOption: EChartOption;
  chartOption: EChartOption;
  conversionChartOption: EChartOption;

  /* Device Detection */
  deviceInfo = null;
  visitorInfo: any;
  savedData: any;
  dt = new Date();
  ipData: any;

  /* ngx Charts 
  https://swimlane.gitbook.io/ngx-charts/examples/pie-charts/advanced-pie-chart
  */
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  view: any[] = [700, 400];
  view2: any[] = [1200, 400];
  colorScheme = {
    domain: ['#00C0FF','#30E07B', '#E75691', '#5D6A75']
  };
  deviceData = [
    {
      "name": "Desktop",
      "value": 894
    },
    {
      "name": "Mobile",
      "value": 500
    },
    {
      "name": "Tablet",
      "value": 72
    }
  ];
  locationData = [
    {
      "name": "India",
      "value": 11894
    },
    {
      "name": "USA",
      "value": 6500
    },
    {
      "name": "Austrelia",
      "value": 1272
    },
    {
      "name": "Bangladesh",
      "value": 872
    },
    {
      "name": "Nepal",
      "value": 372
    }
  ];
  visitedPages = [
    { name: 'India',
      series: [
        {
          "name": "Jan",
          "value": 21894
        },
        {
          "name": "Feb",
          "value": 16500
        },
        {
          "name": "Mar",
          "value": 10272
        },
        {
          "name": "Apr",
          "value": 16872
        }
      ]
    },
    { name: 'USA',
      series: [
        {
          "name": "Jan",
          "value": 18894
        },
        {
          "name": "Feb",
          "value": 22500
        },
        {
          "name": "Mar",
          "value": 19272
        },
        {
          "name": "Apr",
          "value": 21472
        }
      ]
    },
    { name: 'UK',
      series: [
        {
          "name": "Jan",
          "value": 21894
        },
        {
          "name": "Feb",
          "value": 16100
        },
        {
          "name": "Mar",
          "value": 12272
        },
        {
          "name": "Apr",
          "value": 15872
        }
      ]
    }
  ];
   visitorsVsEvents = [
    { name: 'Visitors',
      series: [
        {
          "name": "Mon",
          "value": 1894
        },
        {
          "name": "Tue",
          "value": 6500
        },
        {
          "name": "Wed",
          "value": 1272
        },
        {
          "name": "Thu",
          "value": 1872
        },
        {
          "name": "Fri",
          "value": 1572
        },
        {
          "name": "Sat",
          "value": 1672
        },
        {
          "name": "Sun",
          "value": 16872
        }
      ]
    },
    { name: 'Events',
      series: [
        {
          "name": "Mon",
          "value": 21894
        },
        {
          "name": "Tue",
          "value": 16500
        },
        {
          "name": "Wed",
          "value": 10272
        },
        {
          "name": "Thu",
          "value": 16872
        },
        {
          "name": "Fri",
          "value": 14872
        },
        {
          "name": "Sat",
          "value": 17872
        },
        {
          "name": "Sun",
          "value": 12872
        }
      ]
    }
  ];
   usersData = [
    { name: 'Visitors',
      series: [
        {
          "name": "Mon",
          "value": 1894
        },
        {
          "name": "Tue",
          "value": 2500
        },
        {
          "name": "Wed",
          "value": 1272
        },
        {
          "name": "Thu",
          "value": 1872
        },
        {
          "name": "Fri",
          "value": 1572
        },
        {
          "name": "Sat",
          "value": 1672
        },
        {
          "name": "Sun",
          "value": 1672
        }
      ]
    }
  ];
  eventsData = [
    { name: 'Visitors',
      series: [
        {
          "name": "Mon",
          "value": 13894
        },
        {
          "name": "Tue",
          "value": 16500
        },
        {
          "name": "Wed",
          "value": 11272
        },
        {
          "name": "Thu",
          "value": 11872
        },
        {
          "name": "Fri",
          "value": 11572
        },
        {
          "name": "Sat",
          "value": 11672
        },
        {
          "name": "Sun",
          "value": 11872
        }
      ]
    }
  ];
  conversion = [
    { name: 'Visitors',
      series: [
        {
          "name": "Mon",
          "value": 94
        },
        {
          "name": "Tue",
          "value": 65
        },
        {
          "name": "Wed",
          "value": 62
        },
        {
          "name": "Thu",
          "value": 48
        },
        {
          "name": "Fri",
          "value": 72
        },
        {
          "name": "Sat",
          "value": 67
        },
        {
          "name": "Sun",
          "value": 87
        }
      ]
    }
  ];
  constructor(private as: AnalyticsService, private router: Router, private http: HttpClient, private sanitizer: DomSanitizer) {
    Object.assign(this.deviceData);
  }

  ngOnInit() {
    this.as.saveVisitorsData();
    // this.saveVisitorsData();
    this.as.getIpandLocationData().subscribe(data => {
      this.ipData = data;
      let idx = this.as.userAnalytics.findIndex(data => data.date == this.dt.toDateString(), true);
      let idx2 = this.as.userAnalytics[idx].ipAddress.findIndex(data => data.ip === this.ipData.query, true);
      this.visitorInfo = this.as.userAnalytics[idx].ipAddress[idx2];
    })

    this.http.get('../../../../assets/data/states.json').subscribe(json => {
      this.indiaMapJsonData = json;
      this.createIndiaMap();
    });
    this.http.get('../../../../assets/data/world_map.json').subscribe(json => {
      this.worldMapJsonData = json;
      this.createWorldMap();
    });
  }

  ngAfterViewInit() {
    //used setTimeout google map is delayed in loading, in stackBlitz

    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 2,
        center: this.uluru
      });
      this.marker = new google.maps.Marker({
        position: this.uluru,
        map: this.map
      });

    }, 2000)

    //console.log(this.map.getZoom())
  }

  createWorldMap() {
    const worldMapElement = this.worldMap.nativeElement;
    const map = d3.select(worldMapElement).append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .call(d3.zoom().on("zoom", function () {
        map.attr("transform", d3.event.transform)
      }))
      .append('g')
      .attr('class', 'world');

    let div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    map.selectAll('path')
      .data(this.worldMapJsonData.features)
      .enter().append('path')
      .attr('d', this.worldMapPath)
      .style("fill", function (d) { return 'lightBlue' })
      .style('stroke', 'white')
      .style('stroke-width', 1.5)
      .style("opacity", 0.8).style("stroke", "white")
      .style('stroke-width', 0.3)
      .on('mouseover', function (d) {
        // tip.show(d); 
        let myd: any;
        myd = d;
        div.transition().duration(300)
          .style("opacity", 1)
        div.text(myd.properties.name)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 30) + "px")
          .style("background-color", "white")
          .style("width", "5vw")
          .style("height", "3vh")
          .style("display", "block");

        d3.select(this)
          .style("opacity", 1)
          .style("stroke", "white")
          .style("stroke-width", 3);
      }).on('mouseout', function (d) {
        // tip.hide(d);
        div.style("display", "none");
        d3.select(this)
          .style("opacity", 0.8)
          .style("stroke", "white")
          .style("stroke-width", 0.3);
      });
  }

  createIndiaMap() {
    let colors = d3.scaleOrdinal().range(["red", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "green"]);
    var populationById = {};
    const element = this.chartContainer.nativeElement;
    const map = d3.select(element).append('svg')
      .attr('width', this.w)
      .attr('height', this.h)
      .call(d3.zoom().on("zoom", function () {
        map.attr("transform", d3.event.transform)
      }))
      .append('g')
      .attr('class', 'india');
    let div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    map.selectAll('path')
      .data(this.indiaMapJsonData.features)
      .enter().append('path')
      .attr('d', this.path)
      .style("fill", function (d) {
        let myd: any;
        myd = d;
        return myd.color
      })
      .style('stroke', 'white')
      .style('stroke-width', 1.5)
      .style("opacity", 0.8).style("stroke", "white")
      .style('stroke-width', 0.3)
      .on('mouseover', function (d) {
        // tip.show(d);
        let myd: any;
        myd = d;
        div.transition().duration(300)
          .style("opacity", 1)
        div.text(myd.id + " : " + myd.total)
          .style("left", (d3.event.pageX) + "px")
          .style("top", (d3.event.pageY - 30) + "px")
          .style("background-color", "white")
          .style("color", "black")
          .style("width", "250px")
          .style("height", "100px")
          .style("display", "block")
          .style("padding", "1%")
          .style("border-radius", "5px")
          .style("margin", "1%");

        d3.select(this)
          .style("opacity", 1)
          .style("stroke", "white")
          .style("stroke-width", 3);
      }).on('mouseout', function (d) {
        // tip.hide(d);
        div.style("display", "none");
        d3.select(this)
          .style("opacity", 0.8)
          .style("stroke", "white")
          .style("stroke-width", 0.3);
      });;

    // this.sanitizer.bypassSecurityTrustHtml(india);
  }

}
