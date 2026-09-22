import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { CONTACT_INFO } from '../../core/data/contact-info.data';
import { LocalizePipe } from '../../core/pipes/localize.pipe';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LocalizePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly contactInfo = CONTACT_INFO;
}
