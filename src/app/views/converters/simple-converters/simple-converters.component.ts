import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from '../../reports/analytics/analytics.service';

@Component({
  selector: 'app-simple-converters',
  templateUrl: './simple-converters.component.html',
  styleUrls: ['./simple-converters.component.css']
})
export class SimpleConvertersComponent implements OnInit {

  pound = 0;
  kilogram = 0;
  ounces = 0;
  grams = 0;
  stones = 0;

  fahrenheit = 0;
  celsius = 0;
  kelvin = 0;

  meters = 0
  feet = 0;
  inches = 0;
  cm = 0;
  yards = 0
  kilometers = 0
  miles = 0;

  MPH = 0;
  KPH = 0;
  knots = 0;
  mach = 0;
  constructor() {
  }

  ngOnInit() {
  }

  poundToOthers() {
    this.kilogram = this.pound / 2.2046;
    this.ounces = this.pound * 16;
    this.grams = this.pound / 0.0022046;
    this.stones = this.pound * 0.071429;
  }
  kilogramToOthers() {
    this.pound = this.kilogram * 2.2046
    this.ounces = this.kilogram * 35.274
    this.grams = this.kilogram * 1000
    this.stones = this.kilogram * 0.1574
  }
  ouncesToOthers() {
    this.kilogram = this.ounces / 35.274
    this.pound = this.ounces * 0.0625
    this.grams = this.ounces / 0.035274
    this.stones = this.ounces * 0.0044643
  }
  stonesToOthers() {
    this.kilogram = this.stones / 0.15747
    this.ounces = this.stones * 224
    this.pound = this.stones * 14
    this.grams = this.stones / 0.00015747
  }

  gramsToOthers() {
    this.kilogram = this.grams / 1000
    this.ounces = this.grams * 0.035274
    this.pound = this.grams * 0.0022046
    this.stones = this.grams * 0.00015747
  }

  fahrenheitToOthers() {
    // this.fahrenheit = 0;
    this.celsius = (this.fahrenheit - 32) / 1.8;
    this.kelvin = ((this.fahrenheit - 32) / 1.8) + 273.15;
  }

  celsiusToOthers() {
    this.fahrenheit = (this.celsius * 1.8) + 32;
    // this.celsius = (this.fahrenheit-32)/1.8;
    this.kelvin = this.celsius + 273.15
  }

  kelvinToOthers() {
    this.fahrenheit = ((this.kelvin - 273.15) * 1.8) + 32;
    this.celsius = this.kelvin - 273.15
    // this.kelvin = ((this.fahrenheit-32)/1.8)+273.15;
  }

  metersToOthers() {
    // this.meters = this.feet/3.2808;
    this.feet = this.meters * 3.2808;
    this.inches = this.meters ** 39.370;
    this.cm = this.meters / 0.01;
    this.yards = this.meters * 1.0936;
    this.kilometers = this.meters / 1000;
    this.miles = this.meters * 0.00062137;
  }
  feetToOthers() {
    this.meters = this.feet / 3.2808;
    // this.feet = 0;
    this.inches = this.feet * 12;
    this.cm = this.feet / 0.032808;
    this.yards = this.feet * 0.33333;
    this.kilometers = this.feet / 3280.8;
    this.miles = this.feet * 0.00018939;
  }
  inchesToOthers() {
    this.meters = this.inches / 39.370;
    this.feet = this.inches * 0.083333;
    // this.inches = this.inches*12;
    this.cm = this.inches / 0.39370;
    this.yards = this.inches * 0.027778;
    this.kilometers = this.inches / 39370;
    this.miles = this.inches * 0.000015783;
  }
  cmToOthers() {
    this.meters = this.cm / 100;
    this.feet = this.cm * 0.032808;
    this.inches = this.cm * 0.39370;
    // this.cm = this.feet/0.032808;
    this.yards = this.cm * 0.010936;
    this.kilometers = this.cm / 100000;
    this.miles = this.cm * 0.0000062137;
  }

  yardsToOthers() {
    this.meters = this.yards / 1.0936;
    this.feet = this.yards * 3;
    this.inches = this.yards * 36;
    this.cm = this.yards / 0.010936;
    // this.yards = this.yards*0.33333;
    this.kilometers = this.yards / 1093.6;
    this.miles = this.yards * 0.00056818;
  }

  kilometersToOthers() {
    this.meters = this.kilometers * 1000;
    this.feet = this.kilometers * 3280.8;
    this.inches = this.kilometers * 39370;
    this.cm = this.kilometers * 100000;
    this.yards = this.kilometers * 1093.6;
    // this.kilometers = this.feet/3280.8;
    this.miles = this.kilometers * 0.62137;
  }

  milesToOthers() {
    this.meters = this.miles / 0.00062137;
    this.feet = this.miles * 5280;
    this.inches = this.miles * 63360;
    this.cm = this.miles / 0.0000062137;
    this.yards = this.miles * 1760;
    this.kilometers = this.miles / 0.62137;
    // this.miles = this.feet*0.00018939;
  }

  MPHToOthers() {
     // this.MPH = 0;
    this.KPH = this.MPH *1.609344;
    this.knots = this.MPH /1.150779;
    this.mach = this.MPH /761.207;
  }
  KPHToOthers() {
     this.MPH = this.KPH/1.609344;
    // this.KPH = this.KPH *1.609344;
    this.knots = this.KPH/1.852;
    this.mach = this.KPH/1225.044;
  }

  knotsToOthers() {
     this.MPH = this.knots*1.150779;
    this.KPH = this.knots*1.852;
    // this.knots = this.MPH /1.150779;
    this.mach = this.knots/661.4708;
  }

  machToOthers() {
     this.MPH = this.mach*761.207;
    this.KPH = this.mach*1225.044;
    this.knots = this.mach*661.4708;
    // this.mach = this.MPH /761.207;
  }

}
