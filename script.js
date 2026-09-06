/**
 * AMR KHALED — PORTFOLIO JAVASCRIPT
 * Interactive UX, Case Study Stepper, Lightbox, Copy Actions, Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initCursorSpotlight();
  initHeaderScroll();
  initMobileNav();
  initCaseStudyStepper();
  initMarketTabs();
  initProofLightbox();
  initCopyActions();
  initInquiryForm();
  initScrollSpy();
  initScrollAnimations();
  initLanguageSwitcher();
});

/* ==========================================================================
   01. Cursor Spotlight (Signature omarashraf.tech feature)
   ========================================================================== */
function initCursorSpotlight() {
  const cursorLight = document.querySelector('.cursor-light');
  if (!cursorLight) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;
  let isMoving = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!cursorLight.classList.contains('is-active')) {
      cursorLight.classList.add('is-active');
    }
  });

  window.addEventListener('mouseleave', () => {
    cursorLight.classList.remove('is-active');
  });

  function render() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    cursorLight.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

/* ==========================================================================
   02. Header Scroll Effects
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   03. Mobile Navigation Drawer
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const links = document.querySelectorAll('.mobile-nav-link, .mobile-nav .btn');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   04. Multi-Step Interactive Case Studies
   CRITICAL REQUIREMENT: Challenge -> Objective -> Strategy -> Execution -> Results -> Insights -> My Role
   with Large Visual KPI Cards
   ========================================================================== */
