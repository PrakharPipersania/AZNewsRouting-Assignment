import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriDetailsComponent } from './categori-details.component';

describe('CategoriDetailsComponent', () => {
  let component: CategoriDetailsComponent;
  let fixture: ComponentFixture<CategoriDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
