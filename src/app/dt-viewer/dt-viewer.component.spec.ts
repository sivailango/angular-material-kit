import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtViewerComponent } from './dt-viewer.component';

describe('DtViewerComponent', () => {
  let component: DtViewerComponent;
  let fixture: ComponentFixture<DtViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
