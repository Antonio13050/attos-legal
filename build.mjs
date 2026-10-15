// Gera o site estático (GitHub Pages) a partir de content/*.mjs.
// Uso: node build.mjs
// Português fica na raiz (as URLs antigas continuam valendo); espanhol em /es e inglês em /en.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import pt from './content/pt-BR.mjs';
import es from './content/es.mjs';
import en from './content/en.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = {
  // Enquanto o app está em teste interno não há página pública na loja: deixe null.
  // Ao publicar, troque por 'https://play.google.com/store/apps/details?id=com.attos.app'
  playUrl: null,
  support: 'contato@attosfit.com',
  privacy: 'privacidade@attosfit.com',
  base: 'https://attosfit.com/',
};
const LANGS = [
  { code: 'pt-BR', dir: '', short: 'PT', content: pt },
  { code: 'es', dir: 'es/', short: 'ES', content: es },
  { code: 'en', dir: 'en/', short: 'EN', content: en },
];
const PAGES = ['index.html', 'guide.html', 'legal.html', 'privacy.html', 'terms.html'];
// Endereço público de cada página: a Cloudflare serve sem o .html (e redireciona quem pede com .html)
const route = (file) => (file === 'index.html' ? '' : file.replace(/\.html$/, ''));

/** Capítulos e passos do guia: a ordem e as capturas valem para os três idiomas */
const GUIDE = [
  ['start', [['welcome', ['welcome']], ['about', ['onboarding-about', 'onboarding-measures']], ['goal', ['onboarding-goal', 'onboarding-routine']], ['place', ['onboarding-place', 'onboarding-care']], ['ready', ['onboarding-done']]]],
  ['home', [['today', ['home']], ['day', ['home-today']]]],
  ['workouts', [['list', ['workouts']], ['create', ['workout-new', 'workout-picker']], ['editor', ['workout-editor']], ['manage', ['workouts-edit']], ['library', ['library', 'exercise-detail']], ['custom', ['exercise-new']]]],
  ['active', [['sets', ['active']], ['reorder', ['active-reorder']], ['finish', ['summary']], ['share', ['share']]]],
  ['coach', [['ask', ['coach-start']], ['plan', ['coach-chat', 'coach-workout']], ['photo', ['coach-photo']]]],
  ['nutrition', [['diet', ['diet', 'diet-meal']], ['water', ['water', 'water-goal']], ['waterrem', ['water-reminders', 'water-reminder-sheet']], ['supps', ['supplements', 'supplement-time']], ['suppsedit', ['supplements-edit']]]],
  ['profile', [['overview', ['profile', 'profile-more']], ['muscles', ['muscles']], ['body', ['body', 'body-log']], ['history', ['history', 'history-open']], ['medals', ['achievements', 'achievement-detail']], ['month', ['profile-share']]]],
  ['settings', [['account', ['settings']], ['sheet', ['athlete-sheet']], ['reminders', ['settings-reminders', 'quiet-hours']], ['look', ['settings-appearance', 'language']], ['delete', ['delete-account']]]],
  ['pro', [['plans', ['pro']]]],
];

/** Botão da loja; sem endereço público vira o aviso "em breve" */
const storeButton = (c) => (SITE.playUrl
  ? `<a class="btn" href="${SITE.playUrl}" rel="noopener">${ICON.play}${c.nav.download}</a>`
  : `<span class="btn soon">${ICON.play}${c.nav.soon}</span>`);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const ICON = {
  sun: '<svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3.5v17a1 1 0 0 0 1.5.9l14-8.5a1 1 0 0 0 0-1.8l-14-8.5A1 1 0 0 0 5 3.5z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 1 1 12 0c0 6 2.5 7 2.5 7h-17S6 15 6 9zM10 20a2 2 0 0 0 4 0"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4.5 4.5 0 0 1-.6-9A6 6 0 0 1 18 10.2 4 4 0 0 1 17.5 18z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8.2 10.9l7.6-3.8M8.2 13.1l7.6 3.8"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M9 12l2.2 2.2L15 10.5"/></svg>',
};

