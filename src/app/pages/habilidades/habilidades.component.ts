import { Component } from '@angular/core';
import { Skills } from '../../models/skills';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css',
})
export class HabilidadesComponent {


  skills: Skills[] = [
    {
      title: 'Discord.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-plain.svg',
      description: `
      Criar bots interativos para Discord além de divertido, tornou-se uma pequena fonte de renda!
      A biblioteca Discord.js é minha ferramenta favorita para desenvolver desde jogos até sistemas completos de gerenciamento de servidores.
      Com destaque para o Bahamas bot e Mexico bot, ambos criados para comunidades do jogo GTA RP para gerenciamento das comunidades.
      `,
    },

    {
      title: 'TypeScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      description: `
      Minha trajetória com desenvolvimento backend teve início em 2019, criando bots interativos para Discord e Twitch usando Node.js.
      Em 2024, a necessidade de utilizar TypeScript em projetos Angular na faculdade me apresentou um novo universo!
      A tipagem estática se tornou indispensável para a construção de projetos robustos e organizados.
      `,
    },
    {
      title: 'Java',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',
      description: `
      Aprender Java e os conceitos da orientação a objetos foi um desafio recompensador na faculdade.
      Hoje, me sinto confortável e familiarizada com a linguagem, considerando-a como minha favorita no universo das linguagens fortemente tipadas.
      `,
    },
    {
      title: 'Angular',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
      description: `
      Meu aprendizado em Angular começou em março de 2023, durante a disciplina de Desenvolvimento Mobile com Ionic na faculdade.
      A experiência foi tão positiva que me incentivou a buscar aprofundar meu conhecimento com cursos extras,
      totalizando 30 horas de aprendizado e 9 certificados. Inclusive, este próprio portfólio online é um reflexo da minha paixão por Angular!
      `,
    },
    {
      title: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg',
      description: `
      A necessidade de armazenar dados de usuários em um jogo interativo para Discord me apresentou ao MongoDB.
      Desde então, este banco de dados não relacional se tornou meu favorito,
      e acabei reeencontrando o MongoDb em diversos cursos e projetos.
      `,
    },
    {
      title: 'MySQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',
      description: `
      Tive meu primeiro contato com MySQL durante a faculdade.
      Embora reconheça a necessidade de aprimorar minhas habilidades nesse banco de dados relacional,
      estou determinada a transformá-lo em um dos meus próximos focos de estudo.
      `,
    },
    {
      title: 'Python',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg',
      description: `
      Minha primeira linguagem de programação! Apesar de ter realizado poucos projetos em Python,
      a experiência me proporcionou uma base sólida sobre os principais conceitos de programação e sintaxe.
      Sendo também a linguagem que aprendi lógica de programação.
      `,
    },
  ];

  title = this.skills[3].title;
  description = this.skills[3].description;

  isHover: boolean = false;

  selectSkill(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.mouseOver();
  }

  mouseOver() {
    this.isHover = true;
  }

  mouseOut() {
    this.isHover = false;
  }
}
