import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclamEditPage } from './reclam-edit.page';

describe('ReclamEditPage', () => {
  let component: ReclamEditPage;
  let fixture: ComponentFixture<ReclamEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
