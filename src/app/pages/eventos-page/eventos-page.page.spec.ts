import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
/*import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';*/

import { EventosPage } from './eventos-page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import {environment} from '../../../environments/environment';
describe('EventosPage', () => {
  let component: EventosPage;
  let fixture: ComponentFixture<EventosPage>;
 
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
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
