import { Component, input, output } from '@angular/core';
import type { Project } from '../../../core/models/project.model';
import { Badge } from '../../../shared/ui/badge/badge';
import { Button } from '../../../shared/ui/button/button';
import { Card } from '../../../shared/ui/card/card';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'ptf-project-card',
  imports: [Badge, Button, Card, Icon],
  templateUrl: './project-card.html',
  host: { class: 'block h-full' },
})
export class ProjectCard {
  project = input.required<Project>();
  viewDetails = output<Project>();
}
