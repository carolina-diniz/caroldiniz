import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-portifolio',
  templateUrl: './card-portifolio.component.html',
  styleUrl: './card-portifolio.component.css',
})
export class CardPortifolioComponent {
  @Input() src!:string;
  @Input() title!: string;
  @Input() imgSrc!: string;
  @Input() description!: string;

  constructor() {
  }
}
