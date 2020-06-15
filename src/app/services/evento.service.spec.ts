import { TestBed } from '@angular/core/testing';

import { EventoService } from './evento.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

describe('EventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule]
  }));

  it('should be created', () => {
    const service: EventoService = TestBed.get(EventoService);
    expect(service).toBeTruthy();
  });
});
