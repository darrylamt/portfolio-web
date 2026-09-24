import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { profile, stats } from '@/lib/data'
import CountUp from './CountUp'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="shell relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="max-w-2xl">
            {profile.available && (
              <p
                className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-pill border border-line bg-surface px-3 py-1.5 text-[13px] font-medium text-muted"
                style={{ animationDelay: '40ms' }}
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-positive opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-positive" />
                </span>
                Available for new work
              </p>
            )}

            <h1
              className="h-display animate-fade-up text-[40px] leading-[1.02] sm:text-[56px] lg:text-[64px]"
              style={{ animationDelay: '110ms' }}
            >
              {profile.tagline}
            </h1>

            <p
              className="mt-6 max-w-xl animate-fade-up text-[17px] leading-relaxed text-muted"
              style={{ animationDelay: '190ms' }}
            >
              {profile.intro}
            </p>

            <div
              className="mt-8 flex animate-fade-up flex-wrap items-center gap-3"
              style={{ animationDelay: '260ms' }}
            >
              <Link href="/work" className="btn-primary group">
                See the work{' '}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                Get in touch
              </a>
              <span className="ml-1 inline-flex items-center gap-1.5 text-[13px] text-faint">
                <MapPin size={14} /> {profile.location}
              </span>
            </div>
          </div>

          <div className="order-first lg:order-none">
            <div className="relative w-fit">
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={132}
                height={132}
                priority
                className="size-[104px] animate-scale-in rounded-card border border-line object-cover shadow-card transition-transform duration-500 hover:scale-[1.03] lg:size-[132px]"
              />
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-up"
              style={{ animationDelay: `${340 + index * 70}ms` }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="h-display block text-[30px] leading-none sm:text-[34px]">
                  <CountUp value={stat.value} />
                </span>
                <span className="mt-2 block max-w-[160px] text-[13px] leading-snug text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
