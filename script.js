/**
 * AMR KHALED — PORTFOLIO JAVASCRIPT
 * Interactive UX, Case Study Stepper, Lightbox, Copy Actions, Form Handling,
 * Full Bilingual English/Arabic System (Thmanyah Font) & Dynamic Components
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
   01. Cursor Spotlight
   ========================================================================== */
function initCursorSpotlight() {
  const cursorLight = document.querySelector('.cursor-light');
  if (!cursorLight) return;

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

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
   04. Multi-Step Interactive Case Studies Data (Bilingual)
   ========================================================================== */
const caseStudiesData = {
  en: [
    {
      id: "case-meta-ecom",
      title: "E-commerce ROAS Scaling & Creative Turnaround",
      client: "Beauty & Personal Care E-commerce Brand",
      period: "Apr 1 – Sep 1, 2026",
      market: "Saudi Arabia (KSA)",
      platform: "Meta Ads Manager",
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
  ],
  ar: [
    {
      id: "case-meta-ecom",
      title: "مضاعفة عائد المتجر الإعلاني (ROAS) وتطوير الاستراتيجية الإبداعية",
      client: "علامة تجارية سعودية لمنتجات العناية والجمال",
      period: "1 أبريل – 1 سبتمبر 2026",
      market: "المملكة العربية السعودية (KSA)",
      platform: "مدير إعلانات Meta",
      badgeText: "موثق من Meta · 5.38x ROAS",
      steps: [
        {
          stepNum: "01",
          name: "التحدي",
          title: "ارتفاع تكلفة الاستحواذ وركود الزوايا الإعلانية",
          body: `<p>كان المتجر يعاني من منافسة شرسة في سوق منتجات العناية الشخصية السعودي، ويعتمد على استهداف واسع عشوائي مع تشبع إعلاني أدى لارتفاع تكلفة الاكتساب وتآكل هوامش الربح.</p>
                 <p>الحملات السابقة كانت تولد زيارات متفرقة دون بناء قمع شرائي مستمر ومربح أو مشترين متكررين للمتجر.</p>`,
          bullets: [
            "ارتفاع تكلفة اكتساب العميل (CAC) وتأثيرها المباشر على هامش الربح",
            "فتور الإعلانات وتراجع نتائجها بعد 10 إلى 14 يوماً من الإنفاق",
            "ضعف معدل إتمام الشراء من السلة بسبب غياب الخطاب الإعلاني المحلي الموجه"
          ]
        },
        {
          stepNum: "02",
          name: "الهدف",
          title: "توسيع الإيرادات الشهرية مع الحفاظ على عائد > 4.0x ROAS",
          body: `<p>إعادة هيكلة المسار الإعلاني بالكامل لدفع تحويلات شراء حقيقية، خفض تكلفة الاكتساب، وتخطي إيرادات 75 ألف ريال مع المحافظة التامة على الربحية الصافية.</p>`,
          bullets: [
            "تحقيق عائد إنفاق إعلاني مجمع لا يقل عن 4.0x ROAS عبر كافة المجموعات",
            "تسريع معدل الانتقال من إضافة السلة وبدء الدفع إلى إتمام الشراء الفعلي",
            "بناء إطار عمل مستمر لاختبار الإعلانات وتطوير زوايا مخصصة للمستهلك السعودي"
          ]
        },
        {
          stepNum: "03",
          name: "الاستراتيجية",
          title: "توحيد الميزانية (CBO)، اختبار الخطافات، وتخصيص العروض",
          body: `<p>بدلاً من تشتيت الميزانية في عشرات المجموعات الصغيرة، قمت بتطبيق هيكل موحد لتحسين ميزانية الحملة (CBO) مع اختبار المحتوى الديناميكي (DCT).</p>
                 <p>اعتمدنا على خطافات بالفيديو باللهجة السعودية الدارجة، فيديوهات حل المشكلات، وعروض موقوتة تتوافق مع مواسم الرواتب (27 من كل شهر) والمواسم الشرائية المحلية.</p>`,
          bullets: [
            "هيكل CBO موحد يوجه السيولة النقدية تلقائياً للإعلانات الأعلى أداءً",
            "دمج الاستهداف الواسع مع جماهير شبيهة 1-3% مقسمة حسب سلوك الشراء عالي النية",
            "جدولة تكثيف الميزانية في أيام إيداع الرواتب الشهرية لمواكبة سلوك المتسوق السعودي",
            "إعادة استهداف الجماهير الدافئة (إضافات السلة 30 يوم ومشاهدو الفيديو 75%) بحزم عروض خاصة"
          ]
        },
        {
          stepNum: "04",
          name: "التنفيذ",
          title: "توليد إعلانات ديناميكية وتأمين تتبع البيكسل وسيرفر CAPI",
          body: `<p>إطلاق دفعات إعلانية أسبوعية تختبر 4 زوايا بصرية: تجارب عملاء حقيقية (UGC)، استعراض حلول المشكلات، لقطات تصوير احترافية، وشهادات رضا العملاء.</p>
                 <p>تدقيق وربط سيرفر Meta Conversions API (CAPI) عبر Google Tag Manager لضمان دقة منع ازدواجية البيانات وجودة مطابقة أعلى من 8.5/10.</p>`,
          bullets: [
            "اختبار A/B مستمر لصور الغلاف والخطافات الافتتاحية والعناوين وأزرار الدعوة للإجراء",
            "توسيع قوي للميزانية على الحزمة الإعلانية الفائزة 'con care 14/5'",
            "التحقق من تتبع أحداث الشراء عبر Google Tag Manager وسيرفر CAPI",
            "مراقبة لحظية لمؤشرات الأداء وإيقاف الإعلانات الضعيفة فورياً لحماية الميزانية"
          ]
        },
        {
          stepNum: "05",
          name: "النتائج",
          title: "تحقيق 77.2 ألف ريال بعائد إجمالي استثنائي 5.38x ROAS",
          body: `<p>حققت الحملة نتائج تجارية ملموسة عبر نافذة التقرير، مسجلة 441 عملية شراء مؤكدة و77,226.10 ريال سعودي إيرادات قابلة للتتبع من إجمالي إنفاق إعلاني 14,348.21 ريال.</p>`,
          kpis: [
            { label: "الإنفاق الإعلاني", value: "14,348 ريال", note: "إجمالي ميزانية الحملة" },
            { label: "الإيرادات", value: "77,226 ريال", note: "مبيعات إلكترونية مؤكدة", isHero: true },
            { label: "عائد الشراء ROAS", value: "5.38x", note: "أعلى مجموعة وصلت 6.46x", isGreen: true },
            { label: "إجمالي الطلبات", value: "441", note: "طلبات شراء مباشرة" },
            { label: "مرات الظهور", value: "3.81M", note: "وصول سوقي موجه" },
            { label: "النقرات", value: "33,202", note: "زيارات عالية النية الشرائية" }
          ]
        },
        {
          stepNum: "06",
          name: "الدروس المستفادة",
          title: "العمق الإبداعي واللهجة الثقافية هما الفيصل في الربحية",
          body: `<p>أثبتت البيانات أن العامل الأقوى في مضاعفة العائد هو الملاءمة الثقافية واللغوية؛ فالإعلانات المصاغة بالمصطلحات السعودية الدارجة تفوقت على الفصحى الجامدة بنسبة 180% في معدل النقر CTR.</p>`,
          bullets: [
            "فيديوهات تجارب العملاء العفوية (UGC) ولدت نية شراء أعلى بمقدار 2.4 ضعف",
            "علاج السلات المتروكة تم بإبراز خيارات الدفع عبر مدى وتابي وتمارا بوضوح في الإعلان",
            "هيكل CBO حافظ على ثبات تكلفة الألف ظهور (CPM) حتى أثناء حروب المزايدات الموسمية"
          ]
        },
        {
          stepNum: "07",
          name: "دوري في الحملة",
          title: "إدارة كاملة للمسار الإعلاني واستراتيجية النمو",
          body: `<p>توليت المسؤولية الكاملة كمسؤول إعلانات رئيسي: بناء الاستراتيجية، الربط التقني، التحسين اليومي، والتقارير التنفيذية.</p>`,
          bullets: [
            "تصميم هيكل الحملة الكامل وتخطيط توزيع الميزانية",
            "صياغة نصوص الإعلانات وتوجيه صانعي المحتوى بلهجة سعودية موجهة",
            "التحقق التقني من ربط GTM وبيكسل وسيرفر CAPI بدقة تامة",
            "إدارة قرارات التوسع اليومي وتقديم تقارير مؤشرات الأداء للإدارة"
          ]
        }
      ]
    },
    {
      id: "case-google-pmax",
      title: "إعلانات جوجل متعددة القنوات وجذب الزوار لفروع التجزئة",
      client: "سلسلة تجزئة ومتجر إلكتروني متعدد الفروع بالسعودية",
      period: "أغسطس 2025 – سبتمبر 2026",
      market: "السعودية (الرياض، حائل، القصيم، المدينة المنورة)",
      platform: "إعلانات جوجل (الأداء الأقصى PMax والمحلي)",
      badgeText: "موثق من Google Ads · إنفاق 84.9 ألف ريال",
      steps: [
        {
          stepNum: "01",
          name: "التحدي",
          title: "الربط بين البحث الرقمي وزيارات الفروع الميدانية",
          body: `<p>العميل يمتلك فروع تجزئة في مناطق سعودية متعددة (حائل، المدينة، عنيزة، الرياض) بالتوازي مع البيع الإلكتروني، وكان يواجه صعوبة في استقطاب الباحثين المحليين وتوجيههم لأقرب فرع.</p>`,
          bullets: [
            "منافسة عالية على الكلمات البحثية التجارية في المحافظات السعودية",
            "انفصال التتبع بين الإعلانات الرقمية وزيارات المتاجر الواقعية",
            "هدر ميزانيات سابقة في كلمات عامة لا تحقق تحويلات فعلية"
          ]
        },
        {
          stepNum: "02",
          name: "الهدف",
          title: "توليد اتجاهات مباشرة للفروع بأقل تكلفة تفاعل",
          body: `<p>إطلاق حملات Google Performance Max والحملات المحلية للسيطرة على محرك البحث وخرائط جوجل ويوتيوب والشبكة الإعلانية ضمن نطاقات جغرافية محددة بتكلفة تفاعل متدنية جداً.</p>`,
          bullets: [
            "زيادة إجراءات 'طلب الاتجاهات' إلى الفروع الميدانية",
            "الحفاظ على متوسط تكلفة التفاعل دون 0.10 ريال سعودي",
            "تحقيق أكثر من 20 ألف إجراء تحويل مؤكد خلال فترة التشغيل"
          ]
        },
        {
          stepNum: "03",
          name: "الاستراتيجية",
          title: "مجموعات أصول PMax مقسمة جغرافياً حسب مناطق الفروع",
          body: `<p>بناء حملات ذات نطاقات جغرافية دقيقة تغطي الشرايين التجارية الرئيسية (طريق الملك عبدالله، عنيزة، حائل، المدينة المنورة، طريق أنس بن مالك).</p>
                 <p>الدمج بين صور الفروع الاحترافية ونصوص محلية وربط الملف التجاري Google Business Profile لتعظيم الظهور على خرائط جوجل.</p>`,
          bullets: [
            "استهداف جغرافي مخصص حول فروع المتاجر في المدن السعودية المستهدفة",
            "المزايدة الذكية (Smart Bidding) لتحقيق أقصى عدد من التحويلات وزيارات الفروع",
            "مجموعات إعلانية عالية النية مدمجة مع إضافات خرائط جوجل والعروض الحصرية"
          ]
        },
        {
          stepNum: "04",
          name: "التنفيذ",
          title: "نشر الأصول متعددة القنوات وضبط المزايدات المستمر",
          body: `<p>إدارة سقف المزايدات اليومية (50–150 ريال/يوم لكل منطقة) ومتابعة درجات تحسين الأصول بما يضمن بقاء أداء الحملات أعلى من 70–80% وفق تقييم جوجل.</p>`,
          bullets: [
            "اختبار مستمر للعناوين وروابط الأقسام الإضافية (Sitelinks)",
            "مراقبة جودة تحويلات زيارة الفروع والاتجاهات عبر Google Analytics",
            "إعادة توجيه الميزانية ديناميكياً للفروع والمناطق الأعلى إقبالاً"
          ]
        },
        {
          stepNum: "05",
          name: "النتائج",
          title: "6.8M ظهور، 80.7K نقرة و17.7K طلب اتجاهات للفروع",
          body: `<p>حققت الحملات وصولاً محلياً هائلاً وإقبالاً ميدانياً على الفروع في مختلف المناطق، محققة عشرات الآلاف من الإجراءات المؤكدة بمتوسط تكلفة تفاعل فائق الكفاءة.</p>`,
          kpis: [
            { label: "إجمالي الإنفاق", value: "84.9K ريال", note: "ميزانية جوجل مدارة بدقة" },
            { label: "إجمالي التحويلات", value: "22.2K", note: "إجراءات عالية النية الشرائية", isHero: true },
            { label: "اتجاهات الفروع", value: "17.7K", note: "زيارات ميدانية فعلية للمتاجر", isGreen: true },
            { label: "النقرات المؤهلة", value: "80.7K", note: "زيارات بحثية مباشرة" },
            { label: "مرات الظهور", value: "6.82M", note: "وصول سوقي مركز بالمملكة" },
            { label: "متوسط كلفة النقرة", value: "0.03 ريال", note: "أداء إعلاني اقتصادي للغاية" }
          ]
        },
        {
          stepNum: "06",
          name: "الدروس المستفادة",
          title: "التواجد على خرائط جوجل هو الأقوى تحويلاً لتجارة التجزئة",
          body: `<p>المستهلك السعودي يبدأ رحلة الشراء عبر جوجل بنية فورية لزيارة المتجر إذا توفرت معلومات القرب الجغرافي والمنتج بوضوح.</p>`,
          bullets: [
            "الأصول الإعلانية المخصصة لمواقع معينة حققت 3 أضعاف معدل النقر مقارنة بالنصوص العامة",
            "التكامل في PMax بين البحث والخرائط حقق أدنى تكلفة اكتساب",
            "طلبات الاتجاهات حققت مبيعات غير متصلة بالإنترنت تفوق المسجل رقمياً"
          ]
        },
        {
          stepNum: "07",
          name: "دوري في الحملة",
          title: "أخصائي إعلانات جوجل ومسؤول الحملات المحلية",
          body: `<p>تخطيط وهندسة حملات Performance Max والمحلية، إدارة استراتيجيات المزايدة، توزيع الميزانيات، وربط Google Business Profile مع تتبع الفروع المتعددة.</p>`,
          bullets: [
            "إعداد وإدارة أكثر من 15 حملة موجهة بدقة فائقة على جوجل",
            "تحسين المزايدات للمحافظة على أدنى تكلفة مشاهدة واكتساب",
            "تكامل تتبع التحويلات وإعداد تقارير الأداء عبر Looker Studio"
          ]
        }
      ]
    },
    {
      id: "case-national-day",
      title: "حملة اليوم الوطني السعودي 96 الخاطفة",
      client: "متجر إلكتروني للمنتجات الاستهلاكية (KSA)",
      period: "سبتمبر 2026",
      market: "المملكة العربية السعودية (KSA)",
      platform: "مدير إعلانات Meta",
      badgeText: "حملة موسمية خاطفة · 4.23x ROAS",
      steps: [
        {
          stepNum: "01",
          name: "التحدي",
          title: "اقتناص الطلب الموسمي المرتفع وسط اشتعال أسعار المزادات",
          body: `<p>اليوم الوطني السعودي من أكثر مواسم التسوق تنافسية في الخليج، حيث تتضاعف كلفة الألف ظهور (CPM) بنسبة 40-60% وتتعرض الميزانيات للاستنزاف دون تحويلات إذا لم تكن الإعلانات استثنائية.</p>`,
          bullets: [
            "ارتفاع أسعار المزادات بنسبة 40–60% عن المعدلات الطبيعية",
            "نافذة تحويل زمنية قصيرة (7–10 أيام) تتطلب مرونة وتحديثاً لحظياً",
            "تردد المستهلك في الشراء دون عروض احتفالية وطنية مغرية"
          ]
        },
        {
          stepNum: "02",
          name: "الهدف",
          title: "تحقيق مبيعات قياسية سريعة بعائد ROAS مرتفع",
          body: `<p>إطلاق حملة مبيعات مكثفة مصممة خصيصاً لموسم اليوم الوطني لدفع الشراء الفوري وبدء الدفع بعائد يتجاوز 4.0x ROAS.</p>`,
          bullets: [
            "تحقيق عائد لا يقل عن 4.0x ROAS خلال أول 72 ساعة من الإطلاق",
            "الحفاظ على معدل النقر (CTR) أعلى من 1.5% رغم الضجيج الإعلاني بالمنصات",
            "تسريع وتيرة إتمام الدفع قبل اختتام فعاليات الحملة"
          ]
        },
        {
          stepNum: "03",
          name: "الاستراتيجية",
          title: "إعلانات احتفالية، حزم تسعير جذابة، وإعادة استهداف مكثفة",
          body: `<p>تصميم هوية بصرية خضراء وبيضاء احتفالية مع عروض حزم خاصة باليوم الوطني 96 (عروض 96 ريال أو خصم 96% على القطعة الثانية).</p>
                 <p>الاستهداف المكثف للجماهير المتفاعلة خلال 90 يوماً بالتوازي مع استهداف واسع للعملاء الجدد.</p>`,
          bullets: [
            "خطافات بصرية احتفالية مع مؤقتات عد تنازلي لخلق ندرة العرض",
            "إبراز بوابات الدفع الفوري: مدى، Apple Pay، وخيارات التقسيط عبر تابي",
            "تعديل المزايدات في الوقت الفعلي لاقتناص ساعات الذروة المسائية"
          ]
        },
        {
          stepNum: "04",
          name: "التنفيذ",
          title: "وتيرة إنفاق هجومية ومتابعة لحظية للقمع البيعي",
          body: `<p>متابعة عمليات الشراء والسلات المتروكة ساعة بساعة، توجيه الإعلانات للشرائح الديموغرافية الأعلى شراءً، وتوسيع الزوايا الرابحة خلال ساعات من التحقق.</p>`,
          bullets: [
            "متابعة حية لتجنب استنزاف الميزانية خارج أوقات الذروة الشرائية",
            "إيقاف فوري لأي زاوية إعلانية لا تحقق إضافة للسلة بميزانية 50 ريال",
            "إعادة استهداف ديناميكية فورية لمن وصل لمرحلة الدفع ولم يكمل الطلب"
          ]
        },
        {
          stepNum: "05",
          name: "النتائج",
          title: "4.23x ROAS ونسبة نقر 1.64% في أشد فترات التنافس",
          body: `<p>حققت الحملة مبيعات فورية مسجلة 5,379 ريال إيرادات بعائد 4.23x ROAS ونسبة نقر 1.64% متفوقة على المعدلات القياسية لمواسم الأعياد.</p>`,
          kpis: [
            { label: "عائد الشراء ROAS", value: "4.23x", note: "تجاوز الهدف المستهدف 4.0x", isHero: true },
            { label: "المبيعات", value: "5,379 ريال", note: "مبيعات موسم اليوم الوطني", isGreen: true },
            { label: "مرات الظهور", value: "192.5K", note: "وصول موسمي احتفالي" },
            { label: "نسبة النقر CTR", value: "1.64%", note: "تفاعل استثنائي" },
            { label: "النقرات", value: "3,149", note: "زوار دخلوا للمتجر" },
            { label: "بدء إنهاء الطلب", value: "156", note: "قمع شرائي عالي الجاهزية" }
          ]
        },
        {
          stepNum: "06",
          name: "الدروس المستفادة",
          title: "الاحتفاء بالهوية الثقافية يقلل مقاومة قرار الشراء",
          body: `<p>المستهلكون في الأعياد الوطنية يتفاعلون بقوة مع العروض والمنتجات التي تعبر عن هويتهم وتشاركهم الاحتفال، مما يزيل الحواجز النفسية للشراء.</p>`,
          bullets: [
            "كود الخصم المرتبط بالمناسبة رفع إتمام الشراء بنسبة 34%",
            "شكلت مدفوعات Apple Pay أكثر من 72% من إجمالي العمليات المكتملة",
            "إعادة استهداف من بدأوا الدفع حققت عائداً مذهلاً 7.8x ROAS في آخر 48 ساعة"
          ]
        },
        {
          stepNum: "07",
          name: "دوري في الحملة",
          title: "مهندس الحملة والمسؤول المباشر عن الأداء اللحظي",
          body: `<p>تنفيذ متكامل من البداية للنهاية: ابتكار استراتيجية العروض، كتابة الإعلانات بالنبرة الاحتفالية السعودية، إطلاق CBO، ومتابعة وتيرة المزايدات ساعة بساعة.</p>`,
          bullets: [
            "صياغة الاستراتيجية الإبداعية ومحتوى إعلانات اليوم الوطني 96",
            "معايرة سرعة الإنفاق اليومي والساعي لتعظيم العائد المالي",
            "تحليل اختناقات القمع وتفعيل أقماع إعادة الاستهداف اللحظية"
          ]
        }
      ]
    }
  ]
};

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
  const lang = document.documentElement.getAttribute('lang') || 'en';
  const dataList = caseStudiesData[lang] || caseStudiesData['en'];
  const currentCase = dataList[activeCaseIndex];
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
  const lang = document.documentElement.getAttribute('lang') || 'en';
  const isAr = lang === 'ar';
  const dataList = caseStudiesData[lang] || caseStudiesData['en'];
  const currentCase = dataList[activeCaseIndex];
  if (!currentCase) return;
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

  if (stepTagEl) {
    stepTagEl.textContent = isAr
      ? `الخطوة ${currentStep.stepNum} من 07 — ${currentStep.name}`
      : `Step ${currentStep.stepNum} of 07 — ${currentStep.name}`;
  }
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
  if (stepCounterEl) {
    stepCounterEl.textContent = isAr
      ? `الخطوة ${activeStepIndex + 1} من ${currentCase.steps.length}`
      : `Step ${activeStepIndex + 1} of ${currentCase.steps.length}`;
  }

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
   05. Markets Interactive Tabs Data (Bilingual)
   ========================================================================== */
const marketData = {
  en: {
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
  },
  ar: {
    sa: {
      code: "KSA",
      title: "المملكة العربية السعودية — التخصص الأعمق والتمكن من المنظومة",
      desc: "السوق الأساسي الذي أدير فيه ميزانيات إعلانية ضخمة. فهم المشتري السعودي يتطلب إدراك أن عمليات الشراء تتم عبر قنوات محلية محددة: منصات سلة وزد، بطاقات مدى، Apple Pay، وحلول الدفع بالتقسيط (تابي وتمارا).",
      features: [
        { title: "بنية التجارة الإلكترونية", text: "متخصص في منصات سلة (Salla)، زد (Zid)، شوبيفاي، متجره، وأوتو كارت." },
        { title: "سلوكيات الدفع", text: "أكثر من 80% من المشتريات بالسعودية تتم عبر Apple Pay ومدى. ونسب تحويل قياسية عند تفعيل خيارات تابي وتمارا." },
        { title: "كتابة المحتوى واللهجة", text: "صياغة إعلانية باللهجة السعودية والخليجية الدارجة تلامس الثقافة وتتجنب الترجمات الحرفية الجافة." },
        { title: "التقويم والمواسم الشرائية", text: "استثمار مواسم اليوم الوطني، يوم التأسيس، رمضان، الأعياد، ومواعيد إيداع الرواتب الشهرية (يوم 27 من كل شهر)." }
      ]
    },
    gcc: {
      code: "GCC",
      title: "الإمارات ودول الخليج العربي — قدرة شرائية وتنافسية عالية",
      desc: "سوق ذو قدرة شرائية مرتفعة يتسم بمنافسة شرسة في المزادات الإعلانية، وجمهور عالمي ومتنوع، وعملاء يتوقعون شحناً سريعاً في نفس اليوم أو اليوم التالي.",
      features: [
        { title: "تركيبة الجمهور", text: "أقماع تسويقية ثنائية اللغة (عربي وإنجليزي) تلبي احتياجات المواطنين والمقيمين من مختلف الجنسيات." },
        { title: "بيئة تكلفة الألف ظهور (CPM)", text: "ارتفاع أسعار المزادات يتطلب خطافات إبداعية حاسمة وهوامش ربح منضبطة للحفاظ على ROAS مجزٍ." },
        { title: "المنصات المهيمنة", text: "إعلانات Meta، TikTok Ads، وحملات Google Performance Max مع حزم عروض ذات قيمة مرتفعة." },
        { title: "بوابات الدفع والتحصيل", text: "بطاقات الائتمان، Apple Pay، والمحافظ الرقمية السلسة مع شركات التقسيط." }
      ]
    },
    eg: {
      code: "EGY",
      title: "مصر وشمال أفريقيا — كثافة الطلب والدفع عند الاستلام",
      desc: "سوق يتميز بكثافة عدد الطلبات والصفقات المرتفعة، مدفوعاً بالقيمة التنافسية مقابل السعر، مع آليات تأكيد الدفع عند الاستلام (COD) والإغلاق عبر واتساب.",
      features: [
        { title: "بروتوكول الشحن والدفع عند الاستلام", text: "نصوص تأكيد مؤتمتة عبر كول سنتر وواتساب لتقليل نسب الارتجاع ورفض الشحنات." },
        { title: "هيكلة العروض التجارية", text: "عتبات شحن مجاني، عروض اشتري قطعة واحصل على الثانية، وفيديوهات تشرح القيمة العملية للمنتج." },
        { title: "المنصات الأكثر فاعلية", text: "هيمنة منصات Meta (فيسبوك وإنستغرام)، مع دعم من تيك توك للوصول إلى فئات الشباب." },
        { title: "آليات إتمام الشراء", text: "أقماع توليد العملاء المحتملين ومحادثات الواتساب المباشرة لإتمام الصفقات البيعية." }
      ]
    }
  }
};

let activeMarketKey = 'sa';

function renderMarket(key) {
  if (key) activeMarketKey = key;
  const lang = document.documentElement.getAttribute('lang') || 'en';
  const data = (marketData[lang] && marketData[lang][activeMarketKey]) || marketData['en'][activeMarketKey];
  if (!data) return;

  const panelTitle = document.getElementById('market-panel-title');
  const panelDesc = document.getElementById('market-panel-desc');
  const panelCardsCol = document.getElementById('market-cards-col');

  if (panelTitle) panelTitle.textContent = data.title;
  if (panelDesc) panelDesc.textContent = data.desc;

  if (panelCardsCol) {
    panelCardsCol.innerHTML = data.features.map(f => `
      <div class="market-feature-card">
        <span class="market-feature-title">${f.title}</span>
        <p class="market-feature-val">${f.text}</p>
      </div>
    `).join('');
  }
}

function initMarketTabs() {
  const tabs = document.querySelectorAll('.market-tab-btn');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      const key = tab.dataset.market;
      renderMarket(key);
    });
  });

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
      const lang = document.documentElement.getAttribute('lang') || 'en';
      const successMsg = lang === 'ar' ? `تم النسخ إلى الحافظة: ${textToCopy}` : `Copied to clipboard: ${textToCopy}`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(successMsg);
      }).catch(() => {
        showToast(textToCopy);
      });
    });
  });
}

