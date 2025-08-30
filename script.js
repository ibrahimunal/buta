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
selected.innerHTML = option.innerHTML; // preserves the flag icon
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
    aboutText: "We bring the rich culinary traditions of Azerbaijan to Ankara. Fresh ingredients, authentic flavors, and a warm atmosphere await you.",
    galleryTitle: "Gallery",
    contactTitle: "Contact Us",
    contactAddress: "Address: Cinnah Caddesi No:37, Ankara, Turkey",
    contactPhone: "Phone: +90 312 466 05 05",
    contactEmail: "Email: info@butabaku.com",
    locationsTitle: "Our Locations",
    pleasantonTitle: "Buta",
    livermoreTitle: "Livermore",
    danvilleTitle: "Danville",
    pleasantonText: "Our Buta branch serves you with its modern architecture and wide product range. We offer you the best experience with our products prepared with quality materials and master craftsmanship.",
    livermoreText: "Our Livermore location stands out with natural materials and handmade products. We aim to provide our guests with an unforgettable taste experience in a warm and friendly atmosphere.",
    danvilleText: "Our branch in Danville brings together traditional recipes with modern presentations. Our menu, prepared with carefully selected local products, offers a variety that will appeal to your palate.",
    readMore: "Read More"
  },
  tr: {
    heroTitle: "Buta Baku'ya Hoş Geldiniz",
    heroSubtitle: "Azerbaycan'ın özgün lezzetleri, Ankara'da sizlerle",
    heroCta: "Menüyü Gör",
    aboutTitle: "Hakkımızda",
    aboutText: "Buta Baku Restoran olarak Azerbaycan’ın zengin mutfak geleneklerini Ankara'ya taşıyoruz. Taze malzemeler, otantik lezzetler ve sıcak bir atmosfer sizi bekliyor.",
    galleryTitle: "Galeri",
    contactTitle: "İletişim",
    contactAddress: "Adres: Cinnah Caddesi No:37, Ankara, Türkiye",
    contactPhone: "Telefon: +90 312 466 05 05",
    contactEmail: "E-posta: info@butabaku.com",
    locationsTitle: "Lokasyonlarımız",
    pleasantonTitle: "Pleasanton",
    livermoreTitle: "Livermore",
    danvilleTitle: "Danville",
    pleasantonText: "Pleasanton şubemiz modern mimarisi ve geniş ürün yelpazesiyle hizmetinizde. Kaliteli malzemeler ve usta işçilikle hazırlanan ürünlerimizle sizlere en iyi deneyimi sunuyoruz.",
    livermoreText: "Livermore lokasyonumuz doğal malzemeler ve el yapımı ürünleriyle öne çıkıyor. Misafirlerimize sıcak ve samimi bir atmosferde unutulmaz bir lezzet deneyimi yaşatmayı hedefliyoruz.",
    danvilleText: "Danville'deki şubemiz geleneksel tarifleri modern sunumlarla buluşturuyor. Özenle seçilmiş yerel ürünlerle hazırlanan menümüz, damak zevkinize hitap edecek çeşitlilikte.",
    readMore: "Daha Fazla"
  },
  az: {
    heroTitle: "Buta Baku'ya Xoş Gəlmisiniz",
    heroSubtitle: "Azərbaycanın orijinal dadları, Ankarada sizlər üçün",
    heroCta: "Menüyü Bax",
    aboutTitle: "Haqqımızda",
    aboutText: "Buta Baku Restoranı olaraq Azərbaycan mətbəxinin zəngin ənənələrini Ankaraya gətiririk. Təzə məhsullar, orijinal dadlar və isti atmosfer sizi gözləyir.",
    galleryTitle: "Qalereya",
    contactTitle: "Əlaqə",
    contactAddress: "Ünvan: Cinnah Caddesi No:37, Ankara, Türkiyə",
    contactPhone: "Telefon: +90 312 466 05 05",
    contactEmail: "E-poçt: info@butabaku.com",
    locationsTitle: "Məkanlarımız",
    pleasantonTitle: "Pleasanton",
    livermoreTitle: "Livermore",
    danvilleTitle: "Danville",
    pleasantonText: "Pleasanton filialımız müasir memarlığı və geniş məhsul çeşidi ilə xidmətinizdədir. Keyfiyyətli materiallar və usta işçiliyi ilə hazırlanan məhsullarımızla sizə ən yaxşı təcrübəni təqdim edirik.",
    livermoreText: "Livermore məkanımız təbii materiallar və əl işi məhsulları ilə fərqlənir. Qonaqlarımıza isti və rəhmli bir mühitdə unudulmaz bir ləzzət təcrübəsi yaşatmağı hədəfləyirik.",
    danvilleText: "Danville'dəki filialımız ənənəvi reseptləri müasir təqdimatlarla birləşdirir. Diqqətlə seçilmiş yerli məhsullarla hazırlanan menyumuz, damaq zövqünüzə hitab edəcək müxtəliflik təklif edir.",
    readMore: "Daha Çox"
  },
  ru: {
    heroTitle: "Добро пожаловать в Buta Baku",
    heroSubtitle: "Аутентичные блюда Азербайджана прямо здесь, в Анкаре",
    heroCta: "Посмотреть меню",
    aboutTitle: "О нас",
    aboutText: "В ресторане Buta Baku мы привносим богатые кулинарные традиции Азербайджана в Анкару. Свежие ингредиенты, аутентичные вкусы и уютная атмосфера ждут вас.",
    galleryTitle: "Галерея",
    contactTitle: "Контакты",
    contactAddress: "Адрес: Cinnah Caddesi No:37, Анкара, Турция",
    contactPhone: "Телефон: +90 312 466 05 05",
    contactEmail: "Эл. почта: info@butabaku.com",
    locationsTitle: "Наши Локации",
    pleasantonTitle: "Плезантон",
    livermoreTitle: "Ливермор",
    danvilleTitle: "Дэнвилл",
    pleasantonText: "Наш филиал в Плезантоне обслуживает вас своим современным архитектурным стилем и широким ассортиментом продукции. Мы предлагаем вам лучший опыт с нашими продуктами, приготовленными из качественных материалов с мастерским исполнением.",
    livermoreText: "Наше заведение в Ливерморе выделяется натуральными материалами и изделиями ручной работы. Мы стремимся предоставить нашим гостям незабываемые вкусовые ощущения в теплой и дружеской атмосфере.",
    danvilleText: "Наш филиал в Дэнвилле сочетает традиционные рецепты с современной подачей. Наше меню, приготовленное из тщательно отобранных местных продуктов, предлагает разнообразие, которое понравится вашему вкусу.",
    readMore: "Подробнее"
  }
};

