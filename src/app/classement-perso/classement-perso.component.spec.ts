import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementPersoComponent } from './classement-perso.component';

describe('ClassementPersoComponent', () => {
  let component: ClassementPersoComponent;
  let fixture: ComponentFixture<ClassementPersoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassementPersoComponent]
    });
    fixture = TestBed.createComponent(ClassementPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
