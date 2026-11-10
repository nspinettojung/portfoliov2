import { Component, input, output } from '@angular/core';
import { Icon } from '../../ui/icon/icon';

@Component({
  selector: 'ptf-topbar',
  imports: [Icon],
  templateUrl: './topbar.html',
  host: { class: 'block' },
})
export class Topbar {
  title = input<string>('Inicio');
  availability = input<string>('Disponible para trabajar');
  menuClick = output<void>();
}
