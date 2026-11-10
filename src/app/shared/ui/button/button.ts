import { Component, computed, input } from '@angular/core';

export type ButtonVariant =
  'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'pill-filter' | 'glass-action';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'full';

@Component({
  selector: 'ptf-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
  host: {
    '[class.flex]': 'isFullWidth()',
    '[class.w-full]': 'isFullWidth()',
    '[class.inline-flex]': '!isFullWidth()',
  },
})
export class Button {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('md');
  type = input<'button' | 'submit' | 'reset'>('button');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  customClass = input<string>('');
  ariaLabel = input<string>();

  protected readonly isFullWidth = computed(() => this.size() === 'full');

  protected buttonClasses = computed(() => {
    // Estilos comunes: layout, tipografía, transiciones y estados.
    // No incluye márgenes ni ancho: eso lo decide quien usa el botón.
    const baseStyles =
      'inline-flex items-center justify-center gap-2 font-label-md text-label-md transition-all duration-200 focus:outline-none focus:bg-primary focus:text-on-primary focus:shadow-lg focus:shadow-primary/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'px-3 py-1.5 rounded-lg',
      md: 'px-4 py-2 rounded-xl',
      lg: 'px-6 py-3 rounded-xl',
      full: 'w-full py-3 rounded-xl',
    };

    const variantStyles: Record<ButtonVariant, string> = {
      primary: 'bg-primary text-on-primary hover:bg-primary-container',
      secondary: 'bg-secondary text-on-secondary hover:bg-secondary-container',
      outline: 'border border-outline text-on-surface hover:bg-surface-container-high',
      danger: 'bg-error-container text-on-error-container hover:opacity-90',

      // Filtro tipo píldora: maneja su propio padding y radio.
      'pill-filter':
        'shrink-0 rounded-full border border-outline-variant/30 bg-surface-container px-5 py-2 text-on-surface-variant hover:border-primary/50',

      // Acción ancha con grupo para animar el icono. El ancho lo da size="full".
      'glass-action':
        'border border-outline-variant/30 bg-surface-variant/50 text-on-surface hover:bg-surface-variant group/btn',

      ghost: 'border border-primary text-primary hover:bg-primary hover:text-on-primary',
    };

    const usesOwnSpacing = this.variant() === 'pill-filter';

    return [
      baseStyles,
      variantStyles[this.variant()],
      usesOwnSpacing ? '' : sizeStyles[this.size()],
      this.customClass(),
    ]
      .filter(Boolean)
      .join(' ');
  });
}
