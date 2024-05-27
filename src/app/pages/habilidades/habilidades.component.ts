import { Component } from '@angular/core';
import { Skills } from '../../models/skills';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css',
})
export class HabilidadesComponent {
  title = 'Angular';
  description = `
  Conheci o Angular na faculdade, com a matéria de desenvolvimento mobile.
  `;

  skills: Skills[] = [
    {
      title: 'Angular',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      description: `
        Conheci o Angular na faculdade, com a matéria de desenvolvimento mobile.
      `,
    },
    {
      title: 'TypeScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      description: `
        Conheço o JavaScript há x anos e por causa do angular comecei a aprender TypeScript.
      `,
    },
    {
      title: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg',
      description: `
        Conheci em um curso
      `,
    },
    {
      title: 'Discord.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-plain.svg',
      description: `
        A biblioteca que mais tenho conhecimento atualmente.
      `,
    },
    {
      title: 'MySQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
      description: `
        Não possuo grande conhecimento, mas sei o suficiente
      `,
    },
    {
      title: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg',
      description: `
        Não possuo grande conhecimento, mas sei o suficiente
      `,
    },
    {
      title: 'Java',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
      description: `
        conheci na faculdade e me apaixonei, depois que apanhei para aprender orientação a objetos.
      `,
    },
  ];

  isHover: boolean = false;

  selectSkill(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.mouseOver()
  }

  mouseOver() {
    this.isHover = true;
  }

  mouseOut() {
    this.isHover = false;
  }
}