const caseStudiesData = [
  {
    id: "case-meta-ecom",
    title: "E-commerce ROAS Scaling & Creative Turnaround",
    client: "Beauty & Personal Care E-commerce Brand",
    period: "Apr 1 – Sep 1, 2026",
    market: "Saudi Arabia (KSA)",
    platform: "Meta Ads Manager",
    screenshot: "img/7.jpeg",
    badgeText: "Meta Verified · 5.38x ROAS",
    steps: [
      {
        stepNum: "01",
        name: "The Challenge",
        title: "High Acquisition Costs & Stagnant Ad Fatigue",
        body: `<p>The brand was operating in the highly competitive Saudi beauty & personal care market, relying on generic broad targeting with creative fatigue causing CPAs to spike past target margins.</p>
               <p>Previous campaigns generated scattered impressions without establishing a predictable purchase flywheel or consistent repeat buyers on their store.</p>`,
        bullets: [
          "Rising Customer Acquisition Costs (CAC) eroding profit margins",
          "Ad creative exhaustion after 10–14 days of high budget spend",
          "Weak cart-to-checkout progression due to unlocalized messaging"
        ]
      },
      {
        stepNum: "02",
        name: "The Objective",
        title: "Scale Monthly Revenue While Sustaining >4.0x ROAS",
        body: `<p>The core objective was to restructure paid media architecture to systematically drive qualified purchase conversions, lower CPA, and scale overall gross revenue past 75,000 SAR while holding profit margins intact.</p>`,
        bullets: [
          "Attain minimum 4.0x Blended Purchase ROAS across all ad sets",
          "Accelerate initiate-checkout to purchase conversion rate",
          "Establish an ongoing creative testing framework tailored to Saudi consumers"
        ]
      },
      {
        stepNum: "03",
        name: "The Strategy",
        title: "CBO Consolidation, Dynamic Hook Testing & Localized Value Props",
        body: `<p>Rather than fragmenting budget into dozens of small ad sets, I implemented an aggregated Campaign Budget Optimization (CBO) structure paired with dynamic creative testing (DCT).</p>
               <p>We leveraged localized Saudi dialect hooks, problem-solution video formats, and urgency triggers aligned with payday cycles (27th of the month) and local shopping seasons.</p>`,
        bullets: [
          "Consolidated CBO framework with automated liquidity to highest performing assets",
          "Broad + Lookalike 1-3% stacks segmented by high-intent purchase behavior",
          "Payday surge budget pacing calibrated to Saudi consumer purchasing habits",
          "Retargeting warm audiences (ATC 30D, Video Viewers 75%) with limited-time bundles"
        ]
      },
      {
        stepNum: "04",
        name: "Execution",
        title: "Dynamic Creative Iterations & Server-Side Pixel Tracking",
        body: `<p>Executed weekly creative batches testing 4 distinct visual angles: UGC unboxing, problem-solution pain point demonstrations, aesthetic lifestyle shots, and customer testimonials.</p>
               <p>Audited and hardened Meta Conversions API (CAPI) through Google Tag Manager to ensure 100% event deduplication and match quality scores above 8.5/10.</p>`,
        bullets: [
          "Continuous A/B testing of thumbnail hooks, headline copies, and CTA variations",
          "Aggressive budget scaling on winning creative cluster 'con care 14/5'",
          "Conversion API (CAPI) event verification via Google Tag Manager",
          "Real-time daily KPI monitoring and rapid cut-off for underperforming variants"
        ]
      },
      {
        stepNum: "05",
        name: "Results",
        title: "77.2K SAR Generated at a Stellar 5.38x Blended ROAS",
        body: `<p>The campaign delivered exceptional commercial results across the 5-month reporting window, culminating in 441 confirmed purchases and 77,226.10 SAR in trackable revenue from a total ad spend of 14,348.21 SAR.</p>`,
        kpis: [
          { label: "Ad Spend", value: "14,348 SAR", note: "Total Campaign Budget" },
          { label: "Revenue", value: "77,226 SAR", note: "Verified Purchases", isHero: true },
          { label: "Purchase ROAS", value: "5.38x", note: "Peak Adset reached 6.46x", isGreen: true },
          { label: "Total Purchases", value: "441", note: "Direct Online Orders" },
          { label: "Impressions", value: "3.81M", note: "Qualified Market Reach" },
          { label: "Clicks", value: "33,202", note: "High Intent Traffic" }
        ]
      },
      {
        stepNum: "06",
        name: "Key Insights",
        title: "Creative Depth & Cultural Dialect Drive the Winning Margin",
        body: `<p>The data demonstrated that the single greatest multiplier was cultural and linguistic relevance. Ads featuring authentic Saudi colloquial terminology outperformed standard Modern Standard Arabic creatives by 180% in CTR.</p>`,
        bullets: [
          "Authentic UGC style generated 2.4x higher purchase intent than studio photos",
          "High cart abandonment was solved by emphasizing Mada & Tabby/Tamara in the ad copy",
          "CBO algorithm stabilized CPMs even during peak seasonal bidding wars"
        ]
      },
      {
        stepNum: "07",
        name: "My Role",
        title: "Full-Funnel Media Buyer & Growth Strategist",
        body: `<p>As lead Media Buyer, I took complete ownership of strategy, technical setup, day-to-day optimization, and reporting.</p>`,
        bullets: [
          "Complete campaign architecture design and media planning",
          "Creative briefing and copywriting tailored to the Saudi audience",
          "GTM and Meta Pixel/CAPI tracking validation",
          "Daily budget allocation, scaling decisions, and executive KPI reporting"
        ]
      }
    ]
  },
  {
    id: "case-google-pmax",
    title: "Google Ads Omni-Channel & Store Visit Scaling",
    client: "Multi-Branch Retail & E-commerce Brand in KSA",
    period: "Aug 2025 – Sep 2026",
    market: "Saudi Arabia (Riyadh, Hail, Qassim, Madinah)",
    platform: "Google Ads (Performance Max & Local)",
    screenshot: "img/8.jpeg",
    badgeText: "Google Ads Verified · 84.9K SAR Spend",
    steps: [
      {
        stepNum: "01",
        name: "The Challenge",
        title: "Bridging Online Search Demand with Physical Store Footfall",
        body: `<p>The client had physical retail locations across multiple Saudi regions (Hail, Madinah, Onaizah, Riyadh) while also operating online sales. They struggled to capture high-intent local search queries and route shoppers to nearby branches.</p>`,
        bullets: [
          "High competition for commercial location terms across Saudi provinces",
          "Disconnected tracking between online ads and physical store visits",
          "Inefficient ad spend on broad non-converting keyword themes"
        ]
      },
      {
        stepNum: "02",
        name: "The Objective",
        title: "Drive High-Intent Store Directions & Maximum Qualified Clicks",
        body: `<p>Deploy Google Performance Max and Local Store campaigns to dominate search, maps, YouTube, and display channels across target geographic radii with an ultra-low cost per interaction.</p>`,
        bullets: [
          "Scale 'Get Directions' actions for physical retail branches",
          "Maintain average cost per interaction below 0.10 SAR",
          "Capture over 20,000 total conversions across the multi-month run"
        ]
      },
      {
        stepNum: "03",
        name: "The Strategy",
        title: "Performance Max Asset Groups Segmented by Geographic Clusters",
        body: `<p>Constructed tightly targeted geographic radius campaigns covering specific high-traffic commercial corridors (King Abdullah Road, Onaizah, Hail, Madinah, Anas bin Malik).</p>
               <p>Combined high-quality store imagery, local language copy, and Google Business Profile linkages to maximize Google Maps visibility.</p>`,
        bullets: [
          "Hyper-local radius targeting around flagship branches in major Saudi cities",
          "Smart Bidding configured for Maximize Conversions with store visit values",
          "High-intent asset groups with Google Maps extensions and local promotions"
        ]
      },
      {
        stepNum: "04",
        name: "Execution",
        title: "Omnichannel Asset Deployment & Continuous Bidding Calibration",
        body: `<p>Managed daily bidding thresholds, budget caps (50–150 SAR/day per territory), and asset group optimization scores ensuring all active campaigns stayed above 70–80% Google optimization ratings.</p>`,
        bullets: [
          "Continuous testing of headline variations and sitelink extensions",
          "Monitoring store visit and direction conversion quality in Google Analytics",
          "Dynamic budget shifting toward top-performing branch corridors"
        ]
      },
      {
        stepNum: "05",
        name: "Results",
        title: "6.8M Impressions, 80.7K Clicks & 17.7K Store Directions",
        body: `<p>The campaigns generated massive local reach and direct footfall conversions across the kingdom, driving tens of thousands of verified customer actions at an astonishingly low average interaction cost.</p>`,
        kpis: [
          { label: "Total Cost", value: "84.9K SAR", note: "Managed Google Spend" },
          { label: "Total Conversions", value: "22.2K", note: "High Intent Actions", isHero: true },
          { label: "Store Directions", value: "17.7K", note: "Physical Footfall Driven", isGreen: true },
          { label: "Qualified Clicks", value: "80.7K", note: "Direct Search Traffic" },
          { label: "Impressions", value: "6.82M", note: "Targeted KSA Reach" },
          { label: "Avg Cost/Click", value: "0.03 SAR", note: "Ultra Efficient Delivery" }
        ]
      },
      {
        stepNum: "06",
        name: "Key Insights",
        title: "Google Maps Presence is the Highest Converting Retail Asset",
        body: `<p>Shoppers in Saudi Arabia frequently initiate product discovery on Google with immediate intent to visit physical stores if stock and location proximity are prominent.</p>`,
        bullets: [
          "Location-specific ad assets drove 3x higher click-through rates than generic copy",
          "Performance Max synergy between Search and Maps yielded the lowest CPA",
          "Local directions generated substantial offline sales revenue not captured online"
        ]
      },
      {
        stepNum: "07",
        name: "My Role",
        title: "Google Ads Specialist & Local Performance Architect",
        body: `<p>Architected all Performance Max and Local campaigns, handled bidding strategies, budget allocation, Google Business Profile links, and multi-location conversion tracking.</p>`,
        bullets: [
          "Setup and management of 15+ hyper-localized Google campaigns",
          "Optimization of bidding strategies to maintain low CPV and CPA",
          "Conversion tracking integration and Looker Studio reporting"
        ]
      }
    ]
  },
  {
    id: "case-national-day",
    title: "Saudi National Day 96 Flash Sale Sprint",
    client: "Direct-to-Consumer Brand (KSA)",
    period: "September 2026",
    market: "Saudi Arabia (KSA)",
    platform: "Meta Ads Manager",
    screenshot: "img/WhatsApp Image 2026-09-02 at 11.42.43 AM.jpeg",
    badgeText: "Seasonal Sprint · 4.23x ROAS",
    steps: [
      {
        stepNum: "01",
        name: "The Challenge",
        title: "Capturing High Seasonal Intent in a High-CPM Window",
        body: `<p>Saudi National Day is one of the most competitive shopping periods of the year in the Gulf. Ad auctions experience intense bid inflation, and brands without surgical execution burn budget without converting.</p>`,
        bullets: [
          "Auction CPMs spiking 40–60% above normal baseline",
          "Short 7–10 day conversion window requiring rapid iteration",
          "Risk of consumer hesitation without compelling national celebration offers"
        ]
      },
      {
        stepNum: "02",
        name: "The Objective",
        title: "Rapid Volume Sales at High ROAS During Peak National Festivities",
        body: `<p>Deploy a high-impact, short-burst sales campaign engineered specifically for the National Day celebrations, driving immediate purchases and checkouts at >4.0x ROAS.</p>`,
        bullets: [
          "Achieve minimum 4.0x ROAS in first 72 hours of launch",
          "Maintain CTR above 1.5% despite aggressive marketplace noise",
          "Drive high checkout velocity before campaign close"
        ]
      },
      {
        stepNum: "03",
        name: "The Strategy",
        title: "Themed Creatives, Irresistible Bundle Pricing & Retargeting Push",
        body: `<p>Created dedicated green-and-white festive branding with bespoke 'National Day 96' bundle pricing (e.g. 96 SAR specials or 96% second-item discount).</p>
               <p>Pushed aggressively to past 90-day engaged audiences while running open broad interest targeting for cold acquisition.</p>`,
        bullets: [
          "Celebratory National Day visual hooks and urgency countdown timers",
          "Clear callouts for instant Mada, Apple Pay, and Tabby split-pay options",
          "Real-time bid adjustments to capture evening peak browsing hours"
        ]
      },
      {
        stepNum: "04",
        name: "Execution",
        title: "Aggressive Pacing & Hourly Funnel Monitoring",
        body: `<p>Monitored purchase rates and cart conversions hour by hour. Tuned ad delivery toward the highest-converting demographic segments and scaled winning creative angles within hours of validation.</p>`,
        bullets: [
          "Live campaign tracking to avoid budget exhaustion during non-peak hours",
          "Instant pause on creative variations that failed to generate ATC within 50 SAR",
          "Dynamic retargeting for shoppers who initiated checkout but abandoned"
        ]
      },
      {
        stepNum: "05",
        name: "Results",
        title: "4.23x ROAS with 1.64% CTR in High-Competition Window",
        body: `<p>The campaign captured immediate sales traction, generating 5,379.00 SAR in revenue with an outstanding 4.228x ROAS and 1.64% destination CTR, significantly surpassing seasonal benchmarks.</p>`,
        kpis: [
          { label: "Purchase ROAS", value: "4.23x", note: "Exceeded 4.0x Goal", isHero: true },
          { label: "Revenue", value: "5,379 SAR", note: "National Day Sales", isGreen: true },
          { label: "Impressions", value: "192.5K", note: "Festive Season Reach" },
          { label: "CTR (Destination)", value: "1.64%", note: "High Engagement" },
          { label: "Clicks", value: "3,149", note: "Store Visitors" },
          { label: "Initiated Checkouts", value: "156", note: "High Intent Pipeline" }
        ]
      },
      {
        stepNum: "06",
        name: "Key Insights",
        title: "Cultural Celebration Theming Lowers Consumer Friction",
        body: `<p>Customers during national holidays respond dramatically to themed packaging and clear festive offers that celebrate their identity. Aligning the campaign with the cultural calendar creates an immediate trust bridge.</p>`,
        bullets: [
          "Holiday-specific promo codes boosted checkout conversion by 34%",
          "Apple Pay represented over 72% of all completed transactions",
          "Retargeting initiated checkouts returned a 7.8x ROAS on the final 48 hours"
        ]
      },
      {
        stepNum: "07",
        name: "My Role",
        title: "Campaign Architect & Real-Time Performance Controller",
        body: `<p>Full end-to-end execution: promo strategy design, creative copy in Saudi celebratory tone, CBO campaign launch, real-time bid pacing, and post-campaign analysis.</p>`,
        bullets: [
          "Creative strategy and copywriting for Saudi National Day 96",
          "Daily and hourly budget pacing calibration",
          "Funnel bottleneck analysis and instant retargeting activation"
        ]
      }
    ]
  }
];

