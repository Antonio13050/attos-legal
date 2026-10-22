// Attos — site. Tema, menu, idioma escolhido, índice do guia e ampliação das capturas.
(function () {
  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  // Tema: segue o aparelho até a pessoa escolher
  var themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      store.set('attos_site_theme', next);
    });
  }
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    var follow = function (e) {
      if (!store.get('attos_site_theme')) root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    };
    if (mq.addEventListener) mq.addEventListener('change', follow);
  }

  // Idioma: guarda a escolha para a faixa de idioma não aparecer de novo
  document.querySelectorAll('[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () { store.set('attos_site_lang', a.getAttribute('data-lang')); });
  });

  // Faixa de idioma: se o aparelho usa outro idioma do site e a pessoa ainda não escolheu, oferece a mesma página nele
  var hint = document.querySelector('.lang-hint');
  if (hint && !store.get('attos_site_lang')) {
    var langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    var pageLang = (root.getAttribute('lang') || '').slice(0, 2);
    var device = null;
    for (var i = 0; i < langs.length && !device; i++) {
      var l = String(langs[i]).toLowerCase().slice(0, 2);
      if (l === 'pt' || l === 'es' || l === 'en') device = l;
    }
    var offer = device && device !== pageLang ? hint.querySelector('[data-hint^="' + device + '"]') : null;
    if (offer) {
      offer.hidden = false;
      hint.hidden = false;
      hint.querySelector('[data-hint-close]').addEventListener('click', function () {
        hint.hidden = true;
        store.set('attos_site_lang', root.getAttribute('lang'));
      });
    }
  }

  // Menu no celular
  var menuBtn = document.querySelector('[data-menu]');
  var nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') nav.classList.remove('open'); });
  }

  // Guia: capítulo atual em destaque e seletor no celular
  var tocLinks = [].slice.call(document.querySelectorAll('.toc a'));
  var select = document.querySelector('.toc-select select');
  if (select) {
    select.addEventListener('change', function () {
      var el = document.getElementById(select.value);
      if (el) el.scrollIntoView();
    });
  }
  if (tocLinks.length && 'IntersectionObserver' in window) {
    var byId = {};
    tocLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        tocLinks.forEach(function (a) { a.classList.remove('on'); });
        var a = byId[en.target.id];
        if (a) a.classList.add('on');
        if (select) select.value = en.target.id;
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    document.querySelectorAll('.chapter').forEach(function (c) { io.observe(c); });
  }

  // Ampliar captura
  var dialog = document.querySelector('dialog.zoom');
  if (dialog && dialog.showModal) {
    var big = dialog.querySelector('img');
    document.addEventListener('click', function (e) {
      var btn = e.target.closest && e.target.closest('.phone button');
      if (!btn) return;
      var img = [].slice.call(btn.querySelectorAll('img')).filter(function (i) { return i.offsetParent !== null; })[0];
      if (!img) return;
      big.src = img.currentSrc || img.src;
      big.alt = img.alt;
      dialog.showModal();
    });
    dialog.addEventListener('click', function () { dialog.close(); });
  }
})();