function shell(lang, file, { title, desc, body, current }) {
  const c = lang.content;
  const up = lang.dir ? '../' : '';
  const a = `${up}assets/`;
  const here = (l) => `${lang.dir ? '../' : ''}${l.dir}${route(file)}` || './';
  const link = (f) => route(f) || './';
  const alternates = LANGS.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${SITE.base}${l.dir}${route(file)}">`).join('\n  ');
  const boot = `(function(){try{var t=localStorage.getItem('attos_site_theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;
  // Só a página inicial em português redireciona, e só na primeira visita: mesma regra do app (idioma do aparelho; sem suporte, inglês)
  const redirect = lang.code === 'pt-BR' && file === 'index.html'
    ? `<script>(function(){try{if(location.hash||localStorage.getItem('attos_site_lang'))return;var l=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'pt']).map(function(x){return String(x).toLowerCase().slice(0,2)}).filter(function(x){return x==='pt'||x==='es'||x==='en'})[0]||'en';if(l!=='pt')location.replace(l+'/')}catch(e){}})();</script>\n  `
    : '';
  return `<!doctype html>
<html lang="${lang.code}" data-theme="light">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="theme-color" content="#0c87eb">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${SITE.base}assets/icon-192.png">
  <link rel="canonical" href="${SITE.base}${lang.dir}${route(file)}">
  ${alternates}
  <link rel="icon" href="${a}favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="${a}apple-touch-icon.png">
  <script>${boot}</script>
  ${redirect}<link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${a}site.css">
</head>
<body>
<header class="top">
  <div class="wrap">
    <a class="brand" href="./"><img src="${a}favicon.svg" alt="" width="32" height="32"><span>Attos</span></a>
    <nav class="nav" aria-label="${esc(c.nav.menu)}">
      <a href="./"${current === 'home' ? ' aria-current="page"' : ''}>${c.nav.home}</a>
      <a href="${link('guide.html')}"${current === 'guide' ? ' aria-current="page"' : ''}>${c.nav.guide}</a>
      <a href="${link('legal.html')}"${current === 'legal' ? ' aria-current="page"' : ''}>${c.nav.legal}</a>
    </nav>
    <div class="tools">
      <div class="langs" role="group" aria-label="${esc(c.nav.language)}">
        ${LANGS.map((l) => `<a href="${here(l)}" data-lang="${l.code}" hreflang="${l.code}" lang="${l.code}" title="${esc(l.content.meta.name)}"${l.code === lang.code ? ' aria-current="true"' : ''}>${l.short}</a>`).join('')}
      </div>
      <button class="icon-btn" type="button" data-theme-toggle aria-label="${esc(c.nav.theme)}" title="${esc(c.nav.theme)}">${ICON.sun}${ICON.moon}</button>
      <button class="icon-btn menu-btn" type="button" data-menu aria-expanded="false" aria-label="${esc(c.nav.menu)}">${ICON.menu}</button>
    </div>
  </div>
</header>
<main>
${body}
</main>
<footer class="foot">
  <div class="wrap">
    <div>
      <a class="brand" href="./"><img src="${a}favicon.svg" alt="" width="32" height="32"><span>Attos</span></a>
      <small>${c.foot.disclaimer}</small>
      <small>© 2026 Attos. ${c.foot.rights}</small>
    </div>
    <nav aria-label="${esc(c.foot.links)}">
      <a href="${link('guide.html')}">${c.nav.guide}</a>
      <a href="${link('privacy.html')}">${c.legal.privacy.short}</a>
      <a href="${link('terms.html')}">${c.legal.terms.short}</a>
      <a href="${link('legal.html')}#delete">${c.legal.hub.deleteShort}</a>
      <a href="mailto:${SITE.support}">${c.foot.contact}</a>
    </nav>
  </div>
