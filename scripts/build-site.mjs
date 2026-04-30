import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

const site = {
  name: "IPO Watch Africa",
  domain: "https://ipowatchafrica.com",
  logo: "public/IPOwatchlogo.png",
  description:
    "Independent educational tracking for the potential Dangote Refinery IPO, listing status, broker access, risks, and retail investor context.",
  image:
    "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
  updated: "2026-04-30",
  assetVersion: "20260430-5",
  author: "IPO Watch Africa editorial desk",
  reviewedBy: "IPO Watch Africa research desk",
};

const nav = [
  ["tracker.html", "Dangote Tracker"],
  ["timeline.html", "Timeline"],
  ["risks.html", "Risks"],
  ["brokers.html", "Brokers"],
  ["map.html", "Interest Map"],
  ["advertise.html", "Advertise"],
  ["learn.html", "Learn"],
];

const heroSlides = [
  {
    eyebrow: "Dangote Refinery IPO tracker",
    title: "DANGOTE REFINERY IPO WATCH",
    lede:
      "Follow the potential Dangote Refinery listing in plain English: confirmed facts, unknowns, risk education, broker access, and prospectus updates.",
    primaryHref: "tracker.html",
    primaryLabel: "View Dangote Tracker",
    secondaryHref: "risks.html",
    secondaryLabel: "Review Risks",
  },
];


const sources = [
  {
    name: "Dangote Petroleum Refinery",
    url: "https://refinery.dangote.com/",
    note: "Official refinery website for company news and operational updates.",
  },
  {
    name: "Dangote Industries oil and gas page",
    url: "https://dangote.com/our-business/oil-and-gas/",
    note: "Official Dangote Industries business profile for the refinery.",
  },
  {
    name: "Nigerian Exchange Group",
    url: "https://ngxgroup.com/",
    note: "Primary exchange source to check listings, market notices, and issuer disclosures.",
  },
  {
    name: "Securities and Exchange Commission, Nigeria",
    url: "https://www.sec.gov.ng/",
    note: "Primary Nigerian capital-market regulator source.",
  },
];

const ipoStatus = [
  { label: "Prospectus", value: "Pending", tone: "pending", state: "Pending" },
  { label: "Exchange", value: "To be confirmed", tone: "unknown", state: "Unknown" },
  { label: "Retail access", value: "To be confirmed", tone: "neutral", state: "Unknown" },
  { label: "Broker directory", value: "Opening soon", tone: "pending", state: "Pending" },
  {
    label: "Latest update",
    value: "Awaiting official listing details",
    tone: "watch",
    state: "Monitor",
  },
];

const timeline = [
  {
    date: "Awaiting official announcement",
    title: "Prospectus not yet published",
    body:
      "IPO Watch Africa is tracking Dangote Refinery disclosures, exchange announcements, and prospectus details before treating listing terms as confirmed.",
    tag: "Pending",
  },
  {
    date: "Reported plans",
    title: "Public listing plans discussed in media",
    body:
      "Listing plans have been reported, but final investor access, exchange venue, allocation rules, pricing, and timetable remain unconfirmed.",
    tag: "Reported",
  },
];

const anticipatedTimeline = [
  {
    date: "April 2026",
    title: "Prospectus filing",
    body: "Prospectus filing anticipated, subject to issuer, exchange, and regulator confirmation.",
    tag: "Filed / expected",
  },
  {
    date: "May 2026",
    title: "Roadshow and offers open",
    body: "National roadshow and offer-opening period expected to begin.",
    tag: "Expected",
  },
  {
    date: "June-July 2026",
    title: "NGX listing",
    body: "Listing on the Nigerian Exchange main board expected if approvals and offer mechanics align.",
    tag: "Expected",
  },
  {
    date: "August 2026",
    title: "Subscription window",
    body: "Subscription window expected to open, with final eligibility and allocation terms still to be confirmed.",
    tag: "Expected",
  },
];

const anticipatedDetails = [
  ["Listing venue", "Primary listing expected on the Nigerian Exchange (NGX) main board, with potential cross-border listings."],
  ["Offer size", "Roughly 5% to 10% of the refinery's equity is expected to be offered to the public."],
  ["Valuation", "Analyst estimates have put the company between $40 billion and $50 billion."],
  ["Advisers", "Stanbic IBTC Capital, Vetiva Capital Management, and FirstCap are handling the transaction."],
];

const risks = [
  {
    title: "Political and regulatory risk",
    severity: "High",
    body:
      "Policy changes, import rules, subsidies, taxes, and licensing conditions can affect refinery economics and investor outcomes.",
  },
  {
    title: "Operational risk",
    severity: "Medium",
    body:
      "Large refining assets depend on uptime, maintenance discipline, commissioning quality, and safe operations.",
  },
  {
    title: "Crude supply risk",
    severity: "High",
    body:
      "Feedstock pricing, supply reliability, and domestic crude availability may influence margins and production levels.",
  },
  {
    title: "FX and currency risk",
    severity: "High",
    body:
      "Revenue, debt, crude costs, and investor returns may be exposed to naira, dollar, and cross-border transfer risks.",
  },
  {
    title: "Oil demand and peak oil risk",
    severity: "Medium",
    body:
      "Long-term fuel demand may shift as efficiency, policy, electric mobility, and global energy transition trends evolve.",
  },
  {
    title: "Valuation risk",
    severity: "High",
    body:
      "Even strong companies can be poor investments if shares are priced above realistic earnings and cash-flow expectations.",
  },
  {
    title: "Broker and access risk",
    severity: "Medium",
    body:
      "Investors must verify broker regulation, fees, eligibility, custody, foreign exchange, and IPO allocation rules.",
  },
];

