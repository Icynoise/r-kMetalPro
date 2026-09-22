import { Component, HostListener, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { Lang } from '../../core/models/project.model';
import { CONTACT_INFO } from '../../core/data/contact-info.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly logo = CONTACT_INFO.logo;

  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);

  readonly languages: { code: Lang; label: string }[] = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
    { code: 'sr', label: 'SR' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  setLang(lang: Lang): void {
    this.i18n.setLang(lang);
  }
}
