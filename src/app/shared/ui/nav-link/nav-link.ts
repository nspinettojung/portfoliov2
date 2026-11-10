import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'ptf-nav-link',
  imports: [RouterLink, RouterLinkActive],
  styleUrl: './nav-link.css',
  templateUrl: './nav-link.html',
})
export class NavLink {
  title = input<string>('');
  icon = input<string>('');
  link = input<string>('/');
  exact = input<boolean>(false);
}
