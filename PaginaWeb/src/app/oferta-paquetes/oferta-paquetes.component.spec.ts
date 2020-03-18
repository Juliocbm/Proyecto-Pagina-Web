import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaPaquetesComponent } from './oferta-paquetes.component';

describe('OfertaPaquetesComponent', () => {
  let component: OfertaPaquetesComponent;
  let fixture: ComponentFixture<OfertaPaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaPaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
