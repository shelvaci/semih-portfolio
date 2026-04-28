/* ================================
   Portfolio interaction layer
   Keeps the site framework-free.
   ================================ */

const loader = document.getElementById("loader");
const menuToggle = document.getElementById("menuToggle");
const navPanel = document.getElementById("navPanel");
const navLinks = document.querySelectorAll(".nav-link");
const typingText = document.getElementById("typingText");
const heroOrbit = document.getElementById("heroOrbit");
const cursorGlow = document.querySelector(".cursor-glow");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const year = document.getElementById("year");
const langToggle = document.getElementById("langToggle");

const translations = {
  tr: {
    "loader.title": "Portfolio Sistemi Başlatılıyor",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.projects": "Projeler",
    "nav.experience": "Deneyim",
    "nav.contact": "İletişim",
    "nav.resume": "CV",
    "hero.eyebrow": "Bilgisayar Mühendisliği / Yazılım / Dijital Ürünler",
    "hero.name": "Ben Semih Helvacıkara",
    "hero.role": "Yazılım Geliştirme | Yapay Zeka Sistemleri | Otomasyon | Web, Veri & Dijital Ürünler",
    "hero.projects": "Projeleri Gör",
    "hero.contact": "İletişime Geç",
    "hero.status": "status: building",
    "hero.stack": "stack: ai / web / data",
    "about.eyebrow": "Kimlik Katmanı",
    "about.title": "Hakkımda",
    "about.copy1": "Ben Semih Helvacıkara. Bilgisayar Mühendisliği öğrencisi, yazılımcı ve dijital ürün geliştirme odağında çalışan bir teknoloji üreticisiyim. Web tarafının yanında yapay zeka tabanlı sistemler, otomasyonlar, entegrasyonlar, iş süreçleri ve teknik ürün fikirleri geliştiriyorum.",
    "about.copy2": "Kurumsal ihtiyaçları startup hızında ele almayı seviyorum: problemi anlamak, doğru teknolojiyi seçmek ve fikri kullanılabilir bir dijital ürüne dönüştürmek. Yazılım, yapay zeka sistemleri, otomasyon, siber güvenlik temelleri, IT yönetimi ve dijital büyüme taraflarını tek bir ürün bakışıyla birleştiriyorum.",
    "about.tag1": "Bilgisayar Mühendisliği",
    "about.tag2": "Yazılım & Entegrasyon",
    "about.tag3": "AI & Otomasyon",
    "about.tag4": "IT Yönetimi",
    "about.tag5": "Dijital Ürün Geliştirme",
    "about.role": "Bilgisayar Mühendisliği & Yazılım",
    "about.focus": "yapay zeka sistemleri, yazılım, otomasyon, entegrasyon, web, veri, dijital ürünler",
    "about.mission": "fikirlerinizi kullanılabilir, ölçeklenebilir dijital işlere dönüştürmek",
    "skills.eyebrow": "Teknik Yetkinlikler",
    "skills.title": "Yazılım, Ürün ve Teknoloji Becerileri",
    "skill.advanced": "İleri",
    "skill.intermediate": "Orta",
    "skill.learning": "Öğreniyor / Orta",
    "skill.html": "Semantik yapı, erişilebilirlik, SEO uyumlu markup ve temiz sayfa mimarisi.",
    "skill.css": "Responsive layout, animasyon sistemleri, glassmorphism ve arayüz detaylarında polish.",
    "skill.js": "Etkileşimli UI mantığı, validasyon, DOM sistemleri ve frontend davranışları.",
    "skill.react": "Component tabanlı arayüzler, yeniden kullanılabilir UI yapıları ve stateful view mantığı.",
    "skill.node": "Backend route yapısı, API kurgusu, sunucu mantığı ve ürün odaklı entegrasyonlar.",
    "skill.python": "Otomasyon, veri işleme, scriptler, AI denemeleri ve backend yardımcı akışları.",
    "skill.sql": "İlişkisel veri modelleme, sorgular, uygulama veri akışları ve raporlama temelleri.",
    "skill.wordpress": "İşletme siteleri, CMS akışları, sayfa yapısı, içerik güncelleme ve yayına alma desteği.",
    "skill.git": "Versiyon kontrolü, repository akışları, proje organizasyonu ve kod işbirliği temelleri.",
    "skill.ai": "Yapay zeka sistemlerini ürün geliştirme, otomasyon, analiz ve teknik prototipleme süreçlerine uygulama.",
    "skill.cyber": "Ağ güvenliği farkındalığı, intrusion detection kavramları ve güvenli geliştirme alışkanlıkları.",
    "skill.ui": "Görsel hiyerarşi, kullanıcı akışları, arayüz polish'i ve ürün sunum sistemleri.",
    "skill.video": "Kurgu, ritim, sosyal medya içerikleri, temel renk/ses düzenleme ve yayın formatına hazırlama.",
    "projects.eyebrow": "Seçili Projeler",
    "projects.title": "Geliştirdiğim Ürün ve Sistemler",
    "project1.type": "AI + Siber Güvenlik",
    "project1.desc": "Şüpheli ağ trafiğini makine öğrenmesiyle tespit etmeye odaklanan gerçek zamanlı intrusion detection sistemi.",
    "project2.type": "Yönetim Uygulaması",
    "project2.desc": "Ürün, sipariş ve kullanıcı yönetimi özellikleri olan cafe yönetim uygulaması.",
    "project3.type": "Kurumsal Web Sitesi",
    "project3.desc": "Proje sayfaları, haber yapısı ve iletişim kurgusu olan çok dilli Erasmus+ dernek sitesi.",
    "project4.type": "Data / Otomasyon Aracı",
    "project4.desc": "Ürün tarama, pazar verisi toplama ve e-ticaret fırsatlarını puanlama üzerine çalışan analiz aracı.",
    "project5.type": "Startup / Mobil Uygulama Konsepti",
    "project5.desc": "Kafeler ve küçük işletmeler için tasarlanan QR tabanlı sadakat ve müşteri etkileşim platformu.",
    "project5.note": "Bu proje ile TÜBİTAK başvurusu yapılmıştır.",
    "project6.type": "Kişisel Yönetim Uygulaması",
    "project6.desc": "Görevler, bütçe takibi, kişisel planlama ve günlük üretkenlik akışlarını tek panelde toplayan masaüstü uygulaması.",
    "experience.eyebrow": "Deneyim Devresi",
    "experience.title": "İş, Eğitim ve Teknoloji Sinyali",
    "exp1.desc": "Grup içindeki otel ve bağlı işletmeler için teknik altyapı, web varlığı, dijital pazarlama ve ekip koordinasyonunu bir arada yöneten IT rolü.",
    "exp1.b1": "Otel ve grup markaları için web/dijital altyapı üretimi",
    "exp1.b2": "SEO, reklam ve performans odaklı dijital pazarlama çalışmaları",
    "exp1.b3": "Departmanlar arası teknik ihtiyaç analizi ve çözüm uygulama",
    "exp2.desc": "Yazılım geliştirme tarafını grup operasyonlarıyla birleştiren; ekip, süreç ve proje yürütme sorumluluğu taşıyan yönetici/geliştirici deneyimi.",
    "exp3.desc": "AI destekli masaüstü asistan, API entegrasyonları, entegrasyon sistemleri, Kali Linux ile güvenlik çalışmaları ve e-ticaret geliştirme deneyimi.",
    "exp4.title": "Bilgisayar Mühendisliği + Yönetim Bilişim Sistemleri",
    "exp4.desc": "Hasan Kalyoncu Üniversitesi Bilgisayar Mühendisliği ve İstanbul Üniversitesi Yönetim Bilişim Sistemleri lisans eğitimleri.",
    "exp5.title": "Erasmus+, Hackathon ve AI Projeleri",
    "exp5.desc": "Youthpass sertifikaları, Erasmus+ youth exchange deneyimi ve lojistik şirketleri için en karlı sevkiyat rotalarını belirleyen AI destekli hackathon projesi.",
    "stat1": "Erasmus+ Projesi",
    "stat2": "Dijital Proje",
    "stat3": "Web Uygulaması",
    "stat4": "AI / Otomasyon Konsepti",
    "stat5": "Kampanya Erişimi",
    "resume.eyebrow": "Klasik Mod",
    "resume.title": "Klasik versiyonu ister misin?",
    "resume.download": "CV İndir",
    "resume.linkedin": "LinkedIn Gör",
    "contact.eyebrow": "İletişim Kontrol Paneli",
    "contact.title": "Bir şey inşa etmeye hazır mısın?",
    "form.name": "İsim",
    "form.email": "Email",
    "form.message": "Mesaj",
    "form.send": "Mesaj Gönder",
    "form.namePlaceholder": "Adın",
    "form.emailPlaceholder": "mail@adresin.com",
    "form.messagePlaceholder": "Projen hakkında yaz",
    "contact.ready": "> Bir şey inşa etmeye hazır mısın?",
    "contact.location": "Konum: Türkiye",
    "project.action.github": "GitHub'a Git",
    "project.action.demo": "Demo Gör",
        "footer.rights": "Tüm hakları saklıdır.",
  },
  en: {
    "loader.title": "Initializing Portfolio System",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "hero.eyebrow": "Computer Engineering / Software / Digital Products",
    "hero.name": "I'm Semih Helvacıkara",
    "hero.role": "Software Development | Artificial Intelligence Systems | Automation | Web, Data & Digital Products",
    "hero.projects": "View Projects",
    "hero.contact": "Contact Me",
    "hero.status": "status: building",
    "hero.stack": "stack: ai / web / data",
    "about.eyebrow": "Identity Layer",
    "about.title": "About Me",
    "about.copy1": "I am Semih Helvacıkara, a Computer Engineering student, software developer, and technology builder focused on digital products. Beyond web work, I develop artificial intelligence systems, automations, integrations, business workflows, and technical product ideas.",
    "about.copy2": "I like approaching corporate needs with startup speed: understanding the problem, choosing the right technology, and turning ideas into usable digital products. I combine software, artificial intelligence systems, automation, cybersecurity basics, IT management, and digital growth with a product mindset.",
    "about.tag1": "Computer Engineering",
    "about.tag2": "Software & Integration",
    "about.tag3": "AI & Automation",
    "about.tag4": "IT Management",
    "about.tag5": "Digital Product Building",
    "about.role": "Computer Engineering & Software",
    "about.focus": "artificial intelligence systems, software, automation, integrations, web, data, digital products",
    "about.mission": "turn your ideas into usable, scalable digital businesses",
    "skills.eyebrow": "Technical Capabilities",
    "skills.title": "Software, Product and Technology Skills",
    "skill.advanced": "Advanced",
    "skill.intermediate": "Intermediate",
    "skill.learning": "Learning / Intermediate",
    "skill.html": "Semantic structure, accessibility, SEO-ready markup, and clean page architecture.",
    "skill.css": "Responsive layouts, animation systems, glassmorphism, and polished interface details.",
    "skill.js": "Interactive UI logic, validation, DOM systems, and frontend application behavior.",
    "skill.react": "Component-based interfaces, reusable UI patterns, stateful views, and app thinking.",
    "skill.node": "Backend routes, API structure, server-side logic, and product-oriented integrations.",
    "skill.python": "Automation, data processing, scripts, AI experiments, and backend utility workflows.",
    "skill.sql": "Relational data modeling, queries, application data flows, and reporting foundations.",
    "skill.wordpress": "Business websites, CMS workflows, page structure, content updates, and launch support.",
    "skill.git": "Version control, repository workflows, project organization, and code collaboration basics.",
    "skill.ai": "Applying artificial intelligence systems to product development, automation, analysis, and technical prototyping.",
    "skill.cyber": "Network security awareness, intrusion detection concepts, and secure development habits.",
    "skill.ui": "Visual hierarchy, user flows, interface polish, and product presentation systems.",
    "skill.video": "Editing rhythm, social media content, basic color/audio adjustments, and export preparation for publishing formats.",
    "projects.eyebrow": "Selected Projects",
    "projects.title": "Products and Systems I Have Built",
    "project1.type": "AI + Cybersecurity",
    "project1.desc": "A real-time intrusion detection system focused on detecting suspicious network traffic with machine learning.",
    "project2.type": "Management Application",
    "project2.desc": "A cafe management application with product, order, and user management features.",
    "project3.type": "Corporate Website",
    "project3.desc": "A multilingual Erasmus+ association website with project pages, news, and contact structure.",
    "project4.type": "Data / Automation Tool",
    "project4.desc": "A tool for scanning products, collecting market data, and scoring e-commerce opportunities.",
    "project5.type": "Startup / Mobile App Concept",
    "project5.desc": "A QR-based loyalty and customer engagement platform designed for cafes and small businesses.",
    "project5.note": "A TÜBİTAK application was submitted with this project.",
    "project6.type": "Personal Management Application",
    "project6.desc": "A desktop application that brings tasks, budget tracking, personal planning, and daily productivity flows into one control panel.",
    "experience.eyebrow": "Timeline Circuit",
    "experience.title": "Work, Education and Technology Signal",
    "exp1.desc": "An IT role combining technical infrastructure, web presence, digital marketing, and team coordination for hotels and affiliated businesses.",
    "exp1.b1": "Built web and digital infrastructure for hotel and group brands",
    "exp1.b2": "Worked on SEO, advertising, and performance-oriented digital marketing",
    "exp1.b3": "Analyzed cross-department technical needs and implemented solutions",
    "exp2.desc": "A developer/director experience that combined software development with group operations, team coordination, process design, and project execution.",
    "exp3.desc": "Experience across an AI-powered desktop assistant, API integrations, integration systems, Kali Linux security work, and e-commerce development.",
    "exp4.title": "Computer Engineering + Management Information Systems",
    "exp4.desc": "Bachelor studies in Computer Engineering at Hasan Kalyoncu University and Management Information Systems at Istanbul University.",
    "exp5.title": "Erasmus+, Hackathon and AI Projects",
    "exp5.desc": "Youthpass certificates, Erasmus+ youth exchange experience, and an AI-powered hackathon project for optimizing profitable shipping routes for logistics companies.",
    "stat1": "Erasmus+ Projects",
    "stat2": "Digital Projects",
    "stat3": "Web Applications",
    "stat4": "AI / Automation Concepts",
    "stat5": "Campaign Reach",
    "resume.eyebrow": "Classic Mode",
    "resume.title": "Want the classic version?",
    "resume.download": "Download Resume",
    "resume.linkedin": "View LinkedIn",
    "contact.eyebrow": "Contact Control Panel",
    "contact.title": "Ready to build something?",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send Message",
    "form.namePlaceholder": "Your name",
    "form.emailPlaceholder": "your@email.com",
    "form.messagePlaceholder": "Tell me about your project",
    "contact.ready": "> Ready to build something?",
    "contact.location": "Location: Türkiye",
    "project.action.github": "Open GitHub",
    "project.action.demo": "View Demo",
        "footer.rights": "All rights reserved.",
  }
};

