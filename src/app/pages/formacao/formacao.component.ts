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
    {
      titulo: 'Smart Data Structures',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Março/2024',
      horas: '240',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/9196db37d0cb724f6287e4af1018ea68ca03c5c12ba0a655cbddcc68320bbfec'
    },
    {
      titulo: 'DB Developer',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Novembro/2023',
      horas: '160',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/38e6f71177a0b122dc03d77bcb048e5190f467c20069ce29e38d3715a94c5a09'
    },
    {
      titulo: 'Programming Basics',
      instituicao: 'Descomplica Faculdade Digital',
      conclusao: 'Outubro/2023',
      horas: '160',
      descricao: 'A escrever...',
      src: 'https://certificados.descomplica.com.br/graduacao/239dec6242f09f0e3ed8355a4c0a8141467aef495e93282ada7df1f28812c6ab'
    },

  ];
}
