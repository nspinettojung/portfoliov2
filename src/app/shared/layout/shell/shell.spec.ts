import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Shell } from './shell';

describe('Shell', () => {
  let component: Shell;
  let fixture: ComponentFixture<Shell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shell],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Shell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the sidebar and topbar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ptf-sidebar')).toBeTruthy();
    expect(compiled.querySelector('ptf-topbar')).toBeTruthy();
  });
});
