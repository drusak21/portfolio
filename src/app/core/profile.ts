/** Personal details shown across the site. Edit here. */
export const PROFILE = {
  name: 'Dorian Rušak',
  email: 'dorian.rusak1@gmail.com',
  github: 'https://github.com/drusak21',
  githubHandle: 'drusak21',
  linkedin: 'https://www.linkedin.com/in/dorian-ru%C5%A1ak-6aa243228/',
} as const;

export interface SkillGroup {
  key: 'skills.frontend' | 'skills.backend' | 'skills.mobile' | 'skills.tools';
  items: string[];
}

/** Skills grouped by area. Adjust to match your CV. */
export const SKILLS: SkillGroup[] = [
  { key: 'skills.frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS', 'Responsive UI'] },
  { key: 'skills.backend', items: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'SQL', 'PostgreSQL', 'Auth & roles'] },
  { key: 'skills.mobile', items: ['Kotlin', 'Android SDK', 'Android Studio', 'Firebase', 'Google Maps SDK'] },
  { key: 'skills.tools', items: ['Git', 'GitHub', 'Postman', 'Visual Studio', 'Agile / Scrum', 'Netlify'] },
];
