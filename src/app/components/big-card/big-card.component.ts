import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://img2.migalhas.com.br/_MEDPROC_/https__img.migalhas.com.br__SL__gf_base__SL__empresas__SL__MIGA__SL__imagens__SL__2023__SL__05__SL__16__SL__cropped_25gjf0cl.vbj.jpg._PROC_CP75CCH31622400.jpg"
  cardTitle:string = "Fake news se expalham exponencialmente"
  cardDescription:string = "A globalização, apesar da série de benefícios, trouxe também malefícios e 'desinformação'"
  constructor() { }

  ngOnInit(): void {
  }

}
