export const site = {
  url: 'https://darrylamt.vercel.app',
  name: 'Darryl Amoatey',
  role: 'Full-stack developer',
  shortBio: 'Full-stack developer in Accra shipping production web apps for auctions, sport and property.',
}

export const profile = {
  name: 'Darryl Amoatey',
  title: 'Full-stack developer',
  location: 'Accra, Ghana',
  available: true,
  tagline: 'I build products people in Ghana actually use.',
  intro:
    'Full-stack developer and Acting Head of IT at the Small Arms Commission of Ghana. I design and ship end-to-end products, from an online auction marketplace on its own domain to a federation match platform and a Supabase-backed agency back office.',
  email: 'amoateydarryl4@gmail.com',
  github: 'https://github.com/darrylamt',
  githubUser: 'darrylamt',
  twitter: 'https://twitter.com/darrylamt',
  avatar: 'https://avatars.githubusercontent.com/u/123960386?v=4',
}

export type ProjectStatus = 'live' | 'private-beta' | 'code-only'

export type Project = {
  slug: string
  name: string
  tagline: string
  category: 'Marketplace' | 'Platform' | 'Product' | 'Client site' | 'Internal tool'
  year: string
  role: string
  status: ProjectStatus
  live: string | null
  liveLabel: string | null
  github: string | null
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
    slug: 'rlfg',
    name: 'RLFG',
    tagline: 'Rugby League Federation Ghana platform',
    category: 'Platform',
    year: '2026',
    role: 'Full-stack developer',
    status: 'live',
    live: 'https://rl-db.vercel.app',
    liveLabel: 'rl-db.vercel.app',
    github: 'https://github.com/darrylamt/rl_db',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    summary:
      'The official management platform for the Rugby League Federation Ghana, with a live match centre as the landing surface.',
    body: [
      'RLFG is the federation’s management platform: squads, fixtures and results held in one place instead of scattered spreadsheets and group chats.',
      'The root route redirects straight into the live match centre, so the first thing anyone sees is what is happening right now rather than a marketing page they have to click past.',
      'It is a Next.js App Router build on a Postgres store, prerendered where the data allows and revalidated where it does not.',
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
    slug: 'aduro',
    name: 'aduro',
    tagline: 'A date planned with intention, Accra first',
    category: 'Product',
    year: '2026',
    role: 'Product design and build',
    status: 'live',
    live: 'https://date-plannergh.vercel.app',
    liveLabel: 'date-plannergh.vercel.app',
    github: 'https://github.com/darrylamt/date-planner',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Auth'],
    summary:
      'Answer six questions about budget, vibe and the person, and aduro builds a back-to-back evening in Accra with real venues, real menus and real prices.',
    body: [
      'aduro turns a vague intention into a plan. You give it a budget, a vibe and a little about the person you are planning for, and it returns a sequenced evening across Accra with the costs visible before you leave the house.',
      'The whole product is mobile-first by construction: a 560px column that opens up to a two-column layout on desktop, priority-loaded hero imagery, and a saved-plans area behind auth so a plan survives the walk to the car.',
      'It has its own visual language, warm and typographic, built on a small token set rather than a component library.',
    ],
    highlights: [
      { label: 'Six questions in', detail: 'A complete itinerary out, no blank-page problem.' },
      { label: 'Prices up front', detail: 'Menus and costs shown before you commit to the evening.' },
      { label: 'Saved plans', detail: 'Authenticated users keep their itineraries.' },
      { label: 'Mobile-first', detail: 'Designed at 560px, expanded to desktop after.' },
    ],
    featured: true,
    cover: { from: '#7A2338', to: '#2A0D16', mark: 'ad' },
  },
  {
    slug: 'amin-sports',
    name: 'Amin Sports',
    tagline: 'Player representation back office',
    category: 'Internal tool',
    year: '2026',
    role: 'Full-stack developer',
    status: 'live',
    live: 'https://playermgt.vercel.app',
    liveLabel: 'playermgt.vercel.app',
    github: null,
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    summary:
      'A dark, dense admin surface for a football agency: roster, clubs, medical records, valuations and deal flow, reading live rows from Supabase.',
    body: [
      'Amin Sports is the operational back office for a player representation agency. Six sections cover the roster, clubs, medical history, market valuations, deals and record management.',
      'Every screen reads live from Supabase, including agency branding and logo assets served from storage, so the deployment is configuration rather than a rebuild.',
      'The interface is deliberately dense and quiet: a sticky sidebar, a search that spans players, clubs and positions, alert badges, and empty states that tell an admin exactly what to create first.',
    ],
    highlights: [
      { label: 'Live Supabase reads', detail: 'Dashboard edits show on the next page load.' },
      { label: 'Six record domains', detail: 'Players, clubs, medical, market, deals, admin.' },
      { label: 'Guided empty states', detail: 'Club before player, enforced in the UI copy.' },
      { label: 'Multi-tenant ready', detail: 'Agency name, currency and locale are data, not code.' },
    ],
    featured: false,
    cover: { from: '#27272A', to: '#0A0A0B', mark: 'AS' },
  },
  {
    slug: 'ghana-fantasy-football',
    name: 'Ghana Fantasy Football',
    tagline: 'Fantasy football for the Ghana Premier League',
    category: 'Platform',
    year: '2026',
    role: 'Full-stack developer',
    status: 'live',
    live: 'https://football-fantasy-two.vercel.app',
    liveLabel: 'football-fantasy-two.vercel.app',
    github: 'https://github.com/darrylamt/football-fantasy',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Auth'],
    summary:
      'A full fantasy game for the local league: a 15-player squad under a 100.0m budget, gameweek scoring, captaincy and private leagues.',
    body: [
      'GFF gives the Ghana Premier League the format that the English game has had for years. Managers build a 15-player squad inside a budget, score across each gameweek on goals, assists, clean sheets and bonus, and double up through the captain.',
      'Accounts, private leagues and overall rankings run on an authenticated Postgres backend, with an admin surface behind the same auth for players, fixtures and match data entry.',
      'The interface borrows the clarity of the format it is modelled on without borrowing its assets, built with route groups splitting the auth shell from the game itself.',
    ],
    highlights: [
      { label: 'Squad and budget rules', detail: '15 players, 100.0m cap, enforced server-side.' },
      { label: 'Gameweek scoring engine', detail: 'Goals, assists, clean sheets, bonus, captain multiplier.' },
      { label: 'Private leagues', detail: 'Overall rankings plus invite-only mini leagues.' },
      { label: 'Admin data entry', detail: 'Fixtures and match data managed in-app.' },
    ],
    featured: false,
    cover: { from: '#37003C', to: '#12001A', mark: 'GF' },
  },
  {
    slug: 'mg-reliance',
    name: 'MG Reliance',
    tagline: 'Property developer, Greater Accra',
    category: 'Client site',
    year: '2026',
    role: 'Design and build',
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
  {
    slug: 'geolicrafts',
    name: 'Geolicrafts',
    tagline: 'Authentic African craftsmanship',
    category: 'Client site',
    year: '2025',
    role: 'Design and build',
    status: 'live',
    live: 'https://geolicrafts.vercel.app',
    liveLabel: 'geolicrafts.vercel.app',
    github: 'https://github.com/darrylamt/geolicrafts',
    stack: ['React', 'Vite', 'JavaScript'],
    summary:
      'A storefront for a Ghanaian craft brand, built as a fast Vite single-page app with a product-led layout.',
    body: [
      'Geolicrafts presents handmade African craft work to a mostly international audience, so the build optimises for a fast first paint on slow connections.',
      'A Vite React SPA with code-split routes and static hosting on the edge: no server to keep warm, nothing to maintain between product drops.',
    ],
    highlights: [
      { label: 'Static and fast', detail: 'Vite build served from the edge, cached at HIT.' },
      { label: 'Product-led layout', detail: 'The craft work leads, the chrome stays out of the way.' },
    ],
    featured: false,
    cover: { from: '#5A3A1E', to: '#1E1309', mark: 'GC' },
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
  { value: '2', label: 'running on their own domain' },
  { value: '3', label: 'years building and shipping' },
  { value: 'Accra', label: 'based in Ghana, working anywhere' },
]
