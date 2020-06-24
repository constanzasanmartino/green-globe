import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EventosPage } from './eventos-page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import {  AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../../../environments/environment';
import { IEvento } from 'src/app/models/evento.interface';
import { ITipoEvento } from 'src/app/models/tipo-evento.interface';

describe('EventosPage', () => {
  let component: EventosPage;
  let fixture: ComponentFixture<EventosPage>;
  let tipo: ITipoEvento
  let jsonEventos : any[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosPage],
      imports: [IonicModule.forRoot(),ReactiveFormsModule,BrowserModule, 
        HttpClientModule,
        FormsModule,
       CommonModule,
        ComponentsModule,  AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosPage);
    component = fixture.componentInstance;
     
    fixture.detectChanges();
  });
 
  beforeEach(()=> {
   component.tipos=[
       {"id":1,"descripcion":" ", "icono" : "", "color" : "", "cheked":false},
       {"id":2,"descripcion":" ", "icono" : "", "color" : "", "cheked":false},
       {"id":3,"descripcion":" ", "icono" : "", "color" : "", "cheked":false},
       {"id":4,"descripcion":" ", "icono" : "", "color" : "", "cheked":false},
       {"id":5,"descripcion":" ", "icono" : "", "color" : "", "cheked":false}
      ];
    component.eventos=[];
    component.listaCompletaDeEventos=[];
    component.eventosFinalizados=[];
    component.esEnProgreso=false;
    jsonEventos=require('../../../assets/eventos.json');
    for (let i in jsonEventos) {
      const element = jsonEventos[i];
      component.listaCompletaDeEventos.push(element);
      component.eventos.push(element);
      component.eventosFinalizados.push(element);
    }
    });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('filtrado tipo de evento 1', () => {
    component.tipos[0].cheked=true;
    component.filtrar();
    expect(component.eventos.length).toEqual(1);
  });
  
  it('filtrado tipo de evento 5', () => {
    component.tipos[4].cheked=true;
    component.filtrar();
    expect(component.eventos.length).toEqual(2);
  });

  it('filtrado tipo de evento ninguno', () => {
    component.all=false;
    component.none=true;
    component.selectNoneTypes();
    component.filtrar();
    expect(component.eventos.length).toEqual(0);
  });

  it('filtrado tipo de evento todos', () => {
    component.all=true;
    component.none=false;
    component.selectAllTypes();
    component.filtrar();
    expect(component.eventos.length).toEqual(6);
  });
});
