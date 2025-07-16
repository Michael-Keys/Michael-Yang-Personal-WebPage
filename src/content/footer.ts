// Icons are referenced as strings in the content below

export const footerContent = {
  branding: {
    name: "Michael Yang",
    tagline: "Full Stack Developer & AI Engineer",
    description: "Building innovative solutions with modern technologies. Always learning, always growing."
  },
  navigation: {
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Experience", href: "/experience" },
      { name: "Contact", href: "/contact" }
    ],
    resources: [
      { name: "GitHub", href: "https://github.com/Michael-Yang0922" },
      { name: "LinkedIn", href: "https://linkedin.com/in/xiuyang0922" },
      { name: "Resume", href: "/documents/resume.pdf" }
    ]
  },
  contact: {
    email: "michaelyang922@gmail.com",
    location: "Ithaca, NY",
    phone: "+1 (607) 339-7986"
  },
  social: {
    platforms: [
      {
        name: "GitHub",
        href: "https://github.com/Michael-Yang0922",
        icon: "Github"
      },
      {
        name: "LinkedIn", 
        href: "https://linkedin.com/in/xiuyang0922",
        icon: "Linkedin"
      },
      {
        name: "Email",
        href: "mailto:michaelyang922@gmail.com",
        icon: "Mail"
      }
    ]
  },
  stats: {
    visitors: {
      label: "Visits"
    }
  },
  copyright: {
    year: new Date().getFullYear(),
    text: "All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS"
  },
  scrollToTop: {
    label: "Scroll to top",
    icon: "ArrowUp"
  }
}; 