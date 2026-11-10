import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Topbar } from './topbar';

describe('Topbar', () => {
  let component: Topbar;
  let fixture: ComponentFixture<Topbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Topbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    fixture.componentRef.setInput('title', 'Projects');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Projects');
  });
});
