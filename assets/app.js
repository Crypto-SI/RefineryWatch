const data = window.RWA_DATA;

function mount(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

function initNav() {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  if (!button || !menu) return;
  button.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
}

function initHeroCarousel() {
  const carousel = document.querySelector("[data-hero-carousel]");
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll("[data-hero-slide]"));
  const dots = Array.from(carousel.querySelectorAll("[data-hero-dot]"));
  const progress = carousel.querySelector("[data-hero-progress]");
  if (slides.length < 2 || dots.length !== slides.length) return;
  let activeIndex = slides.findIndex(slide => slide.classList.contains("is-active"));
  if (activeIndex < 0) activeIndex = 0;
  let timer;

  const show = index => {
    if (index === activeIndex) return;
    const previous = activeIndex;
    activeIndex = index;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      const exiting = slideIndex === previous && previous !== index;
      slide.classList.toggle("is-exiting", exiting);
      slide.classList.toggle("is-active", active);
      slide.hidden = !active && !exiting;
      slide.setAttribute("aria-hidden", String(!active));
      if (exiting) {
        window.setTimeout(() => {
          slide.classList.remove("is-exiting");
          if (!slide.classList.contains("is-active")) slide.hidden = true;
        }, 650);
      }
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
  };

  const restartProgress = () => {
    if (!progress) return;
    progress.classList.remove("is-running");
    void progress.offsetWidth;
    progress.classList.add("is-running");
  };

  const startTimer = () => {
    window.clearInterval(timer);
    restartProgress();
    timer = window.setInterval(() => {
      show((activeIndex + 1) % slides.length);
      restartProgress();
    }, 5000);
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      show(index);
      startTimer();
    });
  });

  startTimer();
}

function statusCards() {
  mount("[data-status-cards]", data.ipoStatus.map(item => `
    <article class="status-card ${item.tone}">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <em>${item.state || "Unknown"}</em>
    </article>
  `).join(""));
}

function riskCards() {
  mount("[data-risk-cards]", data.risks.map(risk => `
    <article class="info-card risk-card">
      <div class="card-top">
        <h3>${risk.title}</h3>
        <span class="badge ${risk.severity.toLowerCase()}">${risk.severity}</span>
      </div>
      <p>${risk.body}</p>
    </article>
  `).join(""));
}

function brokerCards(list = data.brokers) {
  mount("[data-broker-cards]", list.map(broker => `
    <article class="broker-card">
      <div class="card-top">
        <h3>${broker.name}</h3>
        ${broker.sponsored ? '<span class="sponsored">Sponsored</span>' : '<span class="plain-label">Directory listing</span>'}
      </div>
      <dl>
        <div><dt>Nation</dt><dd>${broker.nation || 'Nigeria'}</dd></div>
        <div><dt>Countries served</dt><dd>${broker.countries.join(", ")}</dd></div>
        <div><dt>Exchanges supported</dt><dd>${broker.exchanges.join(", ")}</dd></div>
        <div><dt>Regulator / licence</dt><dd>${broker.regulator}</dd></div>
        <div><dt>Account minimum</dt><dd>${broker.minimum}</dd></div>
        <div><dt>Fees</dt><dd>${broker.fees}</dd></div>
        <div><dt>IPO access</dt><dd>${broker.ipoAccess}</dd></div>
      </dl>
      <a class="button secondary" href="contact.html">Visit broker</a>
    </article>
  `).join(""));
}

function initBrokerFilters() {
  const form = document.querySelector("[data-broker-filters]");
  if (!form) return;
  const filter = () => {
    const values = Object.fromEntries(new FormData(form).entries());
    const filtered = data.brokers.filter(broker => {
      const country = !values.country || broker.countries.includes(values.country);
      const exchange = !values.exchange || broker.exchanges.includes(values.exchange);
      const diaspora = !values.diaspora || broker.diaspora;
      const ipo = !values.ipo || broker.ipoAccess === values.ipo;
      const regulated = !values.regulated || broker.regulated;
      return country && exchange && diaspora && ipo && regulated;
    });
    brokerCards(filtered);
  };
  form.addEventListener("change", filter);
  filter();
}

function timeline() {
  mount("[data-timeline]", data.timeline.map(item => `
    <article class="timeline-item">
      <span>${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
      <b>${item.tag}</b>
    </article>
  `).join(""));
}

function stats() {
  mount("[data-stats]", `
    <article><span>Total views</span><strong>${data.stats.totalViews}</strong></article>
    <article><span>Unique visitors</span><strong>${data.stats.uniqueVisitors}</strong></article>
    <article><span>Newsletter signups</span><strong>${data.stats.newsletterSignups}</strong></article>
    <article><span>Broker directory clicks</span><strong>${data.stats.brokerClicks}</strong></article>
  `);
  mount("[data-top-countries]", data.stats.topCountries.map(item => `<li>${item}</li>`).join(""));
  mount("[data-most-read]", data.stats.mostReadPages.map(item => `<li>${item}</li>`).join(""));
}

function articles() {
  mount("[data-articles]", data.articles.map(article => `
    <a class="article-link" href="${article.href}">
      <span>${article.category}</span>
      <strong>${article.title}</strong>
      ${article.description ? `<p>${article.description}</p>` : ""}
    </a>
  `).join(""));
}

function initForms() {
  document.querySelectorAll("form[data-demo-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const message = form.querySelector("[data-form-message]");
      if (message) message.textContent = "Thank you for your message. To reach us directly, email admin@ipowatchafrica.com.";
      form.reset();
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initHeroCarousel();
  statusCards();
  riskCards();
  brokerCards();
  initBrokerFilters();
  timeline();
  stats();
  articles();
  initForms();
});
