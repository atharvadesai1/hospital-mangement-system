import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocboardComponent } from './docboard.component';

describe('DocboardComponent', () => {
  let component: DocboardComponent;
  let fixture: ComponentFixture<DocboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
