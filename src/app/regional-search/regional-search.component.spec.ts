import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalSearchComponent } from './regional-search.component';

describe('RegionalSearchComponent', () => {
  let component: RegionalSearchComponent;
  let fixture: ComponentFixture<RegionalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