document.getElementById('year').textContent = new Date().getFullYear();

// Change language function
function changeLanguage(lang) {
  const t = translations[lang];
  document.getElementById("hero-title").textContent = t.heroTitle;
  // document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
  document.getElementById("hero-cta").textContent = t.heroCta;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("gallery-title").textContent = t.galleryTitle;
  
  // Yeni eklenen çeviriler
  document.querySelector(".promo-section h2").textContent = t.locationsTitle;
  document.querySelectorAll(".promo-card-header")[0].textContent = t.pleasantonTitle;
  document.querySelectorAll(".promo-card-header")[1].textContent = t.livermoreTitle;
  document.querySelectorAll(".promo-card-header")[2].textContent = t.danvilleTitle;
  document.querySelectorAll(".promo-card-content p")[0].textContent = t.pleasantonText;
  document.querySelectorAll(".promo-card-content p")[1].textContent = t.livermoreText;
  document.querySelectorAll(".promo-card-content p")[2].textContent = t.danvilleText;
  document.querySelectorAll(".promo-read-more-btn").forEach(btn => {
    btn.textContent = t.readMore;
  });
}

// Promo Cards Functionality - YENİ EKLENEN KOD
document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtns = document.querySelectorAll('.promo-read-more-btn');
  const overlay = document.getElementById('promoOverlay');
  const closeBtn = document.querySelector('.promo-close-btn');
  const expandedTitle = document.getElementById('promoExpandedTitle');
  const expandedText = document.getElementById('promoExpandedText');
  
  // İçerik veritabanı
  const contentData = {
    'Pleasanton': {
      title: 'Pleasanton Şubesi',
      content: `
<p>Ankara’nın kalbinde, 100 dönümlük yemyeşil Haydar Aliyev Anıt Parkı içerisinde konumlanan Buta Bakü Restoran, Azerbaycan mutfağının eşsiz lezzetlerini, kültürel zenginlikleri ve seçkin bir atmosferi bir araya getiriyor.</p>
<p>Menümüzde yer alan Nar Soslu Kuzu, Şah Pilavı, Dovga ve Düşbere Çorbası, Lüle Kebabı gibi Azerbaycan’ın dillere destan yemeklerini; yalnızca mevsiminde toplanan doğal ürünler ve kendi ürettiğimiz zeytinyağıyla hazırlıyoruz. Bu unutulmaz yolculuğu ise sadece bizde bulabileceğiniz Buta Ballı ve Bakü Baklavası gibi özel tatlılarla taçlandırıyoruz. Her lokma, şeflerimizin incelikli dokunuşlarıyla damaklarda iz bırakıyor.</p>
<p>Seçkin şarap kavımız, yerel kadın üreticilerin emekleriyle üretilen özel şaraplardan ve Türkiye’nin saygın bağlarının seçkin etiketlerinden oluşuyor. Bunun yanında, Azerbaycan Savalan şarap serisini de yalnızca Buta Bakü kavında bulabilirsiniz. Bu ayrıcalıklı lezzetleri, özenle hazırlanmış imza kokteyllerimizle birlikte şömine başında deneyimleyebilir, kendinizi unutulmaz bir atmosferin içinde bulabilirsiniz.</p>
<p>Buta Bakü sadece bir restoran değil, kültür ve zarafetin buluşma noktasıdır. Geleneksel müziklerden sanat etkinliklerine, film gösterimlerinden kültürel seminerlere uzanan programlarımızla, her ziyareti benzersiz kılıyoruz.</p>
<p>Şehrin kalabalığından uzak, doğanın ortasında, şöminenin sıcaklığı ve parkın dinginliği eşliğinde; Azerbaycan kültürünün sofistike dokunuşlarıyla tanışmaya davetlisiniz.</p>
<p>Buta Bakü Restoran – Damaklarda, ruhlarda ve hafızalarda iz bırakan bir deneyim.</p>
      `
    },
    'Livermore': {
      title: 'Livermore Şubesi',
      content: `
        <p>Livermore şubemiz 2015 yılında açılmış olup, şehrin tarihi dokusuna uyum sağlayan bir mimariye sahiptir. Bu şubemizde organik ve yerel üreticilerden tedarik ettiğimiz malzemeleri kullanıyoruz.</p>
        <p>Restoranımızda geleneksel fırın ürünleri ve özel reçetelerle hazırlanan yemekler sunulmaktadır. Kendimize ait bahçemizde yetiştirdiğimiz taze otlar ve sebzelerle yemeklerimize ayrı bir lezzet katıyoruz.</p>
        <p>Mekanımız 80 kişi kapasiteli olup, açık hava terasımız yaz aylarında hizmet vermektedir. Özel günleriniz için şık ve samimi bir atmosfer sunuyoruz.</p>
        <p>Çalışma saatlerimiz: Pazartesi - Perşembe: 09:00 - 22:00, Cuma - Pazar: 09:00 - 23:00. Cuma ve Cumartesi geceleri canlı müzik performansları eşliğinde akşam yemeği keyfi sunuyoruz.</p>
        <p>Rezervasyon ve detaylı bilgi için bizi arayabilir veya web sitemiz üzerinden online rezervasyon yapabilirsiniz. Sizleri bekliyoruz!</p>
      `
    },
    'Danville': {
      title: 'Danville Şubesi',
      content: `
        <p>Danville şubemiz 2018 yılında açılmış olup, modern ve geleneksel tasarımın mükemmel bir karışımını sunmaktadır. Bu şubemizde özellikle ailelere ve gruplara yönelik hizmet veriyoruz.</p>
        <p>Menümüzde bölgenin en taze deniz ürünleri ve yerel çiftliklerden tedarik ettiğimiz et ürünleri bulunmaktadır. Özel soslar ve marine teknikleriyle hazırlanan etler, odun ateşinde pişirilmektedir.</p>
        <p>120 kişi kapasiteli şubemizde, 30 kişiye kadar özel toplantı ve kutlamalarınız için ayrılmış özel bir bölüm bulunmaktadır. Çocuklar için özel menü ve oyun alanımız mevcuttur.</p>
        <p>Çalışma saatlerimiz: Pazartesi - Perşembe: 10:00 - 22:00, Cuma - Cumartesi: 10:00 - 23:30, Pazar: 10:00 - 21:00. Pazar günleri ailelere özel %10 indirim uygulanmaktadır.</p>
        <p>Detaylı bilgi ve rezervasyon için iletişim numaramızdan bize ulaşabilirsiniz. Danville'de görmekten mutluluk duyacağız!</p>
      `
    }
  };
  
  // Read More butonlarına tıklama olayı ekle
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const city = this.getAttribute('data-city');
      expandedTitle.textContent = contentData[city].title;
      expandedText.innerHTML = contentData[city].content;
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Sayfa kaydırmayı engelle
    });
  });
  
  // Overlay'i kapat
  closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Sayfa kaydırmayı geri getir
  });
  
  // Overlay dışına tıklanınca kapat
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});


