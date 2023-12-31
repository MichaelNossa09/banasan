import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent  implements OnInit{

  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 5000;
  public selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void{
    setInterval(() => {
      if(this.selectedIndex === this.images.length - 1){
        this.selectedIndex = 0;
      }else{
        this.selectedIndex++;
      }
    }, this.slideInterval)
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
