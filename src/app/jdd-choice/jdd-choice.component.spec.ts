import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JddChoiceComponent } from './jdd-choice.component';

describe('JddChoiceComponent', () => {
  let component: JddChoiceComponent;
  let fixture: ComponentFixture<JddChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JddChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JddChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
