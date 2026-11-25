import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type Lang = 'en' | 'hr';

/** A piece of text available in both site languages. */
export interface L10n {
  en: string;
  hr: string;
}

const STORAGE_KEY = 'portfolio.lang';

/** UI strings. Project content lives in data/projects.ts. */
const UI = {
  'nav.home': { en: 'Home', hr: 'Početna' },
  'nav.about': { en: 'About', hr: 'O meni' },
  'nav.skills': { en: 'Skills', hr: 'Vještine' },
  'nav.projects': { en: 'Projects', hr: 'Projekti' },
  'nav.contact': { en: 'Contact', hr: 'Kontakt' },
  'nav.menu': { en: 'Open menu', hr: 'Otvori izbornik' },
  'nav.lang': { en: 'Switch language', hr: 'Promijeni jezik' },

  'hero.status': { en: 'Open to new opportunities', hr: 'Otvoren za nove prilike' },
  'hero.greeting': { en: "Hi, I'm", hr: 'Bok, ja sam' },
  'hero.title': { en: 'Software Developer', hr: 'Software Developer' },
  'hero.lead': {
    en: 'I build web and Android applications end to end — from authentication and data models to clean, responsive interfaces.',
    hr: 'Razvijam web i Android aplikacije od početka do kraja — od autentikacije i podatkovnih modela do čistih, responzivnih sučelja.',
  },
  'hero.cta.projects': { en: 'View projects', hr: 'Pogledaj projekte' },
  'hero.cta.contact': { en: 'Get in touch', hr: 'Javi mi se' },
  'hero.scroll': { en: 'Scroll', hr: 'Skrolaj' },

  'about.eyebrow': { en: 'About', hr: 'O meni' },
  'about.title': { en: 'Developer who enjoys the whole stack.', hr: 'Developer kojeg zanima cijeli stack.' },
  'about.p1': {
    en: "I'm a software developer with hands-on experience across web and mobile. Through university team projects I've worked on full-stack web applications and native Android apps, owning features from the database and API all the way to the UI.",
    hr: 'Software developer sam s praktičnim iskustvom u web i mobilnom razvoju. Kroz timske projekte na fakultetu radio sam na full-stack web aplikacijama i nativnim Android aplikacijama, preuzimajući funkcionalnosti od baze i API-ja sve do korisničkog sučelja.',
  },
  'about.p2': {
    en: 'I care about secure foundations (authentication, roles and permissions), readable code and interfaces that feel effortless. I like working in teams, splitting work into clear features and shipping them through Git-based workflows.',
    hr: 'Važni su mi sigurni temelji (autentikacija, uloge i ovlasti), čitljiv kod i sučelja koja su jednostavna za korištenje. Volim raditi u timu, dijeliti posao na jasne funkcionalnosti i isporučivati ih kroz Git workflow.',
  },
  'about.stat.platforms': { en: 'Platforms: Web & Android', hr: 'Platforme: Web i Android' },
  'about.stat.focus': { en: 'Focus: full-stack features', hr: 'Fokus: full-stack funkcionalnosti' },
  'about.stat.team': { en: 'Team-based delivery', hr: 'Timski rad' },

  'skills.eyebrow': { en: 'Skills', hr: 'Vještine' },
  'skills.title': { en: 'Tools I work with', hr: 'Alati s kojima radim' },
  'skills.lead': {
    en: 'A practical toolkit for building, integrating and shipping applications.',
    hr: 'Praktičan skup alata za izradu, integraciju i isporuku aplikacija.',
  },
  'skills.frontend': { en: 'Frontend', hr: 'Frontend' },
  'skills.backend': { en: 'Backend & data', hr: 'Backend i podaci' },
  'skills.mobile': { en: 'Mobile', hr: 'Mobilno' },
  'skills.tools': { en: 'Tools & workflow', hr: 'Alati i workflow' },

  'projects.eyebrow': { en: 'Projects', hr: 'Projekti' },
  'projects.title': { en: 'Selected work', hr: 'Odabrani radovi' },
  'projects.lead': {
    en: 'University team projects — each one highlights what I personally built.',
    hr: 'Timski projekti s fakulteta — svaki ističe što sam osobno izradio.',
  },
  'projects.featured': { en: 'Featured', hr: 'Istaknuto' },
  'projects.more': { en: 'More on GitHub', hr: 'Još na GitHubu' },
  'projects.details': { en: 'Case study', hr: 'Detalji projekta' },
  'projects.repo': { en: 'Repository', hr: 'Repozitorij' },
  'projects.role': { en: 'Role', hr: 'Uloga' },
  'projects.context': { en: 'Context', hr: 'Kontekst' },
  'projects.stack': { en: 'Stack', hr: 'Tehnologije' },
  'projects.myWork': { en: 'My contributions', hr: 'Moj doprinos' },
  'projects.overview': { en: 'Overview', hr: 'Pregled' },
  'projects.back': { en: 'All projects', hr: 'Svi projekti' },
  'projects.next': { en: 'Next project', hr: 'Sljedeći projekt' },
  'projects.notFound': { en: 'Project not found.', hr: 'Projekt nije pronađen.' },

  'contact.eyebrow': { en: 'Contact', hr: 'Kontakt' },
  'contact.title': { en: "Let's build something together.", hr: 'Napravimo nešto zajedno.' },
  'contact.lead': {
    en: "I'm open to junior and mid-level developer roles. The fastest way to reach me is email.",
    hr: 'Otvoren sam za developerske pozicije. Najbrže ćete me dobiti emailom.',
  },
  'contact.copy': { en: 'Copy', hr: 'Kopiraj' },
  'contact.copied': { en: 'Copied!', hr: 'Kopirano!' },

  'footer.built': { en: 'Built with Angular · Hosted on Netlify', hr: 'Izrađeno u Angularu · Hostano na Netlifyju' },
} satisfies Record<string, L10n>;

export type UiKey = keyof typeof UI;

@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly doc = inject(DOCUMENT);
  readonly lang = signal<Lang>(this.initialLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.doc.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* storage unavailable — ignore */
      }
    });
  }

  /** Translate a UI key. */
  t(key: UiKey): string {
    return UI[key][this.lang()];
  }

  /** Pick the current language from a bilingual value. */
  pick(value: L10n): string {
    return value[this.lang()];
  }

  toggle(): void {
    this.lang.update((l) => (l === 'en' ? 'hr' : 'en'));
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'hr') return saved;
    } catch {
      /* ignore */
    }
    return navigator.language?.toLowerCase().startsWith('hr') ? 'hr' : 'en';
  }
}
