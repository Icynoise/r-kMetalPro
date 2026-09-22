import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly heroImage = 'assets/images/hero/about-building.jpg';
}
