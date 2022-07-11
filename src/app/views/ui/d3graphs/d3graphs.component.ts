import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
// declare const d3: any;
// import {d3, map} from '@d3/world-map'

@Component({
  selector: 'app-d3graphs',
  templateUrl: './d3graphs.component.html',
  styleUrls: ['./d3graphs.component.css']
})
export class D3graphsComponent implements OnInit {

  @ViewChild('chart') private chartContainer: ElementRef;

  @ViewChild('world') private worldMap: ElementRef;

  jsonData: any;
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



  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.http.get('../../../../assets/data/states.json').subscribe(json => {
      this.jsonData = json;
      this.createMap();
    });
    this.http.get('../../../../assets/data/world_map.json').subscribe(json => {
      this.worldMapJsonData = json;
      this.createWorldMap();
    });
  }

  initialize() {
    this.proj.scale(6700);
    this.proj.translate([-1240, 720]);
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
          .style("width", "150px")
          .style("height", "50px")
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

  createMap() {
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

      // map.append("text")
      //       .attr("fill", "black")
      //       .attr("transform", function(d) {
      //           var bbox = this.previousSibling.getBBox();
      //           return "translate(" + (bbox.x + bbox.width/2) + "," + (bbox.y + bbox.height/2) + ")";
      //       })
      //       .attr("text-anchor", "middle")
      //       .attr("dy", ".35em")
      //       .text(function(d) {
      //           return d.id;
      //       });

    map.selectAll('path')
      .data(this.jsonData.features)
      .enter().append('path')
      .attr('d', this.path)
      .style("fill", function (d) { 
        let myd: any;
        myd =d;
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
          .style("width", "150px")
          .style("height", "50px")
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
      });;

    // this.sanitizer.bypassSecurityTrustHtml(india);
  }
}
