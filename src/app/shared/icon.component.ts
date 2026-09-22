import { Component, input } from '@angular/core';

export type IconName = 'pin' | 'phone' | 'mail' | 'globe' | 'check-badge' | 'flag';

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
      @case ('globe') {
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/>
          <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" stroke-width="1.8"/>
          <path d="M3 12h18M4.5 7.5h15M4.5 16.5h15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      }
      @case ('check-badge') {
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5 14.3 4l2.9-.5 1.1 2.7 2.7 1.1-.5 2.9 1.5 2.3-1.5 2.3.5 2.9-2.7 1.1-1.1 2.7-2.9-.5L12 22.5 9.7 21l-2.9.5-1.1-2.7-2.7-1.1.5-2.9L2 12.5l1.5-2.3-.5-2.9 2.7-1.1L6.8 3.5l2.9.5L12 2.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          <path d="m8.5 12.5 2.4 2.4 4.6-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
      @case ('flag') {
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M5 21V4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M5 4.5c2-1.2 4-1.2 6 0s4 1.2 6 0v9c-2 1.2-4 1.2-6 0s-4-1.2-6 0v-9Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
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
