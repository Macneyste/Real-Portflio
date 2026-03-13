export interface project {
  name: string;
  description: string;
  stacks: string[];
  link: string;
  source: string;
  img: string | null;
  direction: string;
}

export const projectProps: project[] = [
  {
    name: 'Advanced E-Commerce Platform',
    description: 'Production-oriented full-stack e-commerce platform with Next.js 14+ App Router, JWT auth, RBAC (admin, customer, vendor), Stripe/PayPal-ready checkout, B2B RFQ flow, supplier storefronts, and a premium responsive UI with light/dark mode and glassmorphism.',
    stacks: [
      'TypeScript',
      'Next.js 14',
      'Tailwind CSS',
      'Express',
      'MongoDB',
      'JWT',
      'Stripe',
    ],
    link: '/production',
    source: 'https://github.com/Macneyste/Advanced-E-Commerce-Platform',
    img: '/img/ecommerce_platform.png',
    direction: 'left',
  },
  {
    name: 'Smart Hospital Management System',
    description: 'Production-oriented MERN platform for Somali private healthcare providers. Multi-role SaaS-ready system with Super Admin, Hospital Admin, Doctor, and Patient portals. Features telemedicine, prescriptions, clinical workflow, and a mobile-friendly medical timeline.',
    stacks: [
      'JavaScript',
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'Chart.js',
    ],
    link: '/production',
    source: 'https://github.com/Macneyste/Smart-Hospital-Management-System',
    img: '/img/hospital_system.png',
    direction: 'right',
  },
  {
    name: 'Developer Collaboration Platform',
    description: 'A collaborative platform designed for developers to connect, share projects, and work together. Features real-time collaboration tools, project management, and a community-driven interface for building and showcasing developer portfolios.',
    stacks: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    link: '/production',
    source: 'https://github.com/Macneyste/Developer-Collaboration-Platform',
    img: '/img/developer_platform.png',
    direction: 'left',
  },
  {
    name: 'Digital Wallet',
    description: 'A modern digital wallet application with secure money transfer, balance management, and transaction history. Built with a React frontend and Express backend, featuring a clean and intuitive user interface deployed on Vercel.',
    stacks: [
      'JavaScript',
      'React',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'CSS',
    ],
    link: 'https://digital-wallet-eight-lovat.vercel.app',
    source: 'https://github.com/Macneyste/Digital_wallet.',
    img: '/img/digital_wallet.png',
    direction: 'right',
  },
]