// Video elementini tutacak global değişken
let currentVideoElement = null;

// Video oynatma fonksiyonu - Artırılmış yükseklikli
// Video elementini tutacak global değişken

// Video oynatma fonksiyonu - Artırılmış yükseklikli
function playVideo(city) {
  const overlay = document.getElementById('promoOverlay');
  const expandedTitle = document.getElementById('promoExpandedTitle');
  const expandedText = document.getElementById('promoExpandedText');
  
  if (!overlay || !expandedTitle || !expandedText) return;
  
  // Önceki video varsa durdur
  stopVideo();
  
  expandedTitle.textContent = contentData[city].title;
  
  // Yerel video içeriği - artırılmış yükseklikli
  expandedText.innerHTML = `
    <div class="video-container">
      <video controls style="width: 100%; height: 100%; object-fit: cover;">
        <source src="assets/video/buta.mp4" type="video/mp4">
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </div>
    <p style="margin-top: 20px; text-align: center; font-size: 1.1rem;">${city} Bakü tanıtım videosu.</p>
  `;
  
  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Video elementini kaydet
  setTimeout(() => {
    const video = expandedText.querySelector('video');
    if (video) {
      video.style.height = '100%';
      video.style.maxHeight = '500px';
      currentVideoElement = video;
      
      // Video sona erdiğinde değişkeni temizle
      video.onended = function() {
        currentVideoElement = null;
      };
    }
  }, 100);
}