const roleSets = {
  tr: [
    "Yapay zeka sistemleri, yazılım ve dijital ürünler geliştiriyorum.",
    "Otomasyon, entegrasyon ve veri odaklı teknik sistemler kuruyorum.",
    "İş fikirlerini çalışan teknoloji ürünlerine dönüştürüyorum.",
    "Kurumsal ihtiyaçlara startup hızında yazılım çözümleri tasarlıyorum."
  ],
  en: [
    "I build artificial intelligence systems, software, and digital products.",
    "I create automation, integration, and data-driven technical systems.",
    "I turn business ideas into working technology products.",
    "I design software solutions for corporate needs with startup speed."
  ]
};

let currentLanguage = "tr";
let roles = roleSets[currentLanguage];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
let countersStarted = false;

// Fade out the loading screen after the initial system-style boot animation.
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1200);
});

// Keep footer year current without touching the HTML later.
year.textContent = new Date().getFullYear();

// Hero typing animation with a type/delete loop.
function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    charIndex += 1;
    typingText.textContent = currentRole.slice(0, charIndex);

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex -= 1;
    typingText.textContent = currentRole.slice(0, charIndex);

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 38 : 72);
}

function applyLanguage(language) {
  currentLanguage = language;
  roles = roleSets[currentLanguage];
  roleIndex = 0;
  charIndex = 0;
  deleting = false;

  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) {
      element.innerHTML = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[currentLanguage][key]) {
      element.placeholder = translations[currentLanguage][key];
    }
  });

  langToggle.textContent = currentLanguage === "tr" ? "EN" : "TR";
  typingText.textContent = "";
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "tr" ? "en" : "tr");
});

