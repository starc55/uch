export const resources = {
  en: {
    translation: {
      nav: {
        items: {
          capabilities: "Capabilities",
          portfolio: "Portfolio",
          core: "The Core",
          process: "Process",
          contact: "Contact",
        },
        start: "Start a build",
        startShort: "Start",
        mobileTitle: "Navigation",
        mobileDescription: "Explore the UCH system",
        languages: {
          uz: "UZ",
          ru: "RU",
          en: "EN",
        },
      },
      hero: {
        eyebrow: "Premium engineering collective",
        title: "We build systems, not just code.",
        description:
          "UCH designs and ships high-performance digital products with the clarity of a product studio and the rigor of a systems team.",
        primary: "Launch a project",
        secondary: "View selected systems",
        stats: [
          { value: "04", label: "Specialists in the core" },
          { value: "12+", label: "Products shipped end-to-end" },
          { value: "99%", label: "Intentional over feature clutter" },
        ],
        signal: "Signal",
        signalValue: "Unified delivery stack",
        pillars: [
          {
            title: "Architecture",
            copy: "Design systems, infrastructure thinking, performance budgets",
          },
          {
            title: "Execution",
            copy: "Fast iterations with product-level craft across platforms",
          },
          {
            title: "Automation",
            copy: "Workflow intelligence built into the product itself",
          },
        ],
        mode: "Operating mode",
        modeLeft: "Discovery to launch",
        modeRight: "End-to-end",
      },
      capabilities: {
        eyebrow: "Capabilities",
        title: "Engineering depth across the surfaces that matter most.",
        description:
          "We keep the stack sharp, the product intentional, and the implementation flexible enough to scale with the business.",
        featureEyebrow: "System surfaces",
        featureTitle:
          "A tighter capability map with stronger visual hierarchy.",
        featureDescription:
          "Each discipline is designed as part of one operating model, not a separate service silo.",
        featureList: [
          "Focused product architecture before feature expansion",
          "Motion, UX, and implementation designed together",
          "Automation that supports the team after launch",
        ],
        items: {
          web: {
            title: "Web Development",
            description:
              "Conversion-focused interfaces, scalable frontends, and resilient backend integrations built as cohesive product systems.",
            tag: "Frontend + backend systems",
          },
          mobile: {
            title: "Mobile Apps",
            description:
              "Native-feeling mobile products with design parity, thoughtful motion, and product logic aligned with real workflows.",
            tag: "Native-feeling execution",
          },
          ai: {
            title: "AI Automation",
            description:
              "Internal tools and customer-facing flows powered by orchestration, agentic automation, and intelligent data handling.",
            tag: "Workflow intelligence",
          },
          ui: {
            title: "UI/UX Engineering",
            description:
              "Design systems, motion, interaction architecture, and high-fidelity implementation shaped for clarity and longevity.",
            tag: "Interface craft",
          },
        },
      },
      portfolio: {
        eyebrow: "Selected Systems",
        title: "Work shaped into a cleaner, more balanced product grid.",
        description:
          "Each project stays easy to update from a single source while the desktop layout keeps a tighter, more editorial rhythm.",
        livePreview: "Live Preview",
        sourceCode: "Source Code",
        managedFrom: "Managed from works.json",
        technologies: "{{count}} technologies",
        items: {
          "atlas-control-layer": {
            name: "Atlas Control Layer",
            category: "Enterprise Ops",
            description:
              "Operations command center for telemetry, approvals, and incident response in one premium control surface.",
          },
          "pulse-commerce-os": {
            name: "Pulse Commerce OS",
            category: "Commerce System",
            description:
              "Storefront and admin ecosystem where content, analytics, and automation move as a single product system.",
          },
          "nexa-assist": {
            name: "Nexa Assist",
            category: "AI Automation",
            description:
              "AI-guided workflow assistant that turns repetitive operations into clear, traceable automations.",
          },
          "circuit-mobile": {
            name: "Circuit Mobile",
            category: "Mobile Platform",
            description:
              "Offline-first field app with fast sync, crisp interactions, and a shared design language with desktop.",
          },
        },
      },
      core: {
        eyebrow: "The Core",
        title: "Four specialists operating as one coordinated product engine.",
        description:
          "Each builder owns a discipline, but the delivery model behaves like a single system with synchronized decisions.",
        centerEyebrow: "UCH Core",
        centerTitle: "Unified product engine",
        centerDescription:
          "Strategy, interface, automation, and platform thinking flowing through one compact team.",
        nodes: {
          product: {
            title: "Product Engineer",
            role: "Interface logic",
            copy: "Turns complex workflows into clear usable flows.",
          },
          frontend: {
            title: "Frontend Architect",
            role: "Design systems",
            copy: "Builds visual consistency, speed, and interaction quality.",
          },
          automation: {
            title: "Automation Builder",
            role: "AI workflows",
            copy: "Connects actions, data, and intelligent orchestration.",
          },
          platform: {
            title: "Platform Engineer",
            role: "Scale and delivery",
            copy: "Keeps performance, structure, and deployment stable.",
          },
        },
      },
      process: {
        eyebrow: "Process",
        title:
          "A compact timeline that keeps velocity high and outcomes clear.",
        description:
          "The workflow is simple on purpose. We reduce friction between stages so ideas survive contact with production.",
        steps: [
          {
            number: "01",
            title: "Idea",
            tag: "Signal gathering",
            description:
              "We identify what the product must actually do, what users need immediately, and which constraints should shape the build from day one.",
          },
          {
            number: "02",
            title: "Design",
            tag: "Interface architecture",
            description:
              "We map flows, establish the visual system, and define interactions so the implementation carries clarity instead of noise.",
          },
          {
            number: "03",
            title: "Build",
            tag: "System execution",
            description:
              "The product is engineered with performance, scale, and maintainability in mind, not bolted on after visuals are approved.",
          },
          {
            number: "04",
            title: "Launch",
            tag: "Refinement loop",
            description:
              "We ship with confidence, monitor the signal, and keep the product responsive to real-world usage instead of static assumptions.",
          },
        ],
      },
      contact: {
        eyebrow: "Contact",
        title: "Bring the brief. We'll route it into the Make workflow.",
        description:
          "A tighter intake flow for fast project requests. Each submission is sent into your Make automation webhook and can continue to Telegram from there.",
        statuses: {
          ready: "Secure intake active",
          sending: "Transmitting to Make",
          sent: "Message delivered",
          error: "Delivery failed",
        },
        cards: {
          channel: "Channel",
          channelValue: "Make Webhook",
          format: "Format",
          formatValue: "Name, email, brief",
          response: "Response",
          responseValue: "Automation trigger",
        },
        labels: {
          name: "Name",
          email: "Email",
          message: "Message",
        },
        messages: {
          invalid: "Please complete the required fields correctly.",
          success: "Make workflow accepted the message.",
          fallbackError: "Something went wrong while sending your message.",
          submit: "Transmit brief",
          sending: "Sending brief",
        },
        validation: {
          required: "{{field}} is required.",
          email: "Please enter a valid email address.",
          messageMin: "Message should be at least 10 characters.",
        },
      },
      footer: {
        title: "Systems that feel sharp before launch and stronger after it.",
        description:
          "Product thinking, interface engineering, automation, and delivery discipline in one compact team.",
        cards: {
          buildMode: "Build Mode",
          buildModeValue: "Concept to launch",
          delivery: "Delivery",
          deliveryValue: "Web, mobile, AI",
          quality: "Quality",
          qualityValue: "Minimal but powerful",
        },
        contactChannel: "Contact Channel",
        contactDescription:
          "Ready for product builds, redesigns, and automation systems.",
        socialLinks: "Social Links",
        note: "Designed for ambitious digital systems.",
        poweredBy: "Powered by UCH",
      },
      loader: {
        brand: "Unified Coders Hub",
        title: "Initializing a premium build environment.",
        description:
          "Syncing interface layers, motion surfaces, and system signals.",
      },
      phone: {
        label: "Call UCH",
      },
      common: {
        english: "English",
        russian: "Russian",
        uzbek: "Uzbek",
      },
    },
  },
  uz: {
    translation: {
      nav: {
        items: {
          capabilities: "Imkoniyatlar",
          portfolio: "Ishlar",
          core: "Yadro",
          process: "Jarayon",
          contact: "Aloqa",
        },
        start: "Loyihani boshlash",
        startShort: "Boshlash",
        mobileTitle: "Navigatsiya",
        mobileDescription: "UCH tizimini ko‘rib chiqing",
        languages: {
          uz: "UZ",
          ru: "RU",
          en: "EN",
        },
      },
      hero: {
        eyebrow: "Premium engineering collective",
        title: "Biz shunchaki kod emas, tizimlar quramiz.",
        description:
          "UCH yuqori darajadagi raqamli mahsulotlarni product studio aniqligi va systems team intizomi bilan yaratadi.",
        primary: "Loyihani boshlash",
        secondary: "Tanlangan ishlarni ko‘rish",
        stats: [
          { value: "04", label: "Yadrodagi mutaxassislar" },
          { value: "12+", label: "To‘liq yetkazilgan mahsulotlar" },
          { value: "99%", label: "Ortiqcha emas, maqsadli yechimlar" },
        ],
        signal: "Signal",
        signalValue: "Yagona delivery stack",
        pillars: [
          {
            title: "Arxitektura",
            copy: "Design systemlar, infratuzilma fikrlashi va performance budgetlar",
          },
          {
            title: "Ijro",
            copy: "Platformalar bo‘ylab product darajasidagi tez iteratsiyalar",
          },
          {
            title: "Avtomatlashtirish",
            copy: "Mahsulot ichiga singdirilgan workflow intelligence",
          },
        ],
        mode: "Ishlash rejimi",
        modeLeft: "G‘oyadan launchgacha",
        modeRight: "End-to-end",
      },
      capabilities: {
        eyebrow: "Imkoniyatlar",
        title: "Eng muhim product surface’larda chuqur engineering tajribasi.",
        description:
          "Biz stackni o‘tkir, productni maqsadli va implementationni scale uchun mos holatda ushlab turamiz.",
        featureEyebrow: "Tizim qatlamlari",
        featureTitle:
          "Yanada aniq capability map va kuchliroq vizual ierarxiya.",
        featureDescription:
          "Har bir yo‘nalish alohida xizmat emas, yagona operating model ichida quriladi.",
        featureList: [
          "Feature ko‘payishidan oldin product arxitekturasi",
          "Motion, UX va implementation birga loyihalanadi",
          "Launchdan keyin ham jamoani qo‘llaydigan avtomatlashtirish",
        ],
        items: {
          web: {
            title: "Web Development",
            description:
              "Konversiyaga yo‘naltirilgan interfeyslar, scale qilinadigan frontendlar va barqaror backend integratsiyalar yagona product tizimi sifatida quriladi.",
            tag: "Frontend + backend tizimlar",
          },
          mobile: {
            title: "Mobile Apps",
            description:
              "Native hissini beradigan mobil mahsulotlar, o‘ylangan motion va real workflow’ga mos product logikasi bilan.",
            tag: "Native hissidagi ijro",
          },
          ai: {
            title: "AI Automation",
            description:
              "Ichki tool’lar va client-facing flow’lar orchestration, agentic automation va aqlli data handling bilan boyitiladi.",
            tag: "Workflow intelligence",
          },
          ui: {
            title: "UI/UX Engineering",
            description:
              "Design systemlar, motion, interaction architecture va high-fidelity implementation uzoq muddatli aniqlik uchun yaratiladi.",
            tag: "Interfeys ustaligi",
          },
        },
      },
      portfolio: {
        eyebrow: "Tanlangan tizimlar",
        title: "Portfolio o‘sganda ham toza qoladigan product grid.",
        description:
          "Har bir loyiha bitta source’dan boshqariladi, desktop layout esa yanada muvozanatli va editorial ritmda qoladi.",
        livePreview: "Live Preview",
        sourceCode: "Source Code",
        managedFrom: "works.json orqali boshqariladi",
        technologies: "{{count}} ta texnologiya",
        items: {
          "atlas-control-layer": {
            name: "Atlas Control Layer",
            category: "Enterprise Ops",
            description:
              "Telemetry, approvals va incident response’ni yagona premium control surface ichiga jamlagan operations markazi.",
          },
          "pulse-commerce-os": {
            name: "Pulse Commerce OS",
            category: "Commerce System",
            description:
              "Kontent, analytics va automation bir product tizimi sifatida ishlaydigan storefront va admin ekotizimi.",
          },
          "nexa-assist": {
            name: "Nexa Assist",
            category: "AI Automation",
            description:
              "Takroriy jarayonlarni aniq va kuzatiladigan avtomatlashtirishga aylantiruvchi AI yordamchi.",
          },
          "circuit-mobile": {
            name: "Circuit Mobile",
            category: "Mobile Platform",
            description:
              "Tez sync, tiniq interaction va desktop bilan umumiy design language’ga ega offline-first field app.",
          },
        },
      },
      core: {
        eyebrow: "Yadro",
        title: "To‘rt mutaxassis, bitta koordinatsiyalangan product engine.",
        description:
          "Har bir builder o‘z yo‘nalishiga egalik qiladi, lekin delivery modeli bitta tizim kabi ishlaydi.",
        centerEyebrow: "UCH Core",
        centerTitle: "Yagona product engine",
        centerDescription:
          "Strategiya, interfeys, avtomatlashtirish va platforma fikrlashi bitta kompakt jamoa ichida oqadi.",
        nodes: {
          product: {
            title: "Product Engineer",
            role: "Interface logic",
            copy: "Murakkab workflow’larni tushunarli flow’ga aylantiradi.",
          },
          frontend: {
            title: "Frontend Architect",
            role: "Design systems",
            copy: "Vizual izchillik, tezlik va interaction sifatini quradi.",
          },
          automation: {
            title: "Automation Builder",
            role: "AI workflows",
            copy: "Action, data va aqlli orchestration’ni bog‘laydi.",
          },
          platform: {
            title: "Platform Engineer",
            role: "Scale and delivery",
            copy: "Performance, structure va deploymentni barqaror qiladi.",
          },
        },
      },
      process: {
        eyebrow: "Jarayon",
        title:
          "Tezlikni baland va natijani aniq ushlab turadigan kompakt timeline.",
        description:
          "Workflow ataylab sodda. Bosqichlar orasidagi ishqalanishni kamaytirib, g‘oyani productiongacha olib boramiz.",
        steps: [
          {
            number: "01",
            title: "G‘oya",
            tag: "Signal yig‘ish",
            description:
              "Mahsulot aslida nima qilishi kerakligi, foydalanuvchiga birinchi navbatda nima kerakligi va buildni nimalar belgilashini aniqlaymiz.",
          },
          {
            number: "02",
            title: "Dizayn",
            tag: "Interfeys arxitekturasi",
            description:
              "Flow’larni chizamiz, vizual tizimni belgilaymiz va implementation shovqin emas, aniqlik olib kelishi uchun interactionlarni yozamiz.",
          },
          {
            number: "03",
            title: "Build",
            tag: "Tizim ijrosi",
            description:
              "Mahsulot performance, scale va maintainability bilan birga quriladi, ular keyin qo‘shib qo‘yilmaydi.",
          },
          {
            number: "04",
            title: "Launch",
            tag: "Refinement loop",
            description:
              "Ishonch bilan ship qilamiz, signalni kuzatamiz va productni real foydalanish asosida yaxshilaymiz.",
          },
        ],
      },
      contact: {
        eyebrow: "Aloqa",
        title: "Briefni yuboring. Uni Make workflow ichiga yo‘naltiramiz.",
        description:
          "Tez project intake uchun ixcham flow. Har bir yuborilgan so‘rov Make automation webhook’iga tushadi va u yerdan Telegramga davom etishi mumkin.",
        statuses: {
          ready: "Xavfsiz intake faol",
          sending: "Make’ga yuborilmoqda",
          sent: "Xabar yetkazildi",
          error: "Yuborishda xatolik",
        },
        cards: {
          channel: "Kanal",
          channelValue: "Make Webhook",
          format: "Format",
          formatValue: "Ism, email, brief",
          response: "Javob",
          responseValue: "Automation trigger",
        },
        labels: {
          name: "Ism",
          email: "Email",
          message: "Xabar",
        },
        messages: {
          invalid: "Iltimos, kerakli maydonlarni to‘g‘ri to‘ldiring.",
          success: "Make workflow xabarni qabul qildi.",
          fallbackError: "Xabarni yuborishda xatolik yuz berdi.",
          submit: "Briefni yuborish",
          sending: "Brief yuborilmoqda",
        },
        validation: {
          required: "{{field}} kiritilishi shart.",
          email: "Iltimos, to‘g‘ri email kiriting.",
          messageMin: "Xabar kamida 10 ta belgidan iborat bo‘lishi kerak.",
        },
      },
      footer: {
        title:
          "Launchdan oldin o‘tkir, launchdan keyin esa yanada kuchli tizimlar.",
        description:
          "Product thinking, interface engineering, automation va delivery intizomi bitta kompakt jamoada.",
        cards: {
          buildMode: "Build Mode",
          buildModeValue: "G‘oyadan launchgacha",
          delivery: "Delivery",
          deliveryValue: "Web, mobile, AI",
          quality: "Quality",
          qualityValue: "Minimal, lekin kuchli",
        },
        contactChannel: "Aloqa kanali",
        contactDescription:
          "Product build, redesign va automation tizimlari uchun tayyormiz.",
        socialLinks: "Ijtimoiy tarmoqlar",
        note: "Katta ambitsiyali raqamli tizimlar uchun yaratilgan.",
        poweredBy: "Powered by UCH",
      },
      loader: {
        brand: "Unified Coders Hub",
        title: "Premium build environment ishga tushirilmoqda.",
        description:
          "Interfeys qatlamlari, motion surface’lar va system signal’lari sinxronlanmoqda.",
      },
      phone: {
        label: "UCH'ga qo‘ng‘iroq",
      },
      common: {
        english: "Inglizcha",
        russian: "Ruscha",
        uzbek: "O‘zbekcha",
      },
    },
  },
  ru: {
    translation: {
      nav: {
        items: {
          capabilities: "Возможности",
          portfolio: "Работы",
          core: "Ядро",
          process: "Процесс",
          contact: "Контакт",
        },
        start: "Начать проект",
        startShort: "Старт",
        mobileTitle: "Навигация",
        mobileDescription: "Изучите систему UCH",
        languages: {
          uz: "UZ",
          ru: "RU",
          en: "EN",
        },
      },
      hero: {
        eyebrow: "Premium engineering collective",
        title: "Мы строим не просто код, а системы.",
        description:
          "UCH создает высококлассные цифровые продукты с ясностью product studio и дисциплиной системной команды.",
        primary: "Запустить проект",
        secondary: "Смотреть работы",
        stats: [
          { value: "04", label: "Специалиста в ядре" },
          { value: "12+", label: "Продуктов, доведенных до релиза" },
          { value: "99%", label: "Осознанные решения без лишнего" },
        ],
        signal: "Signal",
        signalValue: "Единый delivery stack",
        pillars: [
          {
            title: "Архитектура",
            copy: "Design systems, инфраструктурное мышление и performance budgets",
          },
          {
            title: "Исполнение",
            copy: "Быстрые итерации с product-level качеством на разных платформах",
          },
          {
            title: "Автоматизация",
            copy: "Workflow intelligence, встроенный прямо в продукт",
          },
        ],
        mode: "Режим работы",
        modeLeft: "От идеи до запуска",
        modeRight: "Под ключ",
      },
      capabilities: {
        eyebrow: "Возможности",
        title:
          "Глубокая engineering экспертиза на самых важных product surfaces.",
        description:
          "Мы держим стек острым, продукт — осмысленным, а реализацию — готовой к масштабированию.",
        featureEyebrow: "System surfaces",
        featureTitle:
          "Более четкая capability map и сильнее визуальная иерархия.",
        featureDescription:
          "Каждое направление строится как часть одной operating model, а не отдельный сервис.",
        featureList: [
          "Сначала product architecture, потом рост feature set",
          "Motion, UX и implementation проектируются вместе",
          "Автоматизация продолжает помогать команде после запуска",
        ],
        items: {
          web: {
            title: "Web Development",
            description:
              "Интерфейсы, ориентированные на конверсию, масштабируемые фронтенды и устойчивые backend-интеграции как единая product system.",
            tag: "Frontend + backend systems",
          },
          mobile: {
            title: "Mobile Apps",
            description:
              "Мобильные продукты с ощущением native, продуманным motion и product logic под реальные workflow.",
            tag: "Native-feeling execution",
          },
          ai: {
            title: "AI Automation",
            description:
              "Внутренние инструменты и клиентские flow на базе orchestration, agentic automation и интеллектуальной работы с данными.",
            tag: "Workflow intelligence",
          },
          ui: {
            title: "UI/UX Engineering",
            description:
              "Design systems, motion, interaction architecture и high-fidelity implementation для ясности и долговечности.",
            tag: "Interface craft",
          },
        },
      },
      portfolio: {
        eyebrow: "Избранные системы",
        title:
          "Сетка проектов, которая остается чистой по мере роста портфолио.",
        description:
          "Каждый проект управляется из одного source, а desktop layout стал более сбалансированным и редакционным.",
        livePreview: "Live Preview",
        sourceCode: "Source Code",
        managedFrom: "Управляется из works.json",
        technologies: "{{count}} технологий",
        items: {
          "atlas-control-layer": {
            name: "Atlas Control Layer",
            category: "Enterprise Ops",
            description:
              "Операционный центр для telemetry, approvals и incident response в одном premium control surface.",
          },
          "pulse-commerce-os": {
            name: "Pulse Commerce OS",
            category: "Commerce System",
            description:
              "Экосистема storefront и admin, где контент, analytics и automation работают как одна product system.",
          },
          "nexa-assist": {
            name: "Nexa Assist",
            category: "AI Automation",
            description:
              "AI-помощник, который превращает повторяющиеся процессы в понятную и отслеживаемую автоматизацию.",
          },
          "circuit-mobile": {
            name: "Circuit Mobile",
            category: "Mobile Platform",
            description:
              "Offline-first field app с быстрым sync, четкими interaction и общей design language с desktop.",
          },
        },
      },
      core: {
        eyebrow: "Ядро",
        title: "Четыре специалиста как единый coordinated product engine.",
        description:
          "Каждый builder отвечает за свое направление, но delivery model работает как одна система.",
        centerEyebrow: "UCH Core",
        centerTitle: "Единый product engine",
        centerDescription:
          "Стратегия, интерфейс, автоматизация и platform thinking текут внутри одной компактной команды.",
        nodes: {
          product: {
            title: "Product Engineer",
            role: "Interface logic",
            copy: "Превращает сложные workflow в понятные пользовательские flow.",
          },
          frontend: {
            title: "Frontend Architect",
            role: "Design systems",
            copy: "Строит визуальную целостность, скорость и качество interaction.",
          },
          automation: {
            title: "Automation Builder",
            role: "AI workflows",
            copy: "Связывает действия, данные и умную orchestration.",
          },
          platform: {
            title: "Platform Engineer",
            role: "Scale and delivery",
            copy: "Держит performance, structure и deployment стабильными.",
          },
        },
      },
      process: {
        eyebrow: "Процесс",
        title:
          "Компактная timeline, которая держит высокую скорость и ясный результат.",
        description:
          "Workflow специально сделан простым. Мы уменьшаем трение между этапами, чтобы идеи доживали до production.",
        steps: [
          {
            number: "01",
            title: "Идея",
            tag: "Сбор сигнала",
            description:
              "Определяем, что продукт должен реально делать, что нужно пользователю в первую очередь и какие ограничения формируют build с первого дня.",
          },
          {
            number: "02",
            title: "Дизайн",
            tag: "Архитектура интерфейса",
            description:
              "Прорабатываем flow, визуальную систему и interaction, чтобы implementation нес ясность, а не шум.",
          },
          {
            number: "03",
            title: "Build",
            tag: "Системное исполнение",
            description:
              "Продукт строится с учетом performance, scale и maintainability, а не получает это задним числом.",
          },
          {
            number: "04",
            title: "Launch",
            tag: "Refinement loop",
            description:
              "Мы уверенно релизим, отслеживаем signal и улучшаем продукт на основе реального использования.",
          },
        ],
      },
      contact: {
        eyebrow: "Контакт",
        title: "Отправьте brief. Мы направим его в Make workflow.",
        description:
          "Компактный intake flow для быстрых project request. Каждая отправка попадает в Make automation webhook и может дальше уйти в Telegram.",
        statuses: {
          ready: "Secure intake active",
          sending: "Передача в Make",
          sent: "Сообщение доставлено",
          error: "Ошибка доставки",
        },
        cards: {
          channel: "Канал",
          channelValue: "Make Webhook",
          format: "Формат",
          formatValue: "Имя, email, brief",
          response: "Ответ",
          responseValue: "Automation trigger",
        },
        labels: {
          name: "Имя",
          email: "Email",
          message: "Сообщение",
        },
        messages: {
          invalid: "Пожалуйста, корректно заполните обязательные поля.",
          success: "Make workflow принял сообщение.",
          fallbackError: "Произошла ошибка при отправке сообщения.",
          submit: "Отправить brief",
          sending: "Отправка brief",
        },
        validation: {
          required: "{{field}} обязательно.",
          email: "Пожалуйста, введите корректный email.",
          messageMin: "Сообщение должно содержать минимум 10 символов.",
        },
      },
      footer: {
        title:
          "Системы, которые выглядят сильными до релиза и становятся еще лучше после него.",
        description:
          "Product thinking, interface engineering, automation и delivery discipline в одной компактной команде.",
        cards: {
          buildMode: "Build Mode",
          buildModeValue: "От идеи до запуска",
          delivery: "Delivery",
          deliveryValue: "Web, mobile, AI",
          quality: "Quality",
          qualityValue: "Минимально, но мощно",
        },
        contactChannel: "Контактный канал",
        contactDescription:
          "Готовы к product build, redesign и automation systems.",
        socialLinks: "Социальные ссылки",
        note: "Создано для амбициозных цифровых систем.",
        poweredBy: "Powered by UCH",
      },
      loader: {
        brand: "Unified Coders Hub",
        title: "Инициализация premium build environment.",
        description:
          "Синхронизация interface layers, motion surfaces и system signals.",
      },
      phone: {
        label: "Позвонить в UCH",
      },
      common: {
        english: "Английский",
        russian: "Русский",
        uzbek: "Узбекский",
      },
    },
  },
};
