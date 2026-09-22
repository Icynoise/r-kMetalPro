import { Injectable, signal, computed } from '@angular/core';
import { Lang } from '../models/project.model';
import { UI_TEXT } from '../data/ui-text.data';

const STORAGE_KEY = 'rk-metalpro-lang';
const SUPPORTED: Lang[] = ['de', 'en', 'sr'];

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly langSignal = signal<Lang>(this.detectInitialLang());

  readonly lang = this.langSignal.asReadonly();
  readonly text = computed(() => UI_TEXT[this.langSignal()]);

  constructor() {
    document.documentElement.lang = this.langSignal();
  }

  setLang(lang: Lang): void {
    this.langSignal.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private browsing / storage disabled — ignore */
    }
    document.documentElement.lang = lang;
  }

  private detectInitialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && SUPPORTED.includes(saved)) {
        return saved;
      }
    } catch {
      /* ignore */
    }
    return 'de';
  }
}
