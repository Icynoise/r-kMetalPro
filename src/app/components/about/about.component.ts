import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, IconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly image = 'assets/images/hero/about-building.jpg';
}