const brokers = [
  {
    name: "Lagos Access Securities",
    countries: ["Nigeria", "Ghana", "United Kingdom"],
    exchanges: ["NGX", "GSE"],
    regulator: "SEC Nigeria - sample profile",
    minimum: "To be confirmed",
    fees: "Brokerage and statutory fees may apply",
    ipoAccess: "Awaiting prospectus",
    diaspora: true,
    regulated: true,
    sponsored: true,
  },
  {
    name: "Pan-African Markets Desk",
    countries: ["Kenya", "Nigeria", "South Africa", "United States"],
    exchanges: ["NGX", "NSE Kenya", "JSE"],
    regulator: "Multiple licences - verify directly",
    minimum: "Varies by country",
    fees: "Custody, FX, and trading fees may apply",
    ipoAccess: "Not confirmed",
    diaspora: true,
    regulated: true,
    sponsored: false,
  },
  {
    name: "Retail Equities Africa",
    countries: ["Nigeria"],
    exchanges: ["NGX"],
    regulator: "Licence number pending verification",
    minimum: "Low minimum advertised",
    fees: "Check schedule before account opening",
    ipoAccess: "Not confirmed",
    diaspora: false,
    regulated: false,
    sponsored: false,
  },
];

const stats = {
  totalViews: "128,420",
  uniqueVisitors: "47,810",
  topCountries: ["Nigeria", "United Kingdom", "United States", "Ghana", "South Africa"],
  mostReadPages: ["Dangote Tracker", "Broker Directory", "Risks", "Can ordinary investors buy shares?"],
  newsletterSignups: "8,940",
  brokerClicks: "3,275",
};

const articles = [
  {
    title: "What is the Dangote Refinery IPO?",
    slug: "what-is-the-dangote-refinery-ipo.html",
    category: "IPO basics",
    description:
      "A plain-English explanation of what a Dangote Refinery IPO would mean, what is confirmed, and what investors should wait to verify.",
    answer:
      "A Dangote Refinery IPO would mean shares in the refinery business are offered to public investors under official listing documents. Until a prospectus is published, pricing, eligibility, exchange venue, timetable, and allocation rules remain unconfirmed.",
    sections: [
      ["What would an IPO change?", "An IPO can create public ownership and trading access, but the actual rights depend on the prospectus, company structure, exchange rules, and regulator approvals."],
      ["What is not confirmed?", "The final exchange, ticker, share price, minimum subscription, retail allocation, dividend policy, and foreign investor process should be treated as unknown until official documents are available."],
      ["What should readers watch?", "Look for issuer announcements, exchange notices, SEC filings, broker circulars, and the official prospectus rather than screenshots, social posts, or price predictions."],
    ],
  },
  {
    title: "Can ordinary investors buy Dangote Refinery shares?",
    slug: "can-ordinary-investors-buy-dangote-refinery-shares.html",
    category: "Retail access",
    description:
      "Explains whether retail and diaspora investors may be able to buy Dangote Refinery shares if a public listing is confirmed.",
    answer:
      "Possibly, but only if the final listing structure permits retail investors and their brokers can provide access. Eligibility may differ between Nigerian residents, other African investors, and diaspora investors.",
    sections: [
      ["Local retail access", "Nigerian retail access would depend on the prospectus, offer channels, broker participation, account requirements, and any minimum subscription rules."],
      ["Diaspora access", "Diaspora investors should verify residency eligibility, KYC requirements, custody, FX conversion, transfer limits, tax treatment, and whether their broker can participate in the offer."],
      ["Broker checks", "Before opening an account, verify the broker's regulator, licence number, fee schedule, complaint process, custody arrangement, and IPO allocation policy."],
    ],
  },
  {
    title: "Which exchange will Dangote Refinery list on?",
    slug: "which-exchange-will-dangote-refinery-list-on.html",
    category: "Listing venue",
    description:
      "Tracks the open question of where Dangote Refinery could list and why exchange confirmation matters for investors.",
    answer:
      "The final exchange has not been confirmed by official prospectus details on this site. Investors should wait for issuer, exchange, and regulator announcements.",
    sections: [
      ["Why the exchange matters", "The exchange affects settlement, currency, trading hours, disclosure rules, broker access, liquidity, and foreign investor participation."],
      ["Possible investor impact", "A Nigerian listing, cross-listing, or another structure could produce different access routes and account requirements for retail and diaspora investors."],
      ["How to verify", "Check the issuer website, Nigerian Exchange notices, SEC Nigeria publications, and broker circulars before relying on any listing venue claim."],
    ],
  },
  {
    title: "Dangote Refinery IPO risks investors should understand",
    slug: "dangote-refinery-ipo-risks.html",
    category: "Risk education",
    description:
      "A risk-focused guide to refinery shares, covering regulation, crude supply, FX, operations, valuation, and energy transition risk.",
    answer:
      "The main risks include regulation, crude supply, operational uptime, FX exposure, debt, valuation, broker access, and long-term changes in oil demand. A landmark asset can still be a risky investment at the wrong price or structure.",
    sections: risks.slice(0, 6).map((risk) => [risk.title, risk.body]),
  },
  {
    title: "How to compare brokers before buying African equities",
    slug: "how-to-compare-brokers-before-buying-african-equities.html",
    category: "Broker education",
    description:
      "A practical checklist for comparing brokers before buying African equities or applying for the potential Dangote Refinery IPO.",
    answer:
      "Compare brokers by regulation, licence number, market access, custody model, fees, FX costs, complaint route, account minimums, and IPO allocation rules. A broker listing is not the same as an endorsement.",
    sections: [
      ["Regulation and custody", "Confirm the legal entity, regulator, licence number, client asset protection, nominee structure, and complaint route before funding an account."],
      ["Fees and FX", "Ask for the full fee schedule, including brokerage, statutory charges, custody, account maintenance, deposit, withdrawal, FX spread, and transfer costs."],
      ["IPO process", "Check whether the broker can access primary offers, how allocations are handled, when refunds are paid, and what documentation is required."],
    ],
  },
  {
    title: "What does peak oil mean for refinery investors?",
    slug: "what-does-peak-oil-mean-for-refinery-investors.html",
    category: "Energy transition",
    description:
      "Explains peak oil demand and why long-term demand scenarios matter for refinery investors.",
    answer:
      "Peak oil demand is the risk that global oil demand growth slows or declines over time. For refinery investors, this can affect margins, utilisation, financing, valuation, and long-term terminal value.",
    sections: [
      ["Demand is not the same everywhere", "Even if global demand slows, regional demand can differ. Investors still need to examine local fuel demand, export markets, policy, and competition."],
      ["Margins matter", "Refineries earn through spreads between input costs and refined product prices, so demand shifts, crude supply, maintenance, and regulation can matter as much as headline volume."],
      ["Valuation discipline", "Long-lived energy assets can be valuable, but investors should avoid assuming permanent growth or guaranteed dividends without audited financials and prospectus detail."],
    ],
  },
];

