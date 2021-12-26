import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseEntryComponent } from './verse-entry.component';

describe('VerseEntryComponent', () => {
  let component: VerseEntryComponent;
  let fixture: ComponentFixture<VerseEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerseEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
