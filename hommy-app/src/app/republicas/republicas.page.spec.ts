import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepublicasPage } from './republicas.page';

describe('RepublicasPage', () => {
  let component: RepublicasPage;
  let fixture: ComponentFixture<RepublicasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepublicasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepublicasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
