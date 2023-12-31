import { Component } from '@angular/core';
import { HeaderComponent } from '../../templates/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { CarouselComponent } from '../../carousel/carousel/carousel.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, CarouselComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  lang: any = 'es'
  constructor(private titleService: Title){  
    this.getLanguage();
    if(this.lang == 'es'){
      this.titleService.setTitle('Banasan - Inicio');
    }else{
      this.titleService.setTitle('Banasan - Home');
    }
  }

  imagesMateriales = [
    {imageSrc: '../../../assets/materiales/materiales_y_suministros.jpg' ,
    imageAlt: 'Materiales y Suministros - Banasan'
    },
    {imageSrc: '../../../assets/materiales/mat_sum_1.jpg' ,
    imageAlt: 'Image2'
    },
    {imageSrc: '../../../assets/materiales/mat_sum_2.jpg' ,
    imageAlt: 'Image2'
    },
    {imageSrc: '../../../assets/materiales/mat_sum_3.jpg' ,
    imageAlt: 'Image2'
    },
    {imageSrc: '../../../assets/materiales/mat_sum_4.jpg' ,
    imageAlt: 'Image2'
    },
  ]

  imagesOperaciones = [
    {imageSrc: '../../../assets/operaciones_portuarias/operaciones_logisticas.jpg' ,
    imageAlt: 'Operaciones Logísticas - Banasan'
    },
    {imageSrc: '../../../assets/operaciones_portuarias/operacion_p_1.jpg' ,
    imageAlt: 'Image2'
    },
    {imageSrc: '../../../assets/operaciones_portuarias/operacion_p_2.jpg' ,
    imageAlt: 'Image3'
    },
    {imageSrc: '../../../assets/operaciones_portuarias/operacion_p_3.jpg' ,
    imageAlt: 'Image4'
    },
    {imageSrc: '../../../assets/operaciones_portuarias/operacion_p_4.jpg' ,
    imageAlt: 'Image5'
    },
  ]

  imagesTransporte = [
    {imageSrc: '../../../assets/transporte/transporte.jpg' ,
    imageAlt: 'Transporte de Frutas e Insumos - Banasan'
    },
    {imageSrc: '../../../assets/transporte/transporte_1.jpg' ,
    imageAlt: 'Image2'
    },
    {imageSrc: '../../../assets/transporte/transporte_2.jpg' ,
    imageAlt: 'Image3'
    },
    {imageSrc: '../../../assets/transporte/transporte_3.jpg' ,
    imageAlt: 'Image4'
    },
    {imageSrc: '../../../assets/transporte/transporte_4.jpg' ,
    imageAlt: 'Image5'
    },
  ]

  imagesSanidad = [
    {imageSrc: '../../../assets/sanidad/aspersion_aerea.jpg',
    imageAlt: 'Sanidad Vegetal - Banasan'
    },
    {imageSrc: '../../../assets/sanidad/aspersion_2.jpg' ,
    imageAlt: 'Image2'
    },
    {imageSrc: '../../../assets/sanidad/aspersion_3.jpg' ,
    imageAlt: 'Image3'
    },
    {imageSrc: '../../../assets/sanidad/aspersion_4.jpg' ,
    imageAlt: 'Image4'
    },
  ]


  getLanguage(){
    if(localStorage.getItem('lang')){
        this.lang = localStorage.getItem('lang');
    }
  }
  
}
