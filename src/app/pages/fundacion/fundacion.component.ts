import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fundacion',
  standalone: true,
  imports: [],
  templateUrl: './fundacion.component.html',
  styleUrl: './fundacion.component.css'
})
export class FundacionComponent {
  lang: any = 'es'
  constructor(private titleService: Title){  
    this.getLanguage();
    if(this.lang == 'es'){
      this.titleService.setTitle('Banasan - Fundación');
    }else{
      this.titleService.setTitle('Banasan - Foundation');
    }
  }

  getLanguage(){
    if(localStorage.getItem('lang')){
        this.lang = localStorage.getItem('lang');
    }
  }
}
