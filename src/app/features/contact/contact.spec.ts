import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contact } from './contact';

describe('Contact', () => {
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the email link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a[href^="mailto:"]');
    expect(link).toBeTruthy();
  });
});