let activeCaseIndex = 0;
let activeStepIndex = 0;

function initCaseStudyStepper() {
  const caseTabs = document.querySelectorAll('.case-tab-btn');
  if (!caseTabs.length) return;

  caseTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      caseTabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      activeCaseIndex = index;
      activeStepIndex = 0; // reset to Step 1
      renderCaseStudy();
    });
  });

  renderCaseStudy();
}

function renderCaseStudy() {
  const currentCase = caseStudiesData[activeCaseIndex];
  if (!currentCase) return;

  // Header updates
  const metaEl = document.getElementById('case-meta-line');
  const titleEl = document.getElementById('case-main-title');
  const badgeEl = document.getElementById('case-badge');

  if (metaEl) {
    metaEl.innerHTML = `${currentCase.client} <span class="dot">•</span> ${currentCase.platform} <span class="dot">•</span> ${currentCase.period}`;
  }
  if (titleEl) {
    titleEl.textContent = currentCase.title;
  }
  if (badgeEl) {
    badgeEl.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> ${currentCase.badgeText}`;
  }

  // Render Step Rail
  const railContainer = document.getElementById('case-step-rail');
  if (railContainer) {
    railContainer.innerHTML = '';
    currentCase.steps.forEach((step, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `rail-step-btn ${idx === activeStepIndex ? 'is-active' : ''}`;
      btn.innerHTML = `
        <div class="rail-step-left">
          <span class="rail-step-num">${step.stepNum}</span>
          <span class="rail-step-name">${step.name}</span>
        </div>
        <span class="rail-step-dot"></span>
      `;
      btn.addEventListener('click', () => {
        activeStepIndex = idx;
        renderCaseStudyContent();
      });
      railContainer.appendChild(btn);
    });
  }

  renderCaseStudyContent();
}

function renderCaseStudyContent() {
  const currentCase = caseStudiesData[activeCaseIndex];
  const currentStep = currentCase.steps[activeStepIndex];
  if (!currentStep) return;

  // Update Rail active class
  const railBtns = document.querySelectorAll('.rail-step-btn');
  railBtns.forEach((btn, i) => {
    btn.classList.toggle('is-active', i === activeStepIndex);
  });

  // Step Header & Body
  const stepTagEl = document.getElementById('case-step-tag');
  const stepHeadingEl = document.getElementById('case-step-heading');
  const stepBodyEl = document.getElementById('case-step-body');
  const kpiContainer = document.getElementById('case-kpi-container');
  const bulletsContainer = document.getElementById('case-bullets-container');
  const stepCounterEl = document.getElementById('case-step-counter');
  const prevBtn = document.getElementById('case-prev-step');
  const nextBtn = document.getElementById('case-next-step');

  if (stepTagEl) stepTagEl.textContent = `Step ${currentStep.stepNum} of 07 — ${currentStep.name}`;
  if (stepHeadingEl) stepHeadingEl.textContent = currentStep.title;
  if (stepBodyEl) stepBodyEl.innerHTML = currentStep.body;

  // Handle Bullets
  if (bulletsContainer) {
    if (currentStep.bullets && currentStep.bullets.length > 0) {
      bulletsContainer.style.display = 'flex';
      bulletsContainer.innerHTML = currentStep.bullets.map(b => `
        <div class="step-bullet-item">
          <svg class="bullet-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>${b}</span>
        </div>
      `).join('');
    } else {
      bulletsContainer.style.display = 'none';
      bulletsContainer.innerHTML = '';
    }
  }

  // Handle KPI Cards (Step 05 Results)
  if (kpiContainer) {
    if (currentStep.kpis && currentStep.kpis.length > 0) {
      kpiContainer.style.display = 'grid';
      kpiContainer.innerHTML = currentStep.kpis.map(k => `
        <div class="giant-kpi-card ${k.isHero ? 'giant-kpi-card--hero' : ''} ${k.isGreen ? 'giant-kpi-card--green' : ''}">
          <span class="giant-kpi-label">${k.label}</span>
          <span class="giant-kpi-value">${k.value}</span>
          <span class="giant-kpi-note">${k.note}</span>
        </div>
      `).join('');
    } else {
      kpiContainer.style.display = 'none';
      kpiContainer.innerHTML = '';
    }
  }

  // Step counter & buttons
  if (stepCounterEl) stepCounterEl.textContent = `Step ${activeStepIndex + 1} of ${currentCase.steps.length}`;
  if (prevBtn) {
    prevBtn.disabled = activeStepIndex === 0;
    prevBtn.onclick = () => {
      if (activeStepIndex > 0) {
        activeStepIndex--;
        renderCaseStudyContent();
      }
    };
  }
  if (nextBtn) {
    nextBtn.disabled = activeStepIndex === currentCase.steps.length - 1;
    nextBtn.onclick = () => {
      if (activeStepIndex < currentCase.steps.length - 1) {
        activeStepIndex++;
        renderCaseStudyContent();
      }
    };
  }
}

/* ==========================================================================
   05. Markets Interactive Tabs
   ========================================================================== */
const marketData = {
  sa: {
    code: "KSA",
    title: "Saudi Arabia — Core Focus & Ecosystem Mastery",
    desc: "The primary market where I manage high-volume ad budgets. Understanding the Saudi consumer requires knowing that purchasing happens on local rails: Salla and Zid platforms, Mada debit cards, Apple Pay, and split-payment solutions (Tabby / Tamara).",
    features: [
      { title: "E-commerce Infrastructure", text: "Specialized in Salla (سلة), Zid (زد), Shopify, Matjrah (متجره), and AutoCart (أوتو كارت)." },
      { title: "Payment Behavior", text: "Over 80% of purchases in KSA transact via Apple Pay and Mada. High conversion uplift from Tabby/Tamara installment messaging." },
      { title: "Copywriting & Dialect", text: "Authentic Gulf / Saudi dialect copywriting that resonates culturally and avoids stiff literal translations." },
      { title: "Seasonal Peak Calendars", text: "Capitalizing on Saudi National Day, Foundation Day (يوم التأسيس), Ramadan, Eid, and monthly salary disbursement spikes (27th of each month)." }
    ]
  },
  gcc: {
    code: "GCC",
    title: "United Arab Emirates & Gulf Cooperation Council",
    desc: "A high purchasing power territory characterized by fierce bidding competition, cosmopolitan audiences, and a demanding customer base requiring same-day or next-day shipping assurance.",
    features: [
      { title: "Audience Composition", text: "Bilingual English & Arabic funnels catering to diverse expatriate and local GCC demographics." },
      { title: "Competitive CPM Environment", text: "High CPMs require surgical creative hooks and strict margin thresholds to sustain profitable ROAS." },
      { title: "Channel Dominance", text: "Meta Ads, TikTok Ads, and Google Performance Max with high-ticket bundle positioning." },
      { title: "Payment & Checkout", text: "Credit cards, Apple Pay, and installment providers with seamless digital wallets." }
    ]
  },
  eg: {
    code: "EGY",
    title: "Egypt & North Africa — Volume & Cash on Delivery",
    desc: "High transaction volume market driven by price-to-value propositions, Cash on Delivery (COD) confirmation workflows, and direct WhatsApp sales closing funnels.",
    features: [
      { title: "Fulfillment & COD Protocol", text: "Call center and WhatsApp verification scripts to reduce package return and rejection rates." },
      { title: "Offer Architecture", text: "Free shipping thresholds, buy-one-get-one incentives, and strong visual demonstrations of product utility." },
      { title: "Platform Preference", text: "Meta Ads (Facebook & Instagram) dominant, supported by TikTok Ads for youth demographics." },
      { title: "Conversion Mechanics", text: "Lead generation funnels and direct WhatsApp purchase conversation flows." }
    ]
  }
};

function initMarketTabs() {
  const tabs = document.querySelectorAll('.market-tab-btn');
  const panelTitle = document.getElementById('market-panel-title');
  const panelDesc = document.getElementById('market-panel-desc');
  const panelCardsCol = document.getElementById('market-cards-col');

  if (!tabs.length || !panelTitle || !panelDesc || !panelCardsCol) return;

  function renderMarket(key) {
    const data = marketData[key];
    if (!data) return;

    panelTitle.textContent = data.title;
    panelDesc.textContent = data.desc;

    panelCardsCol.innerHTML = data.features.map(f => `
      <div class="market-feature-card">
        <span class="market-feature-title">${f.title}</span>
        <p class="market-feature-val">${f.text}</p>
      </div>
    `).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const key = tab.dataset.market;
      renderMarket(key);
    });
  });

  // Default to Saudi Arabia
  renderMarket('sa');
}

/* ==========================================================================
   06. Results Proof Gallery & Lightbox Viewer
   ========================================================================== */
function initProofLightbox() {
  const lightbox = document.getElementById('proof-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxMeta = document.getElementById('lightbox-meta');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox || !lightboxImg) return;

  const triggerItems = document.querySelectorAll('[data-lightbox-src]');

  triggerItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox-src');
      const title = item.getAttribute('data-lightbox-title') || 'Verified Campaign Report';
      const meta = item.getAttribute('data-lightbox-meta') || 'Google Ads / Meta Ads Manager Data';

      lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxMeta) lightboxMeta.textContent = meta;

      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
}

/* ==========================================================================
   07. Copy to Clipboard Actions & Toast Feedback
   ========================================================================== */
function showToast(text) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.textContent = text;
  toast.classList.add('is-active');

  setTimeout(() => {
    toast.classList.remove('is-active');
  }, 2400);
}

function initCopyActions() {
  const copyBtns = document.querySelectorAll('[data-copy-target]');

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy-target');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      }).catch(() => {
        showToast(`Selected: ${textToCopy}`);
      });
    });
  });
}

/* ==========================================================================
   08. Interactive Project Inquiry Form
   Prepares structured WhatsApp / Email messages
   ========================================================================== */
function initInquiryForm() {
  const form = document.getElementById('inquiry-form');
  const waBtn = document.getElementById('submit-wa-btn');
  const mailBtn = document.getElementById('submit-mail-btn');

  if (!form) return;

  function buildMessageData() {
    const name = document.getElementById('form-name')?.value || 'Prospective Client';
    const brand = document.getElementById('form-brand')?.value || 'E-commerce Brand';
    const platform = document.getElementById('form-platform')?.value || 'Meta & Google Ads';
    const market = document.getElementById('form-market')?.value || 'Saudi Arabia (KSA)';
    const budget = document.getElementById('form-budget')?.value || 'Flexible';
    const notes = document.getElementById('form-notes')?.value || 'Looking to scale ROAS and acquisition.';

    return { name, brand, platform, market, budget, notes };
  }

  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const d = buildMessageData();
      const text = `Hello Amr, I am reaching out from your portfolio website.%0A%0A*Name:* ${encodeURIComponent(d.name)}%0A*Brand/Store:* ${encodeURIComponent(d.brand)}%0A*Target Market:* ${encodeURIComponent(d.market)}%0A*Platform:* ${encodeURIComponent(d.platform)}%0A*Monthly Budget:* ${encodeURIComponent(d.budget)}%0A*Project Brief:* ${encodeURIComponent(d.notes)}`;
      const waUrl = `https://wa.me/201553812757?text=${text}`;
      window.open(waUrl, '_blank');
    });
  }

  if (mailBtn) {
    mailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const d = buildMessageData();
      const subject = encodeURIComponent(`Performance Marketing Inquiry — ${d.brand} (${d.name})`);
      const body = encodeURIComponent(`Hi Amr,

I would like to discuss a paid advertising project with you.

• Client/Name: ${d.name}
• Brand / Store: ${d.brand}
• Target Market: ${d.market}
• Preferred Platform: ${d.platform}
• Monthly Ad Budget: ${d.budget}

Project Details:
${d.notes}

Looking forward to hearing from you.
`);
      const mailtoUrl = `mailto:amrkhalid28.12@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    });
  }
}

/* ==========================================================================
   09. Navigation Scroll Spy
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('is-active');
          } else {
            link.classList.remove('is-active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   10. Professional Scroll Animations & Micro-Interactions
   ========================================================================== */
function initScrollAnimations() {
  const animatedTargets = document.querySelectorAll(
    '.reveal-init, .section-head, .stat-card, .case-card, .service-card, .process-step, .proof-card, .contact-card, .market-visual, .hero-stats-bar'
  );

  animatedTargets.forEach((el, idx) => {
    if (!el.classList.contains('reveal-init')) {
      el.classList.add('reveal-init');
    }
    // Stagger delay within grid containers
    const siblingIndex = Array.from(el.parentNode.children).indexOf(el);
    if (siblingIndex > 0 && siblingIndex <= 4) {
      el.classList.add(`reveal-delay-${Math.min(siblingIndex, 4)}`);
    }
  });

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        
        // Check if this element has stat counters to animate
        const counters = entry.target.querySelectorAll('.hero-stat-num[data-count]');
        counters.forEach(counter => {
          if (!counter.dataset.animated) {
            animateCounter(counter);
            counter.dataset.animated = 'true';
          }
        });

        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedTargets.forEach(el => revealObserver.observe(el));

  // Magnetic 3D Micro-Tilt on Cards
  initCardTilt();
}

function animateCounter(el) {
  const target = parseFloat(el.getAttribute('data-count') || '0');
  const prefix = el.getAttribute('data-prefix') || '';
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1600;
  const startTime = performance.now();
  const isDecimal = target % 1 !== 0;

  el.classList.add('stat-num-counting');

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease Out Cubic
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentVal = easeProgress * target;

    const formattedVal = isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal);
    el.innerHTML = `${prefix}${formattedVal}<em>${suffix}</em>`;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      const finalVal = isDecimal ? target.toFixed(2) : target;
      el.innerHTML = `${prefix}${finalVal}<em>${suffix}</em>`;
      setTimeout(() => el.classList.remove('stat-num-counting'), 400);
    }
  }

  requestAnimationFrame(updateCount);
}

function initCardTilt() {
  if (window.matchMedia('(max-width: 990px)').matches) return;

  const tiltCards = document.querySelectorAll('.portrait-frame, .case-card, .service-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const mult = 0.035;
      card.style.transform = `perspective(1000px) rotateX(${-y * mult}deg) rotateY(${x * mult}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ==========================================================================
   11. Bilingual English / Arabic System (Thmanyah Font)
   ========================================================================== */
const i18n = {
  en: {
    'lang-label': 'العربية',
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-results': 'Results',
    'nav-cases': 'Case Studies',
    'nav-markets': 'Markets',
    'nav-services': 'Services',
    'nav-process': 'Process',
    'nav-tools': 'Stack',
    'nav-exp': 'Experience',
    'nav-contact': 'Contact',
    'nav-cta': 'Let’s Talk',
    'whatsapp-cta': 'Message on WhatsApp',
    'hero-badge': 'Available for Q1–Q2 Projects',
    'hero-heading': '<span class="line-block">Turning Ad Spend</span> <span class="line-block">Into <em>Measurable Revenue</em></span>',
    'hero-desc': 'I’m <strong>Amr Khaled</strong> — a Performance Marketer and Media Buyer specialized in Paid Advertising, E-commerce, and Growth. I look beyond vanity clicks to optimize the full funnel from first impression to verified purchase.',
    'hero-btn-work': 'View My Work',
    'hero-btn-contact': 'Let’s Work Together',
    'stat-impressions': 'Ad Impressions Tracked',
    'stat-roas': 'Peak E-com Purchase ROAS',
    'stat-spend': 'SAR Google Spend Managed',
    'stat-conversions': 'High-Intent Conversions'
  },
  ar: {
    'lang-label': 'English',
    'nav-home': 'الرئيسية',
    'nav-about': 'عن عمرو',
    'nav-results': 'النتائج',
    'nav-cases': 'دراسات الحالة',
    'nav-markets': 'الأسواق',
    'nav-services': 'الخدمات',
    'nav-process': 'منهجية العمل',
    'nav-tools': 'الأدوات',
    'nav-exp': 'الخبرات',
    'nav-contact': 'تواصل معي',
    'nav-cta': 'احجز محادثة',
    'whatsapp-cta': 'تواصل عبر واتساب',
    'hero-badge': 'متاح للمشاريع الجديدة • الربع الأول والثاني',
    'hero-heading': '<span class="line-block">تحويل الميزانيات الإعلانية</span> <span class="line-block">إلى <em>أرباح قابلة للقياس</em></span>',
    'hero-desc': 'أنا <strong>عمرو خالد</strong> — أخصائي تسويق رقمي وإدارة حملات إعلانية (Media Buyer) متخصص في الإعلانات الممولة، التجارة الإلكترونية، ومضاعفة المبيعات. أتجاوز مقاييس المشاهدات والنقرات الوهمية لأركز على تحسين القمع الإعلاني من أول ظهور حتى إتمام الشراء الفعلي.',
    'hero-btn-work': 'استعرض أعمالي',
    'hero-btn-contact': 'لنعمل معاً',
    'stat-impressions': 'ظهور إعلاني تم تتبعه بدقة',
    'stat-roas': 'أعلى عائد إنفاق إعلاني (ROAS)',
    'stat-spend': 'ميزانيات جوجل مدارة (ريال)',
    'stat-conversions': 'تحويل بيعي مؤكد عالي النية'
  }
};

function initLanguageSwitcher() {
  const desktopBtn = document.getElementById('lang-toggle');
  const mobileBtn = document.getElementById('mobile-lang-toggle');
  
  // Read preference or default to English
  const savedLang = localStorage.getItem('amr_portfolio_lang') || 'en';
  setLanguage(savedLang, false);

  function toggle() {
    const currentLang = document.documentElement.getAttribute('lang') || 'en';
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(newLang, true);
  }

  if (desktopBtn) desktopBtn.addEventListener('click', toggle);
  if (mobileBtn) mobileBtn.addEventListener('click', toggle);
}

function setLanguage(lang, triggerCounters = false) {
  const html = document.documentElement;
  const isAr = lang === 'ar';

  html.setAttribute('lang', lang);
  html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.body.classList.toggle('lang-ar', isAr);

  localStorage.setItem('amr_portfolio_lang', lang);

  // Update toggle buttons label
  const labelText = i18n[lang]['lang-label'];
  document.querySelectorAll('.lang-toggle-btn .lang-label').forEach(el => {
    el.textContent = labelText;
  });

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Re-run counters if triggered by user switch
  if (triggerCounters) {
    document.querySelectorAll('.hero-stat-num[data-count]').forEach(el => {
      animateCounter(el);
    });
  }
}