</footer>
<dialog class="zoom"><img alt=""></dialog>
<script src="${a}site.js" defer></script>
</body>
</html>
`;
}

function phone(lang, shot, alt, { eager = false, zoomLabel } = {}) {
  const up = lang.dir ? '../' : '';
  const img = (theme) => `<img class="t-${theme}" src="${up}assets/shots/${lang.code}/${theme}/${shot}.webp" alt="${esc(alt)}" width="390" height="844" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
  const inner = img('light') + img('dark');
  return `<figure class="phone">${zoomLabel ? `<button type="button" aria-label="${esc(zoomLabel)}: ${esc(alt)}">${inner}</button>` : inner}</figure>`;
}

function homePage(lang) {
  const c = lang.content;
  const h = c.home;
  const features = h.features.map((f) => `
      <div class="feature">
        <div class="feature-text">
          <h3>${f.title}</h3>
          <p>${f.text}</p>
          <ul class="ticks">${f.ticks.map((t) => `<li>${t}</li>`).join('')}</ul>
          <a class="more" href="guide#${f.chapter}">${f.more} →</a>
        </div>
        ${phone(lang, f.shot, f.title)}
      </div>`).join('');
  const cards = h.cards.map((k) => `<div class="card"><div class="ico">${ICON[k.icon]}</div><h3>${k.title}</h3><p>${k.text}</p></div>`).join('\n        ');
  const cell = (v) => (v === true ? `<span class="yes" aria-label="${esc(h.plans.yes)}">✓</span>` : v === false ? `<span class="no" aria-label="${esc(h.plans.no)}">—</span>` : v);
  const body = `<section class="hero">
  <div class="wrap">
    <div>
      <span class="eyebrow">${h.eyebrow}</span>
      <h1>${h.h1}</h1>
      <p class="lead">${h.lead}</p>
      <div class="cta">
        ${storeButton(c)}
        <a class="btn ghost" href="guide">${h.ctaGuide}${ICON.arrow}</a>
      </div>
      <div class="facts">${h.facts.map(([b, t]) => `<div><b>${b}</b>${t}</div>`).join('')}</div>
    </div>
    <div class="hero-phones" aria-hidden="true">
      ${phone(lang, 'home', '', {})}
      ${phone(lang, 'active', '', {})}
    </div>
  </div>
</section>
<section class="section alt" id="features">
  <div class="wrap">
    <div class="section-head"><h2>${h.featuresTitle}</h2><p>${h.featuresLead}</p></div>
    <div class="features">${features}
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap">
    <div class="section-head"><h2>${h.cardsTitle}</h2><p>${h.cardsLead}</p></div>
    <div class="grid3">
        ${cards}
    </div>
  </div>
</section>
<section class="section alt" id="pro">
  <div class="wrap">
    <div class="section-head"><h2>${h.plans.title}</h2><p>${h.plans.lead}</p></div>
    <table class="plans">
      <thead><tr><th>${h.plans.cols[0]}</th><th>${h.plans.cols[1]}</th><th class="pro">${h.plans.cols[2]}</th></tr></thead>
      <tbody>${h.plans.rows.map(([l, f, p]) => `<tr><td>${l}</td><td>${cell(f)}</td><td>${cell(p)}</td></tr>`).join('')}</tbody>
    </table>
    <p class="plans-note">${h.plans.note}</p>
  </div>
</section>
<section class="section" id="faq">
  <div class="wrap">
    <div class="section-head"><h2>${h.faqTitle}</h2></div>
    <div class="faq">${h.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="band">
      <div><h2>${h.band.title}</h2><p>${h.band.text}</p></div>
      ${storeButton(c)}
    </div>
  </div>
</section>`;
  return shell(lang, 'index.html', { title: h.title, desc: h.desc, body, current: 'home' });
}

