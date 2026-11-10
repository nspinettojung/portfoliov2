import { Component, computed, input } from '@angular/core';

export type BadgeVariant = 'primary' | 'neutral' | 'outline';

@Component({
  selector: 'ptf-badge',
  templateUrl: './badge.html',
  host: { class: 'inline-flex' },
})
export class Badge {
  variant = input<BadgeVariant>('neutral');
  text = input<string>();

  protected badgeClasses = computed(() => {
    const baseStyles = 'inline-flex items-center font-label-sm text-label-sm';

    const variantStyles: Record<BadgeVariant, string> = {
      primary:
        'rounded-full border border-primary/30 bg-primary/20 px-3 py-1 text-primary backdrop-blur-md',
      neutral:
        'rounded border border-outline-variant/10 bg-surface-variant/50 px-2 py-0.5 text-on-surface-variant',
      outline: 'rounded-full border border-outline-variant/30 px-3 py-1 text-on-surface-variant',
    };

    return `${baseStyles} ${variantStyles[this.variant()]}`;
  });
}
