import { Component, computed, inject, signal } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { PROJECTS } from '../../core/data/projects.data';
import { Project } from '../../core/models/project.model';
import { ProjectFilterKey } from '../../core/data/ui-text.data';
import { LocalizePipe } from '../../core/pipes/localize.pipe';
import { LocalizeListPipe } from '../../core/pipes/localize-list.pipe';
import { RevealDirective } from '../../shared/reveal.directive';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { IconComponent } from '../../shared/icon.component';

type FilterKey = ProjectFilterKey;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LocalizePipe, LocalizeListPipe, RevealDirective, LightboxComponent, IconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly i18n = inject(TranslationService);
  readonly text = this.i18n.text;
  readonly projects = PROJECTS;

  readonly activeFilter = signal<FilterKey>('all');
  readonly activeProject = signal<Project | null>(null);
  readonly activeImageIndex = signal(0);

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === filter);
  });

  setFilter(filter: FilterKey): void {
    this.activeFilter.set(filter);
  }

  openProject(project: Project): void {
    this.activeProject.set(project);
    this.activeImageIndex.set(0);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.activeProject.set(null);
    document.body.style.overflow = '';
  }

  setImageIndex(index: number): void {
    this.activeImageIndex.set(index);
  }
}
