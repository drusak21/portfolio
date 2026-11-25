import { Component, inject } from '@angular/core';
import { I18n } from '../core/i18n';
import { Icon } from '../core/icon';
import { PROFILE } from '../core/profile';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    <div class="container footer">
      <p>© {{ year }} {{ profile.name }} · {{ i18n.t('footer.built') }}</p>
      <div class="social">
        <a [href]="profile.github" target="_blank" rel="noopener" aria-label="GitHub"><app-icon name="github" /></a>
        <a [href]="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><app-icon name="linkedin" /></a>
        <a [href]="'mailto:' + profile.email" aria-label="Email"><app-icon name="mail" /></a>
      </div>
    </div>
  `,
  styles: `
    :host { display: block; border-top: 1px solid var(--border); }
    .footer {
      display: flex; flex-wrap: wrap; gap: 16px;
      align-items: center; justify-content: space-between;
      padding-block: 28px;
      color: var(--text-dim); font-size: 0.85rem;
    }
    .social { display: flex; gap: 6px; }
    .social a {
      display: grid; place-items: center; width: 38px; height: 38px;
      border-radius: 10px; font-size: 18px; color: var(--text-muted);
      transition: color .2s var(--ease), background .2s var(--ease);
    }
    .social a:hover { color: var(--accent); background: var(--accent-soft); }
  `,
})
export class Footer {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
}
