// Language selector
const selected = document.querySelector(".select-selected");
const items = document.querySelector(".select-items");

// Start closed
items.classList.remove("show");

selected.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent immediate close
  items.classList.toggle("show");
});

function getSelectedLanguage() {
  return selected.textContent.toLowerCase(); // adjust depending on your text ('EN', 'TR', etc.)
}

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

  
  // Read More butonlarına tıklama olayı ekle
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const city = this.getAttribute('data-city');      // e.g., 'Buta', 'Livermore'
      const lang = getSelectedLanguage();               // e.g., 'en', 'tr', 'az', 'ru'
  
      // Get content based on city and selected language
      const currentContent = contentData[city][currentLang];
  
      expandedTitle.textContent = currentContent.title;
      expandedText.innerHTML = currentContent.content;
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // prevent page scroll
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
      const city = this.getAttribute('data-city');      // e.g., 'Buta', 'Livermore'
      const lang = getSelectedLanguage();               // e.g., 'en', 'tr', 'az', 'ru'
  
      // Get content based on city and selected language
      const currentContent = contentData[city][currentLang];
  
      expandedTitle.textContent = currentContent.title;
      expandedText.innerHTML = currentContent.content;
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // prevent page scroll
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
    hasVideo: true,
    'tr': {
      title: 'Buta',
      content: `
<p>Ankara’nın kalbinde, 100 dönümlük yemyeşil Haydar Aliyev Anıt Parkı içerisinde konumlanan Buta Bakü Restoran, Azerbaycan mutfağının eşsiz lezzetlerini, kültürel zenginlikleri ve seçkin bir atmosferi bir araya getiriyor.</p>
<p>Menümüzde yer alan Nar Soslu Kuzu, Şah Pilavı, Dovga ve Düşbere Çorbası, Lüle Kebabı gibi Azerbaycan’ın dillere destan yemeklerini; yalnızca mevsiminde toplanan doğal ürünler ve kendi ürettiğimiz zeytinyağıyla hazırlıyoruz. Bu unutulmaz yolculuğu ise sadece bizde bulabileceğiniz Buta Ballı ve Bakü Baklavası gibi özel tatlılarla taçlandırıyoruz. Her lokma, şeflerimizin incelikli dokunuşlarıyla damaklarda iz bırakıyor.</p>
<p>Seçkin şarap kavımız, yerel kadın üreticilerin emekleriyle üretilen özel şaraplardan ve Türkiye’nin saygın bağlarının seçkin etiketlerinden oluşuyor. Bunun yanında, Azerbaycan Savalan şarap serisini de yalnızca Buta Bakü kavında bulabilirsiniz. Bu ayrıcalıklı lezzetleri, özenle hazırlanmış imza kokteyllerimizle birlikte şömine başında deneyimleyebilir, kendinizi unutulmaz bir atmosferin içinde bulabilirsiniz.</p>
<p>Buta Bakü sadece bir restoran değil, kültür ve zarafetin buluşma noktasıdır. Geleneksel müziklerden sanat etkinliklerine, film gösterimlerinden kültürel seminerlere uzanan programlarımızla, her ziyareti benzersiz kılıyoruz.</p>
<p>Şehrin kalabalığından uzak, doğanın ortasında, şöminenin sıcaklığı ve parkın dinginliği eşliğinde; Azerbaycan kültürünün sofistike dokunuşlarıyla tanışmaya davetlisiniz.</p>
<p>Buta Bakü Restoran – Damaklarda, ruhlarda ve hafızalarda iz bırakan bir deneyim.</p>
      `
    },
    'en': {
      title: 'Buta',
      content: `
<p>Located in the heart of Ankara, within the 100-acre green Haydar Aliyev Memorial Park, Buta Baku Restaurant brings together the unique flavors of Azerbaijani cuisine, cultural richness, and an exclusive atmosphere.</p>
<p>Our menu features Azerbaijan's legendary dishes such as Pomegranate-Glazed Lamb, Shah Pilaf, Dovga and Dushbara Soup, and Lule Kebab, all prepared using only seasonal natural products and our home-produced olive oil. We crown this unforgettable journey with our special desserts, such as Buta Honey and Baku Baklava, available exclusively at our restaurant. Every bite leaves a lasting impression, thanks to the delicate touch of our chefs.</p>
<p>Our exquisite wine cellar consists of special wines produced by local female producers and selected labels from Turkey's prestigious vineyards. Additionally, you can find the Azerbaijan Savalan wine series exclusively at Buta Baku. You can enjoy these exceptional flavors along with our carefully crafted signature cocktails by the fireplace, immersing yourself in an unforgettable atmosphere.</p>
<p>Buta Baku is not just a restaurant, but a meeting point of culture and elegance. From traditional music to art events, film screenings, and cultural seminars, we make every visit unique.</p>
<p>Away from the city's hustle, in the heart of nature, accompanied by the warmth of the fireplace and the tranquility of the park, we invite you to experience the sophisticated touches of Azerbaijani culture.</p>
<p>Buta Baku Restaurant – A memorable experience for the taste buds, the soul, and the memory.</p>
      `
    },
    'az': {
      title: 'Buta',
      content: `
<p>Ankaranın mərkəzində, 100 hektarlıq Yaşıl Heydər Əliyev Memorial Parkında yerləşən Buta Bakı Restoranı, Azərbaycan mətbəxinin unikal ləzzətlərini, mədəni zənginliyi və seçkin atmosferi bir araya gətirir.</p>
<p>Menyuimizdə olan Nar Souslu Qoyun, Şah Plovu, Dovğa və Düşbərə Şorbası, Lüle Kababı kimi Azərbaycan mətbəxinin məşhur yeməklərini yalnız mövsümündə toplanan təbii məhsullardan və öz istehsalımız olan zeytun yağı ilə hazırlayırıq. Bu unudulmaz səyahəti yalnız bizdə tapa biləcəyiniz Buta Balı və Bakı Baklavası kimi xüsusi şirniyyatlarla taçlandırırıq. Hər lokma aşpazlarımızın incə toxunuşları ilə dadlarda iz buraxır.</p>
<p>Seçkin şərab anbarımız, yerli qadın istehsalçılar tərəfindən hazırlanan xüsusi şərablardan və Türkiyənin prestijli bağlarından seçilmiş etiketlərdən ibarətdir. Bundan əlavə, Azərbaycan Savalan şərab seriyasını yalnız Buta Bakıda tapa bilərsiniz. Bu özəl ləzzətləri diqqətlə hazırlanmış imza kokteyllərimiz ilə birlikdə şöminə başında dadaraq unudulmaz bir atmosferdə ola bilərsiniz.</p>
<p>Buta Bakı yalnız bir restoran deyil, mədəniyyət və zərifliyin görüş nöqtəsidir. Ənənəvi musiqidən sənət tədbirlərinə, film nümayişlərindən mədəni seminarlaradək proqramlarımızla hər ziyarəti unikallaşdırırıq.</p>
<p>Şəhərin səs-küyündən uzaqda, təbiətin ortasında, şöminənin istiliyi və parkın sakitliyi ilə birlikdə Azərbaycan mədəniyyətinin zərif toxunuşlarını kəşf etməyə dəvətlisiniz.</p>
<p>Buta Bakı Restoran – Dadlarda, ruhlarda və yaddaşlarda iz buraxan bir təcrübə.</p>
      `
    },
    'ru': {
      title: 'Buta',
      content: `
<p>Расположенный в сердце Анкары, в 100-гектарном зелёном парке памяти Гейдара Алиева, ресторан Buta Baku объединяет уникальные вкусы азербайджанской кухни, культурное богатство и исключительную атмосферу.</p>
<p>В нашем меню представлены легендарные блюда Азербайджана, такие как ягненок с гранатовым соусом, плов Шах, супы Довга и Дюшбере, Люле Кебаб, приготовленные только из сезонных натуральных продуктов и собственного оливкового масла. Мы завершаем это незабываемое путешествие нашими эксклюзивными десертами, такими как мед Buta и бакинская пахлава, доступными только у нас. Каждый кусочек оставляет неизгладимое впечатление благодаря изысканным прикосновениям наших шеф-поваров.</p>
<p>Наша изысканная винная кладовая состоит из специальных вин, произведённых местными женщинами-производителями, и избранных марок престижных турецких виноделен. Кроме того, серию азербайджанских вин Savalan можно найти исключительно в Buta Baku. Эти исключительные вкусы можно попробовать вместе с тщательно приготовленными фирменными коктейлями у камина, погружаясь в незабываемую атмосферу.</p>
<p>Buta Baku – это не просто ресторан, а точка встречи культуры и элегантности. От традиционной музыки до художественных мероприятий, кинопоказов и культурных семинаров – мы делаем каждый визит уникальным.</p>
<p>Вдали от городской суеты, в сердце природы, в окружении тепла камина и спокойствия парка, приглашаем вас познакомиться с изысканными элементами азербайджанской культуры.</p>
<p>Ресторан Buta Baku – незабываемый опыт для вкусовых рецепторов, души и памяти.</p>
      `
    }
  },

  'Livermore': {
    hasVideo: false,
    'tr': {
      title: 'Livermore Şubesi',
      content: `
<p>Livermore şubemiz 2015 yılında açılmış olup, şehrin tarihi dokusuna uyum sağlayan bir mimariye sahiptir. Bu şubemizde organik ve yerel üreticilerden tedarik ettiğimiz malzemeleri kullanıyoruz.</p>
<p>Restoranımızda geleneksel fırın ürünleri ve özel reçetelerle hazırlanan yemekler sunulmaktadır. Kendimize ait bahçemizde yetiştirdiğimiz taze otlar ve sebzelerle yemeklerimize ayrı bir lezzet katıyoruz.</p>
<p>Mekanımız 80 kişi kapasiteli olup, açık hava terasımız yaz aylarında hizmet vermektedir. Özel günleriniz için şık ve samimi bir atmosfer sunuyoruz.</p>
<p>Çalışma saatlerimiz: Pazartesi - Perşembe: 09:00 - 22:00, Cuma - Pazar: 09:00 - 23:00. Cuma ve Cumartesi geceleri canlı müzik performansları eşliğinde akşam yemeği keyfi sunuyoruz.</p>
<p>Rezervasyon ve detaylı bilgi için bizi arayabilir veya web sitemiz üzerinden online rezervasyon yapabilirsiniz. Sizleri bekliyoruz!</p>
      `
    },
    'en': {
      title: 'Livermore Branch',
      content: `
<p>Our Livermore branch, opened in 2015, features an architecture that harmonizes with the historic texture of the city. In this branch, we use ingredients sourced from organic and local producers.</p>
<p>We serve traditional bakery items and dishes prepared with special recipes. Fresh herbs and vegetables grown in our own garden add a unique flavor to our meals.</p>
<p>Our venue has a capacity of 80 people, and our outdoor terrace operates during the summer months. We offer a stylish and cozy atmosphere for your special occasions.</p>
<p>Working hours: Monday - Thursday: 09:00 - 22:00, Friday - Sunday: 09:00 - 23:00. Enjoy dinner accompanied by live music performances on Friday and Saturday nights.</p>
<p>For reservations and detailed information, you can call us or book online through our website. We look forward to welcoming you!</p>
      `
    },
    'az': {
      title: 'Livermore Filiali',
      content: `
<p>Livermore filialımız 2015-ci ildə açılmış və şəhərin tarixi memarlığı ilə uyğun bir dizayna sahibdir. Bu filialımızda orqanik və yerli istehsalçılardan əldə etdiyimiz məhsullardan istifadə edirik.</p>
<p>Restoranımızda ənənəvi soba məhsulları və xüsusi reseptlərlə hazırlanan yeməklər təqdim olunur. Öz bağımızda yetişdirdiyimiz təzə otlar və tərəvəzlər yeməklərimizə xüsusi ləzzət qatır.</p>
<p>Məkânımız 80 nəfərlikdir və açıq hava terrasımız yay aylarında xidmət göstərir. Xüsusi günləriniz üçün şık və rahat bir atmosfer təqdim edirik.</p>
<p>İş saatları: Bazar ertəsi - Cümə axşamı: 09:00 - 22:00, Cümə - Bazar: 09:00 - 23:00. Cümə və Şənbə gecələri canlı musiqi ilə nahar zövqü təqdim edirik.</p>
<p>Rezervasiya və ətraflı məlumat üçün bizi zəng edə bilərsiniz və ya veb saytımız vasitəsilə online rezervasiya edə bilərsiniz. Sizi gözləyirik!</p>
      `
    },
    'ru': {
      title: 'Филиал Livermore',
      content: `
<p>Наш филиал в Ливерморе, открытый в 2015 году, имеет архитектуру, гармонирующую с исторической застройкой города. В этом филиале мы используем ингредиенты от органических и местных производителей.</p>
<p>В нашем ресторане подаются традиционные хлебобулочные изделия и блюда, приготовленные по особым рецептам. Свежие травы и овощи из нашего сада придают блюдам уникальный вкус.</p>
<p>Вместимость нашего заведения составляет 80 человек, а открытая терраса работает в летние месяцы. Мы предлагаем стильную и уютную атмосферу для ваших особых событий.</p>
<p>Часы работы: Понедельник - Четверг: 09:00 - 22:00, Пятница - Воскресенье: 09:00 - 23:00. Наслаждайтесь ужином с живой музыкой по пятницам и субботам.</p>
<p>Для бронирования и подробной информации вы можете позвонить нам или забронировать онлайн через наш сайт. Мы ждем вас!</p>
      `
    }
  },

