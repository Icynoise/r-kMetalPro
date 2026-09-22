import { Pipe, PipeTransform, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'localizeList',
  standalone: true,
  pure: false
})
export class LocalizeListPipe implements PipeTransform {
  private readonly i18n = inject(TranslationService);

  transform(value: { de: string[]; en: string[]; sr: string[] } | undefined | null): string[] {
    if (!value) {
      return [];
    }
    return value[this.i18n.lang()];
  }
}