const pages = [
  {
    file: "index.html",
    title: "Dangote Refinery IPO Tracker, Risks and Broker Access",
    description:
      "Track the potential Dangote Refinery IPO with plain-English updates on listing status, prospectus details, risks, broker access, and retail investor education.",
    h1: "DANGOTE REFINERY IPO WATCH",
    eyebrow: "Dangote Refinery IPO tracker",
    lede:
      "Plain-English tracking for the Dangote Refinery listing story: facts, risks, broker access, and public ownership updates.",
    type: "WebPage",
    hero: true,
    body: homeBody,
  },
  {
    file: "tracker.html",
    title: "Dangote Refinery IPO Tracker: Prospectus, Listing Status and Retail Access",
    description:
      "Confirmed and pending details for the potential Dangote Refinery IPO, including prospectus status, exchange, retail access, broker access, and timeline.",
    h1: "Dangote Refinery listing facts",
    eyebrow: "Dangote Tracker",
    lede:
      "A plain-language tracker for prospectus status, expected exchange, retail access, broker access, and confirmed updates.",
    body: trackerBody,
  },
  {
    file: "timeline.html",
    title: "Dangote Refinery IPO Timeline and Listing Updates",
    description:
      "Timeline of confirmed and reported Dangote Refinery IPO updates, separated from unconfirmed pricing, broker access, and prospectus claims.",
    h1: "Listing update timeline",
    eyebrow: "Timeline",
    lede: "Admin-editable updates separating reported developments from confirmed prospectus information.",
    body: timelineBody,
  },
  {
    file: "risks.html",
    title: "Dangote Refinery IPO Risks: Regulation, FX, Crude Supply and Valuation",
    description:
      "Risk education for refinery shares and African energy investment, including FX, regulation, crude supply, operations, broker access, and valuation.",
    h1: "Understand the risks before the hype",
    eyebrow: "Risk dashboard",
    lede:
      "A credible Dangote Refinery IPO tracker must make uncertainty visible. This page is educational and does not recommend any investment action.",
    body: risksBody,
  },
  {
    file: "brokers.html",
    title: "Brokers for African Stocks and Possible Dangote Refinery IPO Access",
    description:
      "Compare broker access that may matter for the potential Dangote Refinery IPO, Nigerian Exchange exposure, diaspora investors, and possible IPO participation. Listings are not endorsements.",
    h1: "Find a Broker",
    eyebrow: "Broker Directory",
    lede:
      "Compare brokers that may provide relevant market access if a Dangote Refinery offer becomes available. Always verify regulation, fees, eligibility, and risk before opening an account.",
    body: brokersBody,
  },
  {
    file: "map.html",
    title: "Dangote Refinery IPO Interest Map and Demand Signals",
    description:
      "Privacy-safe aggregated investor interest stats for the Dangote Refinery IPO conversation across Africa and the diaspora.",
    h1: "Investor Interest Map",
    eyebrow: "Live Interest Map",
    lede:
      "Aggregated site stats only. No IP addresses, exact locations, individual visitor journeys, or real-time personal data are displayed.",
    body: mapBody,
  },
  {
    file: "learn.html",
    title: "Learn About the Dangote Refinery IPO, Shares, Brokers and Risks",
    description:
      "Simple articles explaining the potential Dangote Refinery IPO, broker comparison, Nigerian Exchange access, and refinery-specific risks.",
    h1: "Simple Dangote IPO education",
    eyebrow: "Learn",
    lede:
      "Short, neutral explainers about Dangote Refinery shares, broker access, listing documents, and refinery-specific risk.",
    body: learnBody,
    faq: true,
  },
  {
    file: "about.html",
    title: "About IPO Watch Africa and Our Editorial Standard",
    description:
      "About IPO Watch Africa, an independent educational website focused first on the potential Dangote Refinery IPO.",
    h1: "Independent education, not financial advice",
    eyebrow: "About",
    lede:
      "IPO Watch Africa currently focuses on the potential Dangote Refinery IPO, with simple education for ordinary people across Africa and the diaspora.",
    body: aboutBody,
  },
  {
    file: "editorial-policy.html",
    title: "Editorial Policy, Sources and Corrections",
    description:
      "The IPO Watch Africa editorial policy for source handling, corrections, sponsored content, and financial education disclaimers.",
    h1: "Editorial policy and source standard",
    eyebrow: "Editorial Policy",
    lede:
      "How we separate confirmed information from unknowns, handle corrections, label sponsored content, and avoid financial advice.",
    body: editorialBody,
  },
  {
    file: "advertise.html",
    title: "Advertise to African Retail and Diaspora Investors",
    description:
      "Advertise on IPO Watch Africa with labelled sponsored broker listings, newsletters, display banners, and educational sponsorships.",
    h1: "Advertise on IPO Watch Africa",
    eyebrow: "Media partnerships",
    lede:
      "Reach African retail investors, diaspora investors, finance creators, brokers, and journalists through clearly labelled, compliance-led placements.",
    body: advertiseBody,
  },
  {
    file: "contact.html",
    title: "Contact IPO Watch Africa",
    description:
      "Contact IPO Watch Africa for editorial corrections, broker directory enquiries, advertising, source updates, and media kit requests.",
    h1: "Contact the editorial or advertising desk",
    eyebrow: "Contact",
    lede:
      "Use this form for corrections, broker directory enquiries, media kit requests, source updates, and partnership questions.",
    body: contactBody,
  },
  {
    file: "privacy.html",
    title: "Privacy Policy for IPO Watch Africa",
    description:
      "Privacy policy for IPO Watch Africa, including privacy-safe analytics, newsletter data, contact forms, and aggregated interest stats.",
    h1: "Privacy-safe by design",
    eyebrow: "Privacy Policy",
    lede:
      "We aim to use aggregated analytics and collect only the information needed to run newsletters, contact forms, and site operations.",
    body: privacyBody,
  },
  {
    file: "terms.html",
    title: "Terms and Educational Disclaimer",
    description:
      "Terms and educational disclaimer for IPO Watch Africa, including no-advice, no broker endorsement, and investor responsibility notices.",
    h1: "Educational use only",
    eyebrow: "Terms",
    lede:
      "By using this site, you understand that IPO Watch Africa provides general information and does not provide financial advice.",
    body: termsBody,
  },
  ...articles.map(articlePage),
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function urlFor(file = "index.html") {
  return `${site.domain}/${file === "index.html" ? "" : file}`;
}

function navHtml() {
  return nav.map(([href, label]) => `<a href="${href}">${label}</a>`).join("");
}

function head(page) {
  const canonical = urlFor(page.file);
  const title = page.title.startsWith(site.name) ? page.title : `${page.title} | ${site.name}`;
  const schema = JSON.stringify(schemaFor(page)).replaceAll("</", "<\\/");
  return `  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="${escapeHtml(site.author)}">
  <meta name="last-modified" content="${site.updated}">
  <meta property="og:site_name" content="${escapeHtml(site.name)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(page.description)}">
  <meta property="og:type" content="${page.article ? "article" : "website"}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(page.description)}">
  <meta name="twitter:image" content="${site.image}">
  <link rel="stylesheet" href="assets/styles.css?v=${site.assetVersion}">
  <script type="application/ld+json">${schema}</script>`;
}

function schemaFor(page) {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${site.domain}/#organization`,
      name: site.name,
      url: site.domain,
      logo: `${site.domain}/${site.logo}`,
      description: site.description,
    },
    {
      "@type": "WebSite",
      "@id": `${site.domain}/#website`,
      url: site.domain,
      name: site.name,
      publisher: { "@id": `${site.domain}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${site.domain}/learn.html?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${urlFor(page.file)}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
        { "@type": "ListItem", position: 2, name: page.h1, item: urlFor(page.file) },
      ],
    },
  ];

  if (page.article) {
    graph.push({
      "@type": "Article",
      "@id": `${urlFor(page.file)}#article`,
      headline: page.title,
      description: page.description,
      datePublished: site.updated,
      dateModified: site.updated,
      author: { "@type": "Organization", name: site.author },
      reviewedBy: { "@type": "Organization", name: site.reviewedBy },
      publisher: { "@id": `${site.domain}/#organization` },
      mainEntityOfPage: urlFor(page.file),
      image: site.image,
    });
  } else {
    graph.push({
      "@type": page.type || "WebPage",
      "@id": `${urlFor(page.file)}#webpage`,
      url: urlFor(page.file),
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${site.domain}/#website` },
      dateModified: site.updated,
      reviewedBy: { "@type": "Organization", name: site.reviewedBy },
    });
  }

  if (page.faq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${urlFor(page.file)}#faq`,
      mainEntity: articles.map((article) => ({
        "@type": "Question",
        name: article.title,
        acceptedAnswer: { "@type": "Answer", text: article.answer },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function header() {
  return `<header class="site-header">
    <nav class="nav" aria-label="Primary navigation">
      <a class="brand" href="index.html"><img class="brand-logo" src="${site.logo}" alt="" aria-hidden="true"><span>IPO Watch Africa</span></a>
      <button class="menu-button" data-menu-button aria-expanded="false" aria-label="Open menu">☰</button>
      <div class="nav-links" data-menu>${navHtml()}</div>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-grid">
      <a class="brand" href="index.html"><img class="brand-logo" src="${site.logo}" alt="" aria-hidden="true"><span>IPO Watch Africa</span></a>
      <div class="footer-links">${navHtml()}<a href="about.html">About</a><a href="editorial-policy.html">Editorial Policy</a><a href="privacy.html">Privacy Policy</a><a href="terms.html">Terms</a><a href="contact.html">Contact</a></div>
      <p class="footer-disclaimer">IPO Watch Africa is an independent educational website. We do not provide financial advice, investment recommendations, or broker endorsements. Always do your own research and consult a qualified professional before investing. Last updated ${site.updated}.</p>
      <a class="footer-credit" href="https://webarastudio.com" target="_blank" rel="noopener noreferrer"><img src="public/webarabadge.png" alt="Built by WebAra Studio" loading="lazy"></a>
    </div>
  </footer>`;
}

function metadataBlock() {
  return `<section class="section meta-section">
    <div class="section-inner grid two-col">
      <article class="info-card">
        <h2>Editorial notes</h2>
        <dl class="meta-list">
          <div><dt>Last updated</dt><dd>${site.updated}</dd></div>
          <div><dt>Written by</dt><dd>${site.author}</dd></div>
          <div><dt>Reviewed by</dt><dd>${site.reviewedBy}</dd></div>
          <div><dt>Policy</dt><dd><a href="editorial-policy.html">Editorial policy and corrections</a></dd></div>
        </dl>
      </article>
      <article class="info-card">
        <h2>Primary sources to verify</h2>
        <ul class="source-list">${sources.map((source) => `<li><a href="${source.url}" rel="nofollow noopener" target="_blank">${source.name}</a><span>${source.note}</span></li>`).join("")}</ul>
      </article>
    </div>
  </section>`;
}

function pageShell(page) {
  const heroClass = page.hero ? "hero" : "page-hero";
  const heroInner = page.hero ? "hero-inner" : "section-inner";
  const heroContent = page.hero ? homeHero() : standardHero(page);
  return `<!doctype html>
<html lang="en">
<head>
${head(page)}
</head>
<body>
  ${header()}
  <main>
    <section class="${heroClass}">
      <div class="${heroInner}">
        ${heroContent}
      </div>
    </section>
${page.body()}
${metadataBlock()}
  </main>
  ${footer()}
  <script src="assets/site-data.js?v=${site.assetVersion}"></script>
  <script src="assets/app.js?v=${site.assetVersion}"></script>
</body>
</html>
`;
}

function standardHero(page) {
  return `<div class="hero-content">
          <span class="eyebrow">${page.eyebrow}</span>
          <h1>${page.h1}</h1>
          <p class="lede">${page.lede}</p>
        </div>`;
}

function homeHero() {
  const slide = heroSlides[0];
  return `<article class="hero-content">
            <span class="eyebrow">${slide.eyebrow}</span>
            <h1>${slide.title}</h1>
            <p class="lede">${slide.lede}</p>
            <div class="hero-actions"><a class="button" href="${slide.primaryHref}">${slide.primaryLabel}</a><a class="button secondary" href="${slide.secondaryHref}">${slide.secondaryLabel}</a><a class="button ghost" href="#watchlist">Join Updates</a></div>
            <p class="mini-disclaimer">Educational information only. Not financial advice.</p>
          </article>`;
}

function statusCards() {
  return `<div class="grid status-grid" data-status-cards>${ipoStatus.map((item) => `<article class="status-card ${item.tone}"><span>${item.label}</span><strong>${item.value}</strong><em>${item.state}</em></article>`).join("")}</div>`;
}

function riskCards() {
  return `<div class="grid three-col" data-risk-cards>${risks.map((risk) => `<article class="info-card risk-card"><div class="card-top"><h3>${risk.title}</h3><span class="badge ${risk.severity.toLowerCase()}">${risk.severity}</span></div><p>${risk.body}</p></article>`).join("")}</div>`;
}

function brokerFilters() {
  return `<form class="filters" data-broker-filters>
          <label>Country<select name="country"><option value="">Any</option><option>Nigeria</option><option>Ghana</option><option>United Kingdom</option><option>United States</option><option>Kenya</option><option>South Africa</option></select></label>
          <label>Exchange<select name="exchange"><option value="">Any</option><option>NGX</option><option>GSE</option><option>NSE Kenya</option><option>JSE</option></select></label>
          <label>Diaspora access<select name="diaspora"><option value="">Any</option><option value="true">Required</option></select></label>
          <label>IPO access<select name="ipo"><option value="">Any</option><option>Confirmed</option><option>Not confirmed</option><option>Awaiting prospectus</option></select></label>
          <label>Regulated status<select name="regulated"><option value="">Any</option><option value="true">Regulated only</option></select></label>
        </form>`;
}

function brokerCards() {
  return `<div class="grid three-col" data-broker-cards>${brokers.map((broker) => `<article class="broker-card"><div class="card-top"><h3>${broker.name}</h3>${broker.sponsored ? '<span class="sponsored">Sponsored</span>' : '<span class="plain-label">Directory listing</span>'}</div><dl><div><dt>Countries served</dt><dd>${broker.countries.join(", ")}</dd></div><div><dt>Exchanges supported</dt><dd>${broker.exchanges.join(", ")}</dd></div><div><dt>Regulator / licence</dt><dd>${broker.regulator}</dd></div><div><dt>Account minimum</dt><dd>${broker.minimum}</dd></div><div><dt>Fees</dt><dd>${broker.fees}</dd></div><div><dt>IPO access</dt><dd>${broker.ipoAccess}</dd></div></dl><a class="button secondary" href="contact.html">Visit broker</a></article>`).join("")}</div>`;
}

function statCards() {
  return `<div class="grid stat-grid" data-stats><article><span>Total views</span><strong>${stats.totalViews}</strong></article><article><span>Unique visitors</span><strong>${stats.uniqueVisitors}</strong></article><article><span>Newsletter signups</span><strong>${stats.newsletterSignups}</strong></article><article><span>Broker directory clicks</span><strong>${stats.brokerClicks}</strong></article></div>`;
}

function anticipatedTimelineSection() {
  return `<section class="section"><div class="section-inner"><div class="section-heading"><div><span class="eyebrow">Anticipated timetable</span><h2>Late April 2026 IPO timeline</h2></div><p>Exact dates remain subject to regulatory approval and official offer documents. These are the key anticipated dates being watched as of late April 2026.</p></div><div class="timeline-axis" aria-label="Anticipated Dangote Refinery IPO timeline">${anticipatedTimeline.map((item) => `<article class="axis-event"><span>${item.date}</span><h3>${item.title}</h3><p>${item.body}</p><b>${item.tag}</b></article>`).join("")}</div><div class="key-details"><h3>Key details</h3><dl>${anticipatedDetails.map(([term, description]) => `<div><dt>${term}</dt><dd>${description}</dd></div>`).join("")}</dl><p class="note">Market timetable cited from Bamboo Invest and related late-April 2026 commentary. Verify final terms against official issuer, NGX, SEC Nigeria, and prospectus documents.</p></div></div></section>`;
}

function homeBody() {
  return `
    <section class="section"><div class="section-inner">${statusCards()}</div></section>
    ${anticipatedTimelineSection()}
    <section class="section alt"><div class="section-inner"><div class="section-heading"><h2>The 60-second explainer</h2></div><p class="lede">Dangote Petroleum Refinery is a major refinery in Lagos, Nigeria. If it lists publicly, investors may be able to buy shares through approved brokers, depending on the final exchange, prospectus, and eligibility rules.</p></div></section>
    <section class="section"><div class="section-inner grid two-col"><article class="info-card"><h2>Confirmed</h2><ul class="fact-list"><li>The refinery is a major African energy asset</li><li>Public listing plans have been reported</li><li>Investors are waiting for official prospectus details</li></ul></article><article class="info-card unknown"><h2>Unknown</h2><ul class="fact-list"><li>Final exchange</li><li>Share price</li><li>Retail investor eligibility</li><li>Broker access</li><li>Dividend policy</li><li>Allocation rules</li></ul></article></div></section>
    <section class="section alt"><div class="section-inner"><div class="section-heading"><h2>Why people are watching</h2><p>Interest is high because a Dangote Refinery listing could become a landmark Africa refinery IPO, but significance does not remove risk.</p></div><div class="grid three-col"><article class="info-card"><h3>African infrastructure ownership</h3><p>Public markets can broaden participation in large-scale productive assets.</p></article><article class="info-card"><h3>Energy security</h3><p>Refining capacity affects domestic fuel supply, imports, and regional energy resilience.</p></article><article class="info-card"><h3>Possible export revenue</h3><p>Refined product exports may matter if operations, pricing, and demand align.</p></article><article class="info-card"><h3>Diaspora investor interest</h3><p>Many diaspora investors are watching African stock market access and eligibility rules.</p></article><article class="info-card"><h3>Potential dollar-linked earnings</h3><p>Some revenue streams may have foreign-currency exposure, while costs and FX rules remain important.</p></article><article class="info-card"><h3>Historic IPO significance</h3><p>A confirmed listing could become one of the most closely watched Nigerian Exchange IPO events.</p></article></div></div></section>
    <section class="section"><div class="section-inner"><div class="section-heading"><h2>Risk dashboard</h2><p>These are education notes, not a recommendation to buy, sell, or hold Dangote Refinery shares.</p></div>${riskCards()}</div></section>
    <section class="section alt" id="brokers"><div class="section-inner"><div class="section-heading"><h2>Find a Broker</h2><p>Compare brokers that may provide relevant market access if a Dangote Refinery offer becomes available. Always verify regulation, fees, eligibility, and risk before opening an account.</p></div>${brokerFilters()}${brokerCards()}</div></section>
    <section class="section"><div class="section-inner"><div class="section-heading"><h2>Investor Interest Map</h2><p>Privacy-safe aggregated demand signals for the Dangote Refinery listing conversation.</p></div>${statCards()}<div class="grid two-col" style="margin-top:16px"><article class="info-card"><h3>Top countries</h3><ul class="fact-list" data-top-countries>${stats.topCountries.map((item) => `<li>${item}</li>`).join("")}</ul></article><article class="info-card"><h3>Most-read pages</h3><ul class="fact-list" data-most-read>${stats.mostReadPages.map((item) => `<li>${item}</li>`).join("")}</ul></article></div><p class="note">Stats are aggregated and privacy-safe. We do not show IP addresses, exact user locations, individual visitor journeys, or real-time personal data.</p></div></section>
    <section class="section alt" id="watchlist"><div class="section-inner grid two-col"><div><span class="eyebrow">Watchlist</span><h2>Get notified when the prospectus drops.</h2><p>Receive confirmed updates about the Dangote Refinery IPO, broker access, and listing documents.</p></div>${watchlistForm()}</div></section>`;
}

function trackerBody() {
  return `
    <section class="section"><div class="section-inner">${statusCards()}</div></section>
    <section class="section alt"><div class="section-inner grid two-col"><article class="info-card"><h2>What we track</h2><ul class="fact-list"><li>Prospectus publication</li><li>Final exchange and ticker</li><li>Retail investor eligibility</li><li>Dangote Refinery shares allocation rules</li><li>Broker and custody access</li></ul></article><article class="info-card unknown"><h2>What remains unconfirmed</h2><p>Share price, minimum subscription, dividend policy, foreign investor process, and timetable should be treated as unknown until official documents are available.</p></article></div></section>`;
}

function timelineBody() {
  return `${anticipatedTimelineSection()}<section class="section alt"><div class="section-inner"><div class="timeline-list" data-timeline>${timeline.map((item) => `<article class="timeline-item"><span>${item.date}</span><h3>${item.title}</h3><p>${item.body}</p><b>${item.tag}</b></article>`).join("")}</div></div></section>`;
}

function risksBody() {
  return `<section class="section"><div class="section-inner">${riskCards()}</div></section>`;
}

function brokersBody() {
  return `<section class="section"><div class="section-inner">${brokerFilters()}${brokerCards()}<p class="note">Listings are informational, not endorsements. Sponsored broker listings are clearly labelled.</p></div></section>`;
}

function mapBody() {
  return `<section class="section"><div class="section-inner">${statCards()}<div class="grid two-col" style="margin-top:16px"><article class="info-card"><h3>Top countries</h3><ul class="fact-list" data-top-countries>${stats.topCountries.map((item) => `<li>${item}</li>`).join("")}</ul></article><article class="info-card"><h3>Most-read pages</h3><ul class="fact-list" data-most-read>${stats.mostReadPages.map((item) => `<li>${item}</li>`).join("")}</ul></article></div><p class="note">Stats are aggregated and privacy-safe.</p></div></section>`;
}

function learnBody() {
  return `<section class="section"><div class="section-inner"><div class="grid three-col" data-articles>${articles.map(articleCard).join("")}</div></div></section><section class="section alt"><div class="section-inner grid two-col">${articles.map((article) => `<article class="info-card" id="${article.slug.replace(".html", "")}"><h2>${article.title}</h2><p>${article.answer}</p><a class="button secondary" href="${article.slug}">Read guide</a></article>`).join("")}</div></section>`;
}

function articleCard(article) {
  return `<a class="article-link" href="${article.slug}"><span>${article.category}</span><strong>${article.title}</strong><p>${article.description}</p></a>`;
}

function articlePage(article) {
  return {
    file: article.slug,
    title: article.title,
    description: article.description,
    h1: article.title,
    eyebrow: article.category,
    lede: article.answer,
    article: true,
    body: () => `<section class="section"><div class="section-inner"><article class="article-body"><div class="answer-box"><span class="small-label">Short answer</span><p>${article.answer}</p></div>${article.sections.map(([heading, body]) => `<h2>${heading}</h2><p>${body}</p>`).join("")}<div class="section-actions"><a class="button secondary" href="learn.html">Back to Learn</a><a class="button" href="tracker.html">View Dangote Tracker</a></div></article></div></section>`,
  };
}

function aboutBody() {
  return `<section class="section"><div class="section-inner grid two-col"><article class="info-card"><h2>Mission</h2><p>We track confirmed Dangote Refinery IPO updates, explain risks, show broker options, and publish accessible education without recommending whether anyone should buy, sell, or hold an investment.</p></article><article class="info-card"><h2>Editorial standard</h2><p>We separate confirmed information from unknowns, label sponsored placements, avoid price predictions, and keep investor protection visible.</p></article><article class="info-card"><h2>Future coverage</h2><p>The site may track other African IPOs later, but the current editorial focus is the potential Dangote Refinery listing.</p></article></div></section>`;
}

function editorialBody() {
  return `<section class="section"><div class="section-inner grid two-col"><article class="info-card"><h2>Source hierarchy</h2><ul class="fact-list"><li>Official issuer, exchange, and regulator documents come first.</li><li>Media reports are labelled as reported until confirmed by primary sources.</li><li>Pricing, eligibility, and allocation rules remain unknown until prospectus details are available.</li></ul></article><article class="info-card"><h2>Corrections</h2><p>Send corrections through the contact page with the source, date, and exact claim. We update pages when a primary source changes the facts.</p></article><article class="info-card"><h2>Sponsored content</h2><p>Sponsored placements must be labelled. Sponsorship does not mean broker endorsement or investment suitability.</p></article><article class="info-card"><h2>No financial advice</h2><p>We publish general education only. We do not recommend buying, selling, subscribing for, or holding any security.</p></article></div></section>`;
}

function advertiseBody() {
  return `<section class="section"><div class="section-inner grid three-col"><article class="info-card"><h2>Why advertise with us</h2><p>IPO Watch Africa serves people looking for clear, neutral education about the potential Dangote Refinery IPO, African energy investment, and broker access.</p></article><article class="info-card"><h2>Audience</h2><ul class="fact-list"><li>African retail investors</li><li>Diaspora investors</li><li>Finance creators</li><li>Brokers</li><li>Journalists</li></ul></article><article class="info-card"><h2>Ad options</h2><ul class="fact-list"><li>Sponsored broker listing</li><li>Featured broker profile</li><li>Newsletter sponsorship</li><li>Display banner</li><li>Educational article sponsorship</li></ul></article></div></section><section class="section alt"><div class="section-inner grid two-col"><article class="info-card"><h2>Compliance rules</h2><ul class="fact-list"><li>All sponsored content must be labelled</li><li>No misleading claims</li><li>No guaranteed returns</li><li>Broker regulation must be disclosed</li><li>We reserve the right to reject advertisers</li></ul></article>${mediaKitForm()}</div></section>`;
}

function contactBody() {
  return `<section class="section"><div class="section-inner grid two-col"><article class="info-card"><h2>Before you write</h2><p>We cannot provide investment advice, tell you whether to buy shares, or recommend a broker. For personal advice, consult a qualified professional.</p></article>${contactForm()}</div></section>`;
}

function privacyBody() {
  return `<section class="section"><div class="section-inner grid two-col"><article class="info-card"><h2>Data we may collect</h2><p>Email, country, investor type, contact messages, aggregated page views, country-level traffic, newsletter signups, and broker directory click totals.</p></article><article class="info-card"><h2>Data we do not display</h2><p>We do not publish IP addresses, exact user locations, individual visitor journeys, or real-time personal data on the Live Interest Map.</p></article><article class="info-card"><h2>Analytics</h2><p>The site is analytics-ready for privacy-conscious tools. Configure analytics to avoid unnecessary personal tracking before launch.</p></article><article class="info-card"><h2>Your choices</h2><p>Newsletter subscribers should be able to unsubscribe, request deletion, and ask how their information is used.</p></article></div></section>`;
}

function termsBody() {
  return `<section class="section"><div class="section-inner grid two-col"><article class="info-card"><h2>No advice</h2><p>Nothing on this site is investment, tax, legal, or broker selection advice. We do not recommend buying, selling, subscribing for, or holding any security.</p></article><article class="info-card"><h2>No broker endorsement</h2><p>Broker directory entries are informational. Sponsored placements are labelled and do not mean endorsement or suitability.</p></article><article class="info-card"><h2>Accuracy</h2><p>We aim to track official and reliable information, but IPO terms can change. Verify all details with official issuer, exchange, regulator, and broker sources.</p></article><article class="info-card"><h2>Investor responsibility</h2><p>Always do your own research and consult a qualified professional before investing, especially when dealing with cross-border access and currency risk.</p></article></div></section>`;
}

function watchlistForm() {
  return `<form class="form-panel" data-demo-form><div class="form-grid"><label>Email<input type="email" required placeholder="you@example.com"></label><label>Country<input required placeholder="Country"></label><label class="full">Investor type<select required><option>Beginner</option><option>Retail investor</option><option>Broker</option><option>Journalist</option><option>Other</option></select></label></div><div class="section-actions"><button class="button" type="submit">Join the Watchlist</button></div><p class="form-message" data-form-message></p></form>`;
}

function mediaKitForm() {
  return `<form class="form-panel" data-demo-form><h2>Request Media Kit</h2><div class="form-grid"><label>Name<input required></label><label>Work email<input type="email" required></label><label>Company<input required></label><label>Advertiser type<select><option>Broker</option><option>Financial brand</option><option>Media agency</option><option>Other</option></select></label><label class="full">Message<textarea required></textarea></label></div><div class="section-actions"><button class="button" type="submit">Request Media Kit</button></div><p class="form-message" data-form-message></p></form>`;
}

function contactForm() {
  return `<form class="form-panel" data-demo-form><div class="form-grid"><label>Name<input required></label><label>Email<input type="email" required></label><label class="full">Topic<select><option>Editorial correction</option><option>Broker directory</option><option>Advertising</option><option>Source update</option><option>Media</option><option>Other</option></select></label><label class="full">Message<textarea required></textarea></label></div><div class="section-actions"><button class="button" type="submit">Send Message</button></div><p class="form-message" data-form-message></p></form>`;
}

function sitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${urlFor(page.file)}</loc><lastmod>${site.updated}</lastmod><changefreq>${page.article ? "monthly" : "weekly"}</changefreq><priority>${page.file === "index.html" ? "1.0" : page.article ? "0.7" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${site.domain}/sitemap.xml
`;
}

function llms() {
  return `# ${site.name}

> Independent educational tracker focused first on the potential Dangote Refinery IPO, listing status, risks, broker access, and investor education.

Production URL placeholder: ${site.domain}
Last updated: ${site.updated}

Important pages:
- Home and current status: ${site.domain}/
- IPO tracker: ${site.domain}/tracker.html
- Timeline: ${site.domain}/timeline.html
- Risks: ${site.domain}/risks.html
- Broker directory: ${site.domain}/brokers.html
- Learn hub: ${site.domain}/learn.html
- Editorial policy: ${site.domain}/editorial-policy.html

Major explainers:
${articles.map((article) => `- ${article.title}: ${site.domain}/${article.slug}`).join("\n")}

Editorial policy:
- Educational information only; not financial advice.
- Treat pricing, eligibility, exchange venue, allocation rules, and timetable as unknown until official prospectus details are available.
- Prefer official issuer, exchange, and regulator sources over media reports.
- Sponsored broker placements must be labelled and are not endorsements.

Primary verification sources:
${sources.map((source) => `- ${source.name}: ${source.url}`).join("\n")}
`;
}

const outputDirs = [".", "dist"];

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
cpSync("assets", "dist/assets", { recursive: true });
cpSync("public", "dist/public", { recursive: true });

function writeOutput(file, contents) {
  for (const dir of outputDirs) {
    writeFileSync(dir === "." ? file : `${dir}/${file}`, contents);
  }
}

for (const page of pages) {
  writeOutput(page.file, pageShell(page));
}

writeOutput("sitemap.xml", sitemap());
writeOutput("robots.txt", robots());
writeOutput("llms.txt", llms());
