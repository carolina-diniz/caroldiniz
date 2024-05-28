import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {
  @Input() titulo!: string;
  @Input() instituicao!:string;
  @Input() conclusao!: string;
  @Input() horas!: string;
  @Input() descricao!: string;
  @Input() src!: string;
}
