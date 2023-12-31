import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CarouselComponent } from '../../carousel/carousel/carousel.component';
@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

  lang : any = 'es';
  constructor(private titleService: Title){
    this.getLanguage();
    if(this.lang == 'es'){
      this.titleService.setTitle('Banasan - Quiénes Somos');
    }else{
      this.titleService.setTitle('Banasan - About Us');
    }
  }

  getLanguage(){
    if(localStorage.getItem('lang')){
        this.lang = localStorage.getItem('lang');
    }
  }

  imagesAbout = [
    {imageSrc: '../../../assets/quienes-somos/contactenos_1.jpg' ,
    imageAlt: 'Image1'
    },
    {imageSrc: '../../../assets/quienes-somos/contactenos_2.jpg' ,
    imageAlt: 'Image1'
    },
    {imageSrc: '../../../assets/quienes-somos/contactenos_3.jpg' ,
    imageAlt: 'Image1'
    },
  ]
}
