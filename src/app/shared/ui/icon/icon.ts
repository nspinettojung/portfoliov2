import { Component, computed, input } from '@angular/core';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'ptf-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  host: { class: 'inline-flex items-center justify-center' },
})
export class Icon {
  name = input.required<string>();
  size = input<IconSize>('md');
  filled = input<boolean>(false);
  ariaLabel = input<string>();

  protected iconClasses = computed(() => {
    const sizeStyles: Record<IconSize, string> = {
      sm: 'text-[16px]',
      md: 'text-[20px]',
      lg: 'text-[24px]',
      xl: 'text-[32px]',
    };

    return [
      'material-symbols-outlined leading-none',
      sizeStyles[this.size()],
      this.filled() ? 'is-filled' : '',
    ]
      .filter(Boolean)
      .join(' ');
  });
}
