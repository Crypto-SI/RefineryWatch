window.RWA_DATA = {
  ipoStatus: [
    { label: "Prospectus", value: "Pending", tone: "pending", state: "Pending" },
    { label: "Exchange", value: "To be confirmed", tone: "unknown", state: "Unknown" },
    { label: "Retail access", value: "To be confirmed", tone: "neutral", state: "Unknown" },
    { label: "Broker directory", value: "Opening soon", tone: "pending", state: "Pending" },
    { label: "Latest update", value: "Awaiting official listing details", tone: "watch", state: "Monitor" }
  ],
  timeline: [
    {
      date: "Awaiting official announcement",
      title: "Prospectus not yet published",
      body: "IPO Watch Africa is tracking official disclosures, exchange announcements, and prospectus details before treating listing terms as confirmed.",
      tag: "Pending"
    },
    {
      date: "Reported plans",
      title: "Public listing plans discussed in media",
      body: "Listing plans have been reported, but final investor access, exchange venue, allocation rules, pricing, and timetable remain unconfirmed.",
      tag: "Reported"
    }
  ],
  risks: [
    { title: "Political and regulatory risk", severity: "High", body: "Policy changes, import rules, subsidies, taxes, and licensing conditions can affect refinery economics and investor outcomes." },
    { title: "Operational risk", severity: "Medium", body: "Large refining assets depend on uptime, maintenance discipline, commissioning quality, and safe operations." },
    { title: "Crude supply risk", severity: "High", body: "Feedstock pricing, supply reliability, and domestic crude availability may influence margins and production levels." },
    { title: "FX and currency risk", severity: "High", body: "Revenue, debt, crude costs, and investor returns may be exposed to naira, dollar, and cross-border transfer risks." },
    { title: "Oil demand and peak oil risk", severity: "Medium", body: "Long-term fuel demand may shift as efficiency, policy, electric mobility, and global energy transition trends evolve." },
    { title: "Valuation risk", severity: "High", body: "Even strong companies can be poor investments if shares are priced above realistic earnings and cash-flow expectations." },
    { title: "Broker and access risk", severity: "Medium", body: "Investors must verify broker regulation, fees, eligibility, custody, foreign exchange, and IPO allocation rules." }
  ],
  brokers: [
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
      sponsored: true
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
      sponsored: false
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
      sponsored: false
    }
  ],
  stats: {
    totalViews: "128,420",
    uniqueVisitors: "47,810",
    topCountries: ["Nigeria", "United Kingdom", "United States", "Ghana", "South Africa"],
    mostReadPages: ["IPO Tracker", "Broker Directory", "Risks", "Can ordinary investors buy shares?"],
    newsletterSignups: "8,940",
    brokerClicks: "3,275"
  },
  articles: [
    { title: "What is the Dangote Refinery IPO?", category: "IPO basics", href: "what-is-the-dangote-refinery-ipo.html", description: "What an IPO would mean, what remains unconfirmed, and which official documents matter." },
    { title: "Can ordinary investors buy Dangote Refinery shares?", category: "Retail access", href: "can-ordinary-investors-buy-dangote-refinery-shares.html", description: "How retail and diaspora eligibility may depend on the final listing structure and broker access." },
    { title: "Which exchange will Dangote Refinery list on?", category: "Listing venue", href: "which-exchange-will-dangote-refinery-list-on.html", description: "Why exchange confirmation matters for settlement, disclosure, liquidity, and investor access." },
    { title: "Dangote Refinery IPO risks investors should understand", category: "Risk education", href: "dangote-refinery-ipo-risks.html", description: "Regulation, crude supply, FX, uptime, valuation, and energy transition risks to review." },
    { title: "How to compare brokers before buying African equities", category: "Broker education", href: "how-to-compare-brokers-before-buying-african-equities.html", description: "A practical checklist for broker regulation, custody, fees, FX, and IPO allocation rules." },
    { title: "What does peak oil mean for refinery investors?", category: "Energy transition", href: "what-does-peak-oil-mean-for-refinery-investors.html", description: "How long-term oil demand scenarios can affect refining margins and valuations." }
  ]
};
