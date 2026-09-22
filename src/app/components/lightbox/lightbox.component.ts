import { Component, HostListener, computed, inject, input, output } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { LocalizePipe } from '../../core/pipes/localize.pipe';
import { LocalizeListPipe } from '../../core/pipes/localize-list.pipe';
import { Project } from '../../core/models/project.model';
import { IconComponent } from '../../shared/icon.component';

const SWIPE_THRESHOLD_PX = 40;

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [LocalizePipe, LocalizeListPipe, IconComponent],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss'
})
export class LightboxComponent {
  readonly project = input.required<Project>();
  readonly index = input.required<number>();

  readonly close = output<void>();
  readonly indexChange = output<number>();

  private readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;

  readonly activeImage = computed(() => this.project().images[this.index()]);

  private touchStartX = 0;

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close.emit();
    } else if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }

  next(): void {
    const total = this.project().images.length;
    this.indexChange.emit((this.index() + 1) % total);
  }

  prev(): void {
    const total = this.project().images.length;
    this.indexChange.emit((this.index() - 1 + total) % total);
  }

  select(i: number): void {
    this.indexChange.emit(i);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    const deltaX = event.changedTouches[0].clientX - this.touchStartX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX) {
      return;
    }
    if (deltaX < 0) {
      this.next();
    } else {
      this.prev();
    }
  }
}
