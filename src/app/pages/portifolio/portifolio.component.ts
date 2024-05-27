import { Component } from '@angular/core';
@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css',
})
export class PortifolioComponent {
  portifolioData = [
    {
      src: 'https://find-a-friend-lyart.vercel.app/',
      title: 'Find a Friend',
      imgSrc: '../../../assets/image/portifolio/Screenshot_36.png',
      description:
        'Um site criado como trabalho final de um curso de programação em 2020.',
    },
    {
      src: 'https://guardiaopet.vercel.app/',
      title: 'Gardião Pet',
      imgSrc: '../../../assets/image/portifolio/Screenshot_37.png',
      description:
        'Um site criado como trabalho final de um curso de programação em 2020.',
    },
    {
      src: '#',
      title: 'Bahamas Bot',
      imgSrc: '../../../assets/image/portifolio/Screenshot_38.png',
      description:
        'Um site criado como trabalho final de um curso de programação em 2020.',
    },
  ];
}
