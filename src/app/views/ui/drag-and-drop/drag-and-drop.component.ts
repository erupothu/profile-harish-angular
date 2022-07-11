import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  video_carousels = [];
  image_carousels = [];
  multiColumnText = [];
  logoSections = [];
  testimonials = [];
  homePage = [
    {id: 1, name: 'video_carousels', object: this.video_carousels},
    {id: 2, name: 'image_carousels', object: this.image_carousels},
    {id: 3, name: 'multiColumnText', object: this.multiColumnText},
    {id: 4, name: 'logoSections', object: this.logoSections},
    {id: 5, name: 'testimonials', object: this.testimonials},
  ]; //'video_carousel ', 'image_carousel', 'mutli_column_text', 'logo_Section', 'testimonial'
  constructor() { }

  ngOnInit(): void {
     const video_carousel = {
      name: 'video_carousel',
      title: 'video title',
      imageUrl: '',
      videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY'
    }
    this.video_carousels.push(video_carousel);
     const image_carousel = {
      name: 'image_carousel',
      title: 'image title',
      imageUrl: '',
      videoUrl: ''
    }
    this.image_carousels.push(image_carousel);
    const mutli_column_text = {
      name: 'mutli_column_text',
      headline: 'heading',
      text: 'text',
      background_color: 'gainsboro'
    }
    this.multiColumnText.push(mutli_column_text);
    const logo_Section = {
      name: 'logo_Section',
      logoUrl: '../../../../assets/png/cup-icon.png',
      link: 'http://vayaindia.com/',
    }
    this.logoSections.push(logo_Section);
     const testimonial = {
      name: 'testimonial',
      text: 'testimonial text',
      imageUrl: '../../../../assets/images/people/female_photo3.jpeg',
      attribution: 'attributution'
    }
    this.testimonials.push(testimonial);
  }
  homePageDrag(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.homePage, event.previousIndex, event.currentIndex);
  }

  videoCarouselsDrag(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.video_carousels, event.previousIndex, event.currentIndex);
  }
  addVideoCarouselSlide() {
    const slide = {
      name: 'video_carousel',
      title: 'video title',
      imageUrl: '',
      videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY'
    }
    this.video_carousels.push(slide);
  }

  imageCarouselsDrag(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.image_carousels, event.previousIndex, event.currentIndex);
  }
  addImageCarouselSlide() {
    const slide = {
      name: 'image_carousel',
      title: 'image title',
      imageUrl: '',
      videoUrl: ''
    }
    this.image_carousels.push(slide);
  }

  multiColumnTextDrag(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.multiColumnText, event.previousIndex, event.currentIndex);
  }
  addMultiColumnText() {
    const slide = {
      name: 'mutli_column_text',
      headline: 'heading',
      text: 'text',
      background_color: 'gainsboro'
    }
    this.multiColumnText.push(slide);
  }

  logoSectionDrag(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.logoSections, event.previousIndex, event.currentIndex);
  }
  addlogoSection() {
    const slide = {
      name: 'logo_Section',
      logoUrl: '../../../../assets/png/cup-icon.png',
      link: 'http://vayaindia.com/',
    }
    this.logoSections.push(slide);
  }

  testimonialDrag(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.testimonials, event.previousIndex, event.currentIndex);
  }
  addTestimonials() {
    const slide = {
      name: 'testimonial',
      text: 'testimonial text',
      imageUrl: '../../../../assets/images/people/female_photo3.jpeg',
      attribution: 'attributution'
    }
    this.testimonials.push(slide);
  }

}
