import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { IComentarioEvento } from '../../models/evento.interface';
import { ComentarioCardComponent } from './comentario-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ComentarioCardComponent', () => {
  let component: ComentarioCardComponent;
  let fixture: ComponentFixture<ComentarioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarioCardComponent);
    component = fixture.componentInstance;
    component.comentarioEvento={nombreUsuario:'', comentario:'Voy colaboro y despues tomamos unas birras.', fecha:''};
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
