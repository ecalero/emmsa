import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhorroPage } from './ahorro.page';

describe('AhorroPage', () => {
  let component: AhorroPage;
  let fixture: ComponentFixture<AhorroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhorroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhorroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
