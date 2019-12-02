import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclamCreatePage } from './reclam-create.page';

describe('ReclamCreatePage', () => {
  let component: ReclamCreatePage;
  let fixture: ComponentFixture<ReclamCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
