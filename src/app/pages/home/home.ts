import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';
import { Icon, IconName } from '../../core/icon';
import { PROFILE, SKILLS } from '../../core/profile';
import { RevealDirective } from '../../core/reveal.directive';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, RevealDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly skills = SKILLS;
  protected readonly featured = FEATURED_PROJECTS;
  protected readonly others = OTHER_PROJECTS;
  protected readonly copied = signal(false);

  protected readonly skillIcons: Record<string, IconName> = {
    'skills.frontend': 'code',
    'skills.backend': 'server',
    'skills.mobile': 'phone',
    'skills.tools': 'tools',
  };

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 1800);
    } catch {
      window.location.href = `mailto:${this.profile.email}`;
    }
  }
}
