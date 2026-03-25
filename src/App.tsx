
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState, useRef } from 'react';

type Language = 'en' | 'id';

type ServiceCard = {
  icon: string;
  title: string;
  description: string;
  featured?: boolean;
};

type ProcessItem = {
  number: string;
  title: string;
  text: string;
};

type PricingCard = {
  eyebrow: string;
  price: string;
  suffix: string;
  badge?: string;
  featured?: boolean;
  items: string[];
  cta: string;
};

type ProjectItem = {
  eyebrow: string;
  title: string;
  description: string;
  stack: string;
  href: string;
  accent: string;
};

type Content = {
  nav: {
    services: string;
    work: string;
    process: string;
    pricing: string;
    login: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title1: string;
    highlight: string;
    title2: string;
    title3: string;
    description: string;
    primary: string;
    secondary: string;
    codeLabel: string;
    latencyLabel: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    learnMore: string;
    items: ServiceCard[];
  };
  work: {
    eyebrow: string;
    title: string;
    allProjectsLabel: string;
    visitProject: string;
    previewHint: string;
    openExternal: string;
    closePreview: string;
    projects: ProjectItem[];
  };
  process: {
    title: string;
    description: string;
    quote: string;
    author: string;
    items: ProcessItem[];
  };
  pricing: {
    title: string;
    description: string;
    cards: PricingCard[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    agency: string;
    work: string;
    tiers: string;
    social: string;
    contact: string;
    copyright: string;
  };
};

const contentByLanguage: Record<Language, Content> = {
  en: {
    nav: {
      services: 'Services',
      work: 'Portfolio',
      process: 'Why Us',
      pricing: 'Pricing',
      login: 'Contact',
      cta: 'Free Consultation',
    },
    hero: {
      eyebrow: 'Website and app development for businesses, students, and institutions',
      title1: 'Affordable Digital',
      highlight: 'Solutions',
      title2: 'for',
      title3: 'Every Need',
      description:
        'From business websites and student portfolios to school systems and custom apps, we help you launch digital products that look professional, feel easy to use, and stay budget-friendly.',
      primary: 'Free Consultation',
      secondary: 'Start Now',
      codeLabel: 'const YourProject =',
      latencyLabel: 'ready',
    },
    services: {
      eyebrow: 'Our Services',
      title: 'Flexible Services for Different Goals',
      description: 'Whether you need a website for your business, a portfolio for personal branding, or a system for your school or institution, we can build it to match your needs.',
      learnMore: 'Ask About This +',
      items: [
        {
          icon: '?',
          title: 'Business Website / Small Business',
          description: 'Perfect for company profiles, product catalogs, landing pages, and business websites that help your brand look more convincing and easier to trust.',
        },
        {
          icon: '?',
          title: 'Portfolio Website',
          description: 'Ideal for students and university students who want to show their profile, skills, projects, and achievements in a neat and professional way.',
          featured: true,
        },
        {
          icon: '?',
          title: 'School System / Custom App',
          description: 'Suitable for schools, courses, and institutions that need admin systems, information portals, or custom applications with flexible features.',
        },
      ],
    },
    work: {
      eyebrow: 'Portfolio',
      title: 'A Few Projects We Have Worked On',
      allProjectsLabel: 'All Projects',
      visitProject: 'See Project',
      previewHint: 'If the preview is blocked by the website, open it in a new tab.',
      openExternal: 'Open in New Tab',
      closePreview: 'Close Preview',
      projects: [
        {
          eyebrow: 'Personal Portfolio',
          title: 'Portofolio Rafa',
          description: 'A personal portfolio website for showcasing profile, skills, and work results in a cleaner, more professional, and easier-to-share format.',
          stack: 'Portfolio Website',
          href: 'https://portofolio-rafa-xi.vercel.app/',
          accent: 'from-[#111827] via-[#1f2937] to-[#2563eb]',
        },
        {
          eyebrow: 'Course Website',
          title: 'GDC-S',
          description: 'A course website designed to make class information, programs, and registration flow easier to understand for prospective students.',
          stack: 'Institution Website',
          href: 'https://www.gdc-s.com/',
          accent: 'from-[#2b1608] via-[#7c2d12] to-[#f97316]',
        },
        {
          eyebrow: 'Business Website',
          title: 'Umrah Al Ghofur',
          description: 'A business website that presents service packages, company information, and key details more clearly to build trust and make inquiries easier.',
          stack: 'Business Website',
          href: 'https://umrah-al-ghofur.vercel.app/',
          accent: 'from-[#052e2b] via-[#0f766e] to-[#2dd4bf]',
        },

      ],
    },
    process: {
      title: 'Why This Service Feels Right for Many Needs',
      description: 'We keep the process simple, the pricing flexible, and the final result professional, so it works for small businesses, students, and institutions alike.',
      quote: 'Professional digital solutions should feel accessible, not complicated.',
      author: 'Affordable, flexible, and clear from the start',
      items: [
        {
          number: '01',
          title: 'Consultation',
          text: 'We start by understanding what you need, what your goals are, and the budget range that feels comfortable for you.',
        },
        {
          number: '02',
          title: 'Design',
          text: 'The design is prepared to stay clean, professional, and easy to use, so the final result feels right for your audience.',
        },
        {
          number: '03',
          title: 'Development',
          text: 'Your website or app is built based on the approved direction, with features adjusted to your actual needs.',
        },
        {
          number: '04',
          title: 'Launch',
          text: 'After everything is ready, we help the project go live so it can be used, shared, and developed further with confidence.',
        },
      ],
    },
    pricing: {
      title: 'Flexible Pricing for Different Needs',
      description: 'Pricing starts from affordable packages, and the final cost can be adjusted to the scope, features, and goals of your project.',
      cards: [
        {
          eyebrow: 'Portfolio / Starter Website',
          price: 'Rp.300rb',
          suffix: 'starting from',
          items: ['Suitable for students, personal branding, and simple needs', 'Clean and professional look', 'Great for portfolios, personal profiles, or landing pages'],
          cta: 'Ask for Details',
        },
        {
          eyebrow: 'Business Website',
          price: 'Rp1,5jt',
          suffix: 'starting from',
          badge: 'Most Requested',
          featured: true,
          items: ['Suitable for UMKM and growing businesses', 'Pages and features can be adjusted to your needs', 'Includes consultation, revision, and support after launch'],
          cta: 'Free Consultation',
        },
        {
          eyebrow: 'Create System / Custom App',
          price: 'Rp3jt',
          suffix: '',
          items: ['Suitable for schools, institutions, or custom business workflows', 'Pricing follows the features and scope you need', 'Can start from a simpler version first'],
          cta: 'Discuss Project',
        },
      ],
    },
    cta: {
      title: 'Whatever your digital need is, we are ready to help',
      description: 'Whether it is for business, study, or institution needs, let us help you find a solution that fits and is comfortable to start with.',
      button: 'Get Free Consultation',
    },
    footer: {
      tagline: 'Professional websites and apps with flexible pricing for businesses, students, and institutions.',
      quickLinks: 'Quick Links',
      agency: 'Services',
      work: 'Portfolio',
      tiers: 'Pricing',
      social: 'Social Media',
      contact: 'Contact',
      copyright: '� 2026 Coding-In. Digital solutions for businesses, students, and institutions.',
    },
  },
  id: {
    nav: {
      services: 'Layanan',
      work: 'Portofolio',
      process: 'Alur',
      pricing: 'Harga',
      login: 'Kontak',
      cta: 'Konsultasi Gratis',
    },
    hero: {
      eyebrow: 'Jasa pembuatan website dan aplikasi untuk bisnis, pelajar, dan instansi',
      title1: 'Solusi Digital',
      highlight: 'Fleksibel',
      title2: 'untuk',
      title3: 'Beragam Kebutuhan',
      description: 'Bisa untuk website bisnis, portfolio pelajar, sampai sistem sekolah atau aplikasi custom. Semua dikerjakan dengan tampilan profesional, proses yang jelas, dan harga yang tetap terjangkau.',
      primary: 'Konsultasi Gratis',
      secondary: 'Mulai Sekarang',
      codeLabel: 'const SolusiAnda =',
      latencyLabel: 'siap',
    },
    services: {
      eyebrow: 'Layanan Kami',
      title: 'Layanan yang Bisa Disesuaikan dengan Kebutuhan',
      description: 'Untuk bisnis, pelajar, hingga instansi, kami membantu membuat solusi digital yang mudah dipahami, nyaman dipakai, dan terlihat profesional.',
      learnMore: 'Tanya Layanan +',
      items: [
        {
          icon: '?',
          title: 'Website Bisnis / UMKM',
          description: 'Cocok untuk company profile, katalog produk, landing page, atau website usaha agar bisnis terlihat lebih terpercaya dan mudah ditemukan.',
        },
        {
          icon: '?',
          title: 'Website Portfolio',
          description: 'Pas untuk pelajar dan mahasiswa yang ingin menampilkan profil, skill, project, dan pencapaian dengan cara yang rapi dan meyakinkan.',
          featured: true,
        },
        {
          icon: '?',
          title: 'Sistem Sekolah / Aplikasi Custom',
          description: 'Bisa untuk website sekolah, sistem administrasi, portal informasi, atau aplikasi custom yang menyesuaikan alur kebutuhan instansi Anda.',
        },
      ],
    },
    work: {
      eyebrow: 'Portofolio',
      title: 'Beberapa Project yang Sudah Kami Bantu Kerjakan',
      allProjectsLabel: 'Semua Project',
      visitProject: 'Lihat Project',
      previewHint: 'Kalau preview diblokir oleh website tujuan, buka langsung di tab baru.',
      openExternal: 'Buka di Tab Baru',
      closePreview: 'Tutup Preview',
      projects: [
        {
          eyebrow: 'Portfolio Pribadi',
          title: 'Portofolio Rafa',
          description: 'Website portfolio pribadi untuk menampilkan profil, skill, dan hasil karya dengan tampilan yang lebih rapi, profesional, dan mudah dibagikan.',
          stack: 'Website Portfolio',
          href: 'https://portofolio-rafa-xi.vercel.app/',
          accent: 'from-[#111827] via-[#1f2937] to-[#2563eb]',
        },
        {
          eyebrow: 'Website Kursus',
          title: 'GDC-S',
          description: 'Website kursus yang membantu calon peserta memahami informasi kelas, program, dan pendaftaran dengan lebih jelas dan nyaman.',
          stack: 'Website Instansi',
          href: 'https://www.gdc-s.com/',
          accent: 'from-[#2b1608] via-[#7c2d12] to-[#f97316]',
        },
        {
          eyebrow: 'Website Bisnis',
          title: 'Umrah Al Ghofur',
          description: 'Website bisnis yang menampilkan layanan, detail paket, dan informasi perusahaan dengan lebih jelas agar calon pelanggan lebih yakin untuk menghubungi.',
          stack: 'Website Bisnis',
          href: 'https://umrah-al-ghofur.vercel.app/',
          accent: 'from-[#052e2b] via-[#0f766e] to-[#2dd4bf]',
        },


      ],
    },
    process: {
      title: 'Proses yang Sederhana dan Mudah Diikuti',
      description: 'Kami membuat alur kerja yang jelas dari awal sampai launching, supaya Anda tahu prosesnya, biayanya, dan hasil yang akan didapat.',
      quote: 'Solusi digital yang bagus harus terasa mudah dimulai dan jelas prosesnya.',
      author: 'Terjangkau, fleksibel, dan profesional',
      items: [
        {
          number: '01',
          title: 'Konsultasi',
          text: 'Kami dengarkan kebutuhan Anda lebih dulu, mulai dari tujuan, fitur yang dibutuhkan, sampai budget yang ingin disesuaikan.',
        },
        {
          number: '02',
          title: 'Desain',
          text: 'Tampilan dirancang agar rapi, profesional, dan nyaman digunakan oleh pengunjung maupun pengguna internal.',
        },
        {
          number: '03',
          title: 'Development',
          text: 'Website atau aplikasi mulai dikerjakan sesuai kebutuhan yang sudah disepakati, dengan proses yang tetap jelas dan terarah.',
        },
        {
          number: '04',
          title: 'Launch',
          text: 'Setelah selesai, project siap dipublikasikan dan kami bantu memastikan hasilnya siap digunakan dengan nyaman.',
        },
      ],
    },
    pricing: {
      title: 'Harga Fleksibel Sesuai Kebutuhan',
      description: 'Tersedia pilihan harga mulai dari kebutuhan sederhana sampai custom. Cocok untuk pelajar, UMKM, maupun instansi yang butuh solusi lebih lengkap.',
      cards: [
        {
          eyebrow: 'Portfolio / Website Starter',
          price: 'Rp300rb',
          suffix: 'mulai dari',
          items: ['Cocok untuk pelajar, personal branding, dan kebutuhan sederhana', 'Tampilan bersih, modern, dan profesional', 'Pas untuk portfolio, profil pribadi, atau landing page'],
          cta: 'Tanya Detail',
        },
        {
          eyebrow: 'Website Bisnis',
          price: 'Rp1,5jt',
          suffix: 'mulai dari',
          badge: 'Paling Diminati',
          featured: true,
          items: ['Cocok untuk UMKM dan bisnis yang ingin terlihat lebih profesional', 'Halaman dan fitur bisa menyesuaikan kebutuhan', 'Sudah termasuk konsultasi, revisi, dan support setelah launching'],
          cta: 'Konsultasi Gratis',
        },
        {
          eyebrow: 'Pembuatan Sistem / App Custom',
          price: 'Rp3jt',
          suffix: 'mulai dari',
          items: ['Cocok untuk sekolah, instansi, atau kebutuhan fitur khusus', 'Harga menyesuaikan kebutuhan dan tingkat kompleksitas', 'Bisa mulai dari versi sederhana lalu dikembangkan bertahap'],
          cta: 'Diskusikan Project',
        },
      ],
    },
    cta: {
      title: 'Apa pun kebutuhan digital kamu, kami siap bantu',
      description: 'Mulai dari website bisnis, portfolio pribadi, sampai sistem sekolah atau aplikasi custom, semuanya bisa dikonsultasikan sesuai kebutuhan dan budget.',
      button: 'Konsultasi Gratis Sekarang',
    },
    footer: {
      tagline: 'Website dan aplikasi profesional dengan harga fleksibel untuk bisnis, pelajar, dan instansi.',
      quickLinks: 'Tautan Cepat',
      agency: 'Layanan',
      work: 'Portofolio',
      tiers: 'Harga',
      social: 'Media Sosial',
      contact: 'Kontak',
      copyright: '� 2026 Coding-In. Solusi digital untuk bisnis, pelajar, dan instansi.',
    },
  },
};
function renderServiceIcon(title: string) {
  if (title.includes('Portfolio')) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3l7 4v10l-7 4-7-4V7l7-4Z" />
        <path d="M12 8v8" />
        <path d="M8.5 10 12 8l3.5 2" />
      </svg>
    );
  }

  if (title.includes('Sekolah') || title.includes('School')) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 10.5 12 5l9 5.5" />
        <path d="M5 9.5V19h14V9.5" />
        <path d="M9 19v-5h6v5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7 9h10" />
      <path d="M7 13h6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l4 4L19 7" />
    </svg>
  );
}
const languageOptions: { key: Language; label: string }[] = [
  { key: 'en', label: 'EN' },
  { key: 'id', label: 'ID' },
];

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactOptionsOpen, setIsContactOptionsOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const workScrollRef = useRef<HTMLDivElement>(null);
  const pricingScrollRef = useRef<HTMLDivElement>(null);

  const scrollContainer = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.clientWidth * 0.8;
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('coding-in-language') as Language | null;
    if (storedLanguage === 'en' || storedLanguage === 'id') {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('coding-in-language', language);
    document.documentElement.lang = language === 'id' ? 'id' : 'en';
  }, [language]);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [selectedProject]);

  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [realPreviewScale, setRealPreviewScale] = useState(0.38);

  useEffect(() => {
    if (!selectedProject || !previewContainerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setRealPreviewScale(width / 1280);
      }
    });
    observer.observe(previewContainerRef.current);
    
    const timeout = setTimeout(() => {
      if (previewContainerRef.current) observer.observe(previewContainerRef.current);
    }, 300);
    
    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [selectedProject]);

  const content = useMemo(() => contentByLanguage[language], [language]);
  const projectCountLabel = `${content.work.allProjectsLabel} (${content.work.projects.length})`;
  const selectedProjectIndex = selectedProject ? content.work.projects.findIndex((project) => project.href === selectedProject.href) + 1 : 0;
  const visibleProjects = showAllProjects ? content.work.projects : content.work.projects.slice(0, 4);
  const showMoreVisible = content.work.projects.length > 4;
  const previewWidth = 1280;
  const previewHeight = 700;
  const previewFrameHeight = previewHeight * realPreviewScale;

  return (
    <div className="min-h-screen bg-[#f6f4f2] text-[#111111]">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_20%_0%,rgba(92,89,255,0.07),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(120,150,255,0.08),transparent_24%),linear-gradient(180deg,#f8f6f4_0%,#f4f1ee_100%)]" />
      <div className="fixed bottom-8 right-6 z-[90] flex flex-col items-end sm:bottom-10 sm:right-8 lg:bottom-12 lg:right-10">
        <AnimatePresence>
          {isLanguageMenuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="mb-4 w-[124px] overflow-hidden rounded-[18px] border border-white/75 bg-white/82 p-2 shadow-[0_24px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl"
            >
              {languageOptions.map((option) => {
                const active = option.key === language;
                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setLanguage(option.key)}
                    className={`flex w-full items-center justify-between rounded-[12px] px-3 py-2 text-left text-[11px] font-semibold transition duration-300 ${active
                      ? 'bg-[#2563eb] text-white shadow-[0_10px_22px_rgba(91,92,240,0.2)]'
                      : 'text-[#54545a] hover:bg-[#eff6ff] hover:text-[#2563eb]'
                      }`}
                  >
                    <span>{option.label}</span>
                    <span className={`h-2.5 w-2.5 rounded-full ${active ? 'bg-white' : 'bg-[#bfdbfe]'}`} />
                  </button>
                );
              })}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsLanguageMenuOpen((current) => !current)}
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/75 bg-white/82 text-[#2563eb] shadow-[0_24px_48px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#bfdbfe] hover:bg-[#eff6ff] animate-float-slower"
          aria-label="Ganti bahasa"
          aria-expanded={isLanguageMenuOpen}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a14 14 0 0 1 0 18" />
            <path d="M12 3a14 14 0 0 0 0 18" />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] overflow-y-auto bg-[radial-gradient(circle_at_center,rgba(27,37,53,0.24),rgba(2,6,12,0.84))] backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div className="flex min-h-full items-center justify-center p-3 py-12 sm:p-6" onClick={() => setSelectedProject(null)}>
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(0,0,0,0.52))]" />
              <motion.div
                initial={{ opacity: 0, y: 26, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 26, scale: 0.98 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="relative w-full max-w-[540px]"
              onClick={(event) => event.stopPropagation()}
            >

              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0f17] shadow-[0_24px_60px_rgba(0,0,0,0.38)]">
                <div className="mx-auto max-w-[520px] px-4 pt-6 sm:px-6 sm:pt-8">
                  <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#dbe3ea] shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
                    <div className="flex items-center gap-2 bg-[#0a0d12] px-4 py-3 text-white/70">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                      <div className="ml-3 flex-1 text-center text-[11px] font-medium text-white/55">{selectedProject.href}</div>
                    </div>
                    <div ref={previewContainerRef} className="overflow-hidden bg-[#eef2f6]" style={{ height: previewFrameHeight }}>
                      <iframe
                        key={selectedProject.href}
                        src={selectedProject.href}
                        title={selectedProject.title}
                        loading="lazy"
                        className="origin-top-left border-0 bg-white"
                        style={{
                          width: previewWidth,
                          height: previewHeight,
                          transform: `scale(${realPreviewScale})`,
                          transformOrigin: 'top left',
                        }}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-[#0b0f17] px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
                  <div className="mx-auto max-w-[520px]">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/42">{selectedProject.eyebrow}</p>
                    <h3 className="mt-3 max-w-[520px] text-[24px] font-semibold leading-[1] tracking-[-0.05em] text-white sm:text-[28px]">{selectedProject.title}</h3>
                    <p className="mt-2 max-w-[520px] text-[13px] leading-6 text-[#f2f5ff]">{selectedProject.description}</p>
                    <div className="mt-3 text-[14px] font-medium tracking-[0.04em] text-white/70">
                      {selectedProjectIndex} / {content.work.projects.length}
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2.5">
                      <a
                        href={selectedProject.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/14 bg-transparent px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:border-[#2563eb] hover:bg-[#2563eb]"
                      >
                        {content.work.openExternal}
                      </a>
                      <p className="text-[12px] leading-5 text-[#d7def7]">{content.work.previewHint}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <header className="sticky top-4 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <div className="relative z-50 mx-auto flex max-w-[1180px] items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-5">
          <a href="/" className="flex items-center">
            <img src="/assets/logo2.png" alt="Coding-In" className="h-[42px] w-auto md:h-[52px] object-contain" />
          </a>

          <button 
            type="button" 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/50 text-[#121212] md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={isMobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav className="hidden items-center gap-2 text-[11px] font-medium text-[#707070] md:flex">
            <a href="#services" className="rounded-full border border-transparent px-3 py-1.5 text-[#707070] transition duration-300 hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.services}</a>
            <a href="#work" className="rounded-full border border-transparent px-3 py-1.5 text-[#707070] transition duration-300 hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.work}</a>
            <a href="#process" className="rounded-full border border-transparent px-3 py-1.5 text-[#707070] transition duration-300 hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.process}</a>
            <a href="#pricing" className="rounded-full border border-transparent px-3 py-1.5 text-[#707070] transition duration-300 hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.pricing}</a>
          </nav>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
             <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.2 }}
               className="absolute left-4 right-4 top-20 z-40 rounded-[22px] border border-white/60 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden sm:left-6 sm:right-6"
             >
               <nav className="flex flex-col gap-2 text-[12px] font-semibold text-[#444]">
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="rounded-[14px] px-4 py-3.5 transition duration-300 hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.services}</a>
                <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="rounded-[14px] px-4 py-3.5 transition duration-300 hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.work}</a>
                <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="rounded-[14px] px-4 py-3.5 transition duration-300 hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.process}</a>
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="rounded-[14px] px-4 py-3.5 transition duration-300 hover:bg-[#eff6ff] hover:text-[#2563eb]">{content.nav.pricing}</a>
               </nav>
             </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ opacity: 0, x: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -24, filter: 'blur(8px)' }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            aria-hidden="true"
            initial={{ x: '-20%', opacity: 0 }}
            animate={{ x: '130%', opacity: [0, 0.45, 0] }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[28%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)] blur-2xl"
          />
          <main id="top">
            <section className="px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
              <div className="mx-auto grid max-w-[1180px] items-center gap-2 sm:gap-14 grid-cols-2 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="max-w-[520px] relative z-10">
                  <p className="mb-4 sm:mb-8 text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] text-[#60a5fa]">{content.hero.eyebrow}</p>

                  <h1 className="max-w-[520px] text-[28px] sm:text-[46px] md:text-[58px] lg:text-[72px] font-semibold leading-[0.92] tracking-[-0.055em] text-[#0f0f10]">
                    {content.hero.title1}
                    <br />
                    <span className="text-[#2563eb]">{content.hero.highlight}</span> {content.hero.title2}
                    <br />
                    {content.hero.title3}
                  </h1>

                  <p className="mt-3 sm:mt-7 w-full max-w-[360px] text-[10px] sm:text-[13px] leading-4 sm:leading-6 text-[#8c8b8d]">{content.hero.description}</p>

                  <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                    <a
                      href="#contact"
                      className="inline-flex rounded-[8px] sm:rounded-[12px] border border-[#1d4ed8] bg-[#2563eb] px-3 py-2 sm:px-5 sm:py-3 text-[9px] sm:text-[12px] font-semibold text-white shadow-[0_16px_28px_rgba(91,92,240,0.22)] transition duration-300 hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_22px_38px_rgba(91,92,240,0.34)]"
                    >
                      {content.hero.primary}
                    </a>
                    <a
                      href="#work"
                      className="inline-flex rounded-[8px] sm:rounded-[12px] border border-[#e7e2dc] bg-[#efebe7] px-3 py-2 sm:px-5 sm:py-3 text-[9px] sm:text-[12px] font-semibold text-[#5d5d61] transition duration-300 hover:translate-y-[-2px] hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb]"
                    >
                      {content.hero.secondary}
                    </a>
                  </div>
                </div>

                <div className="relative mx-auto h-[220px] sm:h-[330px] w-full max-w-[560px] lg:h-[360px]">
                  <div className="absolute left-[5%] top-[10%] sm:top-[22%] h-[120px] sm:h-[180px] w-[140px] sm:w-[240px] rounded-full bg-[#60a5fa]/20 blur-2xl sm:blur-3xl animate-pulse-glow" />
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="absolute left-[0%] sm:left-[10%] top-[10%] sm:top-[22%] w-[160px] sm:w-[340px] rounded-[12px] sm:rounded-[20px] border border-white/70 bg-white/74 p-2.5 sm:p-4 shadow-[0_15px_30px_rgba(20,20,43,0.1)] sm:shadow-[0_30px_60px_rgba(20,20,43,0.12)] backdrop-blur-xl animate-float-soft"
                  >
                    <div className="mb-2 sm:mb-3 flex items-center gap-1 sm:gap-1.5">
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#ff6d6d]" />
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#ffd35c]" />
                      <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#57d676]" />
                    </div>
                    <div className="font-mono text-[7px] sm:text-[11px] leading-4 sm:leading-6 text-[#606379]">
                      <p>
                        {content.hero.codeLabel} {'{'}
                        <span className="text-[#2563eb]"> v: 1.0 </span>
                        {'}'}
                      </p>
                      <p className="whitespace-nowrap">{content.hero.latencyLabel}: 121ms,</p>
                      <p>performa: optimal,</p>
                      <p>tampilan: nyaman,</p>
                      <p>{'};'}</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 12, y: 6 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.12, ease: 'easeOut' }}
                    className="absolute right-[0%] sm:right-[8%] top-[40%] sm:top-[33%] rounded-[12px] sm:rounded-[18px] border border-white/75 bg-white/80 px-2.5 py-2.5 sm:px-4 sm:py-4 shadow-[0_12px_20px_rgba(20,20,43,0.1)] sm:shadow-[0_24px_40px_rgba(20,20,43,0.12)] backdrop-blur-xl animate-float-slower"
                  >
                    <div className="text-right text-[6px] sm:text-[9px] font-medium uppercase tracking-[0.18em] text-[#9a99a1]">{content.hero.latencyLabel}</div>
                    <div className="mt-0.5 sm:mt-1 text-[14px] sm:text-[24px] font-semibold tracking-[-0.04em] text-[#1d1d1f]">121ms</div>
                  </motion.div>
                </div>
              </div>
            </section>

            <section id="services" className="px-4 py-10 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-[1180px]">
                <div className="max-w-[420px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#60a5fa]">{content.services.eyebrow}</p>
                  <h2 className="mt-3 text-[46px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121212]">{content.services.title}</h2>
                  <p className="mt-3 text-[12px] leading-5 text-[#8f8a86]">{content.services.description}</p>
                </div>

                <div ref={servicesScrollRef} className="mt-10 flex overflow-x-auto pb-8 snap-x snap-mandatory gap-5 lg:grid lg:grid-cols-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {content.services.items.map((card) => (
                    <motion.article
                      key={card.title}
                      whileHover={{ y: -7, scale: 1.01 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                      className={`group flex-none w-[85vw] sm:w-[340px] lg:w-auto snap-center rounded-[18px] border bg-white px-6 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.03)] ${card.featured
                        ? 'border-[#ece7e2] shadow-[0_12px_30px_rgba(15,23,42,0.03)] hover:border-[#3b82f6] hover:shadow-[0_18px_36px_rgba(91,92,240,0.12)]'
                        : 'border-[#ece7e2] hover:border-[#bfdbfe] hover:shadow-[0_18px_36px_rgba(91,92,240,0.08)]'
                        }`}
                    >
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-[10px] text-[13px] transition duration-300 group-hover:scale-110 ${card.featured ? 'bg-[#2563eb] text-white' : 'bg-[#f5f1ed] text-[#1f1f22] group-hover:bg-[#eff6ff] group-hover:text-[#2563eb]'
                          }`}
                      >
                        {renderServiceIcon(card.title)}
                      </div>
                      <h3 className="mt-8 text-[18px] font-semibold tracking-[-0.03em] text-[#151515]">{card.title}</h3>
                      <p className="mt-3 max-w-[290px] text-[12px] leading-5 text-[#8d8985]">{card.description}</p>
                      <a href="#contact" className="mt-8 inline-flex text-[10px] font-semibold uppercase tracking-[0.22em] text-[#60a5fa] transition duration-300 group-hover:translate-x-1">
                        {content.services.learnMore}
                      </a>
                    </motion.article>
                  ))}
                </div>

                <div className="flex justify-center gap-3 lg:hidden mt-2">
                  <button onClick={() => scrollContainer(servicesScrollRef, 'left')} className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#d1d5db] bg-[#f9fafb] text-[#4b5563] shadow-sm transition hover:bg-white" aria-label="Geser kiri">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button onClick={() => scrollContainer(servicesScrollRef, 'right')} className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#d1d5db] bg-[#f9fafb] text-[#4b5563] shadow-sm transition hover:bg-white" aria-label="Geser kanan">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </section>

            <section id="work" className="px-4 py-16 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-[1180px]">
                <div className="mb-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#60a5fa]">{content.work.eyebrow}</p>
                    <h2 className="mt-3 text-[46px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121212]">{content.work.title}</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="group flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#99928e] transition duration-300 hover:text-[#2563eb]"
                  >
                    <span>{content.work.allProjectsLabel} ({content.work.projects.length})</span>
                    <svg viewBox="0 0 24 24" className={`h-3 w-3 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                </div>

                <div ref={workScrollRef} className="flex overflow-x-auto pb-8 snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {visibleProjects.map((project, index) => (
                    <button
                      key={project.href}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className={`group relative overflow-hidden flex-none w-[85vw] sm:w-[340px] md:w-auto snap-center rounded-[22px] border border-transparent bg-[linear-gradient(135deg,var(--tw-gradient-stops))] text-left ${project.accent} p-[1px] shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_rgba(91,92,240,0.12)] ${index === 0 ? 'md:col-span-2' : ''}`}
                    >
                      <article className="relative flex h-full min-h-[210px] flex-col justify-between rounded-[21px] bg-[#11161c] p-5 text-white">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />
                        <div className="relative">
                          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-white/70">
                            {project.eyebrow}
                          </div>
                          <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.04em]">{project.title}</h3>
                          <p className="mt-3 max-w-[520px] text-[12px] leading-6 text-white/68">{project.description}</p>
                        </div>

                        <div className="relative mt-8 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">{project.stack}</p>
                            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#93c5fd] transition duration-300 group-hover:translate-x-1">
                              {content.work.visitProject}
                            </p>
                          </div>
                          <div className="flex h-16 w-16 items-center justify-center rounded-[18px] border border-white/10 bg-white/5 text-[20px] font-semibold text-white/85">
                            0{index + 1}
                          </div>
                        </div>
                      </article>
                    </button>
                  ))}
                </div>

                <div className="flex justify-center gap-3 md:hidden mt-2">
                  <button onClick={() => scrollContainer(workScrollRef, 'left')} className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#d1d5db] bg-[#f9fafb] text-[#4b5563] shadow-sm transition hover:bg-white" aria-label="Geser kiri">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button onClick={() => scrollContainer(workScrollRef, 'right')} className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#d1d5db] bg-[#f9fafb] text-[#4b5563] shadow-sm transition hover:bg-white" aria-label="Geser kanan">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </section>

            <section id="process" className="px-4 py-[72px] sm:px-6 lg:px-8">
              <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.88fr_1.12fr]">
                <div>
                  <h2 className="max-w-[300px] text-[46px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#121212]">{content.process.title}</h2>
                  <p className="mt-6 max-w-[320px] text-[12px] leading-6 text-[#8d8985]">{content.process.description}</p>
                  <div className="mt-8 max-w-[300px] rounded-[16px] border border-[#bfdbfe] bg-[linear-gradient(180deg,#fbfaff,#f4f1ff)] px-5 py-5">
                    <p className="text-[12px] leading-6 text-[#676275]">{content.process.quote}</p>
                    <p className="mt-4 text-[11px] font-medium text-[#9a92b5]">{content.process.author}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-10">
                  {content.process.items.map((item) => (
                    <div key={item.number}>
                      <p className="text-[16px] font-medium tracking-[-0.03em] text-[#3b82f6]">{item.number}</p>
                      <h3 className="mt-3 text-[16px] font-semibold tracking-[-0.03em] text-[#181818]">{item.title}</h3>
                      <p className="mt-3 text-[12px] leading-5 text-[#8d8985] sm:max-w-[250px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-[1180px] rounded-[28px] bg-[linear-gradient(180deg,#f2efec,#eeebe7)] px-4 py-12 sm:px-6 lg:px-10">
                <div className="text-center">
                  <h2 className="text-[44px] font-semibold leading-[0.95] tracking-[-0.05em] text-[#171717]">{content.pricing.title}</h2>
                  <p className="mt-3 text-[12px] text-[#8d8985]">{content.pricing.description}</p>
                </div>

                <div ref={pricingScrollRef} className="mt-6 pt-4 lg:mt-10 lg:pt-0 flex overflow-x-auto pb-8 snap-x snap-mandatory gap-5 lg:grid lg:grid-cols-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {content.pricing.cards.map((card) => (
                    <motion.article
                      key={card.eyebrow}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className={`relative flex-none w-[85vw] sm:w-[340px] lg:w-auto snap-center rounded-[18px] border px-6 py-6 ${card.featured
                        ? 'border-[#e8e3df] bg-white shadow-[0_12px_28px_rgba(15,23,42,0.04)] hover:border-[#3b82f6] hover:shadow-[0_18px_40px_rgba(91,92,240,0.14)]'
                        : 'border-[#e8e3df] bg-white hover:border-[#bfdbfe] hover:shadow-[0_18px_36px_rgba(91,92,240,0.08)]'
                        }`}
                    >
                      {card.badge ? (
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563eb] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white whitespace-nowrap">
                          {card.badge}
                        </div>
                      ) : null}
                      <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#b0aaa7]">{card.eyebrow}</p>
                      <div className="mt-4 flex items-end gap-1">
                        <span className="text-[42px] font-semibold tracking-[-0.05em] text-[#141414]">{card.price}</span>
                        {card.suffix ? <span className="pb-1 text-[12px] text-[#8f8a86]">{card.suffix}</span> : null}
                      </div>
                      <div className="mt-6 space-y-3">
                        {card.items.map((item) => (
                          <div key={item} className="flex items-center gap-2.5 text-[12px] text-[#555a52]">
                            <span className="flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full border border-[#b8d8b8] bg-[#edf7ed] text-[#2a7d39]"><CheckIcon /></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href="#contact"
                        className={`mt-8 inline-flex w-full items-center justify-center rounded-[10px] px-4 py-3 text-[12px] font-semibold transition duration-300 text-center ${card.featured
                          ? 'border border-[#1d4ed8] bg-[#2563eb] text-white shadow-[0_16px_28px_rgba(91,92,240,0.22)] hover:translate-y-[-2px] hover:scale-[1.02] hover:shadow-[0_22px_36px_rgba(91,92,240,0.32)]'
                          : 'border border-[#dfdad6] bg-white text-[#1d1d1f] hover:translate-y-[-2px] hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#2563eb]'
                          }`}
                      >
                        {card.cta}
                      </a>
                    </motion.article>
                  ))}
                </div>

                <div className="flex justify-center gap-3 lg:hidden mt-2">
                  <button onClick={() => scrollContainer(pricingScrollRef, 'left')} className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#d1d5db] bg-[#f9fafb] text-[#4b5563] shadow-sm transition hover:bg-white" aria-label="Geser kiri">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button onClick={() => scrollContainer(pricingScrollRef, 'right')} className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#d1d5db] bg-[#f9fafb] text-[#4b5563] shadow-sm transition hover:bg-white" aria-label="Geser kanan">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </section>

            <section id="contact" className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
              <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,#1d1f2f,#171824)] px-6 py-16 shadow-[0_18px_40px_rgba(15,23,42,0.14)] sm:px-10">
                <div className="absolute inset-y-0 -left-[10%] w-[36%] rotate-12 bg-white/5 blur-3xl animate-aurora" />
                <div className="mx-auto max-w-[420px] text-center">
                  <h2 className="text-[54px] font-semibold leading-[0.9] tracking-[-0.055em] text-white">{content.cta.title}</h2>
                  <p className="mx-auto mt-5 max-w-[320px] text-[12px] leading-6 text-white/65">{content.cta.description}</p>
                  <div className="relative mt-8 inline-flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setIsContactOptionsOpen((current: boolean) => !current)}
                      className="inline-flex rounded-[12px] border border-white/70 bg-white px-6 py-3 text-[12px] font-semibold text-[#171824] transition duration-300 hover:translate-y-[-2px] hover:scale-[1.02] hover:bg-[#eff6ff] hover:text-[#2563eb]"
                    >
                      {content.cta.button}
                    </button>

                    <AnimatePresence>
                      {isContactOptionsOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute bottom-full z-10 mb-4 flex items-center gap-3"
                        >
                          <a
                            href="https://wa.me/6283804064608"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white text-[#25D366] shadow-[0_16px_28px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                          >
                            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.16 1.59 5.98L0 24l6.28-1.65a11.9 11.9 0 0 0 5.79 1.48h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.47-8.44ZM12.08 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98 1-3.63-.23-.37a9.83 9.83 0 0 1-1.5-5.27c0-5.44 4.42-9.86 9.87-9.86 2.63 0 5.1 1.02 6.96 2.89a9.8 9.8 0 0 1 2.89 6.96c0 5.44-4.43 9.89-9.87 9.89Zm5.41-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.37-1.46-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.26 5.16 4.57.72.31 1.28.49 1.72.62.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                            </svg>
                          </a>
                          <a
                            href="mailto:codingin.4ja@gmail.com"
                            aria-label="Email"
                            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white text-[#2563eb] shadow-[0_16px_28px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                          >
                            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                              <path d="m22 8-8.97 5.7a2 2 0 0 1-2.06 0L2 8" />
                            </svg>
                          </a>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[1180px] flex-col gap-10 text-[10px] text-[#9b9592] md:flex-row md:items-start md:justify-between">
              <div className="mb-2 md:mb-0 md:w-1/3">
                <div className="flex items-center">
                  <img src="/assets/logo2.png" alt="Coding-In" className="h-[56px] w-auto md:h-[64px] object-contain" />
                </div>
                <p className="mt-4 max-w-[200px] uppercase leading-5 tracking-[0.24em]">{content.footer.tagline}</p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:w-2/3 md:gap-4 lg:gap-8">
                <div>
                  <p className="mb-4 uppercase tracking-[0.24em] text-[#b3adaa]">{content.footer.quickLinks}</p>
                  <div className="space-y-2">
                    <a href="#services" className="block hover:text-[#2563eb] transition-colors">{content.footer.agency}</a>
                    <a href="#work" className="block hover:text-[#2563eb] transition-colors">{content.footer.work}</a>
                    <a href="#pricing" className="block hover:text-[#2563eb] transition-colors">{content.footer.tiers}</a>
                  </div>
                </div>

                <div>
                  <p className="mb-4 uppercase tracking-[0.24em] text-[#b3adaa]">{content.footer.social}</p>
                  <div className="space-y-2">
                    <a href="https://www.tiktok.com/@coding.inaja" target="_blank" rel="noopener noreferrer" className="block hover:text-[#2563eb] transition-colors">TikTok</a>
                    <a href="https://www.instagram.com/wguproonnn" target="_blank" rel="noopener noreferrer" className="block hover:text-[#2563eb] transition-colors">Instagram</a>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <p className="mb-4 uppercase tracking-[0.24em] text-[#b3adaa]">{content.footer.contact}</p>
                  <div className="space-y-2 leading-5">
                    <p>Siap bantu kebutuhan digital Anda</p>
                    <p>codingin.4ja@gmail.com</p>
                    <p>+62 838 0406 4608</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-[1180px] border-t border-[#e7e1dc] pt-6 text-center text-[9px] uppercase tracking-[0.22em] text-[#b1aaa7]">
              {content.footer.copyright}
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


