applyLanguage("tr");
typeLoop();

// Mobile navigation toggle with accessible expanded state.
menuToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Intersection observer handles reveal animations and active nav state.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      navLinks.forEach((link) => link.classList.remove("active"));

      if (activeLink) {
        activeLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

// Touch-friendly skill cards: desktop flips on hover, mobile and keyboard can toggle.
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("flipped");
    }
  });
});

// Animated counters start once the stats section becomes visible.
function animateCounter(counter) {
  const target = Number(counter.dataset.count);
  const prefix = counter.dataset.prefix || "";
  const suffix = counter.dataset.suffix || "";
  const duration = 1500;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);

    counter.textContent = `${prefix}${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = `${prefix}${target}${suffix}`;
    }
  }

  requestAnimationFrame(updateCounter);
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        document.querySelectorAll("[data-count]").forEach(animateCounter);
      }
    });
  },
  { threshold: 0.35 }
);

const statsSection = document.querySelector(".stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Contact form validation with frontend-only success feedback.
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMessage.textContent = currentLanguage === "tr" ? "Lütfen göndermeden önce tüm alanları doldur." : "Please complete all fields before sending.";
    formMessage.style.color = "#ff7adf";
    return;
  }

  if (!emailPattern.test(email)) {
    formMessage.textContent = currentLanguage === "tr" ? "Lütfen geçerli bir email adresi gir." : "Please enter a valid email address.";
    formMessage.style.color = "#ff7adf";
    return;
  }

  formMessage.textContent = currentLanguage === "tr" ? "İletim başarılı. En kısa zamanda dönüş yapacağım." : "Transmission successful. I will reply soon.";
  formMessage.style.color = "#44ffb7";
  contactForm.reset();
});

// Mouse glow and subtle neon triangle parallax.
window.addEventListener("pointermove", (event) => {
  const { clientX, clientY } = event;

  if (cursorGlow) {
    cursorGlow.style.left = `${clientX}px`;
    cursorGlow.style.top = `${clientY}px`;
  }

  if (heroOrbit) {
    const x = (clientX / window.innerWidth - 0.5) * 18;
    const y = (clientY / window.innerHeight - 0.5) * 18;
    heroOrbit.style.transform = `translate(${x}px, ${y}px)`;
  }
});

// Project cards get a small 3D tilt on precise pointers.
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  });
});

// Empty project slots stay visible for future links without jumping the page.
document.querySelectorAll(".pending-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
