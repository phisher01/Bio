import gallery1 from '../assets/gallery/gallery-1.svg'
import gallery2 from '../assets/gallery/gallery-2.svg'
import gallery3 from '../assets/gallery/gallery-3.svg'
import gallery4 from '../assets/gallery/gallery-4.svg'
import gallery5 from '../assets/gallery/gallery-5.svg'
import gallery6 from '../assets/gallery/gallery-6.svg'

export const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Professional', href: '#professional' },
  { label: 'Family', href: '#family' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const profileData = {
  fullName: 'Rishi Pratap Singh',
  tagline: 'Software Engineer at BharatPe | Fitness Enthusiast | Family-Oriented',
  intro:
    'Passionate automation engineer with strong problem-solving skills and a keen interest in building scalable systems. Also a dedicated fitness enthusiast focused on physique building and explosive powerlifting movements.',
  education: 'B.Tech in Information Technology, J.C. Bose University of Science & Technology YMCA, Faridabad',
  profession: 'Software Engineer',
  company: 'BharatPe',
  location: 'Gurugram (Suncity)',
  phone: '+91 90000 12345',
  email: 'rishi.pratap.singh@example.com',
  whatsapp: '+919000012345',
  profileImage: '/pic.jpeg',
}

export const professionalData = {
  workExperience: [
    { company: 'BharatPe', role: 'SDE-II · Automation Engineer', location: 'DLF Cyber City, DLF Phase 2, Sector 24, Gurugram', status: 'current' },
    { company: 'MobiKwik', role: 'Software Engineer', location: 'Gurugram', status: 'previous' },
  ],
  skills: [
    'Test Automation',
    'Scalable Systems',
    'Problem Solving',
    'CI/CD Pipelines',
    'Quality Engineering',
    'System Design',
  ],
  education: {
    degree: 'B.Tech in Information Technology',
    university: 'J.C. Bose University of Science & Technology YMCA, Faridabad, Haryana',
    batch: '2021',
    school: 'Vidya Mandir, Sector-15A, Faridabad (CBSE)',
  },
  achievements: [
    {
      title: 'Gold Medal – Bench Press Competition',
      description:
        'Won 1st place in a Bench Press competition at his gym, reflecting his dedication and strength in powerlifting.',
      videoSrc: '/rishipratapsingh.mp4',
      photoSrc: '/achievement-photo.jpg',
    },
  ],
  projects: [
    {
      title: 'Automation at BharatPe',
      description:
        'Driving scalable test automation and quality engineering at BharatPe, ensuring reliable and efficient software delivery.',
    },
  ],
}

export const familyData = {
  father: 'Anil Kumar – Tailor (runs a shop from home)',
  mother: 'Kamlesh – Homemaker',
  siblings: 'Younger brother: Gagan Pratap Singh',
  grandfather: 'Shri Ram Ji – Retired Enforcement Officer, Provident Fund, Gurugram',
  uncleAunt: 'Santosh Kumar & Laxmi – Delhi High Court Advocates',
  values:
    'A family rooted in hard work, dignity, and integrity. From a tailor who built his livelihood through honest craft, to advocates who uphold justice, every member reflects the values of dedication and purpose.',
}

export const lifestyleData = {
  hobbies: ['Fitness & Bodybuilding', 'Powerlifting (explosive movements)', 'Physique Building'],
  travelInterests: ['Exploring new cities', 'Nature retreats', 'Weekend getaways'],
  foodPreferences: ['High-protein home-cooked meals', 'Nutrition-focused eating'],
  personalityTraits: ['Disciplined', 'Determined', 'Problem-solver', 'Passionate'],
}

export const galleryImages = [
  { src: gallery1, alt: 'Portrait moment 1' },
  { src: gallery2, alt: 'Portrait moment 2' },
  { src: gallery3, alt: 'Portrait moment 3' },
  { src: gallery4, alt: 'Portrait moment 4' },
  { src: gallery5, alt: 'Portrait moment 5' },
  { src: gallery6, alt: 'Portrait moment 6' },
]
