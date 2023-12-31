import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  lang: any = 'es';
  constructor(){
    this.getLanguage();
  }

  getLanguage(){
    if(localStorage.getItem('lang')){
      this.lang = localStorage.getItem('lang');
    }
  }
}
