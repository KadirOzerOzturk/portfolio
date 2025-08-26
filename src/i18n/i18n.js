import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },

      // Home Page
      home: {
        role: "Junior Software Engineer",
        mainTitle: "Making The Impossible Possible Using 1s and 0s",
        subtitle: "Solving problems is what makes me unique.",
        description: "I transform complex challenges into elegant solutions.",
        resumeEng: "Resume (ENG)",
        resumeTr: "Resume (TR)",
        stats: {
          experience: "Years Experience",
          projects: "Completed Projects",
          technologies: "Technologies"
        }
      },

      // About Page
      about: {
        introduce: "Let's Meet",
        title: "I'm Kadir Özer Öztürk",
        subtitle: "Solution-focused software developer passionate about web technologies.",
        description: "I develop scalable and efficient solutions through continuous learning.",
        skills: "My Expertise",
        technologies: "Technologies I Use",
        skillsData: {
          frontend: {
            title: "Frontend Development",
            description: "I develop modern and responsive user interfaces. I create impressive web experiences using React, JavaScript and Tailwind CSS.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
          },
          backend: {
            title: "Backend Development",
            description: "I develop scalable backend systems and RESTful APIs. I build powerful server-side applications with Spring Boot and Golang.",
            technologies: ["Spring Boot", "Golang", "PostgreSQL", "MongoDB", "RESTful APIs"]
          },
          devops: {
            title: "DevOps & Cloud",
            description: "I set up CI/CD pipelines and deploy on cloud platforms. I apply modern DevOps practices using Docker and AWS.",
            technologies: ["Docker", "AWS", "Linux", "CI/CD", "Git"]
          }
        }
      },

      // Projects Page
      projects: {
        title: "My Projects",
        subtitle: "Solutions and applications developed with modern web technologies. Each project is part of my learning journey, experimenting with different technologies and approaches.",
        portfolio: "Portfolio",
        features: "Features",
        keyFeatures: "Key Features",
        liveDemo: "Live Demo",
        sourceCode: "Source Code",
        projectPreview: "Project Preview",
        previewNotAvailable: "Preview not available",
        categories: {
          frontend: "Frontend & Full Stack",
          backend: "Backend & Systems"
        },
        stats: {
          completed: "Completed Projects",
          technologies: "Technologies",
          responsive: "Responsive Design"
        },
        projectData: {
          shorterly: {
            title: "Shorterly - URL Shortener",
            description: "Modern URL shortening service. Analytics features and custom link management developed web application.",
            features: [
              "URL shortening service",
              "Analytics and statistics",
              "Custom short links",
              "QR code generation",
              "Link management"
            ]
          },
          proguard: {
            title: "ProGuard",
            description: "Security-focused web application. Modern security platform developed for user security and data protection.",
            features: [
              "Security analysis",
              "Data encryption",
              "User authentication",
              "Security reporting",
              "Real-time monitoring"
            ]
          },
          projeflare: {
            title: "ProjeFlare",
            description: "Full stack project management platform. Modern project tracking and collaboration tool developed for teams.",
            features: [
              "Real-time project tracking",
              "Task management and assignment system",
              "Team collaboration tools",
              "Dashboard and reporting",
              "Responsive design"
            ]
          },
          codegen: {
            title: "CodeGen CLI Tool",
            description: "File creation and deletion command line tool for Golang projects. Automatically creates controller, service, repository and entity classes.",
            features: [
              "Automatic code generation",
              "MVC pattern support",
              "File creation/deletion",
              "CLI interface",
              "Template system"
            ]
          },
          mibparser: {
            title: "MIB Parser",
            description: "System that parses and analyzes SNMP MIB files. Backend service developed for network management and monitoring.",
            features: [
              "MIB file parsing",
              "SNMP protocol support",
              "Network monitoring",
              "Data extraction",
              "Performance analytics"
            ]
          },
          springsecurity: {
            title: "Spring Security Implementation",
            description: "JWT-based authentication and authorization system. Includes role-based access control and security middleware.",
            features: [
              "JWT authentication",
              "Role-based authorization",
              "Security middleware",
              "Password encryption",
              "Session management"
            ]
          },
          eventbooking: {
            title: "Event Booking System Backend",
            description: "Backend API developed for event reservation system. User management, event creation and reservation operations.",
            features: [
              "Event management",
              "Reservation system",
              "User authentication",
              "Payment integration",
              "Email notifications"
            ]
          }
        }
      },

      // Contact Page
      contact: {
        title: "Let's Get In Touch",
        subtitle: "For new projects, collaboration opportunities or any questions - I'm always open to every message!",
        quickContact: "Quick Contact",
        methods: {
          email: "Email",
          linkedin: "LinkedIn", 
          github: "GitHub"
        },
        capabilities: {
          title: "What Can I Do?",
          web: "Web application development",
          backend: "Backend API development", 
          devops: "DevOps and deployment",
          consulting: "Technical consulting"
        },
        form: {
          title: "Send Message",
          description: "You can reach me directly by filling out the form",
          name: "Your Name",
          email: "Your Email Address",
          message: "Your Message",
          send: "Send Message",
          sending: "Sending...",
          success: "Message sent successfully! ✅",
          error: "Message could not be sent. ❌",
          emailError: "Please enter a valid email address."
        },
        cta: {
          title: "Let's Create Amazing Things Together! 🚀",
          description: "Got a new project? Need technical support? Or just want to say hello? I'm open to all kinds of messages!"
        }
      },

      // Theme
      theme: {
        light: "Light Theme",
        dark: "Dark Theme"
      },

      // Language
      language: {
        en: "English",
        tr: "Türkçe"
      },

      // Common
      common: {
        loading: "Loading...",
        error: "An error occurred",
        success: "Success"
      }
    }
  },
  tr: {
    translation: {
      // Navigation
      nav: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        projects: "Projeler",
        contact: "İletişim"
      },

      // Home Page
      home: {
        role: "Junior Yazılım Mühendisi",
        mainTitle: "İmkansızı Mümkün Kılmak 1'ler ve 0'lar Kullanarak",
        subtitle: "Problem çözmek beni benzersiz kılan şey.",
        description: "Karmaşık zorlukları zarif çözümlere dönüştürüyorum.",
        resumeEng: "Özgeçmiş (ENG)",
        resumeTr: "Özgeçmiş (TR)",
        stats: {
          experience: "Yıl Deneyim",
          projects: "Tamamlanan Proje",
          technologies: "Teknoloji"
        }
      },

      // About Page
      about: {
        introduce: "Tanışalım",
        title: "Ben Kadir Özer Öztürk",
        subtitle: "Web teknolojilerine tutkulu çözüm odaklı yazılım geliştirici.",
        description: "Sürekli öğrenme ile ölçeklenebilir ve verimli çözümler geliştiriyorum.",
        skills: "Uzmanlık Alanlarım",
        technologies: "Kullandığım Teknolojiler",
        skillsData: {
          frontend: {
            title: "Frontend Geliştirme",
            description: "Modern ve responsive kullanıcı arayüzleri geliştiriyorum. React, JavaScript ve Tailwind CSS kullanarak etkileyici web deneyimleri yaratıyorum.",
            technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
          },
          backend: {
            title: "Backend Geliştirme",
            description: "Ölçeklenebilir backend sistemleri ve RESTful API'ler geliştiriyorum. Spring Boot ve Golang ile güçlü sunucu tarafı uygulamaları inşa ediyorum.",
            technologies: ["Spring Boot", "Golang", "PostgreSQL", "MongoDB", "RESTful APIs"]
          },
          devops: {
            title: "DevOps & Cloud",
            description: "CI/CD pipeline'ları kuruyor ve bulut platformlarında deployment yapıyorum. Docker ve AWS kullanarak modern DevOps pratikleri uyguluyorum.",
            technologies: ["Docker", "AWS", "Linux", "CI/CD", "Git"]
          }
        }
      },

      // Projects Page
      projects: {
        title: "Projelerim",
        subtitle: "Modern web teknolojileri kullanarak geliştirdiğim çözümler ve uygulamalar. Her proje, farklı teknolojiler ve yaklaşımlar deneyerek öğrenme yolculuğumun bir parçasıdır.",
        portfolio: "Portfolyo",
        features: "Özellikler",
        keyFeatures: "Ana Özellikler",
        liveDemo: "Canlı Demo",
        sourceCode: "Kaynak Kod",
        projectPreview: "Proje Önizleme",
        previewNotAvailable: "Önizleme mevcut değil",
        categories: {
          frontend: "Frontend & Full Stack",
          backend: "Backend & Systems"
        },
        stats: {
          completed: "Tamamlanan Proje",
          technologies: "Teknoloji",
          responsive: "Responsive Tasarım"
        },
        projectData: {
          shorterly: {
            title: "Shorterly - URL Kısaltıcı",
            description: "Modern URL kısaltma servisi. Analitik özellikler ve özel link yönetimi ile geliştirilmiş web uygulaması.",
            features: [
              "URL kısaltma servisi",
              "Analitik ve istatistikler",
              "Özel kısa linkler",
              "QR kod oluşturma",
              "Link yönetimi"
            ]
          },
          proguard: {
            title: "ProGuard",
            description: "Güvenlik odaklı web uygulaması. Kullanıcı güvenliği ve veri koruması için geliştirilmiş modern güvenlik platformu.",
            features: [
              "Güvenlik analizi",
              "Veri şifreleme",
              "Kullanıcı doğrulama",
              "Güvenlik raporlama",
              "Real-time monitoring"
            ]
          },
          projeflare: {
            title: "ProjeFlare",
            description: "Full stack proje yönetim platformu. Ekipler için geliştirilmiş modern proje takip ve işbirliği aracı.",
            features: [
              "Gerçek zamanlı proje takibi",
              "Görev yönetimi ve atama sistemi",
              "Ekip işbirliği araçları",
              "Dashboard ve raporlama",
              "Responsive tasarım"
            ]
          },
          codegen: {
            title: "CodeGen CLI Aracı",
            description: "Golang projeleri için dosya oluşturma ve silme komut satırı aracı. Controller, service, repository ve entity sınıfları otomatik olarak oluşturur.",
            features: [
              "Otomatik kod üretimi",
              "MVC pattern desteği",
              "Dosya oluşturma/silme",
              "CLI interface",
              "Template sistemi"
            ]
          },
          mibparser: {
            title: "MIB Parser",
            description: "SNMP MIB dosyalarını parse eden ve analiz eden sistem. Ağ yönetimi ve monitoring için geliştirilmiş backend servisi.",
            features: [
              "MIB dosya parsing",
              "SNMP protokol desteği",
              "Ağ monitoring",
              "Data extraction",
              "Performance analytics"
            ]
          },
          springsecurity: {
            title: "Spring Security Uygulaması",
            description: "JWT tabanlı authentication ve authorization sistemi. Role-based access control ve güvenlik middleware'leri içerir.",
            features: [
              "JWT authentication",
              "Role-based authorization",
              "Security middleware",
              "Password encryption",
              "Session management"
            ]
          },
          eventbooking: {
            title: "Etkinlik Rezervasyon Sistemi Backend",
            description: "Etkinlik rezervasyon sistemi için geliştirilmiş backend API. Kullanıcı yönetimi, etkinlik oluşturma ve rezervasyon işlemleri.",
            features: [
              "Etkinlik yönetimi",
              "Rezervasyon sistemi",
              "Kullanıcı authentication",
              "Payment integration",
              "Email notifications"
            ]
          }
        }
      },

      // Contact Page
      contact: {
        title: "Benimle İletişime Geçin",
        subtitle: "Yeni projeler, iş birliği fırsatları veya herhangi bir sorunuz için her zaman ulaşabilirsiniz.",
        quickContact: "Hızlı İletişim",
        methods: {
          email: "E-posta",
          linkedin: "LinkedIn",
          github: "GitHub"
        },
        capabilities: {
          title: "Neler Yapabilirim?",
          web: "Web uygulaması geliştirme",
          backend: "Backend API geliştirme",
          devops: "DevOps ve deployment",
          consulting: "Teknik danışmanlık"
        },
        form: {
          title: "Mesaj Gönder",
          description: "Formu doldurarak doğrudan bana ulaşabilirsiniz",
          name: "Adınız",
          email: "E-posta Adresiniz",
          message: "Mesajınız",
          send: "Mesaj Gönder",
          sending: "Gönderiliyor...",
          success: "Mesaj başarıyla gönderildi! ✅",
          error: "Mesaj gönderilemedi. ❌",
          emailError: "Geçerli bir e-posta adresi girin."
        },
        cta: {
          title: "Beraber Harika Şeyler Yapalım! 🚀",
          description: "Yeni bir proje mi var? Teknik destek mi lazım? Ya da sadece merhaba demek mi istiyorsun? Her türlü mesajına açığım!"
        }
      },

      // Theme
      theme: {
        light: "Açık Tema",
        dark: "Koyu Tema"
      },

      // Language
      language: {
        en: "English",
        tr: "Türkçe"
      },

      // Common
      common: {
        loading: "Yükleniyor...",
        error: "Bir hata oluştu",
        success: "Başarılı"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr', // default language
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;