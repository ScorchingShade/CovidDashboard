import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotableComponent } from './infotable.component';

describe('InfotableComponent', () => {
  let component: InfotableComponent;
  let fixture: ComponentFixture<InfotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
