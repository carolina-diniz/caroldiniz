import { Component } from '@angular/core';
import { NameService } from '../../../services/name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name:string;

  constructor(private nameService: NameService) {
    this.name = nameService.getName()
  }
}