// Video durdurma fonksiyonu
function stopVideo() {
  if (currentVideoElement) {
    currentVideoElement.pause();
    currentVideoElement.currentTime = 0;
    currentVideoElement = null;
  }
}

// contentData'yı güncelleyin
const contentData = {
  'Buta': {
    title: 'Buta Bakü Restoran',
    content: `
      <div class="video-container">
        <video controls style="width: 100%; height: 100%; object-fit: cover;">
          <source src="assets/video/buta.mp4" type="video/mp4">
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
      </div>
      <p>Ankara'nın kalbinde, 100 dönümlük yemyeşil Haydar Aliyev Anıt Parkı içerisinde konumlanan Buta Bakü Restoran, Azerbaycan mutfağının eşsiz lezzetlerini, kültürel zenginlikleri ve seçkin bir atmosferi bir araya getiriyor.</p>
      <p>Menümüzde yer alan Nar Soslu Kuzu, Şah Pilavı, Dovga ve Düşbere Çorbası, Lüle Kebabı gibi Azerbaycan'ın dillere destan yemeklerini; yalnızca mevsiminde toplanan doğal ürünler ve kendi ürettiğimiz zeytinyağıyla hazırlıyoruz. Bu unutulmaz yolculuğu ise sadece bizde bulabileceğiniz Buta Ballı ve Bakü Baklavası gibi özel tatlılarla taçlandırıyoruz. Her lokma, şeflerimizin incelikli dokunuşlarıyla damaklarda iz bırakıyor.</p>
      <p>Seçkin şarap kavımız, yerel kadın üreticilerin emekleriyle üretilen özel şaraplardan ve Türkiye'nin saygın bağlarının seçkin etiketlerinden oluşuyor. Bunun yanında, Azerbaycan Savalan şarap serisini de yalnızca Buta Bakü kavında bulabilirsiniz. Bu ayrıcalıklı lezzetleri, özenle hazırlanmış imza kokteyllerimizle birlikte şömine başında deneyimleyebilir, kendinizi unutulmaz bir atmosferin içinde bulabilirsiniz.</p>
      <p>Buta Bakü sadece bir restoran değil, kültür ve zarafetin buluşma noktasıdır. Geleneksel müziklerden sanat etkinliklerine, film gösterimlerinden kültürel seminerlere uzanan programlarımızla, her ziyareti benzersiz kılıyoruz.</p>
      <p>Şehrin kalabalığından uzak, doğanın ortasında, şöminenin sıcaklığı ve parkın dinginliği eşliğinde; Azerbaycan kültürünün sofistike dokunuşlarıyla tanışmaya davetlisiniz.</p>
      <p>Buta Bakü Restoran – Damaklarda, ruhlarda ve hafızalarda iz bırakan bir deneyim.</p>
    `,
    hasVideo: true
  },
  'Livermore': {
    title: 'Livermore Şubesi',
    content: `
      <p>Livermore şubemiz 2015 yılında açılmış olup, şehrin tarihi dokusuna uyum sağlayan bir mimariye sahiptir. Bu şubemizde organik ve yerel üreticilerden tedarik ettiğimiz malzemeleri kullanıyoruz.</p>
      <p>Restoranımızda geleneksel fırın ürünleri ve özel reçetelerle hazırlanan yemekler sunulmaktadır. Kendimize ait bahçemizde yetiştirdiğimiz taze otlar ve sebzelerle yemeklerimize ayrı bir lezzet katıyoruz.</p>
      <p>Mekanımız 80 kişi kapasiteli olup, açık hava terasımız yaz aylarında hizmet vermektedir. Özel günleriniz için şık ve samimi bir atmosfer sunuyoruz.</p>
      <p>Çalışma saatlerimiz: Pazartesi - Perşembe: 09:00 - 22:00, Cuma - Pazar: 09:00 - 23:00. Cuma ve Cumartesi geceleri canlı müzik performansları eşliğinde akşam yemeği keyfi sunuyoruz.</p>
      <p>Rezervasyon ve detaylı bilgi için bizi arayabilir veya web sitemiz üzerinden online rezervasyon yapabilirsiniz. Sizleri bekliyoruz!</p>
    `,
    hasVideo: false
  },
  'Danville': {
    title: 'Danville Şubesi',
    content: `
      <p>Danville şubemiz 2018 yılında açılmış olup, modern ve geleneksel tasarımın mükemmel bir karışımını sunmaktadır. Bu şubemizde özellikle ailelere ve gruplara yönelik hizmet veriyoruz.</p>
      <p>Menümüzde bölgenin en taze deniz ürünleri ve yerel çiftliklerden tedarik ettiğimiz et ürünleri bulunmaktadır. Özel soslar ve marine teknikleriyle hazırlanan etler, odun ateşinde pişirilmektedir.</p>
      <p>120 kişi kapasiteli şubemizde, 30 kişiye kadar özel toplantı ve kutlamalarınız için ayrılmış özel bir bölüm bulunmaktadır. Çocuklar için özel menü ve oyun alanımız mevcuttur.</p>
      <p>Çalışma saatlerimiz: Pazartesi - Perşembe: 10:00 - 22:00, Cuma - Cumartesi: 10:00 - 23:30, Pazar: 10:00 - 21:00. Pazar günleri ailelere özel %10 indirim uygulanmaktadır.</p>
      <p>Detaylı bilgi ve rezervasyon için iletişim numaramızdan bize ulaşabilirsiniz. Danville'de görmekten mutluluk duyacağız!</p>
    `,
    hasVideo: false
  }
};

