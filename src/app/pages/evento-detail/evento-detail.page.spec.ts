import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import {EventoDetailPage } from './evento-detail.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';




describe('EventoDetailPage', () => {
  let component: EventoDetailPage;
  let fixture: ComponentFixture<EventoDetailPage>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoDetailPage],
      imports: [IonicModule.forRoot(),ReactiveFormsModule, FormsModule,
        CommonModule, RouterTestingModule,
         ComponentsModule,AngularFireModule.initializeApp(environment.firebaseConfig),
         AngularFirestoreModule]
    }).compileComponents();
    fixture = TestBed.createComponent(EventoDetailPage);
    component = fixture.componentInstance;
    component.evento={id:'4F9FR3viWiRCCk1tEgSn',nombre: '',
    descripcion: '',
    descripcionCorta: '',
    fechaInicio: '',
    fechaFin: '',
    ubicacion: '',
    foto: '',
    tipo: 1,
    linkContacto: '',
    mailContacto: '',
    nombreContacto: '',
    celularContacto: []};

    fixture.detectChanges();
      
  });

 

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
 
});


