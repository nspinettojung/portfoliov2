import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { ProjectDetail } from './project-detail';

describe('ProjectDetail', () => {
  let fixture: ComponentFixture<ProjectDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetail],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({ slug: 'api-gateway' })) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetail);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the project matching the route param', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('API Gateway');
  });
});
