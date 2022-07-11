import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  @ViewChild('slidetext') slideText: ElementRef;
  @ViewChild('flipImage') flipImage: ElementRef;
  @ViewChild('nav') slider: NgImageSliderComponent;

  showNavigationArrows = false;
  showNavigationIndicators = false;
  itemsPerSlide = 3;
  interval = 20000;
  keyboard = true;
  pauseOnHover = true;
  wrap = true;
  activeId = 'secondSlide';
  topLeft = false;
  topRight = false;
  bottomLeft = false;
  bottomRight = false;
  textCenter = false;
  hover: false;
  slideType = 'top';
  selectedSlideClass = 'slide-left';
  selectedFlipType = 'xaxis';

  /* ng-image-slig */
  showSlider = true;
  sliderInfinite: Boolean = true;
  sliderImagePopup: Boolean = true;
  sliderArrowShow: Boolean = true;
  sliderAutoSlide: Number = 1;  // time between 1s to 5s
  sliderSlideImage: Number = 1;  // set how many images will move to left/right arrow click
  sliderAnimationSpeed: any = 1;
  sliderWidth: Number = 940;
  // sliderImageWidth: Number = 250;
  // sliderImageHeight: Number = 200;
  imageObject: Array<object> = [];
  imageSize = {
    width: 300,
    height: 300,
    space: 3
  }

  constructor(private elem: ElementRef) { }

  ngOnInit(): void {
    this.setImageObject();
    // this.selectedSlideClass = 'slide-top';
  }
  ngAfterViewInit() {
    // this.selectedSlideClass = 'slide-top';
  }

  // Move to specific slide
  navigateToSlide(item) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }

  mouseenterSlideText() {
    let ele = this.slideText.nativeElement;
    if (this.selectedSlideClass == 'slide-left' || this.selectedSlideClass == 'slide-right') {
      ele.style.width = '100%';
      ele.style.left = 0;
      // ele.style.height = '100%';
    } else {
      ele.style.height = '100%';
      // ele.style.width = '100%';
    }
  }
  mouseleavelideText() {
    let ele = this.slideText.nativeElement;
    if (this.selectedSlideClass == 'slide-left') {
      ele.style.width = 0;
      // ele.style.height = '100%';
    } else if (this.selectedSlideClass == 'slide-right') {
      ele.style.width = 0;
      ele.style.left = '100%';
      // ele.style.height = '100%';
    } else {
      ele.style.height = 0;
      // ele.style.width = '100%';
    }
  }

  selectSlideType(type) {
    let ele = this.slideText.nativeElement;
    ele.style.width = null;
    ele.style.height = null;
    ele.style.left = null;
    if (type === 'top') {
      this.selectedSlideClass = 'slide-top';
    }
    if (type === 'bottom') {
      this.selectedSlideClass = 'slide-bottom';
    }
    if (type === 'left') {
      this.selectedSlideClass = 'slide-left';
    }
    if (type === 'right') {
      this.selectedSlideClass = 'slide-right';
    }
  }

  selectFlipType(type) {
    let flip = this.flipImage.nativeElement;
    flip.style.transform = null;
    if (type == 'xaxis') {
      this.selectedFlipType = 'xaxis';
    } else {
      this.selectedFlipType = 'yaxis';
    }
  }

  flipInAxis() {
    let flip = this.flipImage.nativeElement;
    if (this.selectedFlipType == 'xaxis') {
      flip.style.transform = 'scaleX(-1)';
    } else {
      flip.style.transform = 'scaleY(-1)';
    }
  }
  flipOutAxis() {
    let flip = this.flipImage.nativeElement;
    if (this.selectedFlipType == 'xaxis') {
      flip.style.transform = 'scaleX(1)';
    } else {
      flip.style.transform = 'scaleY(1)';
    }
  }

  /* ng-image-slide */

  imageOnClick(index) {
    console.log('index', index);
  }

  arrowOnClick(event) {
    console.log('arrow click event', event);
  }

  lightboxArrowClick(event) {
    console.log('popup arrow click', event);
  }
  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
  onChangeHandler() {
    this.setImageObject();
    this.showSlider = false;
    setTimeout(() => {
      this.showSlider = true;
    }, 10);
  }

  setImageObject() {
    this.imageObject = [
      {
        image: '../../../../assets/images/people/felamle_photo2.jpeg',
        thumbImage: '../../../../assets/images/people/felamle_photo2.jpeg',
        title: 'image 1'
      },
      {
        image: '../../../../assets/images/people/female_photo.jpeg',
        thumbImage: '../../../../assets/images/people/female_photo.jpeg',
        title: 'image 2'
      },
      {
        image: '../../../../assets/images/people/female_photo3.jpeg',
        thumbImage: '../../../../assets/images/people/female_photo3.jpeg',
        title: 'image 3'
      },
      {
        image: '../../../../assets/images/people/male_photo1.jpeg',
        thumbImage: '../../../../assets/images/people/male_photo1.jpeg',
        title: 'image 4'
      },
      {
        image: '../../../../assets/images/people/male_photo2.jpeg',
        thumbImage: '../../../../assets/images/people/male_photo2.jpeg',
        title: 'image 5'
      },
      {
        image: '../../../../assets/images/people/male_photo3.jpeg',
        thumbImage: '../../../../assets/images/people/male_photo3.jpeg',
        title: 'image 6'
      },
      {
        video: 'https://youtu.be/6pxRHBw-k8M', // Youtube url
        thumbImage: '../../../../assets/images/people/harish3.jpg',
      },
      {
        video: '../../../../assets/videos/pre-wedding.mp4',
        posterImage: '../../../../assets/images/people/harish1.jpg', //Optional: You can use this key if you want to show video poster image in slider
        title: 'Image title'
      },
      {
        image: '../../../../assets/images/people/harish2.jpg',
        thumbImage: '../../../../assets/images/people/harish3.jpg',
        alt: 'Image alt',
        title: 'title of image'
      }
      // {
      //     image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
      //     thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
      //     title: 'Image title', //Optional: You can use this key if want to show image with title
      //     alt: 'Image alt' //Optional: You can use this key if want to show image with alt
      // }
    ];
  }

  changeWidth(event) {
    this.imageSize.width = event;
  }



}
