export type Language = "tr" | "en";

export const CV_PATHS = {
  tr: "/cv/furkan-uzun-cv-tr.pdf",
  en: "/cv/furkan-uzun-cv-en.pdf",
} as const;

const experienceJobs = {
  tr: [
    {
      title: "Yazılım Geliştirme Uzmanı",
      company: "@ETIYA",
      location: "Hybrit, İstanbul",
      year: "Ara 2021 – Oca 2025",
      responsibilities: [
        "Monolith'ten mikroservise geçişe öncülük; DDD ve REST prensipleri",
        "Dağıtık mikroservisler için REST ve SOAP API geliştirme",
        "Hibernate/JPA ile ORM ve veri kalıcılığı katmanları",
        "Apache Kafka ile event-driven asenkron mesajlaşma",
        "OpenAPI (Swagger) ile API sözleşmeleri",
        "Sipariş yaşam döngüsü için Angular dashboard",
        "Camunda 7/8 ile Order Management iş akışları",
        "XML, XSL ve XSLT ile kurumsal entegrasyonlar",
        "Docker ve Kubernetes ile konteynerizasyon ve deploy",
      ],
    },
    {
      title: "Full Stack Yazılım Geliştirici",
      company: "@CONNEXIO CLOUD",
      location: "Uzaktan, NY",
      year: "Mar 2022 – Ağu 2022",
      responsibilities: [
        "Spring Boot backend ve React frontend ile uçtan uca geliştirme",
        "REST API'ler; controller, service ve repository ayrımı",
        "Hibernate/JPA ile veri kalıcılığı ve frontend entegrasyonu",
        "React SPA: component, hook ve props ile modüler arayüzler",
        "React ile Spring Boot REST endpoint entegrasyonu",
        "Unity ve C# ile Web3 uyumlu oyun geliştirme",
        "Oyunun AR ve VR versiyonlarına katkı",
      ],
    },
    {
      title: "Stajyer",
      company: "@CARETTA SOFTWARE",
      location: "Ofis, İstanbul",
      year: "Tem 2018 – Ağu 2018",
      responsibilities: [
        "Veritabanı yapıları ve ilişkileri hakkında eğitim",
        "C# (.NET) ile CRM sistemi; 3 ayda kullanıcı tutma oranı %15 arttı",
      ],
    },
  ],
  en: [
    {
      title: "Software Development Specialist",
      company: "@ETIYA",
      location: "Hybrit, Istanbul",
      year: "Dec 2021 – Jan 2025",
      responsibilities: [
        "Led monolith-to-microservice migration; DDD and REST principles",
        "Developed REST and SOAP APIs across distributed microservices",
        "Implemented Hibernate/JPA persistence and ORM layers",
        "Built event-driven messaging with Apache Kafka",
        "Defined API contracts with OpenAPI (Swagger)",
        "Built Angular dashboard for order lifecycle monitoring",
        "Modeled Order Management workflows with Camunda 7/8",
        "Enterprise integrations via XML, XSL, and XSLT",
        "Containerized and deployed services with Docker and Kubernetes",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "@CONNEXIO CLOUD",
      location: "Remote, NY",
      year: "Mar 2022 – Aug 2022",
      responsibilities: [
        "End-to-end features with Java Spring Boot and React",
        "REST APIs with layered controller, service, and repository design",
        "Hibernate/JPA persistence and frontend integration",
        "React SPAs with reusable components, hooks, and props",
        "Connected React to Spring Boot REST endpoints",
        "Web3-compatible game with Unity and C#",
        "Contributed to AR and VR versions of the game",
      ],
    },
    {
      title: "Intern",
      company: "@CARETTA SOFTWARE",
      location: "On-site, Istanbul",
      year: "Jul 2018 – Aug 2018",
      responsibilities: [
        "Training on database structures and relations",
        "CRM system in C# (.NET); 15% user retention increase in 3 months",
      ],
    },
  ],
} as const;

export const translations = {
  tr: {
    pageTitle: "Furkan Uzun | Yazılım Geliştirici",
    circularText: "Yazılım Geliştirici • Yazılım Geliştirici • ",
    scrollDown: "AŞAĞI KAYDIR",
    menuUi: {
      open: "Menü",
      close: "Kapat",
      openAria: "Menüyü aç",
      closeAria: "Menüyü kapat",
    },
    menu: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      works: "Deneyim",
      misc: "Diğer",
      light: "Açık",
      dark: "Koyu",
    },
    nav: {
      goToExperience: "deneyime git",
      experience: "Deneyim",
      goToMisc: "diğer bölüme git",
      miscellaneous: "Diğer",
    },
    cv: {
      downloadLabel: "CV'mi",
      downloadHighlight: "İndir",
      tr: "TR",
      en: "EN",
      fileNameTr: "Furkan_Uzun_CV_TR.pdf",
      fileNameEn: "Furkan_Uzun_CV_EN.pdf",
    },
    about: {
      hello: "Merhaba,",
      im: "Ben Furkan.",
      role: "Yazılım geliştirici",
      aboutMe: "Hakkımda",
      myJourney: "Yolculuğum",
      skills: "Yetenekler",
      aboutP1:
        "Merhaba, ben Furkan. Tutkulu bir Fenerbahçe taraftarıyım; takımı takip etmek benim için futboldan çok daha fazlası. Rüzgar adında sadık bir köpeğim var. Doğal olarak arkadaş canlısı ve dışa dönüğüm; yeni insanlarla tanışmayı ve deneyim paylaşmayı severim. 20 Temmuz 2024'te ",
      aboutP1Highlight:
        "hayatımda tanıdığım en inanılmaz, zeki ve güzel kadınla—hayatımın aşkı",
      aboutP1After:
        " nişanlandı. O, kariyerimdeki birçok başarının arkasındaki ilham ve motivasyon kaynağım oldu; bu dönüm noktası benim için daha da anlamlı.",
      aboutP2:
        "Spor hayatımın büyük parçası—yüzmede birincilikler, amatör hentbol ve futbol oynadım. Bu deneyimler disiplin, azim ve takım çalışmasını şekillendirdi. Sporun ötesinde video oyunları, yeni dünyalar keşfetmek ve koleksiyon yapmak beni heyecanlandırır.",
      aboutP3Good: "iyi",
      aboutP3Loyal: "sadık",
      aboutP3Loving: "sevgi dolu",
      aboutP3Caring: "şefkatli",
      aboutP3:
        "Hedefim {good} bir insan, {loyal} bir arkadaş, {loving} bir eş ve {caring} bir baba olmak.",
      journeyP1:
        "Profesyonel yolculuğuma İstanbul'da bir teknoloji şirketinde Yazılım Geliştirme Uzmanı olarak başladım. Backend geliştirme ve mikroservis mimarisine geçiş sürecinde aktif rol aldım. İstanbul'dayken New York'taki bir şirketten uzaktan, yarı zamanlı frontend ve oyun geliştirme teklifi aldım.",
      journeyP2:
        "Sonrasında freelance çalıştım; Kanada'da bir uygulamanın arayüzünü tasarladım, Türkiye'de çeşitli projeler üstlendim. Frontend ve backend becerilerimi birleştirerek küresel ekiplerle çalıştım.",
      journeyP3:
        "Hedefim {skilled}, {reliable} ve {collaborative} bir profesyonel olmak; {quality} iş çıkarmak ve kariyerimde {growing} gelişmek.",
      journeySkilled: "yetkin",
      journeyReliable: "güvenilir",
      journeyCollaborative: "iş birliğine açık",
      journeyQuality: "yüksek kaliteli",
      journeyGrowing: "sürekli",
    },
    experience: {
      title1: "Çalıştığım",
      title2: "yerler @",
      responsibilities: "Sorumluluklar",
      jobs: experienceJobs.tr,
    },
    misc: {
      title1: "Çeşitli",
      title2: "bilgiler",
      education: "Eğitim",
      educationLine: "2021 | 📍 İstanbul Bilgi Üniversitesi",
      educationDegree: "Bilgisayar Mühendisliği Lisans",
      educationText:
        "İstanbul Bilgi Üniversitesi'nde Bilgisayar Mühendisliği lisans derecemi aldım. Mezuniyet projem BilgiLife: kampüsü sanal ortamda keşfetmeyi sağlayan Unity 3D uygulaması.",
      technology: "Teknoloji",
      mySpaces: "Sosyal medya",
    },
    tags: [
      "Temiz Kod",
      "SOLID Prensibi",
      "Responsive Tasarım",
      "UI/UX",
      "Tailwind",
      "Mikroservis Mimarisi",
      "Unit Test",
      "Backend İş Birliği",
      "API Entegrasyonu",
      "Versiyon Kontrolü",
      "Mobil Geliştirme",
      "Agile & Scrum",
      "CI/CD",
      "Problem Çözme",
      "Performans Optimizasyonu",
      "Güvenlik",
      "Cloud Deployment",
      "Code Review",
      "Dokümantasyon",
      "Ölçeklenebilir Sistemler",
      "Takım Çalışması",
    ],
  },
  en: {
    pageTitle: "Furkan Uzun | Software Developer",
    circularText: "Software Developer • Software Developer • ",
    scrollDown: "SCROLL DOWN",
    menuUi: {
      open: "Menu",
      close: "Close",
      openAria: "Open menu",
      closeAria: "Close menu",
    },
    menu: {
      home: "Home",
      about: "About",
      works: "Experience",
      misc: "Misc.",
      light: "Light",
      dark: "Dark",
    },
    nav: {
      goToExperience: "go to",
      experience: "Experience",
      goToMisc: "go to",
      miscellaneous: "Miscellaneous",
    },
    cv: {
      downloadLabel: "download my",
      downloadHighlight: "Resume",
      tr: "TR",
      en: "EN",
      fileNameTr: "Furkan_Uzun_CV_TR.pdf",
      fileNameEn: "Furkan_Uzun_CV_EN.pdf",
    },
    about: {
      hello: "Hello,",
      im: "I'm Furkan.",
      role: "Software developer",
      aboutMe: "About Me",
      myJourney: "My Journey",
      skills: "Skills",
      aboutP1:
        "Hi, I'm Furkan. I'm a devoted Fenerbahçe supporter, and following the team is one of my greatest passions—it's more than football to me. I have a loyal dog named Ruzgar. I'm naturally friendly and outgoing, always excited to meet new people and share experiences. On July 20, 2024, I got engaged to",
      aboutP1Highlight:
        "the most incredible, intelligent, and beautiful woman I've ever met—the love of my life.",
      aboutP1After:
        " She has been a constant source of inspiration and motivation, and her support has fueled many of the successes in my career.",
      aboutP2:
        "Sports have always been a big part of my life—I achieved first place in swimming competitions and also played amateur handball and football. Beyond sports, I'm passionate about video games and growing my collection of unique items.",
      aboutP3Good: "good",
      aboutP3Loyal: "loyal",
      aboutP3Loving: "loving",
      aboutP3Caring: "caring",
      aboutP3:
        "My goal is to be a {good} person, a {loyal} friend, a {loving} husband, and a {caring} father.",
      journeyP1:
        "I began my professional journey in Istanbul as a Software Development Specialist, deeply involved in backend development and leading the transition to microservice architecture. I was also offered a remote part-time role in New York focused on frontend and game development.",
      journeyP2:
        "After leaving my previous roles, I explored freelance opportunities, including UI design for a project in Canada and various projects in Turkey.",
      journeyP3:
        "My goal is to be a {skilled}, {reliable}, and {collaborative} professional, delivering {quality} work and {growing} in my career.",
      journeySkilled: "skilled",
      journeyReliable: "reliable",
      journeyCollaborative: "collaborative",
      journeyQuality: "high-quality",
      journeyGrowing: "continuously growing",
    },
    experience: {
      title1: "Places that",
      title2: "I worked @",
      responsibilities: "Responsibilities",
      jobs: experienceJobs.en,
    },
    misc: {
      title1: "Can be",
      title2: "Miscellaneous",
      education: "Education",
      educationLine: "2021 | 📍 Istanbul Bilgi University",
      educationDegree: "Bachelor's Degree in Computer Engineering",
      educationText:
        "I earned my Bachelor's degree in Computer Engineering from Istanbul Bilgi University. For my graduation project, I developed BilgiLife, a Unity 3D application to explore the campus virtually.",
      technology: "Technology",
      mySpaces: "My spaces",
    },
    tags: [
      "Clean Code",
      "SOLID Principle",
      "Responsive Design",
      "UI/UX Design",
      "Tailwind",
      "Microservice Architecture",
      "Unit Testing",
      "Backend Collaboration",
      "API Integration",
      "Version Control",
      "Mobile Development",
      "Agile & Scrum",
      "CI/CD",
      "Problem Solving",
      "Performance Optimization",
      "Security Best Practices",
      "Cloud Deployment",
      "Code Review",
      "Documentation",
      "Scalable Systems",
      "Team Collaboration",
    ],
  },
} as const;

export type Translation = (typeof translations)[Language];

export function getTranslation(lang: Language): Translation {
  return translations[lang];
}
