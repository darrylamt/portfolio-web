export const site = {
  url: 'https://darrylamt.vercel.app',
  name: 'Darryl Amoatey',
  role: 'Full-stack developer',
  shortBio: 'Full-stack developer in Accra shipping production web and iOS products for auctions, sport, government and property.',
}

export const profile = {
  name: 'Darryl Amoatey',
  title: 'Full-stack developer',
  location: 'Accra, Ghana',
  available: true,
  tagline: 'I build products people in Ghana actually use.',
  intro:
    'Full-stack developer and Acting Head of IT at the Small Arms Commission of Ghana. I design and ship end-to-end products, from an online auction marketplace on its own domain to the platform behind a national sports federation, and an evening planner that runs on the web and in TestFlight.',
  email: 'amoateydarryl4@gmail.com',
  github: 'https://github.com/darrylamt',
  githubUser: 'darrylamt',
  x: 'https://x.com/darryl_amt',
  xHandle: '@darryl_amt',
  avatar: 'https://avatars.githubusercontent.com/u/123960386?v=4',
}

export type ProjectStatus = 'live' | 'private-beta' | 'code-only'

export type Project = {
  slug: string
  name: string
  tagline: string
  category: 'Marketplace' | 'Platform' | 'Product' | 'Client site'
  year: string
  role: string
  contributed: boolean
  status: ProjectStatus
  live: string | null
  liveLabel: string | null
  github: string | null
  githubPrivate?: boolean
  testflight?: string
  stack: string[]
  summary: string
  body: string[]
  highlights: { label: string; detail: string }[]
  featured: boolean
  cover: { from: string; to: string; mark: string }
}

