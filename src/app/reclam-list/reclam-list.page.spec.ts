import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclamListPage } from './reclam-list.page';

describe('ReclamListPage', () => {
  let component: ReclamListPage;
  let fixture: ComponentFixture<ReclamListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
