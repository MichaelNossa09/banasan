import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-nuestras-certificaciones',
  standalone: true,
  imports: [],
  templateUrl: './nuestras-certificaciones.component.html',
  styleUrl: './nuestras-certificaciones.component.css'
})
export class NuestrasCertificacionesComponent {

  lang : any = 'es';
  constructor(private titleService : Title){
    this.getLanguage();
    if(this.lang == 'es'){
      this.titleService.setTitle('Banasan - Certificaciones');
    }else{
      this.titleService.setTitle('Banasan - Certifications');
    }
  }

  getLanguage(){
    if(localStorage.getItem('lang')){
      this.lang = localStorage.getItem('lang');
    }
  }
}
