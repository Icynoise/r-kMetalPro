import { Component, input } from '@angular/core';

export type IconName = 'pin' | 'phone' | 'mail' | 'calendar' | 'check-badge' | 'globe';

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    @switch (name()) {
      @case ('pin') {
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
          <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" stroke-width="1.8"/>
        </svg>
      }
      @case ('phone') {
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2 2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        </svg>
      }
      @case ('mail') {
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/>
          <path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
      @case ('calendar') {
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="5.5" width="17" height="15" stroke="currentColor" stroke-width="1.8"/>
          <path d="M3.5 10h17M8 3v4.5M16 3v4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      }
      @case ('check-badge') {
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 3.5 15 5h3v3l2.5 3-2.5 3v3h-3l-3 1.5L9 20.5H6v-3l-2.5-3L6 11.5v-3h3l3-1.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="m8.5 12.3 2.3 2.3 4.7-4.9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
      @case ('globe') {
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/>
          <ellipse cx="12" cy="12" rx="3.6" ry="8.5" stroke="currentColor" stroke-width="1.8"/>
          <path d="M3.5 12h17" stroke="currentColor" stroke-width="1.8"/>
        </svg>
      }
    }
  `,
  host: {
    class: 'app-icon',
    '[style.display]': "'inline-flex'"
  }
})
export class IconComponent {
  readonly name = input.required<IconName>();
}
