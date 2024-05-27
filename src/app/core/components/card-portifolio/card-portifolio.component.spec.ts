import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPortifolioComponent } from './card-portifolio.component';

describe('CardPortifolioComponent', () => {
  let component: CardPortifolioComponent;
  let fixture: ComponentFixture<CardPortifolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPortifolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPortifolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
