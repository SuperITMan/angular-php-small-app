import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstPageComponent } from './my-first-page.component';
import { AppMaterialModule } from '../app-material.module';

describe('MyFirstPageComponent', () => {
  let component: MyFirstPageComponent;
  let fixture: ComponentFixture<MyFirstPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstPageComponent ],
      imports: [
        AppMaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