function guidePage(lang) {
  const g = lang.content.guide;
  const chapters = GUIDE.map(([ch, steps], ci) => {
    const meta = g.chapters[ch];
    if (!meta) throw new Error(`${lang.code}: capítulo sem texto: ${ch}`);
    const items = steps.map(([id, shots], si) => {
      const s = g.steps[`${ch}.${id}`];
      if (!s) throw new Error(`${lang.code}: passo sem texto: ${ch}.${id}`);
      return `
      <article class="step${shots.length > 1 ? ' two' : ''}" id="${ch}-${id}">
        <div class="shots${shots.length > 1 ? '' : ' one'}">${shots.map((shot, i) => phone(lang, shot, shots.length > 1 ? `${s.title} (${i + 1})` : s.title, { zoomLabel: g.zoom })).join('')}</div>
        <div class="step-body">
          <span class="step-n">${ci + 1}.${si + 1}</span>
          <h3>${s.title}${s.pro ? '<span class="pro-tag">PRO</span>' : ''}</h3>
          <p>${s.text}</p>
          ${s.how ? `<ol class="how">${s.how.map((x) => `<li>${x}</li>`).join('')}</ol>` : ''}
          ${s.tip ? `<p class="tip"><strong>${g.tipLabel}</strong> ${s.tip}</p>` : ''}
        </div>
      </article>`;
    }).join('');
    return `
    <section class="chapter" id="${ch}">
      <header><span class="num">${g.chapterLabel} ${ci + 1}</span><h2>${meta.title}</h2><p>${meta.lead}</p></header>${items}
    </section>`;
  }).join('');
  const toc = GUIDE.map(([ch]) => `<li><a href="#${ch}">${g.chapters[ch].title}</a></li>`).join('');
  const options = GUIDE.map(([ch], i) => `<option value="${ch}">${i + 1}. ${esc(g.chapters[ch].title)}</option>`).join('');
  const body = `<div class="wrap page-head"><h1>${g.h1}</h1><p>${g.lead}</p></div>
<div class="wrap">
  <div class="toc-select"><label class="sr" for="toc-select">${g.tocLabel}</label><select id="toc-select">${options}</select></div>
  <div class="guide">
    <nav class="toc" aria-label="${esc(g.tocLabel)}"><p>${g.tocLabel}</p><ol>${toc}</ol></nav>
    <div>${chapters}
    </div>
  </div>
</div>`;
  return shell(lang, 'guide.html', { title: g.title, desc: g.desc, body, current: 'guide' });
}

/** Corpo de um documento: texto = parágrafo, lista = <ul>, { callout } = destaque */
function blocks(list) {
  return list.map((b) => {
    if (Array.isArray(b)) return `<ul>${b.map((li) => `<li>${li}</li>`).join('')}</ul>`;
    if (b && b.callout) return `<div class="callout ${b.tone || ''}"><h3>${b.callout}</h3><p>${b.text}</p></div>`;
    return `<p>${b}</p>`;
  }).join('\n      ');
}
const fill = (s) => s.replaceAll('{support}', `<a href="mailto:${SITE.support}">${SITE.support}</a>`).replaceAll('{privacy}', `<a href="mailto:${SITE.privacy}">${SITE.privacy}</a>`);

function docPage(lang, file, doc) {
  const L = lang.content.legal;
  const notice = lang.code === 'pt-BR' ? '' : `<div class="callout note"><h3>${L.translation.title}</h3><p>${L.translation.text.replace('{href}', `../${route(file)}`)}</p></div>`;
  const body = `<div class="prose-wrap">
  <div class="page-head" style="padding-left:0;padding-right:0">
    <h1>${doc.title}</h1>
    <p class="prose-meta">${L.app} · ${L.updated}</p>
  </div>
  <div class="prose">
      ${notice}
      <div class="callout ${doc.intro.tone}"><h3>${doc.intro.title}</h3><p>${doc.intro.text}</p></div>
      ${doc.sections.map((s) => `<h2 id="${s.id || ''}">${s.h}</h2>\n      ${fill(blocks(s.body))}`).join('\n      ')}
      <h2>${L.contactTitle}</h2>
      <div class="contact">
        <div class="card"><span>${L.supportLabel}</span><a href="mailto:${SITE.support}">${SITE.support}</a></div>
        <div class="card"><span>${L.privacyLabel}</span><a href="mailto:${SITE.privacy}">${SITE.privacy}</a></div>
      </div>
  </div>
</div>`;
  return shell(lang, file, { title: `${doc.title} — Attos`, desc: doc.desc, body, current: 'legal' });
}

