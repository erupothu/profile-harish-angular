import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  date = new Date()
  weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  visitedIps = [];
  deviceinfo = [];
  userAnalytics = [];
  visitorInfo: any;
  deviceInfo: any;;
  constructor(private http: HttpClient, private deviceService: DeviceDetectorService, private router: Router) { 
    this.deviceInfo = this.deviceService.getDeviceInfo();
    if(this.deviceService.isMobile()) {
      this.deviceInfo.device = 'Mobile';
    }
    if(this.deviceService.isTablet()) {
      this.deviceInfo.device = 'Tablet';
    }
    if(this.deviceService.isDesktop()) {
      this.deviceInfo.device = 'Desktop';
    }
  }

   getIpandLocationData() {
    return this.http.get('//ip-api.com/json');
  }

  saveVisitorsData() {
    this.getIpandLocationData().subscribe(data => {
      this.visitorInfo = data;
      let idx = this.userAnalytics.findIndex(data => data.date === this.date.toDateString(), true)
      if (idx < 0) {
        let visitedIpsObj = {
          date: this.date.toDateString(), ip: this.visitorInfo.query, country: this.visitorInfo.country,
          regionName: this.visitorInfo.regionName, visitedPages: [], deviceInfo: this.deviceInfo
        };
        visitedIpsObj.visitedPages.push(this.router.url)
        let userObj = {
          date: this.date.toDateString(), day: this.weekDay[this.date.getDay()], userCount: 1, eventsCount: 1, ipAddress: []
        };
        userObj.ipAddress.push(visitedIpsObj);
        this.userAnalytics.push(userObj);
      } else {
        let idx2 = this.userAnalytics[idx].ipAddress.findIndex(data => data.ip === this.visitorInfo.query, true);
        if (idx2 < 0) {
          let visitedIpsObj = {
            date: this.date.toDateString(), ip: this.visitorInfo.query, country: this.visitorInfo.country,
            regionName: this.visitorInfo.regionName, visitedPages: [], deviceInfo: this.deviceInfo
          };
          visitedIpsObj.visitedPages.push(this.router.url)
          this.userAnalytics[idx].ipAddress.push(visitedIpsObj);
          this.userAnalytics[idx].userCount += 1;
          this.userAnalytics[idx].eventsCount += 1;
        } else {
          this.userAnalytics[idx].eventsCount += 1;
          this.userAnalytics[idx].ipAddress[idx2].visitedPages.push(this.router.url)
        }

      }
    })
  }


  
}
