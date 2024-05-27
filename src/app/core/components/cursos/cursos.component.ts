import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent {
  @Input() titulo!: string;
  @Input() conclusao!: string;
  @Input() descricao!: string;
  @Input() src!: string;
}