function hubPage(lang) {
  const L = lang.content.legal;
  const H = L.hub;
  const body = `<div class="prose-wrap">
  <div class="page-head" style="padding-left:0;padding-right:0"><h1>${H.title}</h1><p>${H.lead}</p></div>
  <div class="links">
    <a class="card" href="privacy"><div class="ico">${ICON.shield}</div><h3>${L.privacy.title}</h3><p>${H.privacyText}</p><b>${H.read} →</b></a>
    <a class="card" href="terms"><div class="ico">${ICON.dumbbell}</div><h3>${L.terms.title}</h3><p>${H.termsText}</p><b>${H.read} →</b></a>
  </div>
  <div class="prose">
      <h2 id="delete">${H.deleteTitle}</h2>
      ${fill(blocks(H.deleteBody))}
      <h2>${L.contactTitle}</h2>
      <div class="contact">
        <div class="card"><span>${L.supportLabel}</span><a href="mailto:${SITE.support}">${SITE.support}</a></div>
        <div class="card"><span>${L.privacyLabel}</span><a href="mailto:${SITE.privacy}">${SITE.privacy}</a></div>
      </div>
  </div>
</div>`;
  return shell(lang, 'legal.html', { title: `${H.title} — Attos`, desc: H.lead, body, current: 'legal' });
}

// Toda captura citada precisa existir nos três idiomas e nos dois temas
const shots = new Set(['home', 'active']);
GUIDE.forEach(([, steps]) => steps.forEach(([, list]) => list.forEach((s) => shots.add(s))));
LANGS.forEach((l) => l.content.home.features.forEach((f) => shots.add(f.shot)));
const missing = [];
for (const l of LANGS) for (const theme of ['light', 'dark']) for (const s of shots) {
  if (!fs.existsSync(path.join(ROOT, 'assets', 'shots', l.code, theme, `${s}.webp`))) missing.push(`${l.code}/${theme}/${s}`);
}
if (missing.length) console.warn(`AVISO: ${missing.length} captura(s) ausente(s): ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? '…' : ''}`);

for (const lang of LANGS) {
  const out = path.join(ROOT, lang.dir);
  fs.mkdirSync(out, { recursive: true });
  const L = lang.content.legal;
  fs.writeFileSync(path.join(out, 'index.html'), homePage(lang));
  fs.writeFileSync(path.join(out, 'guide.html'), guidePage(lang));
  fs.writeFileSync(path.join(out, 'legal.html'), hubPage(lang));
  fs.writeFileSync(path.join(out, 'privacy.html'), docPage(lang, 'privacy.html', L.privacy));
  fs.writeFileSync(path.join(out, 'terms.html'), docPage(lang, 'terms.html', L.terms));
}
fs.writeFileSync(path.join(ROOT, '404.html'), shell(LANGS[0], '404.html', {
  title: 'Página não encontrada — Attos',
  desc: 'Página não encontrada.',
  current: '',
  body: `<div class="prose-wrap"><div class="page-head" style="padding-left:0;padding-right:0"><h1>Página não encontrada</h1><p>O endereço pode ter mudado. <a href="/">Voltar ao início</a> · <a href="/en/">English</a> · <a href="/es/">Español</a></p></div></div>`,
}).replaceAll('href="./"', 'href="/"').replaceAll('"assets/', '"/assets/').replaceAll('href="guide"', 'href="/guide"').replaceAll('href="legal', 'href="/legal').replaceAll('href="privacy"', 'href="/privacy"').replaceAll('href="terms"', 'href="/terms"').replaceAll('href="es/', 'href="/es/').replaceAll('href="en/', 'href="/en/'));

// Mapa do site para os buscadores: cada página com as versões nos três idiomas
const pageUrl = (l, file) => `${SITE.base}${l.dir}${route(file)}`;
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${PAGES.flatMap((file) => LANGS.map((l) => `  <url>
    <loc>${pageUrl(l, file)}</loc>
    <lastmod>${today}</lastmod>
${LANGS.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.code}" href="${pageUrl(a, file)}"/>`).join('\n')}
  </url>`)).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.base}sitemap.xml\n`);
console.log(`ok: ${LANGS.length * PAGES.length} páginas, ${shots.size} capturas por idioma e tema`);
