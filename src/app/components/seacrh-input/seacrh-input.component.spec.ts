import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhInputComponent } from './seacrh-input.component';

describe('SeacrhInputComponent', () => {
  let component: SeacrhInputComponent;
  let fixture: ComponentFixture<SeacrhInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeacrhInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeacrhInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
