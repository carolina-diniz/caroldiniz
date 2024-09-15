import { Component } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css',
})
export class FormacaoComponent {
  cursos = [
        {
      titulo: 'Mobile Developer',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Março/2024',
      horas: '240',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/1b258eefda0fe408a64725d89d37ec181c10c3661e20abe0e4a0d338a052e44a'
    },
    {
      titulo: 'Smart Data Structures',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Março/2024',
      horas: '240',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/4286fd1498f02d01791cb03bcbe4b14c6243a5d9280ee2662c839c7d9fb0d630'
    },
    {
      titulo: 'DB Developer',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Novembro/2023',
      horas: '160',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/1fc555bb9f8fd7e3875cb6885bb3a1ac21015e3121551b6805ea5d0c357e5c6f'
    },
    {
      titulo: 'Programming Basics',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Outubro/2023',
      horas: '160',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/98f3464e7d43043f9cc54e26f51082c36cac4e41a088c8a8db00d93be7a9b23b'
    },
    {
      titulo: 'Imersão Inteligência Artificial da Alura e do Google',
      instituicao: 'Alura',
      conclusao: 'Maio/2024',
      horas: '6',
      descricao: 'A escrever...',
      src: 'https://cursos.alura.com.br/immersion/certificate/user/caroldinizc21'
    },
    {
      titulo: 'Introdução ao Ecossistema Angular',
      instituicao: 'Digital Inovation One - DIO',
      conclusao: 'Maio/2024',
      horas: '2',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/Y80TXFPC'
    },
    {
      titulo: 'LifeCycle Hooks Angular',
      instituicao: 'Digital Inovation One - DIO',
      conclusao: 'Maio/2024',
      horas: '2',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/TNAVNFWQ'
    },
    {
      titulo: 'Materiais Complementares: Fundamentos de Front-end Componentizados',
      instituicao: 'Digital Inovation One - DIO',
      conclusao: 'Maio/2024',
      horas: '1',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/UMDBLA3A'
    },
    {
      titulo: 'Materiais Complementares: Introdução ao Angular',
      instituicao: 'Digital Inovation One - DIO',
      conclusao: 'Maio/2024',
      horas: '1',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/GEOPJAVZ'
    },
    {
      titulo: 'Trabalhando com Web Components no Front-end',
      instituicao: 'Digital Inovation One - DIO',
      conclusao: 'Maio/2024',
      horas: '3',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/WN0XSCNL'
    },
    {
      titulo: 'TypeScript para Angular',
      instituicao: 'Digital Inovation One - DIO',
      conclusao: 'Maio/2024',
      horas: '3',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/PYGCZWUF'
    },
  ];
}
