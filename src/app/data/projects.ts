import { L10n } from '../core/i18n';

export interface Contribution {
  title: L10n;
  text: L10n;
  /** Platform label, e.g. "Web", "Android", "F10". */
  badge?: string;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  tagline: L10n;
  role: L10n;
  context: L10n;
  overview: L10n;
  stack: string[];
  contributions: Contribution[];
  note?: L10n;
  repo?: string;
}

export interface OtherProject {
  title: string;
  description: L10n;
  stack: string[];
  links: { label: string; url: string }[];
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: 'indoor-localization',
    title: 'Indoor Localization',
    tagline: {
      en: 'Web platform and Android app for tracking assets and people inside buildings.',
      hr: 'Web platforma i Android aplikacija za praćenje imovine i osoba unutar zgrada.',
    },
    role: { en: 'Full-Stack Developer (Web & Android)', hr: 'Full-Stack Developer (Web i Android)' },
    context: { en: 'University team project', hr: 'Timski projekt na fakultetu' },
    overview: {
      en: 'An indoor localization system made of a web application and an Android app. Location data collected inside a building is used to manage assets and visualise where activity happens. I worked across both clients and the backend, focusing on security, asset management and data visualisation.',
      hr: 'Sustav za lokalizaciju u zatvorenom prostoru koji se sastoji od web aplikacije i Android aplikacije. Podaci o lokaciji prikupljeni unutar zgrade koriste se za upravljanje imovinom i vizualizaciju aktivnosti. Radio sam na oba klijenta i backendu, s fokusom na sigurnost, upravljanje imovinom i vizualizaciju podataka.',
    },
    stack: ['Web', 'Android', 'REST API', 'Auth & roles', 'Heatmaps'],
    contributions: [
      {
        badge: 'Web + Android',
        title: { en: 'Authentication, authorization & user roles', hr: 'Autentikacija, autorizacija i korisničke uloge' },
        text: {
          en: 'Designed and implemented sign-in, protected routes/screens and role-based permissions on both the web app and the Android app, so each user only sees and changes what their role allows.',
          hr: 'Dizajnirao i implementirao prijavu, zaštićene rute/ekrane i ovlasti temeljene na ulogama u web i Android aplikaciji, tako da svaki korisnik vidi i mijenja samo ono što mu uloga dopušta.',
        },
      },
      {
        badge: 'Web',
        title: { en: 'Asset Management', hr: 'Upravljanje imovinom (Asset Management)' },
        text: {
          en: 'Built the asset management module on the web: listing, creating, editing and deleting assets, with validation and integration with the backend API.',
          hr: 'Izradio modul za upravljanje imovinom na webu: pregled, dodavanje, uređivanje i brisanje imovine, uz validaciju i integraciju s backend API-jem.',
        },
      },
      {
        badge: 'Android',
        title: { en: 'Location-data heatmap', hr: 'Heatmapa lokacijskih podataka' },
        text: {
          en: 'Implemented a heatmap on Android that visualises collected location data, making it easy to see where people and assets spend the most time.',
          hr: 'Implementirao heatmapu na Androidu koja vizualizira prikupljene lokacijske podatke i jasno pokazuje gdje se ljudi i imovina najviše zadržavaju.',
        },
      },
      {
        badge: 'Full-stack',
        title: { en: 'Frontend–backend integration', hr: 'Integracija frontenda i backenda' },
        text: {
          en: 'Connected the web and mobile clients to the backend end to end — API contracts, data models, error handling and keeping both clients consistent.',
          hr: 'Povezao web i mobilne klijente s backendom od početka do kraja — API ugovori, podatkovni modeli, obrada grešaka i usklađenost oba klijenta.',
        },
      },
    ],
    note: {
      en: 'Team project — source code is hosted in the team’s private repositories.',
      hr: 'Timski projekt — izvorni kod nalazi se u privatnim repozitorijima tima.',
    },
  },
  {
    slug: 'event-manager',
    title: 'Event Manager',
    tagline: {
      en: 'Android app for discovering, organising and rating events — with maps, rewards and sponsors.',
      hr: 'Android aplikacija za otkrivanje, organizaciju i ocjenjivanje događaja — s kartama, nagradama i sponzorima.',
    },
    role: { en: 'Android Developer', hr: 'Android Developer' },
    context: { en: 'University team project · RAMPu23 – Padobranci', hr: 'Timski projekt na fakultetu · RAMPu23 – Padobranci' },
    overview: {
      en: 'A native Android application built by the “Padobranci” team for the RAMPu course. The team split the app into numbered features; I owned four of them end to end, from Firebase data structure to UI.',
      hr: 'Nativna Android aplikacija koju je izradio tim „Padobranci” na kolegiju RAMPu. Tim je aplikaciju podijelio na numerirane funkcionalnosti; ja sam od početka do kraja razvio četiri, od strukture podataka u Firebaseu do sučelja.',
    },
    stack: ['Kotlin', 'Android Studio', 'Firebase', 'Google Maps', 'GitHub'],
    contributions: [
      {
        badge: 'F10',
        title: { en: 'Comments & Ratings', hr: 'Komentari i ocjene' },
        text: {
          en: 'Users can leave comments and star ratings on events; data is stored in Firebase and aggregated ratings are shown on event details.',
          hr: 'Korisnici mogu ostavljati komentare i ocjene događaja; podaci se spremaju u Firebase, a prosječna ocjena prikazuje se u detaljima događaja.',
        },
      },
      {
        badge: 'F11',
        title: { en: 'Google Maps integration', hr: 'Integracija Google Maps' },
        text: {
          en: 'Integrated Google Maps to show event locations, so users can see where an event takes place and navigate to it.',
          hr: 'Integrirao Google Maps za prikaz lokacija događaja, kako bi korisnici vidjeli gdje se događaj održava i mogli doći do njega.',
        },
      },
      {
        badge: 'F12',
        title: { en: 'Rewards & Points', hr: 'Nagrade i bodovi' },
        text: {
          en: 'A points system that rewards user activity, with rewards users can unlock — designed to keep attendees engaged.',
          hr: 'Sustav bodova koji nagrađuje aktivnost korisnika, uz nagrade koje se mogu otključati — s ciljem većeg angažmana posjetitelja.',
        },
      },
      {
        badge: 'F13',
        title: { en: 'Sponsorship Management', hr: 'Upravljanje sponzorstvima' },
        text: {
          en: 'Organisers can add and manage sponsors for their events, and sponsors are presented to attendees within the event.',
          hr: 'Organizatori mogu dodavati i upravljati sponzorima svojih događaja, a sponzori se prikazuju posjetiteljima unutar događaja.',
        },
      },
    ],
  },
];

