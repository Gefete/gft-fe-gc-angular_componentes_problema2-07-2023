import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontactComponent } from './formcontact.component';

describe('FormcontactComponent', () => {
  let component: FormcontactComponent;
  let fixture: ComponentFixture<FormcontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcontactComponent]
    });
    fixture = TestBed.createComponent(FormcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
