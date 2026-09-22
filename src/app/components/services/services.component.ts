import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { SERVICES } from '../../core/data/services.data';
import { LocalizePipe } from '../../core/pipes/localize.pipe';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LocalizePipe, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly services = SERVICES;
}
