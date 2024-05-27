import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  name: string = 'Carolina'

  constructor() { }

  getName (): string {
    return this.name
  }
}
