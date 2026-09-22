import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { LocalizedText } from '../models/project.model';

@Pipe({
  name: 'localize',
  standalone: true,
  pure: false
})
export class LocalizePipe implements PipeTransform {
  private readonly i18n = inject(TranslationService);

  transform(value: LocalizedText | undefined | null): string {
    if (!value) {
      return '';
    }
    return value[this.i18n.lang()];
  }
}
