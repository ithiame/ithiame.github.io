import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurahEnComponent } from './surah-en.component';

describe('SurahEnComponent', () => {
  let component: SurahEnComponent;
  let fixture: ComponentFixture<SurahEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurahEnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurahEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
