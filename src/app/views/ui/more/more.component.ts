import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  direction = 'ltr';
  customTimeline = [
    {
      heading: '2017',
      content: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, '+
      'vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    },
    {
      heading: '2015',
      content: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam'
    },
    {
      heading: '2016',
      content: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    },
    {
      heading: '2012',
      content: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    },
    {
      heading: '2011',
      content: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    },
    {
      heading: '2007',
      content: 'Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.'
    }
  ];
   events = [
    {
      id: 0,
      title: 'My last travel',
      content: 'There are so much countries in the world...',
      date: '2016 - 2019',
      icon: 'https://image.flaticon.com/icons/svg/214/214335.svg'
    },
    {
      id: 1,
      title: 'My Job',
      content: 'The best job I could possibly get!',
      date: '2015 - 2016',
      icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg'
    },
    {
      id: 2,
      title: 'My Education',
      content: 'This is the university I went...',
      date: '2011',
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    }
  ];
   color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 10;
  bufferValue = 75;
  scrolNumber = 0;
  overlayEffectFlag = false;
  constructor() { 
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

   scroll = (event: any): void => {
    this.scrolNumber = event.srcElement.scrollTop;
    let height = document.documentElement.scrollHeight;
    let scrolled = (this.scrolNumber / height) * 100;
    this.value = scrolled;
    // height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // console.log(event);
    // console.log('I am scrolling ' + number);
  };

}
