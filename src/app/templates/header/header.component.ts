import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(){
    this.getLanguage();
  }
  lang : any = 'es';

  show(item: string){
    if(item == 'banasan'){
      const banasan = document.querySelector('.items-banasan');
      const servicios = document.querySelector('.items-servicios');
      servicios?.classList.remove('show');
      banasan?.classList.toggle('show');
    }else{
      const banasan = document.querySelector('.items-banasan');
      const servicios = document.querySelector('.items-servicios');
      servicios?.classList.toggle('show');
      banasan?.classList.remove('show');
    }
  }

  changeLanguage(idioma: string){
    localStorage.setItem('lang', idioma);
    window.location.reload();
  }
  getLanguage(){
    if(localStorage.getItem('lang')){
      this.lang = localStorage.getItem('lang');
    }
  }
}
