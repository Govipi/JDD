import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JddCreateComponent } from './jdd-create.component';

describe('JddCreateComponent', () => {
  let component: JddCreateComponent;
  let fixture: ComponentFixture<JddCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JddCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JddCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
