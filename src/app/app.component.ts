import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'carol-app';
  numEstrelas = 10;
  estrelas: {left: String; delay: string }[] = []

  ngOnInit(): void {

    for (let i = 0; i < this.numEstrelas; i++) {
      this.estrelas.push({
        left: Math.random() * 100 + '%',
        delay: Math.random() * 25 + 's'
      })
    }
  }
}