/* ==========================================================================
   08. Interactive Project Inquiry Form
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
    const siblingIndex = Array.from(el.parentNode.children).indexOf(el);
    if (siblingIndex > 0 && siblingIndex <= 4) {
      el.classList.add(`reveal-delay-${Math.min(siblingIndex, 4)}`);
    }
  });

  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        
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
   11. Complete Bilingual English / Arabic System (Thmanyah Font)
   ========================================================================== */
const i18n = {
  en: {
    // Header & Nav
    'lang-label': 'العربية',
    'brand-title': 'Performance Marketer',
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

    // Hero
    'hero-badge': 'Available for Q1–Q2 Projects',
    'hero-heading': '<span class="line-block">Turning Ad Spend</span> <span class="line-block">Into <em>Measurable Revenue</em></span>',
    'hero-desc': 'I’m <strong>Amr Khaled</strong> — a Performance Marketer and Media Buyer specialized in Paid Advertising, E-commerce, and Growth. I look beyond vanity clicks to optimize the full funnel from first impression to verified purchase.',
    'hero-btn-work': 'View My Work',
    'hero-btn-contact': 'Let’s Work Together',
    'stat-impressions': 'Ad Impressions Tracked',
    'stat-roas': 'Peak E-com Purchase ROAS',
    'stat-spend': 'SAR Google Spend Managed',
    'stat-conversions': 'High-Intent Conversions',

    // About
    'about-eyebrow': '02 — About Me',
    'about-heading': 'Media Buying, <em>backed by Sales acumen</em>',
    'about-sub': 'Bridging paid advertising precision with real customer sales psychology across the Saudi market and the GCC region.',
    'about-p1': 'I’m a <strong>Performance Marketer and Media Buyer</strong> with hands-on experience in paid advertising, e-commerce, sales, and account management.',
    'about-p2': 'I specialize in building, managing, and optimizing paid campaigns across <strong>Meta, TikTok, Google, and Snapchat</strong>, with an unwavering focus on acquisition, conversions, and sustainable profitability.',
    'about-p3': 'My background in both <strong>sales and media buying</strong> gives me a decisive competitive edge: I look beyond surface-level clicks and CTRs to analyze the <em>entire customer journey</em> — from the first second of video view to the payment gateway and repeat purchase.',
    'about-p4': 'I have deep experience with businesses targeting the <strong>Saudi market</strong>, working smoothly across regional e-commerce infrastructures including <strong>Shopify, Salla, Zid, Matjrah, and AutoCart</strong>.',
    'about-p5': 'Every optimization decision is anchored in technical measurement using <strong>Google Tag Manager, Meta Conversions API (CAPI), and Google Analytics 4</strong> — turning raw ad data into scalable commercial outcomes.',
    'about-formula-label': 'My Operating Formula',
    'about-pipeline': '<span>Understand</span> <span class="pipeline-arrow">→</span> <span>Strategy</span> <span class="pipeline-arrow">→</span> <span>Launch</span> <span class="pipeline-arrow">→</span> <span>Analyze</span> <span class="pipeline-arrow">→</span> <span>Optimize</span> <span class="pipeline-arrow">→</span> <span>Scale</span>',
    'about-val-1-title': 'Live Dashboard Proof',
    'about-val-1-desc': 'Every number backed by real ad account data.',
    'about-val-2-title': 'Sales-Minded Buying',
    'about-val-2-desc': 'Full-funnel optimization from ad hook to purchase.',
    'about-val-3-title': 'Sustainable Scaling',
    'about-val-3-desc': 'Methodical budget pacing protecting net profit.',
    'about-skills-title': 'Performance Skills',
    'about-business-title': 'Business & Sales Mindset',
    'about-platforms-title': 'E-commerce Platforms',

    // Results
    'results-eyebrow': '03 — Results',
    'results-heading': 'Every number here has a <em>screenshot behind it</em>',
    'results-sub': 'Real campaign dashboards read straight from Meta Ads Manager and Google Ads. Click on any report card below to inspect the full high-resolution proof.',
    'results-featured-tag': 'Meta Ads Manager',
    'results-featured-date': 'Apr 1 – Sep 1, 2026',
    'results-featured-title': 'E-commerce Scaling & ROAS Dominance',
    'results-featured-desc': 'High-scale Meta Ads campaign targeting the Saudi market. Drove over 441 confirmed website purchases and generated 77,226.10 SAR in trackable revenue from an ad spend of 14,348.21 SAR, achieving a stellar 5.38x blended ROAS (with top ad set reaching 6.46x).',
    'kpi-revenue': 'Revenue',
    'kpi-revenue-val': '77.2K SAR',
    'kpi-roas': 'Purchase ROAS',
    'kpi-spend': 'Ad Spend',
    'kpi-spend-val': '14.3K SAR',
    'kpi-purchases': 'Purchases',
    'kpi-impressions': 'Impressions',
    'kpi-clicks': 'Clicks',
    'results-featured-btn': 'Inspect Full Ad Manager Report',
    'results-expand': 'Click to Expand Report',
    'proof-view-btn': 'View Report',

    // Proof Gallery Cards
    'proof-1-tag': 'Google Ads • PMax & Local',
    'proof-1-market': 'Saudi Arabia (KSA)',
    'proof-1-title': 'Omni-Channel Retail & Store Footfall',
    'proof-1-desc': 'Coordinated Performance Max & localized store campaigns across major commercial arteries in Saudi Arabia (Riyadh, Onaizah, Hail, Madinah). Captured 17.7K direct store visit directions.',
    'proof-lbl-total-spend': 'Total Spend',
    'proof-lbl-store-dir': 'Store Directions',
    'proof-lbl-clicks': 'Clicks',

    'proof-2-tag': 'Meta Ads • Seasonal Sale',
    'proof-2-date': 'Sep 2026',
    'proof-2-title': 'KSA National Day 96 Flash Sales',
    'proof-2-desc': "Rapid-fire e-commerce holiday campaign generating 5,379.00 SAR in sales with a remarkable 4.23x ROAS and 1.64% destination CTR during the kingdom's highest CPM competition window.",
    'proof-lbl-roas': 'ROAS',
    'proof-lbl-revenue': 'Revenue',
    'proof-lbl-ctr': 'CTR',

    'proof-3-tag': 'Meta Ads • Scaling Phase',
    'proof-3-date': 'Aug 1 – Sep 2, 2026',
    'proof-3-title': 'High-Ticket E-commerce Acceleration',
    'proof-3-desc': 'Scaled ad spend to $3,597.66 while maintaining profitable economics, driving over $10,477.66 in total purchase value and 1,012 add-to-cart events.',
    'proof-lbl-atc': 'Adds to Cart',

    'proof-4-tag': 'Lead Generation • KSA',
    'proof-4-date': 'Mar 1 – Sep 2, 2026',
    'proof-4-title': 'High-Intent B2C Lead Pipeline',
    'proof-4-desc': 'Targeted customer acquisition generating 1,012 qualified sales leads for a high-value service provider in Saudi Arabia with an efficient cost per lead.',
    'proof-lbl-leads': 'Leads',
    'proof-lbl-spend': 'Spend',

    'proof-5-tag': 'Meta Ads • CBO Scaling',
    'proof-5-date': 'Aug 1 – 31, 2026',
    'proof-5-title': 'Consistent Month-Long E-commerce Run',
    'proof-5-desc': 'Stable budget pacing across the month of August, yielding $7,712.20 in customer purchase value with 853 adds to cart and a 2.83x ROAS.',

    'proof-6-tag': 'Meta Ads • Angle Testing',
    'proof-6-date': 'Jul 1 – Aug 31, 2026',
    'proof-6-title': 'Lean Creative Testing Sprint',
    'proof-6-desc': 'Rapid validation phase testing focused video hooks. Generated $1,988.83 from a modest $546.36 testing budget with a 3.64x return before scaling.',

    // Case Studies
    'cases-eyebrow': '04 — Case Studies',
    'cases-heading': 'Inside a <em>growth campaign</em>',
    'cases-sub': 'Real campaign challenges, architectural strategy, step-by-step execution, large visual KPIs, and key data takeaways.',
    'case-tab-1-num': 'Case Study 01',
    'case-tab-1-name': 'E-com ROAS Scaling (Meta Ads)',
    'case-tab-2-num': 'Case Study 02',
    'case-tab-2-name': 'Omnichannel Footfall (Google Ads)',
    'case-tab-3-num': 'Case Study 03',
    'case-tab-3-name': 'KSA National Day 96 Sprint',
    'case-btn-prev': '← Previous',
    'case-btn-next': 'Next Step →',

    // Markets
    'markets-eyebrow': '05 — Markets',
    'markets-heading': 'Same product. <em>Different buyer behaviour.</em>',
    'markets-sub': 'A profitable campaign is never a copy-paste job across borders. Each market operates on its own payment gateways, platform ecosystems, and cultural conversation styles.',
    'market-tab-sa': 'Saudi Arabia (Primary Focus)',
    'market-tab-gcc': 'UAE & Gulf Region',
    'market-tab-eg': 'Egypt & North Africa',
    'market-nuance-label': 'Key Regional Nuance:',
    'market-nuance-text': 'Ad copy written in authentic Gulf & Saudi dialect converts significantly higher than formal Modern Standard Arabic. Understanding local events like Foundation Day and National Day unlocks massive seasonal spikes.',

    // Services
    'services-eyebrow': '06 — What I Do',
    'services-heading': 'Specialized expertise, <em>end-to-end execution</em>',
    'services-sub': 'Six focused capabilities built to turn advertising spend into predictable, compounding commercial growth.',
    'service-deliv-title': 'What You Get',

    'service-1-num': '01 / MEDIA',
    'service-1-title': 'Paid Media Management',
    'service-1-desc': 'I plan, launch, manage, and optimize paid advertising campaigns across Meta, TikTok, Google, and Snapchat with a sharp focus on measurable acquisition.',
    'service-1-d1': 'Full-funnel campaign architecture',
    'service-1-d2': 'Cross-platform budget allocation',
    'service-1-d3': 'Audience persona segmentation',

    'service-2-num': '02 / GROWTH',
    'service-2-title': 'Performance Marketing',
    'service-2-desc': 'Analyzing unit economics, customer acquisition costs, and lifetime value to identify rapid growth opportunities and scale profitable ad sets.',
    'service-2-d1': 'Blended & Platform ROAS scaling',
    'service-2-d2': 'CAC reduction strategies',
    'service-2-d3': 'High-converting offer structuring',

    'service-3-num': '03 / E-COM',
    'service-3-title': 'E-commerce Marketing',
    'service-3-desc': 'Working hand-in-hand with e-commerce brands on Shopify, Salla, and Zid to improve cart additions, initiate checkouts, and completed purchases.',
    'service-3-d1': 'Salla / Zid checkout optimization',
    'service-3-d2': 'Dynamic Product Ads (DPA)',
    'service-3-d3': 'Cart abandonment recovery funnels',

    'service-4-num': '04 / AUDIT',
    'service-4-title': 'Campaign Optimization',
    'service-4-desc': 'Continuous, disciplined monitoring of audiences, ad creatives, bid pacing, and KPIs to eradicate ad fatigue and capture untapped efficiency.',
    'service-4-d1': 'Daily bid and budget reallocation',
    'service-4-d2': 'Systematic creative fatigue rotation',
    'service-4-d3': 'Negative keyword & placement pruning',

    'service-5-num': '05 / DATA',
    'service-5-title': 'Tracking & Analytics',
    'service-5-desc': 'Implementation and audit of Google Tag Manager, GA4, and server-side Conversions API (CAPI) to ensure accurate, deduplicated performance attribution.',
    'service-5-d1': 'GTM event configuration & QA',
    'service-5-d2': 'ViewContent, ATC, Purchase validation',
    'service-5-d3': 'Looker Studio performance dashboards',

    'service-6-num': '06 / ALIGN',
    'service-6-title': 'Account Management & Sales',
    'service-6-desc': 'My dual background in sales helps me understand real client objectives, communicate insights transparently, and connect ad metrics directly to business profit.',
    'service-6-d1': 'Transparent executive KPI briefings',
    'service-6-d2': 'Sales team alignment & lead feedback',
    'service-6-d3': 'Strategic monthly growth roadmaps',

    // Process
    'process-eyebrow': '07 — My Approach',
    'process-heading': 'A disciplined system, <em>not guesswork</em>',
    'process-sub': 'Every dollar allocated follows a verified sequence. Nothing scales without proof, and no campaign is evaluated without deep attribution.',
    'process-1-num': '01 / PHASE',
    'process-1-title': 'Understand',
    'process-1-desc': 'I begin by diving into the business fundamentals: product margins, average order value (AOV), ideal customer profile, competitor positioning, and past ad account history.',
    'process-2-num': '02 / PHASE',
    'process-2-title': 'Plan',
    'process-2-desc': 'I build the campaign blueprint: account structure, audience segmentation, creative angle matrix, budget distribution, and event tracking verification.',
    'process-3-num': '03 / PHASE',
    'process-3-title': 'Launch',
    'process-3-desc': 'I deploy the campaign assets with tight quality control across copy, UTM tags, destination URLs, tracking pixels, and bid pacing limits.',
    'process-4-num': '04 / PHASE',
    'process-4-title': 'Analyze',
    'process-4-desc': 'I scrutinize the early data signals: hook rates, hold rates, outbound CTR, CPM trends, cart-to-purchase ratios, and CPA variations across angles.',
    'process-5-num': '05 / PHASE',
    'process-5-title': 'Optimize',
    'process-5-desc': 'I cut losing ads swiftly, iterate on winning creative hooks, rebalance budgets toward high-ROAS segments, and refine retargeting frequencies.',
    'process-6-num': '06 / PHASE',
    'process-6-title': 'Scale',
    'process-6-desc': 'When the data demonstrates consistent profitability, I scale budgets vertically and horizontally while preserving target acquisition costs.',

    // Tools
    'tools-eyebrow': '08 — Tools & Stack',
    'tools-heading': 'The technology stack <em>behind the metrics</em>',
    'tools-sub': 'The advertising engines, analytics platforms, and e-commerce infrastructure I operate daily.',
    'tools-g1-sub': 'Ad Networks',
    'tools-g1-title': 'Advertising',
    'tools-g2-sub': 'Measurement',
    'tools-g2-title': 'Analytics & Tracking',
    'tools-g3-sub': 'Ecosystems',
    'tools-g3-title': 'E-commerce',
    'tools-g4-sub': 'Workflow',
    'tools-g4-title': 'Productivity & Data',

    // Experience
    'exp-eyebrow': '09 — Track Record',
    'exp-heading': 'Professional <em>experience & education</em>',
    'exp-sub': 'A progression from sales and commercial negotiation to full-scale paid performance marketing and media buying.',
    'exp-1-period': 'March 2026 – Present',
    'exp-1-type': 'Full-Time',
    'exp-1-role': 'Media Buyer',
    'exp-1-desc': 'Managing and optimizing paid advertising campaigns across multiple verticals. Monitoring real-time performance, structuring audiences and budgets, guiding creative production, and analyzing ad data to capture scaling opportunities.',
    'exp-2-period': 'July 2026 – Present',
    'exp-2-type': 'Part-Time',
    'exp-2-role': 'Media Buyer',
    'exp-2-desc': 'Supervising and optimizing daily advertising campaigns, monitoring conversion rates and CPA metrics, supporting strategy formulation, and tuning budget pacing for high-intent campaigns.',
    'exp-3-period': 'July 2025 – March 2026',
    'exp-3-type': 'Agency Track',
    'exp-3-role': 'Media Buyer & Performance Sales Specialist',
    'exp-3-desc': 'Promoted from Sales Specialist to Media Buyer managing and scaling paid campaigns across Saudi Arabia and the GCC. Handled campaign architecture, targeting, creative iteration, and high-converting commercial strategy.',
    'exp-4-period': '2025',
    'exp-4-type': 'Sales & Finance',
    'exp-4-role': 'Sales Specialist & Financial Operations',
    'exp-4-desc': 'Managed commercial negotiations, client relationships, sales prospecting, and operational data entries at Azrk and Rixos, grounding performance marketing decisions in real business economics.',
    'exp-5-school': 'Mansoura University',
    'exp-5-period': '2023 – Present',
    'exp-5-type': 'Higher Education',
    'exp-5-role': 'Bachelor of Laws (LL.B.)',
    'exp-5-desc': 'Studying law provides a disciplined analytical framework for contract evaluation, structured problem solving, negotiation, and compliance with advertising regulations.',

    // Contact
    'contact-eyebrow': '10 — Contact',
    'contact-heading': 'Let’s turn ad spend <em>into revenue</em>',
    'contact-sub': 'Have an e-commerce brand, a high-value service, or a campaign that needs better paid media performance? Let’s talk numbers.',
    'contact-wa-title': 'Direct WhatsApp',
    'contact-wa-btn': 'Chat Now',
    'contact-mail-title': 'Email Address',
    'contact-copy-btn': 'Copy',
    'contact-li-title': 'LinkedIn Profile',
    'contact-li-btn': 'Connect',
    'contact-phone-title': 'Direct Phone',

    // Form
    'form-heading': 'Project Inquiry Brief',
    'form-lbl-name': 'Your Name',
    'form-ph-name': 'e.g. Mohammed Al-Otaibi',
    'form-lbl-brand': 'Brand or Store Website',
    'form-ph-brand': 'e.g. yourstore.com / Salla link',
    'form-lbl-platform': 'Target Ad Platform',
    'opt-meta': 'Meta Ads (Instagram & FB)',
    'opt-tiktok': 'TikTok Ads',
    'opt-google': 'Google Ads',
    'opt-snap': 'Snapchat Ads',
    'opt-multi': 'Multi-Channel Paid Growth',
    'form-lbl-market': 'Target Market',
    'opt-sa': 'Saudi Arabia (KSA)',
    'opt-gcc': 'United Arab Emirates & GCC',
    'opt-eg': 'Egypt',
    'opt-intl': 'International',
    'form-lbl-budget': 'Estimated Monthly Ad Spend',
    'opt-b1': '5,000 – 15,000 SAR / Month',
    'opt-b2': '15,000 – 40,000 SAR / Month',
    'opt-b3': '40,000 – 100,000+ SAR / Month',
    'opt-b4': 'Testing Phase (< 5,000 SAR)',
    'form-lbl-notes': 'Tell me about your product & current results',
    'form-ph-notes': 'What are you currently spending? What is your target ROAS or CPA?',
    'form-btn-wa': 'Send via WhatsApp',
    'form-btn-mail': 'Send via Email',

    // Footer & Lightbox
    'footer-copy': '© 2026 Amr Khaled — Media Buyer & Performance Marketing Specialist. Built on real campaign data.',
    'footer-top': 'Back to top',
    'lightbox-heading': 'Verified Campaign Report',
    'lightbox-tip': 'Press Esc or Click Outside to Close'
  },
  ar: {
    // Header & Nav
    'lang-label': 'English',
    'brand-title': 'أخصائي تسويق رقمي',
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

    // Hero
    'hero-badge': 'متاح للمشاريع الجديدة • الربع الأول والثاني',
    'hero-heading': '<span class="line-block">تحويل الميزانيات الإعلانية</span> <span class="line-block">إلى <em>أرباح قابلة للقياس</em></span>',
    'hero-desc': 'أنا <strong>عمرو خالد</strong> — أخصائي تسويق رقمي وإدارة حملات إعلانية (Media Buyer) متخصص في الإعلانات الممولة، التجارة الإلكترونية، ومضاعفة المبيعات. أتجاوز مقاييس المشاهدات والنقرات الوهمية لأركز على تحسين القمع الإعلاني من أول ظهور حتى إتمام الشراء الفعلي.',
    'hero-btn-work': 'استعرض أعمالي',
    'hero-btn-contact': 'لنعمل معاً',
    'stat-impressions': 'ظهور إعلاني تم تتبعه بدقة',
    'stat-roas': 'أعلى عائد إنفاق إعلاني (ROAS)',
    'stat-spend': 'ميزانيات جوجل مدارة (ريال)',
    'stat-conversions': 'تحويل بيعي مؤكد عالي النية',

    // About
    'about-eyebrow': '02 — من أنا',
    'about-heading': 'إدارة الحملات الإعلانية، <em>مدعومة بعقلية بيعية تجارية</em>',
    'about-sub': 'الربط بين دقة الإعلانات الممولة وعلم نفس وسلوك المستهلك الحقيقي في السوق السعودي ودول الخليج.',
    'about-p1': 'أنا <strong>أخصائي تسويق رقمي وميديا باير</strong> أمتلك خبرة عملية مكثفة في إدارة الإعلانات الممولة، التجارة الإلكترونية، المبيعات، وإدارة الحسابات الإعلانية الكبرى.',
    'about-p2': 'متخصص في بناء وإدارة وتحسين الحملات الإعلانية عبر منصات <strong>Meta، TikTok، Google، وSnapchat</strong>، مع تركيز دائم على خفض تكلفة الاكتساب، زيادة المبيعات، وتحقيق ربحية مستدامة.',
    'about-p3': 'خلفيتي المزدوجة في <strong>المبيعات وإدارة الحملات</strong> تمنحني ميزة تنافسية حاسمة: أتجاوز النقرات السطحية ومعدلات النقر لأحلل <em>رحلة العميل بأكملها</em> — من أول ثانية في الفيديو وحتى بوابة الدفع وتكرار الشراء.',
    'about-p4': 'لدي خبرة معمقة مع الشركات والمتاجر التي تستهدف <strong>السوق السعودي</strong>، وأعمل بكفاءة تامة مع منصات التجارة الإلكترونية الإقليمية: <strong>سلة، زد، شوبيفاي، متجره، وأوتو كارت</strong>.',
    'about-p5': 'كل قرار تحسين وتوسيع يستند إلى قياس تقني صارم باستخدام <strong>Google Tag Manager، وسيرفر Meta Conversions API (CAPI)، وGoogle Analytics 4</strong> — لتحويل بيانات الإعلانات إلى نتائج تجارية قابلة للتوسع.',
    'about-formula-label': 'معادلتي في إدارة الحملات',
    'about-pipeline': '<span>فهم البيزنس</span> <span class="pipeline-arrow">←</span> <span>الاستراتيجية</span> <span class="pipeline-arrow">←</span> <span>الإطلاق</span> <span class="pipeline-arrow">←</span> <span>التحليل</span> <span class="pipeline-arrow">←</span> <span>التحسين</span> <span class="pipeline-arrow">←</span> <span>التوسع</span>',
    'about-val-1-title': 'إثباتات من لوحات التحكم الحية',
    'about-val-1-desc': 'كل رقم مستند لبيانات حقيقية من مديري الإعلانات.',
    'about-val-2-title': 'إدارة إعلانية بعقلية بيعية',
    'about-val-2-desc': 'تحسين القمع التسويقي كاملاً من الخطاف وحتى الشراء.',
    'about-val-3-title': 'توسع مستدام ومربح',
    'about-val-3-desc': 'إدارة منهجية للميزانيات تحافظ على صافي الربح.',
    'about-skills-title': 'المهارات الإعلانية والتقنية',
    'about-business-title': 'المهارات البيعية والتجارية',
    'about-platforms-title': 'منصات التجارة الإلكترونية',

    // Results
    'results-eyebrow': '03 — النتائج الموثقة',
    'results-heading': 'كل رقم هنا وراءه <em>تقرير لوحة تحكم حقيقي</em>',
    'results-sub': 'لوحات تحكم إعلانية حقيقية ومباشرة من مديري إعلانات Meta وجوجل. اضغط على أي بطاقة لمعاينة التقرير عالي الدقة.',
    'results-featured-tag': 'مدير إعلانات Meta',
    'results-featured-date': '1 أبريل – 1 سبتمبر 2026',
    'results-featured-title': 'توسيع مبيعات المتجر والهيمنة على العائد الإعلاني',
    'results-featured-desc': 'حملة إعلانية واسعة النطاق على Meta استهدفت السوق السعودي. حققت أكثر من 441 عملية شراء مؤكدة وحققت 77,226.10 ريال سعودي إيرادات قابلة للتتبع من ميزانية 14,348.21 ريال، محققة عائداً إجمالياً استثنائياً 5.38x ROAS (مع وصول أفضل مجموعة إعلانية إلى 6.46x).',
    'kpi-revenue': 'الإيرادات',
    'kpi-revenue-val': '77.2 ألف ريال',
    'kpi-roas': 'عائد الشراء ROAS',
    'kpi-spend': 'الإنفاق الإعلاني',
    'kpi-spend-val': '14.3 ألف ريال',
    'kpi-purchases': 'عمليات الشراء',
    'kpi-impressions': 'مرات الظهور',
    'kpi-clicks': 'النقرات',
    'results-featured-btn': 'معاينة تقرير مدير الإعلانات الكامل',
    'results-expand': 'اضغط لتكبير التقرير',
    'proof-view-btn': 'معاينة التقرير',

    // Proof Gallery Cards
    'proof-1-tag': 'إعلانات جوجل • PMax ومحلي',
    'proof-1-market': 'المملكة العربية السعودية',
    'proof-1-title': 'مبيعات التجزئة متعددة القنوات وجذب الزوار للفروع',
    'proof-1-desc': 'حملات منسقة عبر أداء الحملات القصوى (PMax) والحملات المحلية في الشرايين التجارية الرئيسية بالمملكة (الرياض، عنيزة، حائل، المدينة). حققت 17.7 ألف طلب اتجاهات مباشر للفروع.',
    'proof-lbl-total-spend': 'إجمالي الإنفاق',
    'proof-lbl-store-dir': 'اتجاهات الفروع',
    'proof-lbl-clicks': 'النقرات',

    'proof-2-tag': 'إعلانات Meta • عروض موسمية',
    'proof-2-date': 'سبتمبر 2026',
    'proof-2-title': 'مبيعات اليوم الوطني السعودي الخاطفة 96',
    'proof-2-desc': 'حملة سريعة في موسم العطلات حققت 5,379 ريال مبيعات بعائد استثنائي 4.23x ROAS ونسبة نقر 1.64% خلال أعلى فترات التنافس وارتفاع أسعار الإعلانات بالمملكة.',
    'proof-lbl-roas': 'عائد الإعلان',
    'proof-lbl-revenue': 'المبيعات',
    'proof-lbl-ctr': 'نسبة النقر',

    'proof-3-tag': 'إعلانات Meta • مرحلة التوسع',
    'proof-3-date': '1 أغسطس – 2 سبتمبر 2026',
    'proof-3-title': 'تسريع مبيعات المتاجر للمنتجات عالية القيمة',
    'proof-3-desc': 'مضاعفة الميزانية إلى 3,597 دولار مع الحفاظ على هامش ربحي مربح، وتحقيق أكثر من 10,477 دولار كقيمة مشتريات و1,012 إضافة للسلة.',
    'proof-lbl-atc': 'إضافة للسلة',

    'proof-4-tag': 'توليد عملاء محتملين • السعودية',
    'proof-4-date': '1 مارس – 2 سبتمبر 2026',
    'proof-4-title': 'قمع استقطاب عملاء مهتمين عالي النية',
    'proof-4-desc': 'استقطاب موجه حقق 1,012 عميل محتمل مؤهل لمزود خدمات عالي القيمة في السعودية بتكلفة اكتساب مثالية لكل عميل.',
    'proof-lbl-leads': 'العملاء المؤهلون',
    'proof-lbl-spend': 'الإنفاق الإعلاني',

    'proof-5-tag': 'إعلانات Meta • توسيع CBO',
    'proof-5-date': '1 – 31 أغسطس 2026',
    'proof-5-title': 'أداء شهري مستقر لتجارة إلكترونية متنامية',
    'proof-5-desc': 'توزيع متوازن للميزانية خلال شهر أغسطس، محققاً 7,712 دولار كقيمة مشتريات مع 853 إضافة للسلة وعائد 2.83x ROAS.',

    'proof-6-tag': 'إعلانات Meta • اختبار الزوايا الإبداعية',
    'proof-6-date': '1 يوليو – 31 أغسطس 2026',
    'proof-6-title': 'اختبار إبداعي رشيق للزوايا الإعلانية',
    'proof-6-desc': 'مرحلة تحقق سريعة لاختبار خطافات الفيديو المركزة، حققت 1,988 دولار من ميزانية اختبار متواضعة 546 دولار بعائد 3.64x قبل مرحلة التوسيع.',

    // Case Studies
    'cases-eyebrow': '04 — دراسات الحالة',
    'cases-heading': 'كواليس <em>حملة نمو حقيقية</em>',
    'cases-sub': 'تحديات الحملات الحقيقية، الهيكلة الاستراتيجية، التنفيذ العملي خطوة بخطوة، بطاقات الأداء الكبرى، وخلاصة الدروس المستفادة.',
    'case-tab-1-num': 'دراسة الحالة 01',
    'case-tab-1-name': 'مضاعفة عائد المتجر (Meta Ads)',
    'case-tab-2-num': 'دراسة الحالة 02',
    'case-tab-2-name': 'زيارات الفروع متعددة القنوات (Google Ads)',
    'case-tab-3-num': 'دراسة الحالة 03',
    'case-tab-3-name': 'حملة اليوم الوطني السعودي الخاطفة 96',
    'case-btn-prev': '← الخطوة السابقة',
    'case-btn-next': 'الخطوة التالية →',

    // Markets
    'markets-eyebrow': '05 — الأسواق الإقليمية',
    'markets-heading': 'نفس المنتج.. <em>لكن سلوك المشتري مختلف تماماً</em>',
    'markets-sub': 'الحملة الإعلانية المربحة ليست مجرد نسخ ولصق عبر الحدود. فكل سوق يتمتع بوابات دفع ومنصات مفضلة وأسلوب خطاب ثقافي خاص.',
    'market-tab-sa': 'المملكة العربية السعودية (التركيز الأساسي)',
    'market-tab-gcc': 'الإمارات ودول الخليج العربي',
    'market-tab-eg': 'مصر وشمال أفريقيا',
    'market-nuance-label': 'أبرز الخصوصيات الإقليمية:',
    'market-nuance-text': 'الإعلانات المكتوبة باللهجة الخليجية والسعودية الحقيقية تحقق معدل تحويل أعلى بكثير من الفصحى الجامدة. كما أن فهم المواسم المحلية مثل يوم التأسيس واليوم الوطني يفتح آفاق قفزات مبيعات استثنائية.',

    // Services
    'services-eyebrow': '06 — خدماتي وتخصصاتي',
    'services-heading': 'خبرة متخصصة، <em>وتنفيذ متكامل من البداية للنهاية</em>',
    'services-sub': 'ست ركائز مدروسة ومبنية لتحويل الإنفاق الإعلاني إلى نمو تجاري مستدام وقابل للتوسع.',
    'service-deliv-title': 'ما ستحصل عليه',

    'service-1-num': '01 / الإعلانات الممولة',
    'service-1-title': 'إدارة الحملات الإعلانية الممولة',
    'service-1-desc': 'أخطط وأطلق وأدير وأحسن الحملات الإعلانية الممولة عبر Meta، TikTok، Google، وSnapchat مع تركيز دقيق على اكتساب العملاء المربح.',
    'service-1-d1': 'هيكلة القمع التسويقي الكامل للحملة',
    'service-1-d2': 'توزيع الميزانيات بين المنصات بدقة',
    'service-1-d3': 'استهداف وتجزئة الشرائح الجماهيرية',

    'service-2-num': '02 / نمو الأداء',
    'service-2-title': 'التسويق القائم على الأداء ومضاعفة العائد',
    'service-2-desc': 'تحليل اقتصاديات الوحدة وتكلفة اكتساب العميل والقيمة الدائمة لتحديد فرص النمو السريع وتوسيع المجموعات الإعلانية المربحة.',
    'service-2-d1': 'مضاعفة عائد الإنفاق الإعلاني المجمع (ROAS)',
    'service-2-d2': 'استراتيجيات خفض تكلفة اكتساب العميل (CAC)',
    'service-2-d3': 'صياغة وهيكلة عروض بيعية عالية التحويل',

    'service-3-num': '03 / التجارة الإلكترونية',
    'service-3-title': 'تسويق المتاجر الإلكترونية',
    'service-3-desc': 'العمل جنباً إلى جنب مع المتاجر على سلة، زد، وشوبيفاي لزيادة الإضافات للسلة والوصول لبوابات الدفع وإتمام الطلبات.',
    'service-3-d1': 'تحسين مسار الشراء والدفع على سلة وزد',
    'service-3-d2': 'إعلانات كتالوج المنتجات الديناميكية (DPA)',
    'service-3-d3': 'أقماع استرداد السلات المتروكة',

    'service-4-num': '04 / التحسين والتدقيق',
    'service-4-title': 'تحسين وضبط الحملات اليومي',
    'service-4-desc': 'متابعة يومية منضبطة للجماهير والإعلانات وسرعة الإنفاق لمنع تشبع الإعلانات واقتناص أعلى كفاءة للميزانية.',
    'service-4-d1': 'إعادة توزيع الميزانيات والمزايدات يومياً',
    'service-4-d2': 'تجديد الإعلانات تفادياً لفتور الجمهور',
    'service-4-d3': 'استبعاد الكلمات السلبية والمواضع غير المجدية',

    'service-5-num': '05 / التحليلات والتتبع',
    'service-5-title': 'التتبع المتقدم والتحليلات البيانية',
    'service-5-desc': 'إعداد وتدقيق Google Tag Manager وGA4 وMeta CAPI لضمان تتبع دقيق ومنع ازدواجية احتساب التحويلات.',
    'service-5-d1': 'إعداد وفحص أحداث GTM بدقة',
    'service-5-d2': 'التحقق من أحداث تصفح المنتج والسلة والشراء',
    'service-5-d3': 'لوحات تحكم تفاعلية عبر Looker Studio',

    'service-6-num': '06 / المبيعات وإدارة الحسابات',
    'service-6-title': 'إدارة الحسابات والمواءمة البيعية',
    'service-6-desc': 'خلفيتي في المبيعات تمكنني من فهم أهدافك التجارية بشفافية، وربط مقاييس الإعلانات مباشرة بالأرباح الصافية للشركة.',
    'service-6-d1': 'تقارير دورية شفافة لأهم مؤشرات الأداء',
    'service-6-d2': 'مواءمة فريق المبيعات ومتابعة جودة العملاء',
    'service-6-d3': 'خطط نمو وتوسع شهرية واضحة المعالم',

    // Process
    'process-eyebrow': '07 — منهجية العمل',
    'process-heading': 'نظام إعلاني منضبط، <em>بعيداً عن العشوائية والتخمين</em>',
    'process-sub': 'كل دولار يتم استثماره يخضع لتسلسل منهجي مجرّب. لا نوسع ميزانية دون إثبات رقمي، ولا نقيم حملة دون تتبع دقيق.',
    'process-1-num': '01 / المرحلة',
    'process-1-title': 'الفهم ودراسة النشاط',
    'process-1-desc': 'أبدأ بدراسة أساسيات النشاط التجاري: هوامش الربح، متوسط قيمة الطلب (AOV)، العميل المثالي، المنافسين، وسجل الحساب الإعلاني السابق.',
    'process-2-num': '02 / المرحلة',
    'process-2-title': 'التخطيط والهيكلة',
    'process-2-desc': 'أبني مخطط الحملة: هيكل الحساب، شرائح الجمهور، مصفوفة الزوايا الإعلانية، توزيع الميزانية، والتحقق من سلامة أكواد التتبع.',
    'process-3-num': '03 / المرحلة',
    'process-3-title': 'الإطلاق المنضبط',
    'process-3-desc': 'إطلاق الحملات مع فحص صارم للنصوص والروابط وأكواد UTM والبيكسل وسرعة وتيرة الإنفاق المالي.',
    'process-4-num': '04 / المرحلة',
    'process-4-title': 'التحليل وقراءة البيانات',
    'process-4-desc': 'تحليل المؤشرات الأولية: نسبة جذب الانتباه (Hook Rate)، نسب البقاء، النقر الخارجي، كلفة الألف ظهور، ونسب التحويل من السلة للشراء.',
    'process-5-num': '05 / المرحلة',
    'process-5-title': 'التحسين المستمر',
    'process-5-desc': 'إيقاف الإعلانات غير المجدية فوراً، تطوير زوايا إضافية للإعلانات الرابحة، وإعادة توجيه الميزانية نحو الشرائح ذات العائد الأعلى.',
    'process-6-num': '06 / المرحلة',
    'process-6-title': 'التوسع ومضاعفة الصفقات',
    'process-6-desc': 'عند ثبوت استقرار الربحية، أبدأ التوسع الرأسي والأفقي للميزانيات مع الحفاظ الكامل على تكلفة الاستحواذ المستهدفة.',

    // Tools
    'tools-eyebrow': '08 — الأدوات والتقنيات',
    'tools-heading': 'المنظومة التقنية <em>خلف الأرقام والنتائج</em>',
    'tools-sub': 'المنصات الإعلانية، أدوات التحليل، وبنية التجارة الإلكترونية التي أعمل عليها يومياً.',
    'tools-g1-sub': 'الشبكات الإعلانية',
    'tools-g1-title': 'منصات الإعلانات',
    'tools-g2-sub': 'القياس والتتبع',
    'tools-g2-title': 'التحليلات والتتبع الرقمي',
    'tools-g3-sub': 'المنصات التجارية',
    'tools-g3-title': 'التجارة الإلكترونية',
    'tools-g4-sub': 'بيئة العمل والإنتاجية',
    'tools-g4-title': 'البيانات وتصميم الأفكار',

    // Experience
    'exp-eyebrow': '09 — المسيرة المهنية',
    'exp-heading': 'الخبرات <em>المهنية والتعليم</em>',
    'exp-sub': 'تدرج نوعي بدأ من المبيعات والمفاوضات التجارية وصولاً إلى إدارة الحملات الممولة ومضاعفة المبيعات الرقمية.',
    'exp-1-period': 'مارس 2026 – حتى الآن',
    'exp-1-type': 'دوام كامل',
    'exp-1-role': 'ميديا باير (Media Buyer)',
    'exp-1-desc': 'إدارة وتحسين الحملات الإعلانية الممولة لمختلف الأنشطة التجارية. متابعة الأداء في الوقت الفعلي، هيكلة الجماهير والميزانيات، توجيه الإنتاج الإبداعي، وتحليل البيانات لاقتناص فرص التوسع.',
    'exp-2-period': 'يوليو 2026 – حتى الآن',
    'exp-2-type': 'دوام جزئي',
    'exp-2-role': 'ميديا باير (Media Buyer)',
    'exp-2-desc': 'الإشراف على الحملات الإعلانية اليومية وتحسينها، مراقبة معدلات التحويل وتكلفة الاكتساب (CPA)، والمشاركة في وضع الاستراتيجيات وضبط وتيرة الميزانيات للحملات عالية النية.',
    'exp-3-period': 'يوليو 2025 – مارس 2026',
    'exp-3-type': 'مسار الوكالات',
    'exp-3-role': 'ميديا باير وأخصائي مبيعات أداء',
    'exp-3-desc': 'الترقي من أخصائي مبيعات إلى ميديا باير لإدارة وتوسيع الحملات الممولة بالسعودية والخليج. تولي هيكلة الحملات والاستهداف وتطوير الإعلانات واستراتيجيات البيع عالية التحويل.',
    'exp-4-period': '2025',
    'exp-4-type': 'مبيعات وعمليات مالية',
    'exp-4-role': 'أخصائي مبيعات وعمليات مالية',
    'exp-4-desc': 'إدارة المفاوضات التجارية وعلاقات العملاء واستقطاب الصفقات وإدخال البيانات التشغيلية في أزرق وريكسوس، مما رسخ قرارات التسويق بالأداء في صلب الاقتصاد الحقيقي للشركات.',
    'exp-5-school': 'جامعة المنصورة',
    'exp-5-period': '2023 – حتى الآن',
    'exp-5-type': 'تعليم جامعي',
    'exp-5-role': 'ليسانس الحقوق (LL.B.)',
    'exp-5-desc': 'دراسة القانون تمنحني إطاراً تحليلياً منضبطاً في تقييم العقود، حل المشكلات بطريقة منهجية، التفاوض، والالتزام بالضوابط التنظيمية للإعلانات.',

    // Contact
    'contact-eyebrow': '10 — تواصل معي',
    'contact-heading': 'دعنا نحول ميزانيتك الإعلانية <em>إلى أرباح ملموسة</em>',
    'contact-sub': 'هل تمتلك متجراً إلكترونياً، خدمة عالية القيمة، أو حملات إعلانية تحتاج لأداء أفضل ونتائج أعلى؟ دعنا نتحدث بالأرقام.',
    'contact-wa-title': 'واتساب مباشر',
    'contact-wa-btn': 'تواصل الآن',
    'contact-mail-title': 'البريد الإلكتروني',
    'contact-copy-btn': 'نسخ',
    'contact-li-title': 'ملف لينكد إن',
    'contact-li-btn': 'تواصل',
    'contact-phone-title': 'الهاتف المباشر',

    // Form
    'form-heading': 'ملخص استفسار المشروع',
    'form-lbl-name': 'الاسم الكريم',
    'form-ph-name': 'مثال: محمد العتيبي',
    'form-lbl-brand': 'رابط المتجر أو النشاط التجاري',
    'form-ph-brand': 'مثال: yourstore.com أو رابط سلة',
    'form-lbl-platform': 'المنصة الإعلانية المستهدفة',
    'opt-meta': 'إعلانات Meta (إنستغرام وفيسبوك)',
    'opt-tiktok': 'إعلانات تيك توك (TikTok Ads)',
    'opt-google': 'إعلانات جوجل (Google Ads)',
    'opt-snap': 'إعلانات سناب شات (Snapchat Ads)',
    'opt-multi': 'نمو إعلاني متعدد القنوات',
    'form-lbl-market': 'السوق المستهدف',
    'opt-sa': 'المملكة العربية السعودية (KSA)',
    'opt-gcc': 'الإمارات ودول الخليج العربي',
    'opt-eg': 'جمهورية مصر العربية',
    'opt-intl': 'سوق دولي / عالمي',
    'form-lbl-budget': 'الميزانية الشهرية التقريبية للإعلانات',
    'opt-b1': '5,000 – 15,000 ريال / شهرياً',
    'opt-b2': '15,000 – 40,000 ريال / شهرياً',
    'opt-b3': '40,000 – 100,000+ ريال / شهرياً',
    'opt-b4': 'مرحلة اختبار وتجربة (< 5,000 ريال)',
    'form-lbl-notes': 'نبذة عن المنتج أو الخدمة والنتائج الحالية',
    'form-ph-notes': 'كم تنفق حالياً؟ وما هو العائد المستهدف (ROAS) أو تكلفة الاكتساب المطلوبة؟',
    'form-btn-wa': 'إرسال عبر واتساب',
    'form-btn-mail': 'إرسال عبر البريد الإلكتروني',

    // Footer & Lightbox
    'footer-copy': '© 2026 عمرو خالد — أخصائي تسويق رقمي وإدارة حملات إعلانية (Media Buyer). مدعوم ببيانات حقيقية.',
    'footer-top': 'العودة للأعلى',
    'lightbox-heading': 'تقرير الحملة الموثق',
    'lightbox-tip': 'اضغط Esc أو انقر بالخارج للإغلاق'
  }
};

function initLanguageSwitcher() {
  const desktopBtn = document.getElementById('lang-toggle');
  const mobileBtn = document.getElementById('mobile-lang-toggle');
  
  const savedLang = localStorage.getItem('amr_portfolio_lang') || 'ar';
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
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.setAttribute('placeholder', i18n[lang][key]);
    }
  });

  // Re-render dynamic case studies & markets
  renderCaseStudy();
  renderMarket(activeMarketKey);

  // Re-run counters if triggered by user switch
  if (triggerCounters) {
    document.querySelectorAll('.hero-stat-num[data-count]').forEach(el => {
      animateCounter(el);
    });
  }
}
