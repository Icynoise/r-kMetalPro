import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly image = 'assets/images/hero/about-building.jpg';
}
