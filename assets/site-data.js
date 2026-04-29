window.RWA_DATA = {
  ipoStatus: [
    { label: "Prospectus", value: "Pending", tone: "pending" },
    { label: "Exchange", value: "To be confirmed", tone: "unknown" },
    { label: "Retail access", value: "To be confirmed", tone: "neutral" },
    { label: "Broker directory", value: "Opening soon", tone: "pending" },
    { label: "Latest update", value: "Awaiting official listing details", tone: "watch" }
  ],
  timeline: [
    {
      date: "Awaiting official announcement",
      title: "Prospectus not yet published",
      body: "Refinery Watch Africa is tracking official disclosures, exchange announcements, and prospectus details before treating listing terms as confirmed.",
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
    { title: "Oil demand / peak oil risk", severity: "Medium", body: "Long-term fuel demand may shift as efficiency, policy, electric mobility, and global energy transition trends evolve." },
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
    { title: "What is the Dangote Refinery IPO?", category: "IPO basics", href: "learn.html#what-is-the-dangote-refinery-ipo" },
    { title: "Can ordinary investors buy Dangote Refinery shares?", category: "Retail access", href: "learn.html#can-ordinary-investors-buy" },
    { title: "Which exchange will Dangote Refinery list on?", category: "Listing venue", href: "learn.html#which-exchange" },
    { title: "What are the risks of investing in refinery shares?", category: "Risk education", href: "learn.html#refinery-share-risks" },
    { title: "How to compare brokers before buying African equities", category: "Broker education", href: "learn.html#compare-brokers" },
    { title: "What does peak oil mean for refinery investors?", category: "Energy transition", href: "learn.html#peak-oil" }
  ]
};
