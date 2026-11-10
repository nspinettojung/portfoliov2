import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Stack } from './stack';

describe('Stack', () => {
  let fixture: ComponentFixture<Stack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stack],
    }).compileComponents();

    fixture = TestBed.createComponent(Stack);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the skill groups', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('ptf-card').length).toBeGreaterThan(0);
  });
});
