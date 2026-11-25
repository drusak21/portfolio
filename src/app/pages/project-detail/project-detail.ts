import { Component, computed, effect, inject, input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';
import { Icon } from '../../core/icon';
import { RevealDirective } from '../../core/reveal.directive';
import { FEATURED_PROJECTS, findProject } from '../../data/projects';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Icon, RevealDirective],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
})
export class ProjectDetail {
  /** Bound from the `:slug` route param. */
  readonly slug = input<string>('');

  protected readonly i18n = inject(I18n);
  private readonly title = inject(Title);

  protected readonly project = computed(() => findProject(this.slug()));

  protected readonly next = computed(() => {
    const idx = FEATURED_PROJECTS.findIndex((p) => p.slug === this.slug());
    return idx < 0 ? undefined : FEATURED_PROJECTS[(idx + 1) % FEATURED_PROJECTS.length];
  });

  constructor() {
    effect(() => {
      const p = this.project();
      this.title.setTitle(p ? `${p.title} — Dorian Rušak` : 'Dorian Rušak');
    });
  }
}