'Story': {
  hasVideo: false,
'tr': {
  title: 'Buta Bakü',
  content: `
<p>Buta Bakü, sadece bir restoran değil; Azerbaycan’dan uzakta, ama adeta evinizdeymiş gibi hissedebileceğiniz bir kültür ve zarafet mabedidir. Geleneksel müziklerin büyüsü, sanat etkinliklerinin ilhamı, film gösterimleri ve kültürel seminerlerle dolu programlarımız, her ziyareti unutulmaz bir anıya dönüştürüyor.</p>
<p>Şehrin karmaşasından uzak, doğanın kucağında, şöminenin sıcak ışığı ve parkın dinginliği eşliğinde; Azerbaycan’ın sofistike tatlarıyla buluşun. Her detayda özen, her tabakta sevgi var. Buta Bakü’yü deneyimleyen misafirlerimiz, sadece yemeklerin enfes tadını değil, restoranın samimi ve huzur dolu atmosferini de hissediyor, her anı pozitif ve unutulmaz bir hatıraya dönüştürüyor.</p>
<p>Buta Bakü Restoran – Damaklarda, ruhlarda ve hafızalarda iz bırakan; Azerbaycan’ın sıcaklığını ve zarafetini hissettiren eşsiz bir deneyim.</p>
  `
},
'en': {
  title: 'Buta Baku',
  content: `
<p>Buta Baku is not just a restaurant; it is a sanctuary of culture and elegance where you can feel at home even far away from Azerbaijan. The magic of traditional music, the inspiration of art events, film screenings, and cultural seminars turn every visit into an unforgettable memory.</p>
<p>Away from the chaos of the city, in the embrace of nature, with the warm glow of the fireplace and the tranquility of the park; discover the sophisticated flavors of Azerbaijan. Every detail carries care, every plate reflects love. Guests who experience Buta Baku not only savor the exquisite taste of the dishes but also feel the restaurant’s warm and peaceful atmosphere, turning every moment into a positive and unforgettable memory.</p>
<p>Buta Baku Restaurant – A unique experience that leaves a mark on palates, souls, and memories; reflecting the warmth and elegance of Azerbaijan.</p>
  `
},
'az': {
  title: 'Buta Baku',
  content: `
<p>Buta Baku sadəcə bir restoran deyil; Azərbaycandan uzaqda olsanız belə, öz evinizdəymiş kimi hiss edə biləcəyiniz mədəniyyət və zəriflik məbədidir. Ənənəvi musiqinin sehri, incəsənət tədbirlərinin ilhamı, film nümayişləri və mədəni seminarlarla zəngin proqramlarımız hər ziyarəti unudulmaz bir xatirəyə çevirir.</p>
<p>Şəhərin səs-küyündən uzaqda, təbiətin qoynunda, şöminenin isti işığı və parkın sakitliyi ilə birlikdə Azərbaycan mətbəxinin zərif dadlarını kəşf edin. Hər detalda diqqət, hər yeməkdə sevgi var. Buta Baku-ya gələn qonaqlar yalnız yeməklərin ləzzətini deyil, həm də restoranın səmimi və rahat atmosferini hiss edir, hər anı müsbət və unudulmaz bir xatirəyə çevirirlər.</p>
<p>Buta Baku Restoranı – Damaqlarda, ruhlarda və yaddaşlarda iz buraxan; Azərbaycanın istiliyini və zərifliyini hiss etdirən bənzərsiz bir təcrübə.</p>
  `
},
'ru': {
  title: 'Buta Baku',
  content: `
<p>Buta Baku — это не просто ресторан; это храм культуры и изящества, где можно почувствовать себя как дома, даже находясь вдали от Азербайджана. Магия традиционной музыки, вдохновение художественных мероприятий, показы фильмов и культурные семинары превращают каждый визит в незабываемое воспоминание.</p>
<p>Вдали от шума города, в объятиях природы, у теплого света камина и в тишине парка откройте для себя утончённые вкусы Азербайджана. Каждая деталь наполнена заботой, каждое блюдо — любовью. Гости Buta Baku ощущают не только изысканный вкус блюд, но и теплую, спокойную атмосферу ресторана, превращая каждый момент в позитивное и незабываемое воспоминание.</p>
<p>Ресторан Buta Baku — уникальный опыт, оставляющий след во вкусе, душе и памяти; отражающий тепло и изящество Азербайджана.</p>
  `
}

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


document.querySelectorAll(".menu-link").forEach(el => {
  el.addEventListener("click", () => {
    // Example: currentLang can be 'tr', 'en', 'ru', 'az'
    currentLang  =  (currentLang != undefined || currentLang != null) ? currentLang : 'tr';
    const pdfUrl = `${window.location.origin}/${currentLang}/menu.pdf`;
    window.open(pdfUrl, "_blank");
  });
});

