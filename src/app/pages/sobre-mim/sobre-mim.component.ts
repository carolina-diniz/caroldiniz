import { Component } from '@angular/core';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrl: './sobre-mim.component.css'
})
export class SobreMimComponent {
  name:string;

  constructor(private nameService: NameService) {
    this.name = nameService.getName()
  }
}
