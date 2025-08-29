// Language selector
const selected = document.querySelector(".select-selected");
const items = document.querySelector(".select-items");

// Start closed
items.classList.remove("show");

selected.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate close
  items.classList.toggle("show");
});

// Select a language
items.querySelectorAll("div").forEach((option) => {
  option.addEventListener("click", () => {
    selected.textContent = option.textContent;
    items.classList.remove("show");
    changeLanguage(option.dataset.lang);
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", () => {
  items.classList.remove("show");
});

// Mobile menu
function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

// Language translations
const translations = {
  en: {
    heroTitle: "Welcome to Buta Baku",
    heroSubtitle: "Authentic flavors from Azerbaijan, right here in Ankara",
    heroCta: "View Menu",
    aboutTitle: "About Us",
    aboutText:
      "We bring the rich culinary traditions of Azerbaijan to Ankara. Fresh ingredients, authentic flavors, and a warm atmosphere await you.",
    galleryTitle: "Gallery",
    contactTitle: "Contact Us",
    contactAddress: "Address: Cinnah Caddesi No:37, Ankara, Turkey",
    contactPhone: "Phone: +90 312 466 05 05",
    contactEmail: "Email: info@butabaku.com",
  },
  tr: {
    heroTitle: "Buta Baku'ya Hoş Geldiniz",
    heroSubtitle: "Azerbaycan'ın özgün lezzetleri, Ankara'da sizlerle",
    heroCta: "Menüyü Gör",
    aboutTitle: "Hakkımızda",
    aboutText:
      "Buta Baku Restoran olarak Azerbaycan’ın zengin mutfak geleneklerini Ankara'ya taşıyoruz. Taze malzemeler, otantik lezzetler ve sıcak bir atmosfer sizi bekliyor.",
    galleryTitle: "Galeri",
    contactTitle: "İletişim",
    contactAddress: "Adres: Cinnah Caddesi No:37, Ankara, Türkiye",
    contactPhone: "Telefon: +90 312 466 05 05",
    contactEmail: "E-posta: info@butabaku.com",
  },
  az: {
    heroTitle: "Buta Baku'ya Xoş Gəlmisiniz",
    heroSubtitle: "Azərbaycanın orijinal dadları, Ankarada sizlər üçün",
    heroCta: "Menüyü Bax",
    aboutTitle: "Haqqımızda",
    aboutText:
      "Buta Baku Restoranı olaraq Azərbaycan mətbəxinin zəngin ənənələrini Ankaraya gətiririk. Təzə məhsullar, orijinal dadlar və isti atmosfer sizi gözləyir.",
    galleryTitle: "Qalereya",
    contactTitle: "Əlaqə",
    contactAddress: "Ünvan: Cinnah Caddesi No:37, Ankara, Türkiyə",
    contactPhone: "Telefon: +90 312 466 05 05",
    contactEmail: "E-poçt: info@butabaku.com",
  },
  ru: {
    heroTitle: "Добро пожаловать в Buta Baku",
    heroSubtitle: "Аутентичные блюда Азербайджана прямо здесь, в Анкаре",
    heroCta: "Посмотреть меню",
    aboutTitle: "О нас",
    aboutText:
      "В ресторане Buta Baku мы привносим богатые кулинарные традиции Азербайджана в Анкару. Свежие ингредиенты, аутентичные вкусы и уютная атмосфера ждут вас.",
    galleryTitle: "Галерея",
    contactTitle: "Контакты",
    contactAddress: "Адрес: Cinnah Caddesi No:37, Анкара, Турция",
    contactPhone: "Телефон: +90 312 466 05 05",
    contactEmail: "Эл. почта: info@butabaku.com",
  },
};


document.getElementById('year').textContent = new Date().getFullYear();

// Change language function
function changeLanguage(lang) {
  const t = translations[lang];
  document.getElementById("hero-title").textContent = t.heroTitle;
  document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
  document.getElementById("hero-cta").textContent = t.heroCta;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("gallery-title").textContent = t.galleryTitle;
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-address").textContent = t.contactAddress;
  document.getElementById("contact-phone").textContent = t.contactPhone;
  document.getElementById("contact-email").textContent = t.contactEmail;
}