// DOM yüklendikten sonra çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
  const readMoreBtns = document.querySelectorAll('.promo-read-more-btn');
  const overlay = document.getElementById('promoOverlay');
  const closeBtn = document.querySelector('.promo-close-btn');
  const expandedTitle = document.getElementById('promoExpandedTitle');
  const expandedText = document.getElementById('promoExpandedText');
  
  if (!readMoreBtns.length || !overlay || !closeBtn || !expandedTitle || !expandedText) return;
  
  // Read More butonlarına tıklama olayı ekle
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const city = this.getAttribute('data-city');
      expandedTitle.textContent = contentData[city].title;
      
      // Önceki video varsa durdur
      stopVideo();
      
      // İçeriği göster
      expandedText.innerHTML = contentData[city].content;
      
      // Video elementini kaydet (eğer video varsa)
      setTimeout(() => {
        const video = expandedText.querySelector('video');
        if (video) {
          currentVideoElement = video;
          
          // Video sona erdiğinde değişkeni temizle
          video.onended = function() {
            currentVideoElement = null;
          };
        }
      }, 100);
      
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Overlay'i kapat ve videoyu durdur
  closeBtn.addEventListener('click', function() {
    stopVideo();
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Overlay dışına tıklanınca kapat ve videoyu durdur
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      stopVideo();
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});

// ESC tuşuyla kapatma ve videoyu durdurma
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('promoOverlay');
    if (overlay && overlay.style.display === 'flex') {
      stopVideo();
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }
});