export const OTHER_PROJECTS: OtherProject[] = [
  {
    title: 'Digitalni Cjenik',
    description: {
      en: 'Digital price list application with an Angular frontend and a C# / .NET backend.',
      hr: 'Aplikacija za digitalni cjenik s Angular frontendom i C# / .NET backendom.',
    },
    stack: ['Angular', 'TypeScript', 'SCSS', 'C#', '.NET'],
    links: [
      { label: 'Frontend', url: 'https://github.com/drusak21/Frontend-DigitalniCjenik' },
      { label: 'Backend', url: 'https://github.com/drusak21/Backend-DigitalniCjenik' },
    ],
  },
  {
    title: 'Evaluation Manager',
    description: {
      en: 'C# application for managing student evaluations, built as a team project in a software engineering course.',
      hr: 'C# aplikacija za upravljanje vrednovanjem studenata, izrađena kao timski projekt na kolegiju programskog inženjerstva.',
    },
    stack: ['C#', '.NET'],
    links: [{ label: 'GitHub', url: 'https://github.com/drusak21/G2-Evaluation-Manager' }],
  },
  {
    title: 'Text File to UI',
    description: {
      en: 'Small C# experiment that builds a user interface from a plain text file definition.',
      hr: 'Mali C# eksperiment koji gradi korisničko sučelje iz definicije u tekstualnoj datoteci.',
    },
    stack: ['C#', '.NET'],
    links: [{ label: 'GitHub', url: 'https://github.com/drusak21/text_file_to_ui' }],
  },
];

export function findProject(slug: string | null): FeaturedProject | undefined {
  return FEATURED_PROJECTS.find((p) => p.slug === slug);
}
