import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n, UiKey } from '../core/i18n';
import { Icon } from '../core/icon';
import { PROFILE } from '../core/profile';

interface NavItem {
  key: UiKey;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '[class.scrolled]': 'scrolled()',
    '[class.open]': 'open()',
  },
})
export class Navbar {
  protected readonly i18n = inject(I18n);
  protected readonly profile = PROFILE;
  protected readonly scrolled = signal(false);
  protected readonly open = signal(false);

  protected readonly items: NavItem[] = [
    { key: 'nav.about', fragment: 'about' },
    { key: 'nav.skills', fragment: 'skills' },
    { key: 'nav.projects', fragment: 'projects' },
    { key: 'nav.contact', fragment: 'contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.open.set(false);
  }

  toggleMenu(): void {
    this.open.update((v) => !v);
  }
}
