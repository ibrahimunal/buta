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
var translations;

document.getElementById('year').textContent = new Date().getFullYear();

let currentLang = "tr"; // default

// Load JSON file
fetch("./translations.json")
  .then(res => res.json())
  .then(data => {
    translations = data;
    console.log(translations);
    changeLanguage(currentLang); // set default language
  });

// Change language function
function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang]; // translations should be an object

  if (!t) {
    console.warn(`No translations found for language: ${lang}`);
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const path = el.getAttribute("data-i18n"); // e.g., "nav.menu"
    const keys = path.split(".");
    let text = t;

    for (let key of keys) {
      if (text && text[key] !== undefined) {
        text = text[key];
      } else {
        console.warn(`Missing translation for: ${path}`);
        text = null;
        break;
      }
    }

    if (!text) return;

    // Set textContent or attributes
    if (path.includes("alt")) {
      el.setAttribute("alt", text);
    } else if (path.includes("placeholder")) {
      el.setAttribute("placeholder", text);
    } else {
      el.textContent = text;
    }
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
      
      // Eğer video varsa, video içeriğini göster
      if (contentData[city].hasVideo) {
        expandedText.innerHTML = contentData[city].content;
        
        // Video elementini kaydet
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
      } else {
        expandedText.innerHTML = contentData[city].content;
      }
      
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
// contentData'yı güncelleyin
const contentData = {
  'Buta': {
    title: 'Buta ',
    content: `
<p>Ankara’nın kalbinde, 100 dönümlük yemyeşil Haydar Aliyev Anıt Parkı içerisinde konumlanan Buta Bakü Restoran, Azerbaycan mutfağının eşsiz lezzetlerini, kültürel zenginlikleri ve seçkin bir atmosferi bir araya getiriyor.</p>
<p>Menümüzde yer alan Nar Soslu Kuzu, Şah Pilavı, Dovga ve Düşbere Çorbası, Lüle Kebabı gibi Azerbaycan’ın dillere destan yemeklerini; yalnızca mevsiminde toplanan doğal ürünler ve kendi ürettiğimiz zeytinyağıyla hazırlıyoruz. Bu unutulmaz yolculuğu ise sadece bizde bulabileceğiniz Buta Ballı ve Bakü Baklavası gibi özel tatlılarla taçlandırıyoruz. Her lokma, şeflerimizin incelikli dokunuşlarıyla damaklarda iz bırakıyor.</p>
<p>Seçkin şarap kavımız, yerel kadın üreticilerin emekleriyle üretilen özel şaraplardan ve Türkiye’nin saygın bağlarının seçkin etiketlerinden oluşuyor. Bunun yanında, Azerbaycan Savalan şarap serisini de yalnızca Buta Bakü kavında bulabilirsiniz. Bu ayrıcalıklı lezzetleri, özenle hazırlanmış imza kokteyllerimizle birlikte şömine başında deneyimleyebilir, kendinizi unutulmaz bir atmosferin içinde bulabilirsiniz.</p>
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

document.querySelectorAll("#sideMenu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
});