export const projects: Project[] = [
  {
    slug: 'gavel',
    name: 'Gavel',
    tagline: "Ghana's online auction platform",
    category: 'Marketplace',
    year: '2026',
    role: 'Design and build, end to end',
    contributed: false,
    status: 'live',
    live: 'https://gavelgh.com',
    liveLabel: 'gavelgh.com',
    github: 'https://github.com/darrylamt/gavel-mvp',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CSS Modules', 'GA4'],
    summary:
      'A live auction marketplace on its own domain, with plain-English AI search, a token wallet and a category-led browse experience.',
    body: [
      'Gavel is an online auction marketplace for Ghana. Buyers describe what they are after in plain English rather than fighting a category tree, and the search layer turns that into a query across live lots.',
      'The front end is a Next.js App Router build with streamed server components, so the shell and hero paint immediately while auction data resolves. Bidding runs against a shared tick provider, which keeps every countdown on a page in step instead of each card running its own timer.',
      'It ships as a real product rather than a demo: a custom domain, organisation-level JSON-LD for search engines, Google Analytics, a token purchase flow and a winners board.',
    ],
    highlights: [
      { label: 'AI-assisted search', detail: 'Plain-English queries resolved to live lots.' },
      { label: 'Synchronised countdowns', detail: 'One shared tick provider drives every auction timer.' },
      { label: 'Production SEO', detail: 'Canonical URLs, OpenGraph, Twitter cards and Organization JSON-LD.' },
      { label: 'Own domain', detail: 'Running on gavelgh.com behind Vercel edge caching.' },
    ],
    featured: true,
    cover: { from: '#1F2937', to: '#0B1220', mark: 'GV' },
  },
  {
    slug: 'rlfg-platform',
    name: 'RLFG Platform',
    tagline: 'Match centre and records for the federation',
    category: 'Platform',
    year: '2026',
    role: 'Full-stack developer',
    contributed: false,
    status: 'live',
    live: 'https://rl-db.vercel.app',
    liveLabel: 'rl-db.vercel.app',
    github: 'https://github.com/darrylamt/rl_db',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    summary:
      'The management platform behind the Rugby League Federation Ghana, with the live match centre as its landing surface.',
    body: [
      'The platform holds what the federation runs on: squads, fixtures and results in one schema instead of scattered spreadsheets and group chats.',
      'The root route redirects straight into the live match centre, so the first thing anyone sees is what is happening right now rather than a marketing page they have to click past.',
      'A Next.js App Router build on Postgres, prerendered where the data allows and revalidated where it does not. It is the data side of the same federation the public site serves.',
    ],
    highlights: [
      { label: 'Live-first routing', detail: 'The landing route resolves to the match centre.' },
      { label: 'Single source of truth', detail: 'Squad, fixture and result records in one schema.' },
      { label: 'Official use', detail: 'Built for the federation, not as a sample project.' },
    ],
    featured: true,
    cover: { from: '#123A2E', to: '#06170F', mark: 'RL' },
  },
  {
    slug: 'rl-ghana',
    name: 'RL Ghana',
    tagline: 'Public home of the Rugby League Federation',
    category: 'Client site',
    year: '2026',
    role: 'Contributor',
    contributed: true,
    status: 'live',
    live: 'https://rlghana.com',
    liveLabel: 'rlghana.com',
    github: 'https://github.com/velocitysportslabs/rlfgweb',
    githubPrivate: true,
    stack: ['Nuxt 3', 'Vue', 'TypeScript', 'Tailwind CSS', 'Pinia'],
    summary:
      'The federation’s public site: fixtures, results, standings and stats alongside clubs, governance, media and history.',
    body: [
      'rlghana.com is the outward face of Rugby League Ghana. Where the platform holds the records, this is where supporters, press and partners read them: fixtures and results, standings and stats, club and player pages, competitions, news and press.',
      'It is a Nuxt 3 build in Vue rather than React, with a shadcn-vue component layer on Tailwind and Pinia holding shared state. Club, board, committee, competition and partner records come out of structured data files, so an update is a data change and not a template edit.',
      'Server routes proxy the federation’s YouTube channel into a media section, keeping the API key server-side. I contributed to the build rather than owning it.',
    ],
    highlights: [
      { label: 'Full competition surface', detail: 'Fixtures, results, standings and stats across 16 clubs.' },
      { label: 'Governance in the open', detail: 'Board, committee, history and reports as first-class pages.' },
      { label: 'Server-side media', detail: 'YouTube playlists proxied through Nuxt server routes.' },
      { label: 'Vue, not React', detail: 'Nuxt 3 with shadcn-vue and Pinia, on a Tailwind base.' },
    ],
    featured: false,
    cover: { from: '#1B3B5F', to: '#081826', mark: 'RG' },
  },
  {
    slug: 'small-arms-commission',
    name: 'Small Arms Commission',
    tagline: 'Public site for the commission I run IT for',
    category: 'Client site',
    year: '2025',
    role: 'Contributor, in-house IT',
    contributed: true,
    status: 'live',
    live: 'https://smallarmscommission.gov.gh',
    liveLabel: 'smallarmscommission.gov.gh',
    github: null,
    stack: ['WordPress', 'PHP'],
    summary:
      'The public web presence of the National Commission on Small Arms and Light Weapons, Ghana, contributed to from inside the commission’s IT function.',
    body: [
      'Not every job calls for a framework. The commission needed a public site its own people could keep current on a government domain, so it runs on WordPress and content changes do not wait on a deploy or a developer.',
      'I contributed to it as part of the in-house IT function I lead, which is the other half of this job: the web work sits next to systems administration, networks and the infrastructure the commission runs on.',
    ],
    highlights: [
      { label: 'Government domain', detail: 'Live on gov.gh, serving the commission’s public information.' },
      { label: 'Edited without a deploy', detail: 'WordPress, so staff publish changes themselves.' },
    ],
    featured: false,
    cover: { from: '#3A4046', to: '#14171A', mark: 'SA' },
  },
  {
    slug: 'aduro',
    name: 'aduro',
    tagline: 'A date planned with intention, Accra first',
    category: 'Product',
    year: '2026',
    role: 'Product design and build',
    contributed: false,
    status: 'live',
    live: 'https://date-plannergh.vercel.app',
    liveLabel: 'date-plannergh.vercel.app',
    github: 'https://github.com/darrylamt/date-planner',
    testflight: 'https://testflight.apple.com/join/VW3ujCKf',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'iOS', 'TestFlight'],
    summary:
      'Answer six questions about budget, vibe and the person, and aduro builds a back-to-back evening in Accra with real venues, real menus and real prices. On the web and in TestFlight.',
    body: [
      'aduro turns a vague intention into a plan. You give it a budget, a vibe and a little about the person you are planning for, and it returns a sequenced evening across Accra with the costs visible before you leave the house.',
      'The whole product is mobile-first by construction: a 560px column that opens up to a two-column layout on desktop, priority-loaded hero imagery, and a saved-plans area behind auth so a plan survives the walk to the car.',
      'It runs as a web app and as an iOS build distributed through TestFlight, so the same product is one tap from the home screen on the device people actually plan dates on.',
    ],
    highlights: [
      { label: 'Six questions in', detail: 'A complete itinerary out, no blank-page problem.' },
      { label: 'Prices up front', detail: 'Menus and costs shown before you commit to the evening.' },
      { label: 'Shipping on iOS', detail: 'Beta builds distributed through TestFlight.' },
      { label: 'Saved plans', detail: 'Authenticated users keep their itineraries.' },
    ],
    featured: true,
    cover: { from: '#7A2338', to: '#2A0D16', mark: 'ad' },
  },
  {
    slug: 'mg-reliance',
    name: 'MG Reliance',
    tagline: 'Property developer, Greater Accra',
    category: 'Client site',
    year: '2026',
    role: 'Design and build',
    contributed: false,
    status: 'live',
    live: 'https://mgrelianceproperties.com',
    liveLabel: 'mgrelianceproperties.com',
    github: 'https://github.com/darrylamt/mgreliance',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    summary:
      'A property site for MG Reliance Property Developers covering residential, commercial and land listings across Greater Accra.',
    body: [
      'MG Reliance sells and rents residential homes, commercial spaces and land across Greater Accra. The site puts the listings first and the brand second.',
      'Search-led from the start: descriptive metadata, structured listing pages and a custom domain, because property buyers arrive from search rather than from a link someone sent them.',
    ],
    highlights: [
      { label: 'Own domain', detail: 'Live on mgrelianceproperties.com.' },
      { label: 'Three listing types', detail: 'Residential, commercial and land, for sale or rent.' },
      { label: 'Search-first metadata', detail: 'Written for how buyers actually find property.' },
    ],
    featured: false,
    cover: { from: '#3F3524', to: '#16120B', mark: 'MG' },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const projectCategories = Array.from(new Set(projects.map((p) => p.category)))

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const stack = [
  {
    group: 'Front end',
    items: ['Next.js (App Router)', 'React', 'TypeScript', 'Tailwind CSS', 'CSS motion and view transitions'],
  },
  {
    group: 'Back end and data',
    items: ['Node.js', 'PostgreSQL', 'Supabase', 'Laravel', 'PHP', 'REST APIs'],
  },
  {
    group: 'Platform',
    items: ['Vercel', 'Git and GitHub', 'Edge caching and ISR', 'CI on push', 'Analytics'],
  },
  {
    group: 'Also on the job',
    items: ['Systems administration', 'Network management', 'IT strategy', 'Figma'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Acting Head of IT',
    company: 'Small Arms Commission, Ghana',
    period: '2024 — Present',
    description:
      'Leading IT operations and digital infrastructure for a government commission: systems administration, network management, and driving digital transformation across the organisation.',
    tech: ['Systems admin', 'Networks', 'IT strategy'],
    current: true,
  },
  {
    id: 2,
    role: 'IT Assistant',
    company: 'Small Arms Commission, Ghana',
    period: '2023 — 2024',
    description:
      'Provided technical support and maintained IT infrastructure, managed internal systems and contributed to the commission’s web development work.',
    tech: ['Support', 'Web development', 'Infrastructure'],
    current: false,
  },
  {
    id: 3,
    role: 'Software Engineering student',
    company: 'ALX Africa',
    period: '2023',
    description:
      'Intensive software engineering programme: full-stack development, C, shell scripting, systems engineering and DevOps fundamentals.',
    tech: ['C', 'Shell', 'Python', 'DevOps'],
    current: false,
  },
]

export const stats = [
  { value: String(projects.filter((p) => p.status === 'live').length), label: 'products live in production' },
  { value: '4', label: 'running on their own domain' },
  { value: 'iOS', label: 'beta shipping through TestFlight' },
  { value: 'Accra', label: 'based in Ghana, working anywhere' },
]
