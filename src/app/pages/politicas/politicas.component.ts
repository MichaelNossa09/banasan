import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-politicas',
  standalone: true,
  imports: [],
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent {

  lang: any='es';
  constructor(private titleService: Title){
    this.getLanguage();
    if(this.lang == 'es'){
      this.titleService.setTitle('Banasan - Políticas');
    }else{
      this.titleService.setTitle('Banasan - Policies');
    }
  }

  getLanguage(){
    if(localStorage.getItem('lang')){
      this.lang = localStorage.getItem('lang');
    }
  }


  // POLITICAS ACTIONS
  showIntegral(){
    const politicaText = document.querySelector('#politica-integral');
    politicaText?.classList.toggle('show');
  }
  showSeguridad(){
    const politicaText = document.querySelector('#politica-seguridad');
    politicaText?.classList.toggle('show');
  }
  showVial(){
    const politicaText = document.querySelector('#politica-seguridad-vial');
    politicaText?.classList.toggle('show');
  }
  showDatos(){
    const politicaText = document.querySelector('#politica-datos-personales');
    politicaText?.classList.toggle('show');
  }
  showLAFT(){
    const politicaText = document.querySelector('#politica-LAFT');
    politicaText?.classList.toggle('show');
  }
}
