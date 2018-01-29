import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkContainerComponent } from './dark-container.component';

describe('DarkContainerComponent', () => {
  let component: DarkContainerComponent;
  let fixture: ComponentFixture<DarkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
