import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  conteudoescola1;
  conteudoescola2;


  constructor() {
  }

  ngOnInit() {
  }

  desaparecer(conteudoescola1) {
    if (conteudoescola1.style.display == 'none') {
      conteudoescola1.style.display = 'block';
    } else {
      conteudoescola1.style.display = 'none';
    }
  }

  desaparecer2(conteudoescola2) {
    if (conteudoescola2.style.display == 'none') {
      conteudoescola2.style.display = 'block';
    } else {
      conteudoescola2.style.display = 'none';
    }
  }

}
