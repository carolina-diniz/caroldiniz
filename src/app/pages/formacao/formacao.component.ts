import { Component } from '@angular/core';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrl: './formacao.component.css',
})
export class FormacaoComponent {
  cursos = [
    {
      titulo: 'Imersão Inteligência Artificial da Alura e do Google',
      conclusao: 'Maio/2024',
      descricao: 'A escrever...',
      src: 'https://cursos.alura.com.br/immersion/certificate/user/caroldinizc21'
    },
    {
      titulo: 'Introdução ao Ecossistema Angular',
      conclusao: 'Maio/2024',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/Y80TXFPC'
    },
    {
      titulo: 'LifeCycle Hooks Angular',
      conclusao: 'Maio/2024',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/TNAVNFWQ'
    },
    {
      titulo: 'Materiais Complementares: Fundamentos de Front-end Componentizados',
      conclusao: 'Maio/2024',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/UMDBLA3A'
    },
    {
      titulo: 'Materiais Complementares: Introdução ao Angular',
      conclusao: 'Maio/2024',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/GEOPJAVZ'
    },
    {
      titulo: 'Trabalhando com Web Components no Front-end',
      conclusao: 'Maio/2024',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/WN0XSCNL'
    },
    {
      titulo: 'TypeScript para Angular',
      conclusao: 'Maio/2024',
      descricao: 'A escrever...',
      src: 'https://www.dio.me/certificate/PYGCZWUF'
    },
    {
      titulo: 'Smart Data Structures',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Março/2024',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/9196db37d0cb724f6287e4af1018ea68ca03c5c12ba0a655cbddcc68320bbfec'
    },
    {
      titulo: 'DB Developer',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Novembro/2023',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/38e6f71177a0b122dc03d77bcb048e5190f467c20069ce29e38d3715a94c5a09'
    },
    {
      titulo: 'Programming Basics',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Outubro/2023',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/239dec6242f09f0e3ed8355a4c0a8141467aef495e93282ada7df1f28812c6ab'
    },

  ];
}
