import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { EventoCardComponent } from './evento-card.component';
import {RouterTestingModule} from '@angular/router/testing';
import { ComponentRef } from '@angular/core';
import {IEvento} from  './../../models/evento.interface'
describe('EventoCardComponent', () => {
  let component: EventoCardComponent;
  let fixture: ComponentFixture<EventoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoCardComponent ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoCardComponent);
    component = fixture.componentInstance;
    component.evento={id:'3gwNFdSQ55fbEX5Xk7cN',
    nombre: '',
   descripcion: '',
   descripcionCorta: '',
   fechaInicio: '',
   fechaFin: '',
   ubicacion: '',
   foto: '',
   tipo: 1,
   linkContacto:'',
   mailContacto: '',
   nombreContacto: '',
   celularContacto: [] };
    fixture.detectChanges();
  }));

  it('should create', () => {
 
    expect(component).toBeTruthy();
  });
  afterEach(() => {
    TestBed.resetTestingModule();
});
});
