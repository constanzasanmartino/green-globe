import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule }   from '@angular/forms';
import { NewEventPage } from './new-event.page';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewEventPage', () => {
  let component: NewEventPage;
  let fixture: ComponentFixture<NewEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventPage ],
      imports: [IonicModule.forRoot(), FormsModule,RouterTestingModule, AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NewEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
